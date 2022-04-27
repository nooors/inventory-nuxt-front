export default {
  async getAll({ commit }) {
    try {
      const brands = await this.$axios.$get("http://127.0.0.1:8000/api/brands");
      commit("setAll", brands);
    } catch (e) {
      console.log(e);
    }
  },
  async new({ dispatch }, brand) {
    try {
      const newBrand = await this.$axios.$post(`${API}brands`, brand);
      dispatch("getAll");
    } catch (e) {
      console.log(e);
    }
  },
  async update({ dispatch }, brand) {
    try {
      const updateBrand = await this.$axios.$put(
        `${API}brands/${brand.id}`,
        brand
      );
      dispatch("getAll");
    } catch (e) {
      console.log(e);
    }
  },
  async destroy({ dispatch }, id) {
    try {
      const brand = await this.$axios.$delete(`${API}/brands/${id}`);
      dispatch("getAll");
    } catch (e) {
      console.log(e);
    }
  },
};
