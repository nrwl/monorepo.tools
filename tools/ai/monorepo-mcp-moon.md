# Moon MCP Server Analysis Report

## Overview

Moon implements a Model Context Protocol (MCP) server that exposes workspace and project management capabilities to AI agents. The implementation uses the `rust-mcp-sdk` framework and provides 7 core tools for interacting with Moon workspaces, projects, tasks, and version control.

## Built-in Core Tools

### **GetProjectTool** (`crates/mcp/src/tools/project_tools.rs:13`)

- **Purpose**: Retrieves detailed information about a specific Moon project by ID, including its configuration, tasks, and optionally its dependencies
- **Implementation**: Uses `WorkspaceGraph::get_project_with_tasks()` to fetch project data, with optional recursive dependency fetching via `project.dependencies` iteration
- **Key capabilities**:
  - Fetch project metadata, configuration, and associated tasks
  - Include project dependencies in response when `include_dependencies=true`
  - Returns structured JSON with project details and dependency tree

### **GetProjectsTool** (`crates/mcp/src/tools/project_tools.rs:66`)

- **Purpose**: Retrieves all projects in the Moon workspace with optional task inclusion
- **Implementation**: Calls `WorkspaceGraph::get_projects()`, sorts by ID, and conditionally loads tasks using `get_project_with_tasks()` in a loop
- **Key capabilities**:
  - List all workspace projects in alphabetical order
  - Optionally include complete task definitions for each project
  - Efficient bulk project data retrieval

### **GetTaskTool** (`crates/mcp/src/tools/task_tools.rs:13`)

- **Purpose**: Retrieves a specific task by target identifier with optional dependency information
- **Implementation**: Parses target string using `Target::parse_strict()`, fetches task via `WorkspaceGraph::get_task()`, and optionally resolves task dependencies
- **Key capabilities**:
  - Fetch task configuration, commands, and metadata
  - Include task dependency chain when `include_dependencies=true`
  - Support for Moon's target format (e.g., `project:task`)

### **GetTasksTool** (`crates/mcp/src/tools/task_tools.rs:64`)

- **Purpose**: Retrieves all tasks in the workspace with optional internal task inclusion
- **Implementation**: Uses `WorkspaceGraph::get_tasks()` or `get_tasks_with_internal()` based on flag, sorts results by target
- **Key capabilities**:
  - List all user-defined tasks across all projects
  - Include Moon's internal/system tasks when `include_internal=true`
  - Sorted output for consistent results

### **GetTouchedFiles** (`crates/mcp/src/tools/vcs_tools.rs:13`)

- **Purpose**: Identifies files that have been modified between Git revisions for change detection and incremental builds
- **Implementation**: Uses Moon's VCS abstraction to call different Git strategies based on parameters:
  - Local changes: `vcs.get_touched_files()`
  - Previous revision: `get_touched_files_against_previous_revision()`
  - Between revisions: `get_touched_files_between_revisions(base, head)`
- **Key capabilities**:
  - Detect local working directory changes
  - Compare between specific Git revisions (base/head)
  - Smart CI detection with `is_ci()` for remote branch comparison
  - Support for custom base/head revision specification

### **SyncWorkspaceTool** (`crates/mcp/src/tools/action_tools.rs:40`)

- **Purpose**: Synchronizes the entire Moon workspace by running necessary setup, installation, and configuration tasks
- **Implementation**:
  - Creates `ActionGraphBuilder` with `sync_workspace: true`
  - Calls `action_graph.sync_workspace().await` to build sync actions
  - Executes via `ActionPipeline` with `bail=true` and `quiet=true`
  - Returns executed actions and success status
- **Key capabilities**:
  - Full workspace synchronization (toolchain setup, dependencies, etc.)
  - Atomic operation with failure bailout
  - Action tracking and reporting
  - Async execution with pipeline management

### **SyncProjectsTool** (`crates/mcp/src/tools/action_tools.rs:85`)

