import { Module, Commit } from "vuex";
import { State } from "../index";

export interface Plan {
  planName: string;
  price: number;
  description: string;
  idealFor: string;
}

interface PlanState {
  selectedPlan: Plan | null;
}

const state: PlanState = {
  selectedPlan: null,
};

const mutations = {
  setSelectedPlan(state: PlanState, plan: Plan) {
    state.selectedPlan = plan;
  },
};

const actions = {
  selectPlan({ commit }: { commit: Commit }, plan: Plan) {
    console.log(plan);
    commit("setSelectedPlan", plan);
  },
};

export const plan: Module<PlanState, State> = {
  state,
  mutations,
  actions,
} as Module<PlanState, State>;
