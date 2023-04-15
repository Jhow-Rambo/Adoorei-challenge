// import HelloWorld from "@/components/HelloWorld.vue";
import HelloWorld from "../components/HelloWorld.vue";

export default {
  title: "HelloWorld",
  component: HelloWorld,
};

export const Default = () => ({
  components: { HelloWorld },
  template: '<HelloWorld message="Welcome!"/>',
});
