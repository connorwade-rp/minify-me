/**
 * @type {import("rollup").RollupOptions}
 */
export default {
    external: ['esbuild-wasm'],
    input: './main.js',
    output: {
        file: './module.js', 
        format: "esm",
        globals: {
                "esbuild-wasm": "esbuild"
        }
    },
    
}