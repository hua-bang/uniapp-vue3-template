<template>
  <div>
    <view class="content">
      <image 
        class="logo" 
        src="/static/logo.png" 
      />
      <view>
        {{ msg }}
      </view>
      <!-- <Count /> -->
    </view>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { homeApiDemo } from '../../api/home';

onMounted(() => {
	homeApiDemo();
});

const msg: string = '东莞理工学院2022年校庆';
const num = 123;
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
