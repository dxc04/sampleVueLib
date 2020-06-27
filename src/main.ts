import Vue from "vue";

// import components here
import ColorContrast from "./components/ColorContrast.vue";

interface Comp<TValue> {
  [id: string]: TValue;
}

const Components: Comp<object> = {
  ColorContrast
};

Object.keys(Components).forEach((name: string) => {
  Vue.component(name, Components[name]);
});
export default Components;
