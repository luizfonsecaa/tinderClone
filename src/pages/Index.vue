<template>
	<q-page>
		<div class="row img">
			<div class="col-12">
				<h2 class="text-white text-center q-mb-md">Hooked</h2>
				<p class="text-white text-center">Flirt, chat and meet people around you</p>
			</div>

			<div class="col-12 column q-px-lg">
				<q-btn color="primary"   size="1.3em" label="sing up now" class="q-mb-md" @click="$router.push({ name: 'sing_up'})" />
				<q-btn color="secondary"   size="1.3em" label="login"  @click="$router.push({ name: 'login'})" />
			</div>
		</div>
	</q-page>
</template>



<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="stylus" scoped>
.img 
  background: url("~assets/background_index.png") fixed no-repeat
  background-size: cover
  height: 100vh
  background-position-x: center
</style>
