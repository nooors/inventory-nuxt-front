<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <div v-if="headersContion">
            <th class="text-center" v-for="n in headers.length - 1" :key="n">
              {{ headers[n - 1] }}
            </th>
          </div>
          <th class="text-center">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td class="text-center" v-for="(value, name) in item" :key="name">
            {{ value }}
          </td>
          <td class="text-center">
            <v-btn color="info" @click.stop="dialogUpdate = true">update</v-btn>
            <modal-form
              :dialog="dialogUpdate"
              @close="dialogUpdate = false"
              @save="save"
              :cardTitle="cardTitle"
              :itemUpdate="item"
            ></modal-form>
            <v-btn color="error" @click.stop="dialogConfirm = true"
              >delete</v-btn
            >
            <modal-confirm
              :dialogConfirm="dialogConfirm"
              @close="dialogConfirm = false"
              :cardTitle="cardTitle"
              :objectDelete="item"
            ></modal-confirm>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
// Props @items set the array of objects witch gonn iterate to fill de table
//       @heders set the properties of the iterating object
//       @cardTitle set de title of the card ccomponent in ModalForm and ModalConfirm component

// .
import ModalConfirm from "./ModalConfirm.vue";
import ModalForm from "./ModalForm.vue";
export default {
  name: "TheTable",
  props: ["items", "headers", "cardTitle"],
  components: { ModalForm, ModalConfirm },
  data() {
    return {
      dialogAdd: false,
      dialogUpdate: false,
      dialogConfirm: false,
    };
  },
  methods: {
    save() {
      this.$emit("save");
    },
  },
  computed: {
    headersContion() {
      this.headers !== null && this.headers !== undefined ? true : false;
    },
  },
};
</script>

<style></style>
