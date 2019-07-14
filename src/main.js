import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/dateFilter";
import messagePlugin from "@/utils/message.plugin";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);

//импорт firebase и настройка его начало
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAPH1ecrsIW5vwTFwdvzk6vOwUMo1UjviQ",
  authDomain: "home-cmsdenis.firebaseapp.com",
  databaseURL: "https://home-cmsdenis.firebaseio.com",
  projectId: "home-cmsdenis",
  storageBucket: "",
  messagingSenderId: "245567749082",
  appId: "1:245567749082:web:255d59cf72513f13"
};
firebase.initializeApp(firebaseConfig);
let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
//импорт firebase и настройка его конец
