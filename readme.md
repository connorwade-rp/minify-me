# In Browser CSS and JS minification

## How to demo:

- npm install depencies
- Just start the ".html" file in a browser. You may want to use a server so that it works correctly (though it should technically work without it)

## Files:

- index.html provides the markup
- main.js is the development script
- module.js is the bundled script that is used with index.html
- rollup.config.mjs is here because we have to bundle everything for it to work in browser

## How is it done:

- We pull in two WASM libraries: esbuild-wasm and lightningcss-wasm
- Both are maintained by the teams for Deno so it is likely they will remain up-to-date
