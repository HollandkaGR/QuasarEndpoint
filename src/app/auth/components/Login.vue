<template>
  <div class="list">
    <div v-show="errors.root" class="label bg-negative text-white shadow-1" style="margin-left: 72px;">{{ errors.root }}</div>
    <div class="item two-lines">
      <i class="item-primary">email</i>
      <div class="item-content">
        <div class="floating-label">
          <input required v-model="email" class="full-width">
          <label>Email cím</label>
        </div>
      </div>
    </div>
    <q-transition name="slide">
      <div v-if="errors.email" class="label bg-negative text-white shadow-1" style="margin-left: 72px;">{{ errors.email[0] }}</div>
    </q-transition>
    <div class="item two-lines">
      <i class="item-primary">https</i>
      <div class="item-content">
        <div class="floating-label">
          <input required v-model="password" class="full-width">
          <label>Jelszó</label>
        </div>
      </div>
    </div>
    <q-transition name="slide">
      <div v-if="errors.password" class="label bg-negative text-white shadow-1" style="margin-left: 72px;">{{ errors.password[0] }}</div>
    </q-transition>
    <div class="item">
      <div class="item-content">
        <button @click.prevent="login" class="primary glossy">Bejelentkezés</button>
      </div>
    </div>
  </div>
</template>

<script>
  'use strict'
  import { mapActions, mapGetters } from 'vuex'
  import { Loading } from 'quasar'
  import { showPopup } from 'src/helpers'
  
  export default {
    data () {
      return {
        email: 'holika69@gmail.com',
        password: 'secret',
        errors: {}
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getUser'
      })
    },
    methods: {
      ...mapActions({
        tryLogin: 'auth/login'
      }),
      login: function () {
        Loading.show({
          spinner: 'rings',
          spinnerSize: 250,
          spinnerColor: 'white'
        })
        this.tryLogin({
          payload: {
            email: this.email,
            password: this.password
          },
          context: this
        }).then((user) => {
          showPopup('Üdvözlünk ' + user.first_name + '!', 'info')
          Loading.hide()
        })
      }
    }
  }
</script>
