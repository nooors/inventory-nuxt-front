export default {
  async getAll({ commit }) {
    try {
      const brands = await this.$axios.$get("http://127.0.0.1:8000/api/brands");
      commit("setAll", brands);
    } catch (e) {
      console.log(e);
    }
  },
};
