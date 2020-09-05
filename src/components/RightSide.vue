<template>
  <div class="right_side">
      <app-conver-header></app-conver-header>
      <app-conver-chat></app-conver-chat>
      <app-message-write-panel></app-message-write-panel>
  </div>
</template>

<script>
import ConverHeader from './rightSideContains/ConverHeader'
import ConverChat from './rightSideContains/ConverChat'
import MessageWritePanel from './rightSideContains/MessageWritePanel'
export default {
  components: {
    appConverHeader: ConverHeader,
    appConverChat: ConverChat,
    appMessageWritePanel: MessageWritePanel,
  }
}
</script>

<style>

</style>