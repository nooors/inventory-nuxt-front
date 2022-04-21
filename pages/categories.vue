<template>
  <v-container>
    <v-row>
      <v-col class="text-center">Categories</v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-end">
        <v-btn color="success" @click.stop="openModal('new')">add</v-btn>
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
                  <v-btn color="info" @click.stop="openModal(category)"
                    >update</v-btn
                  >

                  <v-btn color="error" @click.stop="openConfirm(category)"
                    >delete</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <modal-form
          @close="modal = false"
          @save="save"
          :cardTitle="cardTitle"
          :itemUpdate="objectToModal"
          :dialogForm="modal"
          :dispatchNew="newRequest"
          :dispatchUpdate="updateRequest"
        ></modal-form>
        <modal-confirm
          :dialogConfirm="dialogDestroy"
          @close="dialogDestroy = false"
          :cardTitle="cardTitle"
          :objectDelete="objectToModal"
          @destroy="deleteCategory"
        ></modal-confirm>
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
      objectToModal: {},
      dialogDestroy: false,
      cardTitle: "Category",
      dialogConfirm: false,
      modal: false,
      confirm: false,
      newRequest: "categories/new",
      dispatchRequest: "categories/update",
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

  methods: {
    update(category) {
      alert(`${category.category}`);
    },
    save() {
      this.modal = false;
    },
    deleteCategory() {
      this.$store.dispatch("categories/destroy", this.objectToModal.id);
      this.dialogDestroy = false;
    },
    openConfirm(category) {
      this.objectToModal = category;
      this.dialogDestroy = true;
    },

    openModal(category) {
      console.log(category);
      category === "new"
        ? (this.objectToModal = {
            id: "",
            name: "",
            image: "",
          })
        : (this.objectToModal = category);
      console.log(this.objecToModal);

      this.modal = true;
    },
  },
};
</script>

<style></style>
