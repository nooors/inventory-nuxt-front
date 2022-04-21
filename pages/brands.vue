<template>
  <v-container>
    <v-row>
      <v-col class="text-center">Brands</v-col>
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
                  v-for="(value, name) in brands[0]"
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
              <tr v-for="brand in brands" :key="brand.id">
                <td
                  class="text-center"
                  v-for="(value, name) in brand"
                  :key="name"
                >
                  {{ value }}
                </td>
                <td class="text-center">
                  <v-btn color="info" @click.stop="openModal(brand)"
                    >update</v-btn
                  >

                  <v-btn color="error" @click.stop="openConfirm(brand)"
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
      brands: [],
      objectToModal: {},
      dialogDestroy: false,
      cardTitle: "Brand",
      dialogConfirm: false,
      modal: false,
      confirm: false,
      newRequest: "brands/new",
      dispatchRequest: "brands/update",
    };
  },
  // Request to the API before create and render component
  async fetch() {
    await this.$store.dispatch("brands/getAll");
    // Guard in case there are no data.
    if (
      this.$store.getters["brands/getBrands"] !== null &&
      this.$store.getters["brands/getBrands"] !== undefined
    ) {
      //
      this.brands = this.$store.getters["brands/getBrands"];
    }
  },

  methods: {
    save() {
      this.modal = false;
    },
    deleteCategory() {
      this.$store.dispatch("brands/destroy", this.objectToModal.id);
      this.dialogDestroy = false;
    },
    openConfirm(brand) {
      this.objectToModal = brand;
      this.dialogDestroy = true;
    },

    openModal(brand) {
      console.log(brand);
      brand === "new"
        ? (this.objectToModal = Object.keys(brand).reduce(
            (accumulator, key) => {
              return { ...accumulator, [key]: null };
            },
            {}
          ))
        : (this.objectToModal = brand);
      console.log(this.objecToModal);

      this.modal = true;
    },
  },
};
</script>

<style></style>
