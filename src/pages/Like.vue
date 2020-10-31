<template>
    <q-page class="bg-grey-3">
        <div class="row items-center" style="height: calc(100vh - 50px);">

            <div class="col-12 q-px-md">
                <q-card class="my-card  full-width q-mb-lg shadow-10" style="border-radius: 30px;">
                    <div class="flex justify-center q-pt-lg" style="height: 109px;">
                        <q-avatar class size="100px" color="light-blue-2" text-color="light-blue-9">
                            <img src="~assets/luiz.jpeg">
                        </q-avatar>

                        <q-avatar class="self-end q-mx-sm" size="30px" text-color="primary" icon="fas fa-heart" />

                        <q-avatar size="100px" color="light-blue-2" text-color="light-blue-9">
                            <img src="~assets/eve.jpeg">
                        </q-avatar>
                    </div>
                    <br>
                    <q-card-section class="text-center">
                        <h4 class="q-ma-none text-center text-weight-light">It’s a match!</h4>
                        <p class="text-weight-light text-body2 q-mt-md">You and Evellyn like each other, you can now send her a message! </p>
                    </q-card-section>
                </q-card>

                <div class="col-12 text-center q-px-lg">
                    <q-btn class="q-mb-md full-width btn-border" color="primary"  size="1.2em" label="send a message"/>
                </div>
                <div class="col-12 text-center q-px-lg">
                    <q-btn class="q-mb-md full-width btn-border" color="blue"  size="1.2em" label="keep browsing"/>
                </div>
            </div>

        </div>
    </q-page>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>

</style>
