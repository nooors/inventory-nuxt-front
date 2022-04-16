<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Id
          </th>
          <th class="text-left">
            Category
          </th>
          <th>
            Image
          </th>
          <th>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.category }}</td>
          <td>{{ category.image }}</td>
          <td>
            <v-btn color="info" @click.stop="dialogUpdate = true">update</v-btn>
            <the-modal
              :dialog="dialogUpdate"
              @close="dialogUpdate = false"
              @save="save"
            ></the-modal>
            <v-btn color="danger" @click="destroy">delete</v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import TheModal from "~/components/TheModal.vue";
export default {
  components: { TheModal },
  layout: "default",
  data() {
    return {
      categories: [],
      dialogUpdate: false,
    };
  },
  async fetch() {
    // alert("fiu");
    await this.$store.dispatch("categories/getAll");
    this.categories = this.$store.getters["categories/getCategories"];
  },
  methods: {
    update(category) {
      alert(`${category.category}`);
    },
    destroy() {
      alert("destroy");
    },
    save() {
      this.dialogUpdate = false;
    },
  },
  computed: {
    properties() {
      return Object.getOwnPropertyNames(this.categories[0]);
    },
  },
  // watch: {
  //   properties() {
  //     console.log(this.properties);
  //   },
  // },
};
</script>

<style></style>
