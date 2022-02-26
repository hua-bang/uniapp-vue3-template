<template>
  <view>
    <text>{{ count }}</text>
    <div @click="addCount">
      add
    </div>
    <div @click="addItems">
      addItems
    </div>
    <div>
      <text 
        v-for="item in list" 
        :key="item"
      >
        {{ item }}
      </text>
    </div>
  </view>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
const count: Ref<number> = ref<number>(1);

const addCount = () => {
	count.value++;
};

const list: Ref<Array<number>> = ref([]);

const addItems = () => {
	list.value.push(list.value.length + 1);
};
</script>

<style>

</style>
