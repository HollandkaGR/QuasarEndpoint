<template>
  <div>
    <div class="layout-padding">
      <h2>Éttermeink</h2>
      <div>
          <cards></cards>
      </div>
    </div>
  </div>
</template>

<script>
  import Cards from '../../app/restaurant/components/RestaurantCards'

  export default {
    components: {
      Cards
    },
    data: function () {
      return {
      }
    },
    mounted: function () {

    }
  }
</script>
