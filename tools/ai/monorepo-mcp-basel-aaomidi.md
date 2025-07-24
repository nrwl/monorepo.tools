# Comprehensive MCP Server Analysis Report

## Executive Summary

This codebase implements a **Bazel MCP Server** using the Go programming language and the `mark3labs/mcp-go` framework (v0.18.0). The server exposes 5 core tools for interacting with Bazel build systems through the Model Context Protocol (MCP). The implementation follows a modular, static architecture where tools are registered at startup rather than using dynamic plugin discovery.

---

## Built-in Core Tools

### **build** (`tools/build/build.go:14`)

- **Purpose**: Executes Bazel build commands for specified targets
- **Implementation**:
  - Uses `bazel.ExecuteCommand()` to run `bazel build <target>` commands
  - Performs basic validation on target strings (non-empty check)
  - Returns combined stdout/stderr output from the build process
  - Error handling includes full command output for debugging build failures
- **Key Capabilities**:
  • Build any valid Bazel target (e.g., `//foo:bar`)
  • Execute builds in specified project directories
  • Return detailed build output including errors and warnings
  • Validate target format before execution

### **test** (`tools/test/test.go:14`)

- **Purpose**: Runs Bazel test commands for specified test targets
- **Implementation**:
  - Uses `bazel.ExecuteCommand()` to run `bazel test <target>` commands
  - Identical validation and error handling patterns to the build tool
  - Returns test execution results and summaries
- **Key Capabilities**:
  • Execute tests for individual targets or test suites
  • Support for wildcard test patterns (e.g., `//path/to/tests/...`)
  • Return comprehensive test results including failures and summaries
  • Handle both single targets and multi-target test execution

### **deps** (`tools/deps/deps.go:14`)

- **Purpose**: Discovers dependencies of Bazel targets with configurable depth
- **Implementation**:
  - Uses Bazel's `query` command with `deps('<target>', <depth>)` expression
  - Supports configurable depth parameter (default: 1 for direct dependencies)
  - Converts MCP's float64 number format to integers with validation
  - Returns dependencies as newline-separated target labels
- **Key Capabilities**:
  • Find direct dependencies (depth=1) or transitive dependencies (depth>1)
  • Validate depth parameter (must be non-negative)
  • Handle non-integer depth values through truncation
  • Return structured dependency lists in Bazel label format

### **reverse-dependencies** (`tools/rdeps/rdeps.go:14`)

- **Purpose**: Finds all targets that depend on a given target or file path
- **Implementation**:
  - Uses Bazel's `rdeps(//..., <target>, <max_depth>)` query function
  - Supports both Bazel targets and file paths as input through `bazel.ResolveInputToBazelTarget()`
  - Configurable depth with -1 meaning unlimited search
  - Returns graph output format for comprehensive dependency analysis
- **Key Capabilities**:
  • Find reverse dependencies for both targets and file paths
  • Support unlimited depth search (max_depth=-1) or limited depth
  • Intelligent input resolution (file paths converted to Bazel targets)
  • Return detailed dependency graphs showing relationships

### **sources** (`tools/sources/sources.go:14`)

- **Purpose**: Identifies direct source files associated with Bazel targets
- **Implementation**:
  - Uses Bazel query with `kind('source file', deps('<target>'))` expression
  - Returns source files as label-formatted output
  - Simple target validation (non-empty string check)
- **Key Capabilities**:
  • Find all source files directly associated with a target
  • Return files in Bazel label format for consistency
  • Filter results to only include source files (excludes generated files, etc.)
  • Provide precise file-level dependency tracking

---

## Plugin Architecture

**Architecture Type**: **Static Registration** - No dynamic plugin system

The server uses a **compile-time tool registration** approach rather than runtime plugin discovery:

- **Registration Pattern** (`main.go:21-26`): Tools are imported as Go packages and registered via `s.AddTool(tool, handler)` calls
- **Tool Structure**: Each tool consists of:
  - `Tool` variable: MCP tool definition with schema
  - `Handler` function: Implementation logic for tool execution
- **No Plugin Framework**: Tools are built directly into the binary, providing better performance and reliability
- **Extensibility**: New tools require code changes and recompilation

