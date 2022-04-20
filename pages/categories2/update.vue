<template>
  <v-container class="d-flex justify-center">
    <v-card width="80%" class="pa-5">
      <v-card-title>
        <v-row>
          <v-col>
            <h1
              class="text-center"
              v-if="
                !$route.parms ? (title = 'Cagetory') : (title = 'New Category')
              "
            >
              {{ title }}
            </h1>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field
              label="name"
              color="grey lighten-2"
              text
              v-model="modelInput.name"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              label="image"
              color="grey lighten-2"
              text
              v-model="modelInput.image"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-row>
          <v-col class="d-flex justify-end">
            <v-btn class="mr-1" color="error" @click="goBack">
              Dismiss
            </v-btn>
            <v-btn color="success darken" @click="save">
              Save
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      modelInput: {},
      title: "",
    };
  },

  created() {
    if (this.$route.params) {
      this.modelInput = this.$route.params.category;
      this.save = false;
    } else {
      this.save = true;
    }
  },
  methods: {
    goBack() {
      // reset v-model values
      this.inputObject = [];
      this.$router.go(-1);
    },
    async save() {
      if (save === false) {
        await this.$store.dispatch("categories/update", modelInput);
        this.$router.go(-1);
      } else {
        await this.$store.dispatch("categories/create", modelInput);
      }
    },
  },
};
</script>

<style></style>
