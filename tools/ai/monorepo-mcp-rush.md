# Rush MCP Server Implementation Analysis

The Rush MCP Server is located in `apps/rush-mcp-server/` and provides a Model Context Protocol interface for Rush monorepo operations. Here's a summary of each tool and its capabilities:

## Built-in Core Tools

**1. `rush_pnpm_lock_file_conflict_resolver`** (`conflict-resolver.tool.ts:15`)

- **Purpose**: Automated Git merge conflict resolution for pnpm-lock.yaml files
- **Implementation**: Uses Git's `--theirs` strategy to accept incoming changes, then runs `rush update --subspace` to regenerate lockfile
- **Key capability**: Automatically resolves common lockfile conflicts without manual intervention by determining the appropriate subspace and updating it

**2. `rush_migrate_project`** (`migrate-project.tool.ts:21`)

- **Purpose**: Move projects between locations and subspaces within the monorepo
- **Implementation**: Performs file system moves, updates rush.json configuration, and manages subspace configuration
- **Key capabilities**:
  - Physical relocation of project folders
  - Automatic cleanup of empty subspaces
  - Rush configuration synchronization
  - Subspace management (creation/deletion)

**3. `rush_project_details`** (`project-details.tool.ts:14`)

- **Purpose**: Retrieve comprehensive project metadata in structured JSON format
- **Implementation**: Returns package.json content, folder paths, subspace information, and Rush-specific metadata
- **Key capability**: Provides complete project introspection including dependency relationships and configuration details

**4. `rush_command_validator`** (`rush-command-validator.tool.ts:32`)

- **Purpose**: Pre-execution validation of Rush commands to prevent errors
- **Implementation**: Validates command syntax, checks project selection parameters, and verifies package names exist
- **Key capabilities**:
  - Command syntax validation against rush command-line.json schema
  - Package name verification against workspace projects
  - Selection parameter enforcement for bulk commands
  - Prevents execution of invalid commands that would fail

**5. `rush_workspace_details`** (`workspace-details.ts:14`)

- **Purpose**: Generate comprehensive workspace overview for LLM analysis
- **Implementation**: Serializes entire project graph with dependencies, scripts, versions, and metadata
- **Key capabilities**:
  - Complete workspace topology analysis
  - Project dependency mapping
  - Script and configuration inventory
  - Structured data format optimized for LLM consumption

## Plugin Architecture

The server supports extensible plugins via:

- **`DocsPlugin`**: Documentation search integration (currently uses mock data)
- **`ExamplePlugin`**: Demonstration plugin showing state capital lookups
- Plugin framework allows custom tools with Zod schema validation

## Technical Implementation Details

- **Base Architecture**: Extends MCP SDK's `McpServer` class
- **Plugin System**: Dynamic loading from plugin manifests with schema validation
- **Command Execution**: Secure subprocess execution via `CommandRunner` utility
- **Configuration**: JSON schema-based configuration system
- **Transport**: Supports stdio and WebSocket communication protocols

## File Locations

### Main Entry Points

- `apps/rush-mcp-server/bin/mcp-server` - CLI executable entry point
- `apps/rush-mcp-server/src/start.ts` - Main startup script
- `apps/rush-mcp-server/src/index.ts` - Public API exports

### Core Implementation Files

- `apps/rush-mcp-server/src/server.ts:15` - Main `RushMCPServer` class
- `apps/rush-mcp-server/src/pluginFramework/RushMcpPluginLoader.ts:76` - Plugin discovery and loading
- `apps/rush-mcp-server/src/pluginFramework/RushMcpPluginSession.ts:31` - Plugin session management
- `apps/rush-mcp-server/src/pluginFramework/IRushMcpPlugin.ts:10` - Plugin interface definitions
- `apps/rush-mcp-server/src/pluginFramework/IRushMcpTool.ts:12` - Tool interface definitions

### Built-in Tools

- `apps/rush-mcp-server/src/tools/conflict-resolver.tool.ts`
- `apps/rush-mcp-server/src/tools/migrate-project.tool.ts`
- `apps/rush-mcp-server/src/tools/project-details.tool.ts`
- `apps/rush-mcp-server/src/tools/rush-command-validator.tool.ts`
- `apps/rush-mcp-server/src/tools/workspace-details.ts`

### Configuration Schemas

- `apps/rush-mcp-server/src/schemas/rush-mcp.schema.json` - Main config schema
- `apps/rush-mcp-server/src/schemas/rush-mcp-plugin.schema.json` - Plugin manifest schema

### Plugin Examples

- `build-tests/rush-mcp-example-plugin/` - Complete example plugin implementation
- `rush-plugins/rush-mcp-docs-plugin/` - Documentation query plugin

The MCP server provides sophisticated Rush monorepo management capabilities through 5 core tools that handle conflict resolution, project migration, introspection, command validation, and workspace analysis, plus an extensible plugin system for custom functionality.
