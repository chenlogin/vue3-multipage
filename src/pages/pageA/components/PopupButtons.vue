<script lang="ts" setup>
import { ref } from 'vue'
import { Button, Popup } from 'vant'
const show = ref(false);
const showPopup = () => {
  show.value = true;
}
</script>

<template>
  <div class="popup-buttons">
    <img src="../assets/empty.png" />
    <div class="bg"></div>
    <Button type="primary" class="btn" @click="showPopup">确定</Button>
    <van-popup v-model:show="show" position="top" :style="{ height: '30%' }" />
  </div>
</template>

<style lang="scss" scoped>
.popup-buttons {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  img {
    width: pxToRem(200);
  }

  .btn {
    display: block;
  }

  .bg {
    background: url('../assets/empty.png') 100% 100% no-repeat;
    width: 200px;
    height: 200px;
  }
}
</style>
