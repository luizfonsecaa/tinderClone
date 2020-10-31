<template>
    <q-page>
        <div class="background-image"></div>
        <div class="conteudo">
            <div class="q-my-lg">
                <q-btn flat  v-go-back=" '/' " color="white" icon="fas fa-arrow-left" />
            </div>

            <div class="row q-mx-lg q-mt-lg">
                <div class="col-12">
                    <h1 class="text-white text-weight-thin text-h4">Forgot password</h1>
                    <p class="text-white text-weight-thin">Enter your email address, we’ll send you the instructions on how to change your password</p>
                </div>
                <div class="col-12 q-mb-md">
                    <q-input v-model="email" label="Email Address" dark />
                </div>
                <div class="col-12 q-mb-md">
                    <q-btn color="primary"  size="1.2em" label="Send" class="q-mb-md" />
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
          email: '',
          password: '',
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
