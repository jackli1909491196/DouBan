<template>
  <div>
    <el-rate
      v-model="value"
      disabled
      show-score
      text-color="#ff9900"
      score-template="{value}" 
    ></el-rate>
  </div>
</template>
<script>
export default {
//     data() {
//     return {
//       value: 3.1
//     };
//   },
computed: {
    value(){
        return parseFloat((this.values/2).toFixed(1));
    }
},
  props:{
      values:{
          type:[String,Number],
          required:true,
      }
  }
}
</script>
<style>
.el-rate__icon {
    font-size: 0.12rem;
    margin-right: 0;
}
</style>