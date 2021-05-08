<template>
  <v-row>
    <v-col
      v-for="(item, i) in items"
      :key="i"
      :cols="$vuetify.breakpoint.mobile?'xs-6':'sm-3'"
    >
      <v-card flat :class="$vuetify.breakpoint.mobile?' mx-auto  xs-6':' mx-auto sm-3'" :max-width="$vuetify.breakpoint.mobile?'100':'200'" >
        <!-- <v-tooltip bottom>@click="openLink(item.linkedin)"
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
                contain
                height="50"
                v-bind="attrs"
                v-on="on"
                :src="getImageURL(item.image)"
              />
            </template>
            <span>{{ item.name }}</span>
          </v-tooltip>
        </v-card-text>
        <!-- <v-card-actions>
          <v-btn
            :href="item.linkedin"
            target="_blank"
            text
            v-if="item.linkedin"
            x-small
          >
            <v-icon color="primary" dark v-bind="attrs"> mdi-linkedin </v-icon>
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
/* eslint-disable */
export default {
  name: "TechStack",
  data: () => ({
    items: [
      {
        name: "Amazon Web Services",
        image: "aws.png",
        linkedin:
          "https://www.linkedin.com/in/jones-zachariah-noel-n/detail/assessments/Amazon%20Web%20Services%20(AWS)/report",
      },
      {
        name: "VueJS",
        image: "vue.png",
      },
      {
        name: "NodeJS",
        image: "nodejs.png",
        linkedin:
          "https://www.linkedin.com/in/jones-zachariah-noel-n/detail/assessments/Node.js/report",
      },
      {
        name: "JavaScript",
        image: "js.png",
        linkedin:
          "https://www.linkedin.com/in/jones-zachariah-noel-n/detail/assessments/JavaScript/report",
      },
      {
        name: "AWS Lambda",
        image: "lambdafn.png",
      },
      {
        name: "AWS DynamoDB",
        image: "dynamodb.png",
      },
      {
        name: "PHP",
        image: "php.png",
        linkedin:
          "https://www.linkedin.com/in/jones-zachariah-noel-n/detail/assessments/PHP/report",
      },
      {
        name: "PostgresSQL",
        image: "postgres.png",
      },
      {
        name: "MongoDB",
        image: "mongodb.png",
        linkedin:
          "https://www.linkedin.com/in/jones-zachariah-noel-n/detail/assessments/MongoDB/report",
      },
      {
        name: "Firebase",
        image: "firebase.png",
      },
      {
        name: "AWS SAM CLI",
        image: "samcli.png",
      },
      {
        name: "AWS SES",
        image: "ses.png",
      },
      {
        name: "AWS API Gateway",
        image: "api-gateway.png",
      },
      {
        name: "AWS AppSync",
        image: "appsync.png",
      },
      {
        name: "GraphQL",
        image: "graphql.png",
      },
      {
        name: "AWS Cognito",
        image: "cognito.png",
      },
      {
        name: "AWS CloudFormation",
        image: "cloudformation.png",
      },
      {
        name: "AWS CloudWatch",
        image: "aws-cloudwatch-logo-vector.svg",
      },
      {
        name: "AWS S3",
        image: "aws-s3-logo-vector.svg",
      },
      {
        name: "AWS Amplify",
        image: "amplify.png",
      },
      {
        name: "AWS SQS",
        image: "sqs.png",
      },
      
      {
        name: "Ejabberd",
        image: "Ejabberd.png",
      },
      {
        name: "XMPP",
        image: "xmpp.png",
      },
    ],
  }),
  methods: {
    getImageURL(imagename) {
      return require("@/assets/" + imagename);
    },
    openLink(link){
      window.open(link, '_blank').focus();
    }
  },
};
</script>
