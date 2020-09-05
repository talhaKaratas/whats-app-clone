<template>
  <div class="clear">
    <div class="sended_message">
      <p>{{ message.message }}</p>
      <span class="message_hour">{{ message.hour }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>

<style>
div.sended_message {
  position: relative;
  float: right;
  max-width: 370px;
  word-wrap: break-word;
  padding: 5px 60px 5px 5px;
  background-color: #dcf8c6;
  border-radius: 8px;
  width: fit-content;
  margin-right: 80px;
}

</style>