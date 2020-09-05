<template>
  <div class="app">
    <div class="app_body_login">
      <div class="switch_button">
        <button class="btn_switch_login" @click="isComponents = 'app-login'">LogIn</button>
        <button class="btn_switch_create" @click="isComponents = 'app-create'">Create</button>
      </div>
      <component :is="isComponents" @creatDirect="isComponents = $event"></component>
    </div>
  </div>
</template>

<script>
import Create from "./Create";
import Login from "./Login";
export default {
  components: {
    appCreate: Create,
    appLogin: Login,
  },
  data() {
    return {
      isComponents: "app-login",
    };
  },
};
</script>

<style>
.switch_button {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 120px;
  right: 15vw;
  top: 30vh;
}
.btn_switch_login,
.btn_switch_create {
  width: 55px;
  height: 40px;
  border-radius: 12px;
  box-shadow: 1px 1px 5px black;
  cursor: pointer;
}
.btn_switch_login:focus,
.btn_switch_create:focus {
  outline: none;
}
.app_body_login {
  display: grid;
  place-items: center;
  height: 90vh;
  width: 90vw;
  background-color: #009688;
  color: white;
}
.login input {
  width: 100%;
  margin: 7px;
  height: 20px;
}
.btn_login {
  margin-top: 30px;
  width: 90px;
  height: 40px;
  background: none;
  border: 2px solid greenyellow;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.btn_login:hover {
  background: yellowgreen;
}
.login {
  display: grid;
  place-items: center;
  width: 30%;
}
</style>