<template>
  <div class="search_bar">
    <div class="input_contain">
      <div class="search_button">
        <i class="fas fa-search"></i>
      </div>
      <input class="input_new_communicate" placeholder="Ara veya yeni sohbet başlat" type="text" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.search_bar {
  display: grid;
  place-items: center;
  width: 100%;
  height: 6vh;
  background-color: #f6f6f6;
}
.search_bar div.input_contain {
  display: flex;
  align-items: center;
  width: 95%;
  height: 75%;
  background-color: #ffffff;
  /* border: 1px solid gray; */
  border-radius: 20px;
}
.search_bar input.input_new_communicate {
  margin-left: auto;
  width: 80%;
  height: 100%;
  font-size: 17px;
  padding-left: 2vh;
  border-radius: 20px;
  border: none;
}
.search_bar input.input_new_communicate:focus {
  outline: none;
}
.search_button {
    margin-left: 2vw;
    opacity: 0.5;
}
</style>