/* eslint-disable no-console */
/* eslint-disable node/prefer-global/process */
import { build } from 'bun';
import dts from 'bun-plugin-dts'; // TODO - replace with vite dts
// TODO - replace bun with vite

async function runBuild() {
  try {
    const result = await build({
      entrypoints: ['./index.ts'],
      outdir: './dist',
      target: 'node',
      format: 'esm',
      plugins: [dts()],
    });

    if (!result.success) {
      console.error('Build failed:', result.logs);
      process.exit(1);
    }

    console.log('Build completed successfully!');
  }
  catch (error) {
    console.error('Build error:', error);
    process.exit(1);
  }
}

runBuild();
