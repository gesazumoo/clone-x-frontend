<template>
    <div>
      <p>상품 가격: {{ price }}</p>
      <p>할인율: {{ discountRate }}</p>
      <p>최종 가격: {{ finalPrice() }}</p>
      <p>테스트 값: {{ testValue }}</p>
      <div>
          <button @click="testValue++">testValue++</button>
      </div>
      
      <button @click="price++">price++</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        testValue: 1,
        price: 10000,
        discountRate: 0.1
      }
    },
    methods: {
      finalPrice() {
        console.log('finalPrice 계산')
        return this.price * (1 - this.discountRate)
      }
    }
  }
  </script>