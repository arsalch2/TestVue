import Vue from "vue";
import Router from "vue-router";
import appBar from "../components/atoms/appBar.vue";
import cards from "../components/pages/cards.vue";
import addCard from "../components/pages/addCard.vue";
import singleCard from "../components/pages/singleCard.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: appBar
    },
    {
      path: "/cards",
      component: cards
    },
    {
      path: "/addCard",
      component: addCard
    },
    {
      path: "/singleCard",
      component: singleCard,
      props: true
    }
  ]
});
