import { Module, Commit } from "vuex";
import { State } from "../index";
import IPlan from "@/types/Plan";

interface PlanState {
  selectedPlan: IPlan | null;
}

const state: PlanState = {
  selectedPlan: null,
};

const getters = {
  getSelectedPlan: (state: PlanState) => state.selectedPlan,
};

const mutations = {
  setSelectedPlan(state: PlanState, plan: IPlan) {
    state.selectedPlan = plan;
  },
};

const actions = {
  selectPlan({ commit }: { commit: Commit }, plan: IPlan) {
    commit("setSelectedPlan", plan);
  },
};

export const plan: Module<PlanState, State> = {
  state,
  mutations,
  actions,
  getters,
} as Module<PlanState, State>;
