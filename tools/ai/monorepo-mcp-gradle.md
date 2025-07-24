# Gradle MCP Server Implementation Analysis

## Server Architecture Overview

The Gradle MCP Server is built using the [Anthropic MCP Kotlin SDK](https://github.com/wiremock-inc/anthropic-mcp-kotlin-sdk) and provides a bridge between AI tools and Gradle projects through the [Gradle Tooling API](https://docs.gradle.org/current/userguide/tooling_api.html).

**Main Entry Point**: `Main.kt:6-13`

- Parses CLI arguments via `AppConfig.parse()`
- Creates and starts `McpServer` instance
- Supports both STDIO and SSE transport modes

**Core Server Implementation**: `McpServer.kt:24-115`

- Uses Ktor CIO for SSE mode (`McpServer.kt:107-114`)
- Registers tools dynamically at startup (`McpServer.kt:55-70`)
- Manages Gradle service instance for tool execution

## Built-in Core Tools

### **GetProjectInfoTool** (`GetProjectInfoTool.kt:27`)

- **Purpose**: Retrieves structured project information with selective querying capabilities
- **Implementation**:
  - Uses Gradle Tooling API models: `GradleProject`, `GradleBuild`, `BuildEnvironment` (`GetProjectInfoTool.kt:88-124`)
  - Implements selective data fetching based on `InfoCategory` enum (`GetProjectInfoTool.kt:152-163`)
  - Error handling with partial success - continues fetching other categories if one fails (`GetProjectInfoTool.kt:96-124`)
  - JSON serialization via Kotlinx Serialization to structured DTOs (`GetProjectInfoTool.kt:166-203`)
- **Key capabilities**:
  - **Build Structure**: Root project info, subprojects list via `GradleBuild` model
  - **Tasks**: Available tasks in root project via `GradleProject` model
  - **Environment**: Gradle/Java versions, JVM args via `BuildEnvironment` model
  - **Project Details**: Name, path, description, build script location
  - **Selective querying**: Only fetch requested information categories for efficiency
  - **Comprehensive error handling**: Returns partial results with error details

### **ExecuteTaskTool** (`ExecuteTaskTool.kt:15`)

- **Purpose**: Executes general Gradle build tasks with comprehensive configuration options
- **Implementation**:
  - Uses `GradleService.executeBuild()` with `BuildLauncher` API (`ExecuteTaskTool.kt:84-86`)
  - Captures stdout/stderr via `ByteArrayOutputStream` (`GradleService.kt:111-114`)
  - Formats response with execution summary and combined output (`ExecuteTaskTool.kt:105-147`)
  - Exception handling for build failures vs setup errors (`ExecuteTaskTool.kt:91-95`)
- **Key capabilities**:
  - **Task execution**: Run multiple tasks in specified order
  - **Arguments**: Command-line args (`--info`, `-P`, etc.)
  - **JVM arguments**: Memory settings, system properties
  - **Environment variables**: Custom build environment
  - **Output capture**: Combined stdout/stderr with status reporting
  - **Error differentiation**: Setup errors vs build failures

### **RunTestsTool** (`RunTestsTool.kt:52`)

- **Purpose**: Executes tests with detailed hierarchical result reporting and advanced filtering
- **Implementation**:
  - Uses Gradle `TestLauncher` API with progress listeners (`RunTestsTool.kt:192-224`)
  - Implements hierarchical test result tracking via `ProgressListener` (`RunTestsTool.kt:416-429`)
  - Advanced output filtering with noise pattern removal (`RunTestsTool.kt:123-134`)
  - Test filtering via `TestSpec` API for classes/methods/packages/patterns (`RunTestsTool.kt:379-407`)
  - Markdown-formatted response generation (`RunTestsTool.kt:292-376`)
- **Key capabilities**:
  - **Hierarchical results**: Suite → Class → Test structure with outcomes
  - **Test filtering**: By class names, method names, packages, or patterns via TestLauncher API
  - **Output management**: Configurable inclusion for passed tests, line limits with truncation
  - **Failure analysis**: Detailed failure messages with context from multiple failure sources
  - **Noise filtering**: Removes verbose build output (KSP, logging, etc.) from test output
  - **Event-driven collection**: Real-time test event processing with concurrent data structures

## Plugin Architecture

**No Plugin System**: This implementation uses a **hardcoded tool registration approach** rather than a plugin architecture. Tools are instantiated directly in `McpServer.kt:55-59`:

```kotlin
val tools = listOf(
    GetProjectInfoTool(),
    ExecuteTaskTool(),
    RunTestsTool()
)
```

**Tool Interface**: All tools implement the `GradleTool` interface (`GradleTool.kt:12-34`) which defines:

- `name`, `description`, `inputSchema` properties
- `execute()` method with standardized signature
- Shared JSON configuration for serialization

## Technical Implementation Details

### **Base Architecture and Frameworks**

- **MCP SDK**: Anthropic MCP Kotlin SDK for protocol handling
- **Gradle API**: Tooling API for project interaction and model fetching
- **Transport**: STDIO (default) or SSE via Ktor CIO server
- **Serialization**: Kotlinx Serialization with custom schema builder DSL

### **Key Implementation Patterns**

- **Resource Management**: `GradleService.withConnection()` ensures proper connection lifecycle (`GradleService.kt:30-62`)
- **Error Isolation**: Tools handle their own exceptions without crashing the server
- **Concurrent Safety**: Thread-safe collections for test result processing (`RunTestsTool.kt:182-183`)
- **Flexible Configuration**: DSL-based input schema generation (`InputSchemaBuilder.kt:82-87`)

### **Configuration and Transport**

- **CLI Configuration**: `AppConfig.parse()` handles `--stdio`, `--sse [port]`, `--debug` flags (`AppConfig.kt:23-54`)
- **Transport Modes**:
  - STDIO: Standard input/output streams for MCP client integration
  - SSE: HTTP server on configurable port for web-based clients
- **Data Models**: Comprehensive serializable DTOs in `model/` package with proper JSON field naming

### **External Integrations**

- **Gradle Tooling API**: Direct integration for model fetching and build execution
- **File System**: Project path validation and workspace operations
- **Process Management**: JVM argument passing and environment variable handling
- **Output Capture**: Stream redirection for build output capture

## File Locations

### **Main Entry Points**

- `Main.kt:6` - Application entry point
- `McpServer.kt:24` - Core server implementation

### **Core Implementation Files**

- `GradleService.kt:17` - Gradle Tooling API wrapper
- `InputSchemaBuilder.kt:10` - JSON schema DSL
- `config/AppConfig.kt:22` - Configuration parsing

### **Tool Implementations**

- `server/tool/GradleTool.kt:12` - Base tool interface
- `server/tool/GetProjectInfoTool.kt:27` - Project info tool
- `server/tool/ExecuteTaskTool.kt:15` - Task execution tool
- `server/tool/RunTestsTool.kt:52` - Test execution tool

### **Configuration Schemas**

- `model/GetProjectInfoModels.kt:6` - Project info data structures
- `model/RunTestsModels.kt:6` - Test result data structures

### **Build Configuration**

- `build.gradle.kts:1` - Project dependencies and build setup
- `gradle/libs.versions.toml` - Version catalog (referenced)

## Summary

The analysis is complete. This Gradle MCP Server provides a comprehensive set of tools for AI agents to interact with Gradle projects, featuring sophisticated error handling, flexible filtering options, and detailed structured responses. The implementation leverages the Gradle Tooling API effectively while maintaining clean separation of concerns through a well-defined tool interface pattern.
