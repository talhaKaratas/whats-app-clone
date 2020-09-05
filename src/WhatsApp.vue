<template>
  <div class="app">
    <div class="app_body">
      <app-side-bar></app-side-bar>
      <app-right-side v-if="showRightSide"></app-right-side>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import SideBar from "./components/SideBar";
import RightSide from "./components/RightSide";
import { mapGetters } from "vuex";
export default {
  components: {
    appSideBar: SideBar,
    appRightSide: RightSide,
  },
  computed: {
    ...mapGetters(["getShowPanel"]),
    showRightSide() {
      if (this.getShowPanel === 1) {
        return true;
      } else {
        return false;
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("emptyChat");
    this.$store.commit("disShowPanel");
      firebase
        .auth()
        .signOut()
        .then(function () {
          alert("signOut");
          next();
        })
        .catch(function (error) {
          alert(error.message);
          next(false);
        });
  },
  beforeRouteEnter(to, from, next) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next();
      } else {
        next(false);
      }
    });
  },
};
</script>

<style>
</style>
