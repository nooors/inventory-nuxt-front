<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">Input Test</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <input-component v-model="dataForm"></input-component>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InputComponent from "~/components/InputComponent.vue";
export default {
  components: { InputComponent },
  data() {
    return {
      dataForm: null,
    };
  },
};
</script>

<style></style>
