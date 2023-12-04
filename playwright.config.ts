import { defineConfig } from "@playwright/test";
import { devices as replayDevices } from "@replayio/playwright";

const { CI, BASE_URL, REPLAY_API_KEY } = process.env;

export default defineConfig({
  testDir: "./tests",
  retries: process.env.CI ? 2 : 0,
  reporter: [["@replayio/playwright/reporter", {
    upload: true, apiKey: REPLAY_API_KEY
  }], ['line']],
  use: {
    baseURL: CI ? BASE_URL : "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "replay-chromium",
      use: { ...replayDevices["Replay Chromium"] },
    },
  ],
});
