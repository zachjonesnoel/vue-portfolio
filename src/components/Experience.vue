<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <!-- <v-slide-x-reverse-transition
          group
          hide-on-leave
        > -->
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
      small
    >
      <!-- <span slot="opposite">{{ item.timePeriod }}</span>
      <v-card :color="item.color" small dark>
        <v-card-title class="title">
          {{ item.title }}
        </v-card-title>
        <v-card-text class="white text--primary">
          <p>{{ item.description }}</p>
        </v-card-text>
      </v-card> -->
      <template v-slot:opposite>
        <span
          :class="`subheadline font-weight-bold ${item.timePeriod}--text`"
          v-text="item.timePeriod"
        ></span>
      </template>
      <div class="py-4" dense>
        <h3
          :class="`subheadline font-weight-bold mb-4 ${item.timePeriod}--text`"
        >
          {{ item.title }}
        </h3>
        
        <div>
          <p class="caption font-weight-light text-left">
            {{ item.description }}
          </p>
        </div>
      </div>
    </v-timeline-item>
    <!-- </v-slide-x-reverse-transition> -->
  </v-timeline>
</template>
<script>
const COLORS = ["info", "warning", "error", "success"];
const ICONS = {
  info: "mdi-information",
  warning: "mdi-alert",
  error: "mdi-alert-circle",
  success: "mdi-check-circle",
};

export default {
  name: "Experience",
  data: () => ({
    interval: null,
    items: [
      {
        color: "red lighten-2",
        icon: "mdi-briefcase",
        description:
          "Leading a team working on AWS Serverless architecture and web portal team working on VueJS on multiple projects & products.",
        title: "Software Engineer @ Mobil80 Solutions and Services Pvt Ltd",
        timePeriod: "July 2019 - present",
      },
      {
        color: "purple darken-1",
        icon: "mdi-briefcase",
        description:
          "Handled multiple projects & products working the complete lifecycle of the product on web portal and backend. Scaling up technically to lead “LimeKast” product development team.",
        title: "Software Engineer @ dWise Solutions and Services Pvt Ltd",
        timePeriod: "July 2018 - June 2019",
      },
      {
        color: "green lighten-1",
        icon: "mdi-briefcase",
        description:
          "Software development as a full stack developer working on web portal (JS ES6) and backend (PHP, PostgresSQL, Web server) creating REST APIs for a product “LimeKast”.",
        title:
          "Software Development Intern @ dWise Solutions and Services Pvt Ltd",
        timePeriod: "Jan 2018 - June 2018",
      },
    ],
    nonce: 2,
  }),

  beforeDestroy() {
    this.stop();
  },

  methods: {
    addEvent() {
      let { color, icon } = this.genAlert();

      const previousColor = this.items[0].color;

      while (previousColor === color) {
        color = this.genColor();
      }

      this.items.unshift({
        id: this.nonce++,
        color,
        icon,
      });

      if (this.nonce > 6) {
        this.items.pop();
      }
    },
    genAlert() {
      const color = this.genColor();

      return {
        color,
        icon: this.genIcon(color),
      };
    },
    genColor() {
      return COLORS[Math.floor(Math.random() * 3)];
    },
    genIcon(color) {
      return ICONS[color];
    },
    start() {
      this.interval = setInterval(this.addEvent, 3000);
    },
    stop() {
      clearInterval(this.interval);
      this.interval = null;
    },
  },
};
</script>
