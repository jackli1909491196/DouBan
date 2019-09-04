<template>
  <div>
    <search-title></search-title>
    <search-con></search-con>
  </div>
</template>
<script>
import SearchTitle from '../search/SearchTitle'
import SearchCon from '../search/SearchCon'
export default {
  components:{
   SearchTitle,
   SearchCon
  }
};
</script>

<style scoped>
div h1{
    font-size: 0.4rem;
}
</style>