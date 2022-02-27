<template>
  <view class="content">
    {{ count }}
    <view @click="addCount">
      add
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const count = ref(0);

const addCount = () => {
  count.value++;
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
