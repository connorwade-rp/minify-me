import init, {transform} from 'https://esm.run/lightningcss-wasm';
// import {transform} from 'esbuild-wasm'
import * as esbuild from './node_modules/esbuild-wasm/esm/browser.min.js'


const submit = document.querySelector('.submit')
/**
 * @type {HTMLTextAreaElement}
 */
const markupTextArea = document.querySelector('.markup')
/**
 * @type {HTMLTextAreaElement}
 */
const styleTextArea = document.querySelector('.style')
/**
 * @type {HTMLTextAreaElement}
 */
const javaScriptTextArea = document.querySelector('.js')

const state = {
    isLoading: false,
}

await esbuild.initialize({
    worker: true,
    wasmURL: './node_modules/esbuild-wasm/esbuild.wasm'
})

await init();

submit.addEventListener('click', ()=> {
    let markup = markupTextArea.value
    let css = styleTextArea.value
    let js = javaScriptTextArea.value

    console.log(markup)
    console.log(css)
    console.log(js)

    if(js && js.length > 0) {
        minifyJs(js).then(result => {
            javaScriptTextArea.value = result.code
        })
    }

    if(css && css.length > 0) {
        minifyCss(css).then(result => {
            let code = new TextDecoder().decode(result.code)
            styleTextArea.value = code
        })
    }
})

async function minifyJs(js) {
    
    let result = await esbuild.transform(js, {
        minify:true,
    })
    return result
}

async function minifyCss(css) {
    let result = transform({
        code: new TextEncoder().encode(css),
        minify: true,
    })
    return result;
}

