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
              <tr v-for="(category, index) in categories" :key="category.id">
                <td
                  class="text-center"
                  v-for="(value, name) in category"
                  :key="name"
                >
                  {{ value }}
                </td>
                <td class="text-center">
                  <v-btn color="info" @click.stop="dialogForm[index] = true"
                    >update{{ dialogForm[index] }}</v-btn
                  >
                  <modal-form
                    @close="dialogForm[index] = false"
                    @save="save"
                    :cardTitle="cardTitle"
                    :itemUpdate="category"
                    v-model="dataForm[index]"
                  ></modal-form>
                  <v-btn color="error" @click.stop="dialogConfirm = true"
                    >delete</v-btn
                  >

                  <!-- <modal-confirm
                    :dialogConfirm="dialogConfirm"
                    @close="dialogConfirm = false"
                    :cardTitle="cardTitle"
                    :objectDelete="item"
                  ></modal-confirm> -->
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
      dialogForm: [],
      cardTitle: "Category",
      dataForm: [],
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
        this.dialogForm.push(false);
      }
    });
  },

  methods: {
    update(category) {
      alert(`${category.category}`);
    },
    destroy() {
      alert("destroy");
    },
    save() {
      this.dialogForm = false;
    },
    input(value) {
      this.dataForm = value;
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
