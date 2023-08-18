import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state(){
    return {
      name: '朱黎阳',
      age: 25
    }
  }
})