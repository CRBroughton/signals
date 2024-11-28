/* eslint-disable antfu/no-top-level-await */
import dts from 'bun-plugin-dts';

await Bun.build({
  entrypoints: ['./index.ts'],
  outdir: 'dist',
  plugins: [dts()],
});
