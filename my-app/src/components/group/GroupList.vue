<template>
  <div class="con">
    <div class="groupTitle">
      <h3>{{title}}</h3>
    </div>
    <ul class="content">
      <li v-for="(v,i) in items" :key="i">
        <a href="#">
          <div class="group-meta">
            <img :src="v.images.small" alt />
            <div class="group-info">
              <span>{{v.title}}</span>
            </div>
            <span class="group-member">{{v.group_member}}人</span>
          </div>
          <div class="group-topic">
            <span>{{v.group_topic.time}}</span>
            <span>{{v.group_topic.title}}</span>
          </div>
        </a>
      </li>
    </ul>
    <router-link to class="list-link">{{bigTitle}}</router-link>
  </div>
</template>
<script>
export default {
  props:{
    items:{
      type:Array,
      // required:true
    },
    title:{
       type:String,
      // required:true
    },
     bigTitle:{
      type:String,
      // required:true
    }
  }
};
</script>
<style scoped>
.con {
  font-size: 0;
  margin-left: 0.18rem;
  padding-top: 0.14rem;
}
.groupTitle h3 {
  font-size: 0.17rem;
  font-weight: 400;
  color: #111;
}
.content li {
  border-bottom: 0.01rem solid #f2f2f2;
  overflow: hidden;
}
.content li a {
  display: block;
  padding: 0.15rem 0.18rem 0.15rem 0;
}
.group-meta {
  display: flex;
  align-items: center;
}
.group-meta img {
  width: 0.4rem;
}
.group-info {
  flex: 1;
  padding: 0 0.1rem;
  font-size: 0.18rem;
  color: #111;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.group-member {
  color: #ccc;
  font-size: 0.15rem;
}
.group-topic {
  margin-top: 0.1rem;
  font-size: 0.15rem;
  color: #aaa;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.group-topic span {
  font-size: 0.15rem;
  color: #aaa;
  white-space: nowrap;
}
.list-link {
  display: block;
  margin-bottom: 0.3rem;
  padding: 0.15rem 0;
  font-size: 0.16rem;
  line-height: 0.18rem;
  text-align: center;
  color: #42bd56;
}
</style>