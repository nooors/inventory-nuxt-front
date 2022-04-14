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
        <tr v-for="garment in garments" :key="garment.id">
          <td>{{ garment.id }}</td>
          <td>{{ garment.reference }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data() {
    return {
      garments: [],
    };
  },
  async fetch() {
    await this.$store.dispatch("garments/getAll");
    this.garments = this.$store.getters["garments/getGarments"];
  },
};
</script>

<style></style>
