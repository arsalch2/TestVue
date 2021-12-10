<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title">Cards Board</span>
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-primary">
            <md-tab
              @click="RedirectToAll()"
              id="tab-home"
              md-label="All Cards"
            ></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-content>
        <div class="children">
          {{ children }}
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<style>
.md-app {
  max-height: 100%;
  border: 1px solid rgba(#000, 0.12);
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.md-drawer.md-temporary.md-left + .md-app-container .md-content {
  height: 100vh !important;
}
a {
  color: #42b983;
}
.md-list-item-content {
  justify-content: flex-start !important;
}
.md-app-scroller {
  margin-top: 80px !important;
}
</style>

<script>
export default {
  name: "appBar",
  props: ["children"],
  data: () => ({
    menuVisible: false
  }),
  methods: {
    RedirectToAll: function() {
      this.$router.push("/cards");
    }
  }
};
</script>
