<template>
    <q-page>
        <div class="background-image"></div>
        <div class=" row conteudo">
            <div class="col-12 q-pa-lg">
                <q-card class="my-card  full-width">
                    <div class="q-py-md">
                        <q-item-section class="q-mb-xs">
                            <div class="text-center">
                                <q-avatar size="70px" color="light-blue-2" text-color="light-blue-9" icon="fas fa-camera" />
                            </div>
                        </q-item-section>

                        <q-item-section >
                            <q-item-label>
                                <h5 class="q-ma-none text-center">Take a selfie</h5>
                            </q-item-label>
                        </q-item-section>
                    </div>

                    <q-separator />

                    <q-card-section class="text-center">
                        <p> Show us how you look and get more chances to meet people! </p>
                        <q-btn color="primary"  @click="confirm = true"  size="1.2em" label="take photo" class="q-mb-md" />
                    </q-card-section>
                </q-card>
            </div>
        </div>
        <q-dialog v-model="confirm">
            <q-card>
                <q-card-section class="row items-center">
                    <q-avatar class="q-mb-sm" icon="fas fa-camera" color="primary" text-color="white" />
                    <span class="q-ml-sm">Select an option to add a profile photo</span>
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="Gallery" @click="setSource('galery')" color="primary" v-close-popup />
                    <q-btn flat label="Camera" @click="setSource('camera')"  color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-page>
</template>



<script>
import { mapGetters } from 'vuex'
export default {
    name: 'PageIndex',
    data() {
        return {
            confirm: false,
            file: ''
        }
    },
    computed: {
        ...mapGetters({
            id: 'user/id',
        }),
    },

    methods: {
        setSource(source) {
            this.selectedMobileSource(source)
        },

        selectedMobileSource(souce) {
            try {
                let options = {
                    quality: 50,
                    destinationType: Camera.DestinationType.DATA_URL,
                    encodingType: Camera.EncodingType.JPEG,
                    mediaType: Camera.MediaType.PICTURE,
                    targetWidth: 720,
                    correctOrientation: true
                }

                if (souce === 'galery') options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY

                navigator.camera.getPicture( async (imageData) => {
                    this.file = this.getBlob(imageData)
                    await this.$firebase.storage().ref(`user_images/${this.id}.jpeg`).put(this.file)
                    this.getPhoto()

                }, (message) => {
                    console.log(message)
                }, options)

            } catch (error) {

            }
        },

        getBlob(b64Data, contentType, sliceSize) {
            contentType = contentType || '';
            sliceSize = sliceSize || 512;

            let byteCharacters = atob(b64Data);
            let byteArrays = [];

            for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                let slice = byteCharacters.slice(offset, offset + sliceSize);

                let byteNumbers = new Array(slice.length);
                for (let i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }

                let byteArray = new Uint8Array(byteNumbers);

                byteArrays.push(byteArray);
            }

            let blob = new Blob(byteArrays, {type: contentType});
            return blob
        },


        async getPhoto() {
            try {
                let url = await this.$firebase.storage().ref('user_images').child(this.id+'.jpeg').getDownloadURL()
                this.$store.dispatch('user/SET_PHOTO_USER', [url])
                this.$firebase.firestore().collection("users").doc(this.id).set({
                    has_photo: true
                }, { merge: true })
            } catch (error) {
                console.log(error)
            }
        }
    },
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
    z-index: 2
    position: fixed
    width: 100vw
</style>
