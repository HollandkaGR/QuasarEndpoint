<template>
  <div>
    <div class="layout-padding">
      <loginForm></loginForm>
    </div>
  </div>
</template>

<script>
  import LoginForm from 'src/app/auth/components/Login.vue'
  
  export default {
    components: {
      LoginForm
    }
  }
</script>
