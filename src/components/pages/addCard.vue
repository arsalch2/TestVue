<template>
  <div>
    <app-bar />
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <div class="centered-container">
        <md-content class="md-elevation-3">
          <div class="title">
            <div class="md-title">Add Card</div>
          </div>

          <div class="form">
            <md-field>
              <label>First Name</label>
              <md-input v-model="cardData.firstName" autofocus></md-input>
            </md-field>

            <md-field>
              <label>Last Name</label>
              <md-input v-model="cardData.lastName"></md-input>
            </md-field>
            <md-field>
              <label for="membership">Membership</label>
              <md-select
                name="membership"
                id="membership"
                v-model="cardData.memberShip"
                md-dense
              >
                <md-option></md-option>
                <md-option value="Gold">Gold</md-option>
                <md-option value="Silver">Silver</md-option>
                <md-option value="Platinum">Platinum</md-option>
              </md-select>
              <span class="md-error">Membership Tier is required</span>
            </md-field>
            <md-field>
              <label>Textarea</label>
              <md-textarea v-model="cardData.description"></md-textarea>
            </md-field>
          </div>

          <div class="actions md-layout md-alignment-center-space-between">
            <md-button class="md-raised md-primary" @click="addToCards"
              >Add Card</md-button
            >
          </div>

          <div class="loading-overlay" v-if="loading">
            <md-progress-spinner
              md-mode="indeterminate"
              :md-stroke="2"
            ></md-progress-spinner>
          </div>
        </md-content>
        <div class="background" />
      </div>
    </form>
  </div>
</template>

<script>
import appBar from "../atoms/appBar.vue";

export default {
  components: { appBar },
  name: "App",
  data() {
    return {
      loading: false,
      cardData: {
        firstName: "",
        lastName: "",
        memberShip: "",
        description: ""
      }
    };
  },
  methods: {
    addToCards() {
      let data = this.cardData;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      this.$router.push("/cards");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tbody .md-table-row td {
  text-align: left !important;
}
.md-layout {
  justify-content: center;
}
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 85vh;
}
.centered-container .title {
  text-align: center;
  margin-bottom: 30px;
}
.centered-container img {
  margin-bottom: 16px;
  max-width: 80px;
}
.actions .md-button {
  margin: 0;
}
.form {
  margin-bottom: 60px;
}
.background {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
}
.md-content {
  z-index: 1;
  padding: 40px;
  width: 100%;
  min-width: 500px;
  position: relative;
}
.loading-overlay {
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
