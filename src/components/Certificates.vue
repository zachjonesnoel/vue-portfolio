<template>
  <v-row>
    <v-col
      v-for="(item, i) in items"
      :key="i"
      class="d-flex child-flex"
      cols="md-3"
    >
      <v-card flat class="mx-auto" max-width="200" @click="openLink(item.url)">
        <!-- <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on">{{ item.name }}</span>
          </template>
          <span class="d-inline-block text-truncate" style="max-width: 150px">{{
            item.name
          }}</span>
        </v-tooltip> -->
        <v-card-text>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-img
                class="my-3"
                contain
                height="75"
                v-bind="attrs"
                v-on="on"
                :src="getImageURL(item.image)"
              />
            </template>
            <span>{{ item.name }}</span>
          </v-tooltip>
        </v-card-text>
        <!-- <v-card-actions>
          <v-btn :href="item.url" target="_blank" text v-if="item.url" x-small>
            <v-icon color="primary" dark v-bind="attrs">
              mdi-link-variant
            </v-icon>
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "Certificates",
  data: () => ({
    items: [
      {
        name: "AWS Certified Cloud Practitioner",
        image: "AWS-CloudPractitioner-2020.png",
        url:
          "https://www.youracclaim.com/badges/6b69a84b-ef6b-4856-8b14-0dca6a72704e",
      },
    ],
  }),
  methods: {
    getImageURL(imagename) {
      return require("@/assets/" + imagename);
    },
    openLink(link){
      if(link)
        window.open(link, '_blank').focus();
    }
  },
};
</script>
