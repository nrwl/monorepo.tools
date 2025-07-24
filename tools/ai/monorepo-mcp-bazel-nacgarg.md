# Bazel MCP Server - Comprehensive Implementation Analysis

## Built-in Core Tools

### **bazel_build_target** (`index.ts:70`)

- **Purpose**: Builds specified Bazel targets by invoking the `bazel build` command
- **Implementation**: Uses the BazelClient class to execute `bazel build` with provided targets and optional additional arguments. The implementation includes argument validation to prevent command injection attacks through the `validateAdditionalArgs` method (`index.ts:226`).
- **Key capabilities**:
  - Build multiple targets simultaneously by accepting an array of target strings
  - Support additional Bazel flags through `additionalArgs` parameter
  - Real-time output streaming via optional callback mechanism
  - Security validation ensuring all additional args start with `--` or `-`

### **bazel_query_target** (`index.ts:95`)

- **Purpose**: Queries the Bazel dependency graph using Bazel's query language to find targets matching specific patterns
- **Implementation**: Executes `bazel query` with the provided pattern. The method `queryTarget` (`index.ts:323`) wraps the pattern and additional args, then calls the underlying `runBazelCommand` method.
- **Key capabilities**:
  - Execute complex dependency queries (e.g., `deps(//path/to:target)`)
  - Support query output formatting through additional arguments
  - Filter dependencies and analyze build graph relationships
  - Real-time query result streaming

### **bazel_test_target** (`index.ts:117`)

- **Purpose**: Executes Bazel test targets to run automated tests
- **Implementation**: Uses the `testTargets` method (`index.ts:330`) which runs `bazel test` with specified targets. Combines stdout and stderr in the response for comprehensive test output.
- **Key capabilities**:
  - Run multiple test targets in parallel
  - Support test-specific flags like `--cache_test_results=no` and `--test_output=all`
  - Capture and return both test results and error output
  - Real-time test execution feedback

### **bazel_list_targets** (`index.ts:142`)

- **Purpose**: Lists all available Bazel targets under a specified path within the workspace
- **Implementation**: The `listTargets` method (`index.ts:337`) converts the path parameter into a Bazel query pattern by appending `/...` and then executes `bazel query` to find all targets.
- **Key capabilities**:
  - List targets recursively under any workspace path
  - Use "//" to list all targets in the entire workspace
  - Support query output formatting options
  - Filter targets by path hierarchy

### **bazel_fetch_dependencies** (`index.ts:164`)

- **Purpose**: Fetches external dependencies required by Bazel targets
- **Implementation**: The `fetchDependencies` method (`index.ts:345`) runs `bazel build fetch` with either specific targets or `//...` for all dependencies. Notable implementation detail: it uses `bazel build fetch` rather than a direct fetch command.
- **Key capabilities**:
  - Fetch dependencies for specific targets or entire workspace
  - Support repository cache configuration through additional args
  - Pre-download external dependencies for offline builds
  - Handle both target-specific and workspace-wide dependency resolution

### **bazel_set_workspace_path** (`index.ts:188`)

- **Purpose**: Dynamically changes the Bazel workspace path for subsequent operations without restarting the server
- **Implementation**: The `setWorkspacePath` method (`index.ts:359`) validates the new path exists and contains Bazel workspace indicators (WORKSPACE, WORKSPACE.bazel, or MODULE.bazel files) before updating the internal workspace path.
- **Key capabilities**:
  - Runtime workspace switching without server restart
  - Workspace validation to ensure path contains valid Bazel workspace
  - Support for both legacy WORKSPACE and modern MODULE.bazel formats
  - Path existence verification before switching

## Plugin Architecture

This MCP server **does not implement a plugin architecture**. It uses a monolithic design where all tools are hardcoded in the main `index.ts` file. The server:

- Defines all tools as static objects (`buildTargetTool`, `queryTargetTool`, etc.)
- Implements tool logic directly in the `BazelClient` class
- Uses a switch statement in the request handler (`index.ts:521`) to route tool calls
- Returns a fixed list of tools in the `ListToolsRequestSchema` handler (`index.ts:604`)

## Technical Implementation Details

### Base Architecture and Frameworks

