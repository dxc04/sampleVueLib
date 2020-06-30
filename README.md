# @datay/xtool-components  [![npm version](https://badge.fury.io/js/%40datay%2Fxtool-components.svg)](https://badge.fury.io/js/%40datay%2Fxtool-components) 

> Sample setup for creating vue lib and web component

## Usage

Within node environment
```sh
$ npm install --save @datay/xtool-components
```

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

Make sure first that vue cli and vue cli-service-global was installed globally.
They will be use on building packages and service components
```sh
npm install -g @vue/cli @vue/cli-service-global
```

To build for lib and web component
```sh
npm run build
```

To only build lib components
```sh
npm run build:lib
```

To only build web components
```sh
npm run build:wc
```

## Working on Components
When working on the components, there are too ways see the output: 
- via script tag -> wc
- via serving the vue component -> lib


### Web Components
- Before the changes are reflected make sure to build your changes.
```sh
npm run build:wc
```
- Load demo html in `./dist/demo.html` to your broswer

### Lib Components
- Serve vue component
```sh
vue serve src/components/ColorContrast.vue
```
- See component in action on http://localhost:5000

## Testing

Unit tests are placed in `tests/unit/`. Ideally each component will have corresponding unit test. Currently `ColorContrast` have `ColorContrast.spec.ts` unit test.
To run unit tests
```sh
npm run test:unit
```

## Git commiting
It would be great if we can use this [gitmoji-cli](https://github.com/JPeer264/node-semantic-git-commit-cli) for semantic commits

## License

MIT © [Dixie Philamerah Atay](https://github.com/dxc04)
