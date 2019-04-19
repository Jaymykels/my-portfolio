import { shallowMount } from "@vue/test-utils";
import Contact from "@/components/Contact.vue";

describe("Contact.vue", () => {
  it("renders component in the right format when props is passed", () => {
    const props = {
      email: "jaymykels69@gmail.com",
      address: "Mobil Road Off Ilaje, Ajah Lagos",
      mobile: "+234 708 038 7486"
    };
    const wrapper = shallowMount(Contact, {
      propsData: props
    });
    expect(wrapper.findAll("li")).toHaveLength(4);
    expect(wrapper.find("li").text()).toBe(props.address.split(",")[0]);
  });
});
