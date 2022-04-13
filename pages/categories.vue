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
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.category }}</td>
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
      categories: [],
    };
  },
  async fetch() {
    // alert("fiu");
    await this.$store.dispatch("categories/getAll");
    this.categories = this.$store.getters["categories/getCategories"];
  },
};
</script>

<style></style>
