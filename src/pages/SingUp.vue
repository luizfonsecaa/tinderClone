<template>
    <q-page>
        <div class="background-image"></div>
        <div class="conteudo">
            <div class="q-my-lg">
                <q-btn flat  v-go-back=" '/' " color="white" icon="fas fa-arrow-left" />
            </div>

            <div class="row q-mx-lg q-mt-lg">
                <div class="col-12">
                    <h1 class="text-white text-weight-thin text-h3">Signup</h1>
                </div>
                <div class="col-12 q-mb-md">
                    <q-input v-model="username" label="Choose a Username" dark />
                </div>
                <div class="col-12 q-mb-md">
                    <q-input v-model="age" label="Your Age" dark />
                </div>
                <div class="col-12 q-mb-md">
                    <q-input v-model="email" label="Email Address" dark />
                </div>
                <div class="col-12 q-mb-md">
                    <q-input type="password" v-model="password" label="Password" dark />
                </div>
                <div class="col-12 q-mb-md">
                    <q-btn color="primary" @click="createLogin()" size="1.2em" label="signup" class="q-mb-md" />
                </div>
            </div>
        </div>
    </q-page>
</template>



<script>
export default {
    name: 'PageIndex',
    data() {
        return {
            username:'',
            age:'',
            email: '',
            password: '',
        }
    },
    methods: {
        createLogin() {
            this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(response => {
                this.$firebase.firestore().collection("users").doc(response.user.uid).set({
                    username: this.username,
                    age: this.age,
                })
            })
            .catch(function(error) {
                console.log(error.code, error.message)
            });
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
</style>
