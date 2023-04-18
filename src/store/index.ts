import { createStore } from "vuex";
import { plan } from "./modules/plan";
import IPlan from "@/types/Plan";
import VuexPersistence from "vuex-persist";

export interface State {
  plan: IPlan;
}

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore<State>({
  modules: {
    plan,
  },
  plugins: [vuexLocal.plugin],
});
