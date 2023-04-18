import { createStore } from "vuex";
import { Plan, plan } from "./modules/plan";

export interface State {
  plan: Plan;
}

export default createStore<State>({
  modules: {
    plan,
  },
});
