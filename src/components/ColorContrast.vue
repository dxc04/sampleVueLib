<template>
  <div>
    <button class="btn">color contrast</button> Target element is: {{ target }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ColorContrast extends Vue {
  @Prop({ default: "body" })
  target: string;
}
</script>

<style lang="scss">
@import "../assets/sass/styles.scss";
</style>
