<template>
  <div class="container">
    <vue3-confirm-dialog></vue3-confirm-dialog>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
body {
  background:black;
  color: white;
}

.container {
  height: 100vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}

.logo {
  max-width: 60px;
  height: auto;
}


.logo-container {
  display: flex;
  /* 디폴트 디렉션은? row */
  justify-content: center;
  align-items: center;
}

.button {
  border-radius: 20px;
    border: 1px solid white;
    font-size: 15px;
    font-weight: bold;
    margin: 10px 0px;
    padding: 10px;
    width: 100%;
    cursor: pointer;
}

.error-message{
  color: red;
  font-size: small;
  width: 100%;
  margin-bottom: 5px;
}
</style>
