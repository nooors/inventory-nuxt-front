export default {
  async getAll({ commit }) {
    try {
      let $garments = await this.$axios.$get("http://127.0.0.1:8000/api/garment");
      commit("setGarments", $garments);
    } catch (e) {
      console.log(e);
    }
  },
};
