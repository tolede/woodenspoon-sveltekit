import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'
import preprocess from 'svelte-preprocess'
//import adapter from '@sveltejs/adapter-static'
import adapter from '@sveltejs/adapter-netlify'
//import adapter from '@sveltejs/adapter-auto'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', ...mdsvexConfig.extensions],

    kit: {
        adapter: adapter(),
        vite: () => ({
            server: {
                port: 8080,
            },
            resolve: {
                alias: {
                    $assets: path.resolve('./src/assets'),
                    $base: path.resolve('./src/layouts/base'),
                    $components: path.resolve('./src/components'),
                    $graphics: path.resolve('./src/layouts/graphics'),
                    $layouts: path.resolve('./src/layouts'),
                    $lib: path.resolve('./src/lib'),
                    $root: path.resolve('./src'),
                    $stores: path.resolve('./src/stores'),
                    $styles: path.resolve('./src/assets/styles'),
                    $utils: path.resolve('./src/lib/utils'),
                },
            },
            plugins: [],
        }),
        prerender: {
            default: true,
        },
    },

    preprocess: [
        preprocess({
            postcss: true,
        }),
        mdsvex(mdsvexConfig),
    ],
}

export default config
