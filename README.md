# @datay/xtool-components  [![npm version](https://badge.fury.io/js/%40datay%2Fxtool-components.svg)](https://badge.fury.io/js/%40datay%2Fxtool-components) 

> Boilerplate for creating vue lib or web component

## Installation

```sh
$ npm install --save @datay/xtool-components
```

## Usage

```js
<script>
import { ColorContrast } from "@datay/xtool-components"

export default {
    components: {
        ColorContrast    
    }    
}
</script>

<template>
    <ColorContrast />
</template>
```
or on existing non vue project

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@datay/xtool-components"></script>
<div id="app">
    <xtool-color-contrast />
</div>
```
Prefix `xtool` is a result of vue-cli naming convention for multiple web components. 
The custom element name will be inferred from the component filename.
For example, with --name foo and a component named HelloWorld.vue, the resulting custom element will be registered as <foo-hello-world>

## Building Components

To build for lib and web component usage
```sh
npm run build
```

To only build lib
```sh
npm run build:lib
```

To only build web components
```sh
npm run build:wc
```

## Testing

Unit tests are placed in `tests/unit/`. Ideally each component will have corresponding unit test. Currently `ColorContrast` have `ColorContrast.spec.ts` unit test.
To run unit tests
```sh
npm run test:unit
```

## Misc
I use [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli) for my commit message 

## License

MIT © [Dixie Philamerah Atay](https://github.com/dxc04)
