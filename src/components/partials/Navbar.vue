<template>
  <q-tabs slot="navigation">
    <q-tab icon="home" route="/" exact replace>Főoldal</q-tab>
    <q-tab icon="find_in_page" route="/ettermek" exact replace>Éttermek</q-tab>
    <div v-if="!user.authenticated" class="row">
      <q-tab icon="person" route="/bejelentkezes" exact replace>Bejelentkezés</q-tab>
    </div>
    <div v-else class="row">
      <q-tab icon="shopping_basket" route="/rendeleseim" exact replace>Rendeléseim</q-tab>
      <q-tab icon="power_settings_new" @selected="tryLogout" exact replace>Kilépés</q-tab>
    </div>
  </q-tabs>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        user: 'auth/user'
      })
    },
    methods: {
      ...mapActions({
        logout: 'auth/logout'
      }),
      tryLogout: function () {
        this.logout().then(() => {
          this.$router.replace('/')
        })
      }
    }
  }
</script>
