<template>
  <div>
    <app-bar />
    <md-button @click="goToAdd()" class="md-raised md-primary"
      >Add Card</md-button
    >
    <md-table>
      <md-table-row>
        <md-table-head>Card Number</md-table-head>
        <md-table-head>First Name</md-table-head>
        <md-table-head>Last Name</md-table-head>
        <md-table-head>Membership Tier</md-table-head>
      </md-table-row>

      <md-table-row
        v-for="(info, i) in allcard"
        :key="i"
        @click="seeCardInfo(info)"
      >
        <md-table-cell>{{ info.card_number }}</md-table-cell>
        <md-table-cell>{{ info.first_name }}</md-table-cell>
        <md-table-cell>{{ info.last_name }}</md-table-cell>
        <md-table-cell>{{ info.membership_tier }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import appBar from "../atoms/appBar.vue";
import { getAllCards } from "../../services/cards.js";
export default {
  components: { appBar },
  name: "cards",
  data() {
    return {
      allcard: []
    };
  },
  methods: {
    goToAdd: function() {
      this.$router.push("/addCard");
    },
    callBack: function(data) {
      this.allcard = data;
    },
    seeCardInfo: function(singleCard) {
      this.$router.push({path: '/singleCard', params: {cardData: singleCard}});
    }
  },
  beforeMount() {
    getAllCards(this.callBack);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tbody .md-table-row td {
  text-align: left !important;
}
</style>
