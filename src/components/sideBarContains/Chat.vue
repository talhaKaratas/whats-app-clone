<template>
  <div class="chat" @click="startConver">
    <div class="avatar_chat">
      <i class="far fa-user-circle"></i>
    </div>
    <div class="text">
      <h2>{{chatInfo.name}}</h2>
      <h4 class="last_message">{{chatInfo.lastmessage}}</h4>
    </div>
    <div class="date_chat">
      <span>16:30</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['chatInfo'],
  methods: {
    startConver() {
      this.$store.commit('setShowPanel');
      this.chatInfo.icon = 'far fa-user-circle'
      this.$store.commit('setActiveChat', this.chatInfo);

    }
  }
};
</script>

<style>
.chat {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #fff;
  border-bottom: 1px solid thistle;
}
.avatar_chat {
  margin-left: 2vh;
  font-size: 40px;
  opacity: 0.5;
}
.text {
  margin-left: 2vw;
}
.date_chat {
  position: absolute;
  font-size: 14px;
  top: 15px;
  right: 20px;
}
.chat:hover {
  cursor: pointer;
  background-color: #ededed;
}
</style>