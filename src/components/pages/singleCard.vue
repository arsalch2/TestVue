<template>
  <div>
    <app-bar />
    <md-table>
      <md-table-row>
        <md-table-head>Card Number</md-table-head>
        <md-table-head>{{ this.$route.params.card_number }}</md-table-head>
        <md-table-head>First Name</md-table-head>
        <md-table-head>{{ this.$route.params.first_name }}</md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-head>Last Name</md-table-head>
        <md-table-head>{{ this.$route.params.last_name }}</md-table-head>
        <md-table-head>Membership Tier</md-table-head>
        <md-table-head>{{ this.$route.params.membership_tier }}</md-table-head>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import appBar from "../atoms/appBar.vue";
export default {
  components: { appBar },
  props: ["singleData"],
  name: "singlecards",
  data() {
    let abc = this.singleData;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tbody .md-table-row td {
  text-align: left !important;
}
</style>
