<template>
  <v-dialog v-model="dialogForm" max-width="400" :retain-focus="false">
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ cardTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row v-for="(value, key) in itemUpdate" :key="key">
            <v-col>
              <v-text-field
                :value="value"
                :label="key"
                v-if="key !== 'id'"
                v-model="inputModel[key]"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="save">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
// Props:
// dialogForm opens and closes the v-dialog component
// cardTitle sets the title
// itemUpdate receives the object in wich iterate
// dispatchNew and dispatchUpdate set the action of the store wich request to the API
export default {
  name: "ModalForm",
  props: [
    "dialogForm",
    "cardTitle",
    "itemUpdate",
    "dispatchNew",
    "dispatchUpdate",
  ],
  data() {
    return {
      inputModel: null,
      create: false,
    };
  },
  watch: {
    itemUpdate: function () {
      this.inputModel = { ...this.itemUpdate };
      this.inputModel.id === "" ? (this.create = true) : (this.create = false);
    },
  },

  methods: {
    close() {
      this.$emit("close");
    },
    save() {
      this.create
        ? this.$store.dispatch(this.dispatchNew, this.inputModel)
        : this.$store.dispatch(this.dispatchUpdate, this.inputModel);
      this.$emit("close");
    },
  },
};
</script>

<style></style>
