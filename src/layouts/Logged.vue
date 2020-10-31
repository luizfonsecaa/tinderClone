<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
		<q-toolbar class="text-black bg-white">
			<div class="flex justify-between full-width items-center">
				<q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />
				<p class="q-ma-none"> {{ username }} </p>
				<q-btn flat round dense icon="fas fa-comment">
					<q-badge floating color="red">2</q-badge>
				</q-btn>
			</div>
		</q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1" >
		<div class="column justify-center items-center q-mt-lg">
			<q-avatar  color="light-blue-2" text-color="light-blue-9" icon="fas fa-camera" @click="getPhoto()" v-if="!photo_user"/>
            <q-avatar size="100px" @click="getPhoto()" v-else>
                <img :src="photo_user">
            </q-avatar>
			<h4 class="q-ma-none text-weight-thin">{{ username }}</h4>
			<p class="text-uppercase text-primary">Edit Profile</p>
		</div>
		<hr>
		<q-list class="q-pl-md q-mt-lg">
			<q-item clickable v-ripple v-for="(content, index) in essentialLinks" :key="index" :to="{ name: content.to }">
				<q-item-section avatar>
					<q-icon color="grey-6" style="font-size: 18px;" :name="content.icon" />
				</q-item-section>
				<q-item-section style="font-size: 20px">
					<p class="q-ma-none  text-weight-thin">{{ content.title }}</p>
				</q-item-section>
			</q-item>
            <q-item clickable v-ripple @click="logout()">
				<q-item-section avatar>
					<q-icon color="grey-6" style="font-size: 18px;" name="fas fa-sign-out-alt" />
				</q-item-section>
				<q-item-section style="font-size: 20px">
					<p class="q-ma-none  text-weight-thin">Sair</p>
				</q-item-section>
			</q-item>
		</q-list>

		<div class="fixed-bottom bg-primary">
			<h5 class="text-center q-my-lg text-white text-weight-thin">Hooked</h5>
		</div>
    </q-drawer>

    <q-page-container>
      <router-view  class=""/>
    </q-page-container>

  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'
	export default {
    name: 'Logged',

	data () {
		return {
			leftDrawerOpen: false,
			essentialLinks: [
				{
					title: 'Browse',
					icon: 'fas fa-users',
					to: 'home'
				},
				{
					title: 'Message',
					icon: 'fas fa-comment',
					to: 'messages'
				},
				{
					title: 'My matches',
					icon: 'fas fa-heart',
					to: ''
				},
				{
					title: 'Favorites',
					icon: 'fas fa-star',
					to: ''
				},
				{
					title: 'Settings',
					icon: 'fas fa-cog',
					to: ''
				},
			]
		}
    },

    computed: {
        ...mapGetters({
            username: 'user/username',
            photo_user: 'user/photo_user',
        }),
    },

    methods: {
        getPhoto() {
            this.$router.push({ name: 'get_photo'})
        },

        logout() {
            this.$firebase.auth().signOut()
            .then(response => {
                this.$router.push({ name: 'index'})
            })
            .catch(erro => {
                console.log(erro)
            })
        },
    },
}
</script>

<style lang="stylus" scoped>
	hr{
		width 90%
		border: 0;
    	height: 1px;
    	background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0));
	}


</style>
