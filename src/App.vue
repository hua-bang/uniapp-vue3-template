<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
onLaunch(() => {
	console.log('App Launch');
});
onShow(() => {
	console.log('lint');
});
onHide(() => {
	console.log('App Hide！!!');
});
</script>
<style></style>
