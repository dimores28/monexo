import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'
import inject from "@rollup/plugin-inject";

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    inject({   // => that should be first under plugins array
        $: 'jquery',
        jQuery: 'jquery',
    }),
  ],
})
