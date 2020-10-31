<template>
    <q-page class="bg-grey-3">
        <div class="q-pa-md">
                <q-carousel v-model="slide" swipeable animated infinite ref="usersCarousel"
                transition-prev="scale" transition-next="scale"
                padding height="300px" class="rounded-borders bg-grey-3">

                    <q-carousel-slide name="style" class="column no-wrap flex-center bg-grey-3">
                         <div class="row justify-center bg-grey-3">
                            <img class="q-ma-xl img-user" style="width: 250px" src="~assets/luiz.jpeg" alt="">
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="tv" class="column no-wrap flex-center bg-grey-3">
                        <div class="row justify-center bg-grey-3">
                            <img class="q-ma-xl img-user" style="width: 250px" src="~assets/eve.jpeg" alt="">
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="layers" class="column no-wrap flex-center bg-grey-3">
                         <div class="row justify-cente bg-grey-3">
                            <img class="q-ma-xl img-user" style="width: 250px" src="~assets/luiz.jpeg" alt="">
                        </div>
                    </q-carousel-slide>
                </q-carousel>
        </div>
        <section>
            <div class="content">
                <h4 class="q-ma-none q-mt-lg">{{ username }}</h4>
                <p class="q-mt-none">{{ age }} yrs old</p>
                <div class="q-ma-lg">
                    <q-btn class="q-mr-md btn-action" size="1.5em" round color="grey-6" icon="fas fa-times"  @click="next('unfollow')" />
                    <q-btn class="q-ml-md btn-action" size="1.5em" round color="primary" @click="next('follow')"  icon="fas fa-heart" />
                </div>
            </div>
        </section>
    </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            slide: 'style',
        }
    },
    computed: {
        ...mapGetters({
            username: 'user/username',
            age: 'user/age',
        }),
    },
    methods: {
        next(value) {
            console.log(value)
            this.$refs.usersCarousel.next()
        }
    }
}
</script>

<style lang="stylus" scoped>
    img {
        border: 10px solid transparent;
        padding: 15px;
        border-image: url("~assets/user-photo.png") 30 stretch;
    }

    section {
        position: absolute
        bottom 0
        width: 100vw
        overflow: hidden
    }

    section:before {
        content:''
        position: absolute
        top:0
        left:0
        width:100%
        height 100%
        background: #fff
        border-radius: 50% 50% 0 0/60% 60% 0 0;
        transform: scaleX(1.5)
        overflow: hidden
    }

    section .content  {
        position relative
        z-index: 1
        margin 0 auto
        text-align: center
    }
</style>
