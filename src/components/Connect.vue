<template>
  <div class="d-flex">
    <v-btn
      v-for="(connect, i) in connections"
      :key="i"
      :href="connect.href"
      target="_blank"
      text
      x-small
    >
      <v-icon :color="$vuetify.theme.dark?'white':connect.iconColor" v-bind="attrs">{{
        connect.icon
      }}</v-icon>
     <span v-if="showText">{{ connect.text }}</span>
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "Connect",
  props:{
    showText:Boolean
  },
  data: () => ({
    connections: [
      {
        text: "Twitter",
        href: "https://twitter.com/ZachjNOEL",
        icon: "mdi-twitter",
        iconColor: "blue",
      },
      {
        text: "LinkedIn",
        href: "http://www.linkedin.com/in/jones-zachariah-noel-n",
        icon: "mdi-linkedin",
        iconColor: "blue",
      },
      {
        text: "Github",
        href: "https://github.com/zachjonesnoel",
        icon: "mdi-github",
        iconColor: "black",
      },
      {
        text: "DEV Community",
        href: "https://dev.to/zachjonesnoel",
        icon: "mdi-dev-to",
        iconColor: "black",
      },
    ],
  }),
};

</script>
