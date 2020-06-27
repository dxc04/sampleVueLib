# @datay/xtool-components [![NPM version](https://badge.fury.io/js/@datay/xtool-components.svg)](https://npmjs.org/package/@datay/xtool-components) [![Build Status](https://travis-ci.org/dxc04/@datay/xtool-components.svg?branch=master)](https://travis-ci.org/dxc04/@datay/xtool-components)

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
<div id="app">
</div>
```

```js
var components = require('@datay/xtool-components');

new Vue({
  el: '#app',
  template: `
    <div>
        <ColorContrast />
    </div>
  `,
  components: { ColorContrast: components.ColorContrast },
});
```

## License

MIT © [Dixie Philamerah Atay](https://github.com/dxc04)
