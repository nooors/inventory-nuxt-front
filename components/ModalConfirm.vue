<template>
  <v-dialog v-model="dialogConfirm" max-width="400" :retain-focus="false">
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ cardTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              Are you sure you want delete this item?
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ objectDelete }}
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">
          Close
        </v-btn>
        <v-btn color="error" text @click="destroy">
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
// Props dialogConfirm: set visiblity of the dialog component
//       cardTitle: set title of card component in dialog component

export default {
  name: "ModalConfirm",
  props: ["dialogConfirm", "cardTitle", "objectDelete"],
  methods: {
    destroy() {
      this.$emit("destroy");
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
