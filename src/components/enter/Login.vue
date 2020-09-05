<template>
  <div class="login">
    <h3>LogIn</h3>
    <br />
    <br />
    <p>Email :</p>
    <input type="email" v-model="user.email" />
    <p>Password :</p>
    <input type="password" v-model="user.password" />
    <button class="btn_login" @click="LogInAccount">LogIn</button>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    LogInAccount() {
      if (this.user.email !== "" && this.user.password !== "") {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.user.email, this.user.password)
          .then(() => {
            this.$router.push({ path: "/app" });
          })
          .catch((err) => {
            alert(err.message);
          });
      }
      else {
        alert('Doldurulmamış alanlar var')
      }
    },
  },
};
</script>

<style>
</style>