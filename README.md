## Docker MCP Server Template
DockerでMCPサーバーを立ち上げるテンプレートです。

Dockerfileを変えてお使いください。

## Installation
```
{
  "mcpServers": {
    "mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e", "FOO=Bar", # Environments
        "ghcr.io/<owner>/<repo>:latest"
      ]
    }
  }
}
```
