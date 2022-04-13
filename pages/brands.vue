<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="brand in brands" :key="brand.id">
          <td>{{ brand.id }}</td>
          <td>{{ brand.brand }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      brands: [],
    };
  },
  async fetch() {
    await this.$store.dispatch("brands/getAll");
    this.brands = this.$store.getters["brands/getBrands"];
  },
};
</script>

<style></style>