### Tool Registration Flow:

1. Import tool packages in `main.go:6-10`
2. Create MCP server instance (`main.go:16-19`)
3. Register each tool with its handler (`main.go:22-26`)
4. Start stdio-based MCP server (`main.go:28`)

---

## Technical Implementation Details

### **Base Architecture and Frameworks**

- **Primary Framework**: `github.com/mark3labs/mcp-go v0.18.0` - Go implementation of MCP protocol
- **Language**: Go 1.24.2 with modern module system
- **Communication**: Stdio-based MCP transport (`server.ServeStdio()`)
- **Server Identity**: `bazel-mcp` version `0.0.1`

### **Key Implementation Patterns**

#### **Command Execution Pattern** (`bazel/execute.go:12-24`)

- **Method**: `exec.CommandContext()` for subprocess management
- **Output Handling**: `CombinedOutput()` captures both stdout and stderr
- **Error Enrichment**: Detailed error messages include command args and output
- **Context Support**: Proper cancellation support through context propagation

#### **Input Validation Pattern**

- **Type Assertions**: All tools perform runtime type checking on MCP arguments
- **Parameter Extraction**: Consistent pattern across tools for extracting required/optional parameters
- **Validation Logic**: Basic validation (non-empty strings, non-negative numbers)
- **Error Messaging**: Clear, actionable error messages for invalid inputs

#### **Target Resolution System** (`bazel/target.go:10-81`)

- **Dual Input Support**: Handles both Bazel target labels and file paths
- **Path Resolution**: Sophisticated absolute/relative path handling
- **Security Validation**: Prevents access to files outside project boundaries
- **Label Format**: Converts file paths to proper Bazel target format (`//path:file`)

### **Configuration and Transport**

- **Transport Protocol**: MCP over stdio (standard input/output)
- **Configuration**: JSON-based Claude Desktop integration
- **Dependencies**: Minimal external dependencies (UUID generation, URI templates)
- **Installation**: Go module installation via `go install`

### **Data Flow Architecture**

1. **MCP Request Reception**: Stdio transport receives tool execution requests
2. **Parameter Extraction**: Type-safe extraction of tool arguments
3. **Input Validation**: Security and format validation of user inputs
4. **Bazel Command Construction**: Dynamic command building based on tool type
5. **Process Execution**: Subprocess execution with timeout and context support
6. **Output Processing**: Combined stdout/stderr capture and formatting
7. **MCP Response**: Structured response with results or detailed error information

---

## File Locations

### **Main Entry Points**

- `main.go:15-35` - Server initialization and tool registration
- `main.go:31-34` - Application entry point with error handling

### **Core Implementation Files**

- `bazel/execute.go:9-24` - Bazel command execution engine
- `bazel/target.go:10-81` - Target resolution and path handling
- `bazel/target_test.go:9-129` - Comprehensive unit tests for target resolution

### **Tool Implementations**

- `tools/build/build.go:14-55` - Build tool definition and handler
- `tools/test/test.go:14-54` - Test execution tool
- `tools/deps/deps.go:14-79` - Dependency discovery tool
- `tools/rdeps/rdeps.go:14-78` - Reverse dependency analysis tool
- `tools/sources/sources.go:14-58` - Source file identification tool

### **Configuration and Dependencies**

- `go.mod:1-10` - Go module definition and dependencies
- `go.sum:1-14` - Dependency verification checksums
- `README.md:1-52` - Installation and configuration documentation

---

## Security and Reliability Features

### **Path Security**

- **Boundary Enforcement**: Strict validation prevents access outside project directories
- **Path Sanitization**: Proper absolute/relative path resolution
- **Input Validation**: Protection against path traversal attacks

### **Process Security**

- **Context-Based Timeouts**: Prevent hanging processes
- **Command Validation**: Limited to `bazel` executable only
- **Output Limits**: Bounded output capture prevents memory exhaustion

### **Error Handling**

- **Comprehensive Logging**: Detailed logging of all command executions
- **Error Propagation**: Full error context preservation through the stack
- **User-Friendly Messages**: Clear error descriptions for debugging
