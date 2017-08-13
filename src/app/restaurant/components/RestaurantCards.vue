<template>
  <div class="flex row gutter md-column wrap justify-between">
    <div v-for="etterem in ettermek" class="card bg-brown-11 text-black shadow-5 rest-cards no-padding round-borders">
      <div class="flex column justify-between items-stretch">
        <h4 class="text-white text-center bg-brown-13 light-paragraph no-margin uppercase rest-title">{{ etterem.name }}</h4>
        <img class="item-primary" src="~assets/350x150.png">
        <hr>
        <div class="item-content flex row justify-between rest-ratings">
          <div class="text-green-7">
            <i>star</i> Elégedettség: 4.3
          </div>
          <div class="text-primary">
            8 Ítélet <i>mode_comment</i>
          </div>
        </div>
        <hr>
        <div class="card-content flex row wrap justify-center">
          <div v-for="category in categories" class="bg-brown-12 round-borders shadow-1 rest-cats">{{category}}</div>
        </div>
        <div class="text-center rest-details-btn">
          <button class="bg-green-7 outline raised glossy">Rendelek</button>
        </div>
      </div>
    </div>
    <button @click="toggleModal">openModal</button>
    <restaurantOrderModal v-bind="{ modalOpened: modalOpened}" v-on:modalClosed="toggleModal"></restaurantOrderModal>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import RestaurantOrderModal from './RestaurantOrderModal'
  import { Loading } from 'quasar'

  export default {
    data: function () {
      return {
        modalOpened: false,
        categories: [
          'Levesek', 'Szárnyasok', 'Előételek', 'Desszertek', 'Pizzák', 'Marhaételek'
        ],
        errors: []
      }
    },
    computed: {
      ...mapGetters({
        ettermek: 'restaurant/getEttermek'
      })
    },
    components: { RestaurantOrderModal },
    methods: {
      ...mapActions({
        fetchEttermek: 'restaurant/fetchEttermek',
        resetEttermek: 'restaurant/resetEttermek'
      }),
      toggleModal: function () {
        this.modalOpened = !this.modalOpened
      }
    },
    beforeMount () {
      this.resetEttermek()
    },
    mounted () {
      Loading.show({
        spinner: 'rings',
        spinnerSize: 250,
        spinnerColor: 'white'
      })
      this.fetchEttermek().then(() => {
        Loading.hide()
      }).catch(error => {
        this.errors.push(error.message)
        Loading.hide()
      })
    }
  }
</script>

<style lang="sass" scoped>
  .rest-cards
    -webkit-box-flex: 0;
    -ms-flex: 0 1 32%;
    flex: 0 1 32%;
    margin: 5px 0px
  .rest-title
    font-size: 1.5rem
    padding: 5px
  .rest-ratings
    padding: 2px 16px
  .rest-cats
    padding: 2px 3px
    margin: 2px
  .rest-details-btn
    margin-bottom: 10px
  hr
    margin: 5px 0
</style>
