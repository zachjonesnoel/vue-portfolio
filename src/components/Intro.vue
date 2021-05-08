<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/me.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4" cols="12">
        <h1 class="display-2 font-weight-bold mb-3">
          Hey, I'm Jones Zachariah Noel N
        </h1>
        <h5 class="font-weight-bold mb-3">
          > $me <br />
          Listing profile... <br />
          ./dev/zachjonesnoel
        </h5>
        <p class="subheading font-weight-regular">
          AWS Certified | Full-stack developer | AWS Serverless | VueJS | NodeJS
          | Team lead | Project Manager
        </p>
      </v-col>
    </v-row>
    <v-row class="text-center col-12">
      <v-col class="mb-5" :cols="this.$vuetify.breakpoint.mobile?'md-12':'md-6'">
        <h2 class="headline font-weight-bold mb-3">Experience</h2>
        <Experience />
      </v-col>
     
      <v-col class="mb-5" :cols="this.$vuetify.breakpoint.mobile?'md-12':'md-6'">
        <h2 class="headline font-weight-bold mb-3">Certificates</h2>
        <Certificates />
        <h2 class="headline font-weight-bold mb-3">My Tech Stack</h2>
        <TechStack />
      </v-col>
    </v-row>
    <!-- {{this.$vuetify.breakpoint.mobile?"sm-12":"md-6"}} -->
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Projects</h2>
        <Projects />
      </v-col>
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Connect with me</h2>
        <v-row justify="center">
          <Connect showText="true" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Experience from "@/components/Experience.vue";
import TechStack from "@/components/TechStack.vue";
import Projects from "@/components/Projects.vue";
import Connect from "@/components/Connect.vue";
import Certificates from "@/components/Certificates.vue";

export default {
  
  name: "Intro",
  components: {
    Experience,
    TechStack,
    Connect,
    Projects,
    Certificates,
  },
  data: () => ({}),
};
</script>
