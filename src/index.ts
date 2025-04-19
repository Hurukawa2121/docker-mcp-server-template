import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "mcp-server-by-docker",
  version: "1.0.0",
});

server.tool(
  "get_test_text",
  "テスト用のテキストデータを取得する",
  {},
  () => {
    const foo = process.env.FOO ?? '';
    return {content: [{type: "text", text: foo}]};
  },
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Example MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