- **Purpose**: Synchronizes specific projects or all projects by running their individual setup and dependency tasks
- **Implementation**:
  - Iterates over provided project IDs or all projects if empty list
  - Calls `action_graph.sync_project(&project).await` for each
  - Executes actions through shared `run_pipeline()` helper
- **Key capabilities**:
  - Selective project synchronization by ID list
  - Bulk synchronization when IDs list is empty
  - Individual project dependency resolution
  - Parallel action execution support

## Technical Implementation Details

### Base Architecture

- **Framework**: Built on `rust-mcp-sdk` v0.6.0 with server and macros features
- **Transport**: Uses `StdioTransport` for JSON-RPC communication over stdin/stdout
- **Protocol Version**: Implements MCP protocol version 2025-06-18
- **Error Handling**: Miette-based error reporting with conversion to MCP CallToolError

### Key Implementation Patterns

- **Macro-Driven Tool Definition**: Uses `#[mcp_tool]` macro for automatic schema generation and registration
- **Async/Sync Hybrid**: VCS and sync operations are async, while project/task queries are synchronous
- **Shared State**: `MoonMcpHandler` holds `Arc<AppContext>` and `Arc<WorkspaceGraph>` for thread-safe access
- **Tool Box Pattern**: `tool_box!` macro generates enum and dispatch logic for all tools

### Configuration and Transport

- **Server Details**: `crates/mcp/src/mcp.rs:71-85`
  - Name: "moon_mcp_server"
  - Version: From `MOON_VERSION` env var or package version
  - Capabilities: Tools with list support
- **Transport Configuration**: `crates/mcp/src/mcp.rs:88`
  - Uses default `TransportOptions`
  - STDIO-based JSON-RPC communication
- **Debug Support**: `MOON_DEBUG_MCP` environment variable enables MCP SDK logging

### Data Flow and Transformations

1. **Request Parsing**: JSON-RPC requests parsed into `CallToolRequest`
2. **Tool Dispatch**: `MoonTools::try_from()` converts to specific tool structs
3. **Parameter Validation**: Serde deserializes and validates tool parameters with JsonSchema
4. **Data Access**: Tools access Moon's workspace graph and app context
5. **Response Serialization**: Results serialized to pretty-printed JSON in `TextContent`
6. **Error Conversion**: Miette errors converted to MCP-compatible `CallToolError`

## File Locations

### Main Entry Points

- `crates/mcp/src/mcp.rs:66` - Main MCP server entry point
- `crates/app/src/commands/mcp.rs:14` - CLI command integration
- `crates/cli/src/main.rs:169` - Command routing

### Core Implementation Files

- `crates/mcp/src/lib.rs` - Module exports and SDK re-exports
- `crates/mcp/src/tools/mod.rs:6` - Error handling utilities
- `crates/mcp/src/mcp.rs:19` - `MoonMcpHandler` server implementation
- `crates/mcp/src/mcp.rs:103` - Tool registration via `tool_box!` macro

### Tool Implementations

- `crates/mcp/src/tools/project_tools.rs` - Project querying tools
- `crates/mcp/src/tools/task_tools.rs` - Task querying tools
- `crates/mcp/src/tools/action_tools.rs` - Synchronization tools
- `crates/mcp/src/tools/vcs_tools.rs` - Version control tools

### Configuration Schemas

- `packages/types/src/mcp.ts` - TypeScript type definitions for tool interfaces
- `crates/mcp/Cargo.toml:22-26` - rust-mcp-sdk dependency configuration

### Plugin Architecture

The implementation uses a tool-based architecture rather than a traditional plugin system:

- **Tool Registration**: `tool_box!` macro at `crates/mcp/src/mcp.rs:103-114` creates dispatch enum
- **Tool Categories**: Organized by functionality (project, task, action, VCS)
- **Extensibility**: New tools can be added by implementing the `mcp_tool` trait and adding to the tool box
- **No Runtime Plugins**: All tools are compiled-in, no dynamic plugin loading

The MCP server is currently marked as "unstable" and requires the `moon mcp` command to start. It provides comprehensive workspace introspection and synchronization capabilities for AI agents working with Moon-based monorepos.
