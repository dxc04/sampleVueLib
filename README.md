# @datay/xtool-components  [![npm version](https://badge.fury.io/js/%40datay%2Fxtool-components.svg)](https://badge.fury.io/js/%40datay%2Fxtool-components) 

> Boilerplate for creating vue lib or web component

## Installation

```sh
$ npm install --save @datay/xtool-components
```

## Usage

```js
<script lang="ts">
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
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="path/to/xtools-component.js"></script>
<div id="app">
    <color-contrast />
</div>
```


## License

MIT © [Dixie Philamerah Atay](https://github.com/dxc04)
