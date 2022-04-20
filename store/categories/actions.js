import axios from "axios";

const API = "http://127.0.0.1:8000/api/";
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
  async new({ dispatch }, newCategory) {
    try {
      const category = await this.$axios.$post(`${API}category`, {
        name: newCategory.name,
        image: newCategory.image,
      });
      dispatch("getAll");
    } catch (e) {
      console.log(e);
    }
  },
  async update({ dispatch }, category) {
    try {
      const categoryUpdate = await this.$axios.$put(
        `${API}category/${category.id}`,
        {
          name: category.name,
          image: category.image,
        }
      );
      dispatch("getAll");
    } catch (e) {}
  },
};
