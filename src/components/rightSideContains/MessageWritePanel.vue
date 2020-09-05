<template>
  <div class="message_panel">
    <div class="smily">
      <i class="far fa-smile-beam"></i>
    </div>
    <input
      class="message"
      type="text"
      placeholder="Bir mesaj yazın"
      v-model="message"
      @keypress="sendMessageKeyUp"
    />
    <div class="mic" v-show="isEmptyInput">
      <i class="fas fa-microphone"></i>
    </div>
    <div class="arrow" v-show="!isEmptyInput" @click="sendMessage">
      <i class="fas fa-chevron-circle-right"></i>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database'
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendMessage() {
      let date = new Date();
      let hour =
        date.getHours().toString() + ":" + date.getMinutes().toString();
      let message = {
        message: this.message,
        hour: hour,
      };
      // this.$store.commit("setMessages", message);
      let userId = firebase.auth().currentUser.uid;
      firebase.database().ref(`users/${userId}/${this.getActiveChat.key}/send`).set(message)
      firebase.database().ref(`users/${this.getActiveChat.key}/${userId}/came`).set(message)
      this.message = "";
    },
    sendMessageKeyUp(event) {
      if (event.keyCode === 13) {
        let date = new Date();
        let hour =
          date.getHours().toString() + ":" + date.getMinutes().toString();
        let message = {
          message: this.message,
          hour: hour,
        };
        this.$store.commit("setMessages", message);
        this.message = "";
      }
    },
  },
  computed: {
    ...mapGetters(["getActiveChat"]),
    isEmptyInput() {
      if (this.message == "") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.message_panel {
  display: flex;
  align-items: center;
  width: 100%;
  height: 8vh;
  background-color: #ededed;
}
.message {
  margin-left: auto;
  margin-right: auto;
  width: 85%;
  height: 70%;
  border: none;
  border-radius: 20px;
  padding-left: 2vh;
  font-size: 16px;
}
input.message:focus {
  outline: none;
}
.smily {
  font-size: 24px;
  margin-left: 2.75%;
  opacity: 0.5;
}
.mic {
  font-size: 24px;
  margin-right: 2.75%;
  opacity: 0.5;
}
.arrow {
  width: 16.5px;
  font-size: 24px;
  margin-right: 2.75%;
  opacity: 0.5;
}
</style>