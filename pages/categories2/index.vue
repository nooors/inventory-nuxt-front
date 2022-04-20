<template>
  <v-container>
    <v-row>
      <v-col class="text-center">Categories</v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-end">
        <v-btn color="success" @click.stop="update">add</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th
                  class="text-center"
                  v-for="(value, name) in categories[0]"
                  :key="name"
                >
                  {{ name }}
                </th>

                <th class="text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="category in categories" :key="category.id">
                <td
                  class="text-center"
                  v-for="(value, name) in category"
                  :key="name"
                >
                  {{ value }}
                </td>
                <td class="text-center">
                  <v-btn
                    color="info"
                    :to="{
                      name: 'categories2-update',
                      params: { category },
                    }"
                    nuxt
                    >update</v-btn
                  >

                  <v-btn color="error">delete</v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ModalForm from "~/components/ModalForm.vue";
import ModalConfirm from "~/components/ModalConfirm.vue";
export default {
  components: { ModalForm, ModalConfirm },
  layout: "default",
  data() {
    return {
      categories: [],
      dialogFormParent: [],
      cardTitle: "Category",
      dataForm: [],
      modal: false,
    };
  },
  async fetch() {
    await this.$store.dispatch("categories/getAll");
    if (
      this.$store.getters["categories/getCategories"] !== null &&
      this.$store.getters["categories/getCategories"] !== undefined
    ) {
      this.categories = this.$store.getters["categories/getCategories"];
    }
  },
  mounted() {
    this.$nextTick(() => {
      for (let i = 0; i < this.categories.length; i++) {
        this.dialogFormParent.push(false);
      }
    });
  },

  methods: {
    update(category) {
      this.$router.push("categories2/update");
    },
    destroy() {
      alert("destroy");
    },
    save() {
      this.modal = false;
    },
    input(value) {
      this.dataForm = value;
    },
    openModal(index) {
      this.modal = true;
    },
  },
  transitions: {
    name: "home",
    mode: "out-in",
  },

  // watch: {
  //   properties() {
  //     console.log(this.properties);
  //   },
  // },
};
</script>

<style></style>
