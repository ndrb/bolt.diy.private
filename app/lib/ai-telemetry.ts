// Telemetry configuration for Vercel AI SDK
// Telemetry is disabled by default for enterprise environments
// Set ENABLE_AI_TELEMETRY=true to opt-in to telemetry

export const aiTelemetryConfig = {
    experimental_telemetry: {
        isEnabled: process.env.ENABLE_AI_TELEMETRY === 'true',
    },
};
