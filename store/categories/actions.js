import axios from "axios";

export default {
  async getAll({ commit }) {
    // alert("action");
    try {
      const categories = await this.$axios.$get(
        "http://127.0.0.1:8000/api/category"
      );
      commit("setAll", categories);
    } catch (e) {
      console.log(e);
    }
  },
};
