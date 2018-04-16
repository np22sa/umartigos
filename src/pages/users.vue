<template>
<div class="red">
<h1>Indique o utilizador</h1>
<input type="text" v-model="userId">
<button @click="loadUser">user</button>
<nuxt-child/>
</div>  
</template>
<script>
export default {
  data(){
      return{
          userId:''
      }
  },
  methods:{
      loadUser(){
          this.$router.push('/users/'+this.userId)
      }
  }
}
</script>

<style lang="sass">
.red
  color: red
</style>
