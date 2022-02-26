<template>
	<view>
		<text>{{count}}</text>
		<div @click="add" >add</div>
	</view>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
const count: Ref<number> = ref<number>(1);

const add = () => {
	count.value++;
}
</script>

<style>

</style>
