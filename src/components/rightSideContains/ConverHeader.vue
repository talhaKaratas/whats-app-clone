<template>
  <div class="conver_header">
    <div class="icon_and_name">
      <div class="avatar">
        <i :class="getActiveChat.icon"></i>
      </div>
      <div class="name">
          <h3>{{getActiveChat.name}}</h3>
      </div>
    </div>
    <div class="conver_options">
        <i class="fas fa-search"></i>
        <i class="fas fa-paperclip"></i>
        <i class="fas fa-ellipsis-v"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getActiveChat"]),
  },
};
</script>

<style>
.conver_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7.5vh;
  width: 100%;
}
.icon_and_name {
  width: 22vw;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.avatar {
  float: left;
}
.name {
  float: left;
  margin-top: 10px;
  margin-left: 15px;
}
.conver_options {
    display: flex;
    width: 10vw;
    justify-content: space-between;
    margin-right: 4vw;
    font-size: 20px;
    opacity: 0.5;
}
</style>