<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.app {
  display: grid;
  place-items: center;
  background-color: #dadbd3;
  height: 100vh;
}

.app_body {
  display: flex;
  background-color: #ededed;
  height: 90vh;
  width: 90vw;
}
.side_bar {
  width: 30%;
}
.right_side {
  width: 70%;
}
.message_hour {
  font-size: 10px;
  position: absolute;
  bottom: 5px;
  right: 2px;
}

/****clear float */
.clear::after {
  content: "";
  clear: both;
  display: table;
}
/***** */

/***Custom Scroll */
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #ccc;
}
/******** */
</style>