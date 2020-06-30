<template>
  <div>This is a color contrast component. Target element is: {{ target }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ColorContrast extends Vue {
  @Prop({ default: "body" })
  target: string;
}
</script>
