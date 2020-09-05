<template>
  <div class="conver_chat">
    <app-came-message class="chat_message"></app-came-message>
    <app-sended-message class="chat_message" v-for="(message, key) in getMessages" :key="key" :message="message"></app-sended-message>
  </div>
</template>

<script>
import CameMessage from "./CameMessage";
import SendedMessage from "./SendedMessage";
import { mapGetters } from "vuex";
export default {
  components: {
    appCameMessage: CameMessage,
    appSendedMessage: SendedMessage,
  },
  computed: {
    ...mapGetters(["getMessages"]),
  },
};
</script>

<style>
.conver_chat {
  background-image: url("../../assets/wp-background.png");
  position: relative;
  width: 100%;
  height: 74.5vh;
  overflow: scroll;
  overflow-x: hidden;
}
.chat_message {
  margin-top: 5px;
  display: block;
}
</style>