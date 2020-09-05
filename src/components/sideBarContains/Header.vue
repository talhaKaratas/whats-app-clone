<template>
  <div class="header">
    <div class="avatar">
      <i class="far fa-user-circle"></i>
    </div>
    <div class="options">
      <i class="fas fa-circle-notch"></i>
      <i class="far fa-comment-alt"></i>
      <i class="fas fa-ellipsis-v"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7.5vh;
  width: 100%;
  border-right: 1px solid gray;
  opacity: 0.5;
}
.avatar {
  margin-left: 2vh;
  font-size: 37px;
}
.options {
  margin-right: 2vw;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  width: 11vw;
}
.fas, .far {
  cursor: pointer;
}
</style>