<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">Input Component</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <input :value="value" @input="$emit('input', $event.target.value)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "InputComponent",
  props: ["value"],
  // methods: {
  //   input(event) {
  //     this.$emit("input", event.target.value);
  //   },
  // },
};
</script>

<style></style>
