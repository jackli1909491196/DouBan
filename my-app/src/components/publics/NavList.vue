<template>
  <div class="con">
    <ul class="navList">
      <li v-for="(v,i) in arr" :key="i" :style="v.line?'display:block;border:none':''">
        <a :href="v.href" :style="v.line?'height:0':''"><span :style="{color:v.color}">{{v.title}}</span></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
      arr:{
          type:Array,
          required:true
      }
  }
};
</script>

<style scoped>
.con {
  font-size: 0;
}
.navList {
  overflow-x: auto;
  white-space: nowrap;
}
.navList li {
  display: inline-block;
  margin: 0 0 0.1rem 0.16rem;
  font-size: 0.16rem;
  border: 0.01rem solid;
  border-radius: 0.04rem;
  vertical-align: middle;
  border-color: rgb(255, 172, 45);
}
.navList li a {
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0 0.24rem;
  letter-spacing: 0.016rem;
  overflow: auto;
  display: block;
  text-align: center;
}
</style>