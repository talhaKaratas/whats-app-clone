<template>
  <div class="side_bar">
      <app-header></app-header>
      <app-search-bar></app-search-bar>
      <app-conversation></app-conversation>
  </div>
</template>

<script>
import Header from './sideBarContains/Header'
import SearchBar from './sideBarContains/SearchBar'
import Conversation from './sideBarContains/Conversation'
export default {
  components: {
    appHeader: Header,
    appSearchBar: SearchBar,
    appConversation: Conversation,
  }
}
</script>

<style>

</style>