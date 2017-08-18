<template>
  <div class="flex row gutter lt-md-column wrap justify-start">
    <div v-for="etterem in ettermek" :key="etterem.id" class="width-1of4">
      <div class="flex column justify-between card bg-brown-11 shadow-5 text-black" style="height:100%;">
        <div class="flex column justify-center text-white text-center bg-brown-13">
          <h5 class="no-margin uppercase thin-paragraph">{{ etterem.name }}</h5>  
        </div>
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
        <div class="card-content flex row wrap justify-center items-center auto">
          <div v-for="category in categories" class="bg-brown-12 round-borders shadow-1 rest-cats">{{category}}</div>
        </div>
        <hr>
        <div class="text-center rest-details-btn">
          <button @click="showProducts(etterem.id)" class="bg-green-7 outline raised glossy">Rendelek</button>
        </div>
      </div>
    </div>
    <button @click="openModal">openModal</button>
    <restaurantOrderModal v-bind="{ modalOpened: modalOpened}" v-on:modalClosed="closeModal"></restaurantOrderModal>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import RestaurantOrderModal from './RestaurantOrderModal'
  import { showLoadingScreen } from 'src/helpers'
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
        fetchProducts: 'restaurant/fetchProducts',
        resetEttermek: 'restaurant/resetEttermek'
      }),
      openModal: function () {
        this.modalOpened = true
      },
      closeModal: function () {
        this.modalOpened = false
      },
      showProducts: function (restId) {
        this.modalOpened = true
        // console.log(restId)
        // showLoadingScreen()
        // this.fetchProducts({
        //   restId
        // }).then((response) => {
        //   console.log(response)
        //   Loading.hide()
        // }).catch(error => {
        //   this.errors.push(error.message)
        //   Loading.hide()
        // })
      }
    },
    beforeMount () {
      this.resetEttermek()
    },
    mounted () {
      showLoadingScreen()
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
