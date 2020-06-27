import { shallowMount } from "@vue/test-utils";
import ColorContrast from "@/components/ColorContrast.vue";

describe("ColorContrast.vue", () => {
  it('receives the target element for color contrast, default is "body",  defaultTarget', () => {
      const target = 'body'
      const wrapper = shallowMount(ColorContrast, {
      propsData: { target },
    });
    expect(wrapper.text()).toMatch(target);
  })
});
