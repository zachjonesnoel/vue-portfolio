<template>
  <div class="home">
    <img alt="Me" src="../assets/me.png" />
    <Intro />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";

export default {
  name: "Home",
  components: {
    Intro,
  },
};
</script>
