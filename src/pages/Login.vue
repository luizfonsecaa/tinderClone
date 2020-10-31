<template>
    <q-page>
        <div class="background-image"></div>
        <div class="conteudo">
            <div class="q-my-lg">
                <q-btn flat  v-go-back=" '/' " color="white" icon="fas fa-arrow-left" />
            </div>

            <div class="row q-mx-lg q-mt-lg">
                <div class="col-12">
                    <h1 class="text-white text-weight-thin text-h3">Login</h1>
                </div>
                <div class="col-12 q-mb-md">
                    <q-input v-model="email" label="Email Address" dark />
                </div>
                <div class="col-12 q-mb-md">
                    <q-input type="password" v-model="password" label="Password" dark />
                </div>
                <div class="col-12 q-mb-md flex justify-between items-center">
                    <q-btn color="primary"  size="1.2em" @click="login()" label="login" class="q-mb-md" />
                    <p class="text-white text-weight-thin cursor-pointer"  @click="$router.push({ name: 'forgot_password'})">Forgot password?</p>
                </div>
            </div>

            <div class="fixed-bottom  box-not-account">
                <p class="text-center text-white q-my-sm"  @click="$router.push({ name: 'sing_up'})">
                    Don’t have an account? <span class="text-bold">Sign up</span>
                </p>
            </div>
        </div>
    </q-page>
</template>



<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageIndex',
    data() {
        return {
            email: 'luiz.otavio@take5.com.br',
            password: '02223001',
        }
    },
    computed: {
        ...mapGetters({
            id: 'user/id',
            admin: 'user/admin',
            age: 'user/age',
            username: 'user/username',
        }),
    },

    methods:{
        async login() {
            try {
                this.$q.loading.show()
                let response = await this.$firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                let user = await this.$firebase.firestore().collection(`users`).doc(response.user.uid).get()
                let photo_user = ''
                if(user.data().has_photo) photo_user = await this.$firebase.storage().ref('user_images').child(response.user.uid+'.jpeg').getDownloadURL()
                this.$store.dispatch('user/SET_USER_INFO', [response.user.uid, user.data().admin, user.data().age, user.data().username, photo_user])
                this.$q.loading.hide()
            } catch (error) {
                console.log(error)
            }
        }
    }
}

</script>

<style lang="stylus" scoped>
.background-image
    background: url("~assets/background_index.png") fixed no-repeat
    background-size: cover
    background-position-x: center
    position: fixed
    z-index: 1
    display: block
    height: 100vh
    width: 100vw
    filter: blur(50px)
    -webkit-filter: blur(50px)
    -moz-filter: blur(50px)
    -o-filter: blur(50px)
    -ms-filter: blur(50px)

.conteudo
    z-index: 9999
    position: fixed
    width: 100vw

.box-not-account
    background-color: #000
    opacity: 0.3
</style>
