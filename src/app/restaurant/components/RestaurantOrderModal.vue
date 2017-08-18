<template>
  <q-modal
  ref="orderModal"
  noBackdropDismiss
  :content-css="{minWidth: '80vw', minHeight: '80vh'}"
  >
  <q-layout>
    <div slot="header" class="toolbar bg-brown-13 text-black">
      <button @click="closeModal">
        <i>keyboard_arrow_left</i>
      </button>
      <q-toolbar-title :padding="1">
        Flekken étterem kínálata
      </q-toolbar-title>
    </div>
    <div slot="header" class="toolbar bg-brown-11">
      <q-search class="bg-white"></q-search>
    </div>
    <div slot="footer" class="toolbar bg-brown-11 text-black">
      <div class="width-1of2 flex row justify-between offset-1of4">
        <div class="text-green-9">
          <i>star</i> Elégedettség: 4.3
        </div>
        <div class="text-primary">
          8 Ítélet <i>mode_comment</i>
        </div>
      </div>
    </div>
    <div class="layout-view">
      <div class="layout-padding">
        <h1>Modal</h1>
        <button class="primary" @click="closeModal">Close</button>
        <p class="caption" v-for="n in 15">This is a Modal presenting a Layout.</p>
      </div>
    </div>
  </q-layout>
</q-modal>
</template>

<script>
  export default {
    props: ['modalOpened'],
    watch: {
      modalOpened: function (value) {
        console.log(value)
        if (value) {
          this.$refs.orderModal.open()
        }
        else {
          this.$refs.orderModal.close()
        }
      }
    },
    methods: {
      closeModal: function () {
        this.$emit('modalClosed')
      }
    }
  }
</script>
