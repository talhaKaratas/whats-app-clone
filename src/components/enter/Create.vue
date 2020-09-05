<template>
  <div class="login">
    <h3>Create Account</h3>
    <br />
    <br />
    <p>Name :</p>
    <input type="text" v-model="user.name" />
    <p>Email :</p>
    <input type="email" v-model="user.email" />
    <p>Password :</p>
    <input type="password" v-model="user.password" />
    <button class="btn_login" @click="createAccount">Create</button>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    createAccount() {
      if (
        this.user.email !== "" &&
        this.user.password !== "" &&
        this.user.name !== ""
      ) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then((_user) => {
            firebase
              .database()
              .ref("users/" + _user.user.uid)
              .set({ name: this.user.name });
            // this.$http.push(`https://whats-app-clone-77834.firebaseio.com/users/${_user.user.uid}/${{name: this.user.name}}.json`)
            firebase
              .auth()
              .signOut()
              .then(function () {
                // Sign-out successful.
              })
              .catch(function (error) {
                // An error happened.
                alert(error.message)
              });
              this.$store.commit('emptyChat')
            this.$emit("creatDirect", "appLogin");
            alert("Kayıt Başarılı");
          })
          .catch((err) => {
            alert(err.message);
          });
      } else {
        alert("Doldurulmamış alanlar var");
      }
    },
  },
};
</script>

<style>
</style>