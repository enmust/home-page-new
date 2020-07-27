import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css/animate.min.css";
import "./assets/css/styles.css";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
