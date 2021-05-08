<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/me.png')"
          transition="scale-transition"
          width="40"
        />

        <h3>zachjonesnoel</h3>
      </div>

      <v-spacer></v-spacer>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">About</span>
      <v-icon>mdi-open-in-new</v-icon> -->
      <!-- </v-btn> -->
      <Connect />
      <!-- <v-switch
        prepend-icon="mdi-brightness-6"
        @click:append="toggleDarkTheme()"
        @change="toggleDarkTheme()"
      ></v-switch> -->
      <v-icon @click="toggleDarkTheme()">
        {{this.$vuetify.theme.dark?"mdi-brightness-6":"mdi-weather-night"}}
      </v-icon>
      
    </v-app-bar>

    <v-main>
      <Intro />
    </v-main>
    <v-footer dark >
      <v-card-text class="py-2 white--text text-center">
        <br />
        <p class="font-italic">
          Built with love on Vue, Vuetify, Amplify and AWS Serverless!! 🤩😍
        </p>
        <br />
        ©️ {{ new Date().getFullYear() }} — <strong>zachjonesnoel</strong>
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script>
import Intro from "./components/Intro";
import Connect from "@/components/Connect.vue";
document.title="Jones Zachariah Noel N"
export default {
  name: "App",
  title: 'Jones Zachariah Noel N',
  components: {
    Intro,
    Connect
  },
  created(){
    this.$vuetify.theme.dark = this.$store.getters.getTheme;
  },
  data: () => ({
    //
  }),
  methods: {
    toggleDarkTheme() {
      this.$store.commit("SET_THEME",!this.$vuetify.theme.dark)
      this.$vuetify.theme.dark = this.$store.getters.getTheme;
    },
  },
};
</script>
