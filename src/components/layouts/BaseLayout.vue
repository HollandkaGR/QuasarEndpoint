<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <q-toolbar-title :padding="1">
        <router-link to="/">index</router-link>
      </q-toolbar-title>
      <navbar></navbar>
    </div>
    <router-view class="layout-view"></router-view>
  </q-layout>
</template>

<script>
  import Navbar from './../partials/Navbar'

  export default {
    components: { Navbar },
    data () {
      return {}
    }
  }
</script>
