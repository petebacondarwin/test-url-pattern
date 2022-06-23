export default {
  async fetch(): Promise<Response> {
    const matcher = new URLPattern("http{s}?://test.something.local/*");
    const match = matcher.exec("https://test.something.local/a/b/c");
    return new Response(`${JSON.stringify(match)}`);
  },
};
