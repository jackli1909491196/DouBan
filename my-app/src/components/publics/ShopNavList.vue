<template>
  <div class="con">
    <div class="listTitle">
      <h3>{{bigTitle}}</h3>
      <span>更多</span>
    </div>
    <div class="listCon">
      <div class="list" v-for="(v,i) in items" :key="i">
        <router-link to="">
          <img :src="v.images.large" alt />
          <p>{{v.title}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    items: {
      type: Array,
      required: true
    },
    bigTitle: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.con {
  margin: 0 0.16rem;
  font-size: 0;
}
.listTitle {
  padding-top: 0.1rem;
  height: 0.26rem;
  line-height: 0.26rem;
  padding-bottom: 0.1rem;
}
.con .listTitle h3 {
  float: left;
  font-size: 0.17rem;
  font-weight: 400;
  color: #111;
}
.con .listTitle span {
  float: right;
  font-size: 0.15rem;
  color: #42bd56;
}
.listCon {
  font-size: 0;
  width: 100%;
  display: flex;
  overflow-x: auto;
}
.list {
  width: 0.9rem;
  margin: 0 0.03rem;
}
.list img {
  display: block;
  width: 0.9rem;
  height: 1.2rem;
}
.list p {
  font-size: 0.16rem;
  color: #111;
  text-align: center;
  padding: 0.1rem 0;
}
</style>