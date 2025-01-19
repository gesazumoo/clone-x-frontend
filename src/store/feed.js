import { defineStore } from 'pinia'
import { authApi } from '../api/index'

export const useFeedStore = defineStore('feed', {
  state: () => ({
    feedData: []
  }),
  getters: {},
  actions: {
    async getFeedData() {
        try {
            const response = await authApi.get('feeds/')
            this.feedData = response.data
        } catch (error) {
            console.error('Error fetching feed data:', error)
        }
    },
    async addFeed(content) {
        try {
            const response = await authApi.post('feeds/', { content })
            this.feedData.unshift(response.data)
            this.getFeedData()
        } catch (error) {
            console.error('Error adding feed:', error)
        }
    },
    async removeFeed(id) {
        try{
            await authApi.delete(`feeds/${id}`)
            this.getFeedData()
        } catch (error) {
            console.error('Error removing feed:', error)
        }
    }
  }
})