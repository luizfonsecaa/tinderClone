<template>
    <q-page>
        <div class="row">
            <div class="col-12 bg-grey-3 q-py-sm flex justify-center">
                <!-- <input class="search-message" type="text" placeholder="">

                -->
                <q-input
                    borderless
                    v-model="seach"
                    bg-color="white"
                    :rounded="true"
                    placeholder="Search messages"
                    :dense="true"
                    :input-style="{ width: '250px', borderRadius: '20px'}"
                >
                    <template v-slot:prepend>
                        <q-icon name="fas fa-search" class="q-pl-sm"  size="xs"/>
                    </template>
                </q-input>
            </div>
            <div class="col-12">
                <q-list separator>
                    <q-item class="text-black" v-for="(m, index) in messages" :key="index" clickable v-ripple :to="{ name: m.to }">
                        <q-item-section avatar>
                            <q-avatar size="60px">
                                <img src="~assets/eve.jpeg" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>
                            <p class="text-subtitle1 q-ma-none text-weight-medium">{{ m.name }}</p>
                            <p class="text-subtitle2 q-ma-none text-weight-light">{{ m.msg }}</p>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
    data() {
        return {
            seach: "",
            messages: [
                {
                    img: "~assets/eve.jpeg",
                    name: "Evellyn",
                    msg: "Hey! how was the concert last night??",
                    to: "message"
                },
                {
                    img: "~assets/eve.jpeg",
                    name: "Evellyn",
                    msg: "Hey! how was the concert last night??",
                    to: "message"
                },
                {
                    img: "~assets/eve.jpeg",
                    name: "Evellyn",
                    msg: "Hey! how was the concert last night??",
                    to: "message"
                },
                {
                    img: "~assets/eve.jpeg",
                    name: "Evellyn",
                    msg: "Hey! how was the concert last night??",
                    to: "message"
                },
                {
                    img: "~assets/eve.jpeg",
                    name: "Evellyn",
                    msg: "Hey! how was the concert last night??",
                    to: "message"
                },
                {
                    img: "~assets/eve.jpeg",
                    name: "Evellyn",
                    msg: "Hey! how was the concert last night??",
                    to: "message"
                },

            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
	hr {
		background-color: #fffafa;
        width: 90%;
    }

    .teste{
        font-size: 0.7em;
        margin-left: 5px;
    }



</style>
