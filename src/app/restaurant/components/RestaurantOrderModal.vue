<template>
  <q-modal
  ref="orderModal"
  noBackdropDismiss
  :content-css="{minWidth: '80vw', minHeight: '80vh'}"
  >
    <q-layout>
      <div slot="header" class="toolbar">
        <button @click="closeModal">
          <i>keyboard_arrow_left</i>
        </button>
        <q-toolbar-title :padding="1">
          Header
        </q-toolbar-title>
      </div>
      <div slot="header" class="toolbar primary">
        <q-search class="primary"></q-search>
      </div>
      <div slot="footer" class="toolbar">
        <q-toolbar-title :padding="1">
          Footer
        </q-toolbar-title>
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