- **MCP SDK**: Uses `@modelcontextprotocol/sdk` version 1.0.1 for core MCP functionality
- **Transport**: Implements `StdioServerTransport` for communication via stdin/stdout
- **Process Management**: Uses Node.js `child_process.spawn()` for executing Bazel commands
- **TypeScript**: Full TypeScript implementation with strict type checking

### Key Implementation Patterns

#### Security Model (`index.ts:226`)

- **Argument Validation**: All additional arguments must start with `--` or `-` prefixes
- **Command Injection Prevention**: Rejects arguments containing dangerous characters (`[;&|<>$`\\]`)
- **Path Validation**: Workspace paths are validated for existence and Bazel workspace markers

#### Process Execution Pattern (`index.ts:257`)

- **Async Promise Wrapper**: Wraps `spawn()` in promises for async/await usage
- **Stream Handling**: Captures both stdout and stderr separately
- **Real-time Output**: Optional callback mechanism for streaming output during execution
- **Error Handling**: Comprehensive error capture with exit codes and error messages

#### Configuration Management (`index.ts:380`)

- **Multi-source Configuration**: CLI args > Environment variables > Config file
- **Dynamic Discovery**: Automatic config file detection (`.bazel-mcp-config.json`)
- **Workspace Detection**: Automatic Bazel workspace validation on startup

### Configuration and Transport Mechanisms

#### Configuration Sources (Priority Order):

1. **Command Line Arguments**: `--bazel_path`, `--workspace_path`, `--workspace_config`, `--log_path`
2. **Environment Variables**: `MCP_BAZEL_PATH`, `MCP_WORKSPACE_PATH`, `MCP_WORKSPACE_CONFIG`, `MCP_LOG_PATH`
3. **Configuration File**: `.bazel-mcp-config.json` in current directory

#### Transport Details:

- **Protocol**: Model Context Protocol over stdio
- **Server Info**: Name: "Bazel MCP Server", Version: "0.1.0"
- **Capabilities**: Declares `tools` capability only
- **Request Handling**: Supports `CallToolRequest` and `ListToolsRequest`

#### Logging System (`index.ts:20`)

- **Dual Output**: Console logging (when DEBUG=true) and file logging
- **Structured Logging**: Timestamped entries with log levels
- **Debug Mode**: Comprehensive logging including environment variables and command line args

## File Locations

### Main Entry Points

- **Primary Server**: `index.ts:1` - Complete MCP server implementation
- **Binary Entry**: `dist/index.js` - Compiled executable (generated from TypeScript)

### Core Implementation Files

- **Server Implementation**: `index.ts:457-633` - Main server setup and request handling
- **Bazel Client**: `index.ts:203-377` - Core Bazel command execution logic
- **Configuration Management**: `index.ts:380-456` - Multi-source configuration parsing

### Tool Implementations

- **Tool Definitions**: `index.ts:70-201` - Schema definitions for all 6 tools
- **Tool Execution**: `index.ts:510-601` - Request routing and execution logic
- **Bazel Operations**: `index.ts:316-376` - Individual Bazel command implementations

### Configuration Schemas

- **TypeScript Interfaces**: `index.ts:40-67` - Type definitions for all tool arguments
- **JSON Schema**: Embedded in tool definitions (`inputSchema` properties)
- **Config File Schema**: Implicit JSON structure (`.bazel-mcp-config.json`)

### Build Configuration

- **TypeScript Config**: `tsconfig.json` - ES2022/Node16 module configuration
- **Package Definition**: `package.json` - Dependencies and build scripts
- **Build Output**: `dist/` directory - Compiled JavaScript with executable permissions

## Architecture Summary

This is a **single-file MCP server** that provides a secure, well-structured interface to Bazel build operations. The implementation demonstrates several noteworthy patterns:

1. **Security-first design** with comprehensive input validation
2. **Real-time streaming** capabilities for long-running build operations
3. **Flexible configuration** supporting multiple deployment scenarios
4. **Comprehensive error handling** with detailed logging
5. **Type-safe implementation** with full TypeScript coverage

The server acts as a secure proxy between MCP clients and the Bazel build system, preventing command injection while providing full access to Bazel's capabilities through structured tool interfaces.
