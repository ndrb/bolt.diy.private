// Node.js environment context
// This replaces the Cloudflare-specific load-context

declare module '@remix-run/node' {
  interface AppLoadContext {
    env: NodeJS.ProcessEnv;
  }
}

export { };
