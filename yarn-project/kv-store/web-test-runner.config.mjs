import { defaultReporter } from '@web/test-runner';
import { summaryReporter } from '@web/test-runner';
import { fileURLToPath } from 'url';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';

const reporter = process.env.CI ? summaryReporter() : defaultReporter();

export default {
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    // playwrightLauncher({ product: "webkit" }),
    // playwrightLauncher({ product: "firefox" }),
  ],
  plugins: [
    esbuildPlugin({
      ts: true,
    }),
  ],
  files: ['./src/**/indexeddb/*.test.ts'],
  rootDir: fileURLToPath(new URL('../', import.meta.url)),
  nodeResolve: true,
  reporters: [reporter],
};
