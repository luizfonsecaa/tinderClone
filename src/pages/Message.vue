<template>
  <q-page class="bg-grey-3">
    <div class="q-pa-md row justify-center">
      <div style="width: 100%;">
        <q-chat-message
          name="Evellyn"
          avatar="~assets/eve.jpeg"
          :text="['Ola tudo bem?']"
          stamp="7 minutes ago"
          sent
          bg-color="primary"
        />
        <q-chat-message
          name="Luiz"
          avatar="~assets/luiz.jpeg"
          :text="[
          'Tudo e com você'
        ]"
          size="6"
          stamp="4 minutes ago"
          text-color="white"
          bg-color="secondary"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped></style>
