<template>
  <div class="container">
    <input class="input-form" type="text" :placeholder="userStore.placeholder" v-model="tweetContent"/>
    <img class="search-icon" src="@/assets/search.png" alt="Search" @click="tweet"/>
  </div>
</template>

<script>
import { useUserStore } from '@/store/user'
import { useFeedStore } from "@/store/feed"
export default {
    name: "TweetBar",
    data() {
      return {
        tweetContent: "",
        feedStore: useFeedStore(),
        userStore: useUserStore()
      }
    },
    methods: {
      async tweet() {
        await this.feedStore.addFeed(this.tweetContent)
        this.tweetContent = ""
      },
    },
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 300px;
    height: auto;
    position: relative;
}

.input-form {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 1px solid white;
  border-radius: 20px;
  padding: 10px;
  /* 
   */

   z-index: 0;
}

.search-icon {
  box-sizing: border-box;
  width: 40px;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  
  /*  */
  position: absolute;
  right: 0px;
  z-index: 1;
  border: 1px solid #1D9BF0;
  cursor: pointer;
}

</style>