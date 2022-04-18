<template>
  <v-dialog v-model="dialogForm" max-width="400" :retain-focus="false">
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ cardTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row v-for="(value, name) in itemUpdate" :key="name">
            <v-col>
              <v-text-field
                :value="value"
                :input="input"
                :label="name"
                v-if="name !== 'id'"
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
export default {
  name: "ModalForm",
  props: ["dialogForm", "cardTitle", "itemUpdate"],
  data() {
    return {
      index: -1,
      inputValue: [],
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    save() {
      this.$emit("save");
    },
    input(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style></style>
