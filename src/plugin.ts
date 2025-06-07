import type { Plugin } from 'vite';

export function signalsPlugin(): Plugin {
  return {
    name: 'vite-plugin-signals',

    config(config) {
      return {
        esbuild: {
          ...config.esbuild,
          jsxFactory: 'createElement',
          jsxFragment: 'Fragment',
          jsxInject: `import { createElement } from '@crbroughton/signals'`,
        },
      };
    },
  };
}
