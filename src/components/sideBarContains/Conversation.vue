<template>
  <div class="conversation">
      <!-- <h1>chat</h1> -->
      <app-chat v-for="(chat,index) in getChatInfoSt" :key="index" :chatInfo="chat"></app-chat>
  </div>
</template>

<script>
import Chat from './Chat'
import { mapGetters } from 'vuex'
export default {
    components: {
        appChat: Chat
    },
    computed: {
        ...mapGetters(['getChatInfoSt'])
    }
}
</script>

<style>
.conversation {
    width: 100%;
    height: 76.5vh;
    overflow: scroll;
    overflow-x: hidden;
    background-color: #ffffff;
}
</style>