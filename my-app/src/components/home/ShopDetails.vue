<template>
  <div class="con">
    <div class="head">
      <h3>{{title}}</h3>
      <span>{{loc_name}}</span>
    </div>
    <div class="detailsImg">
      <img :src="image" alt />
    </div>
    <div class="detail">
      <span>时间:&nbsp;&nbsp;</span>
      <ul>
        <li>{{begin_time}}</li>
        <li>{{end_time}}</li>
      </ul>
    </div>
    <div class="detail">
      <span>地点:&nbsp;&nbsp;</span>
      <ul>
        <li>{{address}}</li>
      </ul>
    </div>
    <div class="detail">
      <span>费用:&nbsp;&nbsp;</span>
      <ul>
        <li>{{fee_str}}</li>
      </ul>
    </div>
    <div class="detail">
      <span>类型:&nbsp;&nbsp;</span>
      <ul>
        <li>{{category_name}}</li>
      </ul>
    </div>
    <div class="detail">
      <span>起始时间:&nbsp;&nbsp;</span>
      <ul>
        <li>{{time_str}}</li>
      </ul>
    </div>
    <div class="listNav">
      <ul>
        <li>
          <router-link to="/book">艺术展</router-link>
        </li>
        <li>
          <router-link to="/book">国际</router-link>
        </li>
        <li>
          <router-link to="/book">艺术</router-link>
        </li>
        <li>
          <router-link to="/book">当代</router-link>
        </li>
        <li>
          <router-link to="/book">策展</router-link>
        </li>
      </ul>
    </div>
    <div class="describe">
      <h3>活动详情</h3>
      <div class="content" v-html="content">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
    //   required: true
    },
    loc_name: {
      type: String,
    //   required: true
    },
    image: {
      type: String,
    //   required: true
    },
    begin_time: {
      type: String
    },
     end_time: {
      type: String
    },
    address: {
      type: String
    },
    fee_str: {
      type: String
    },
    category_name: {
      type: String
    },
    content: {
      type: String
    },
    time_str: {
      type: String
    },
  }
};
</script>

<style scoped>
.con {
  margin: 0 0.1rem;
}
.head {
  font-size: 0;
  margin: 0.2rem 0;
}
.head h3 {
  font-size: 0.17rem;
  color: #494949;
}
.head span {
  padding: 0.01rem 0.05rem;
  margin-bottom: 0.03rem;
  line-height: 0.18rem;
  font-size: 0.12rem;
  color: #fff;
  background-color: #ff8263;
  border-radius: 0.02rem;
}
.detailsImg {
  margin: 0.22rem auto;
  text-align: center;
}
.detailsImg img {
  width: 100%;
  max-width: 2.2rem;
  height: auto;
}
.detail {
  font-size: 0.14rem;
  margin-bottom: 0.1rem;
  min-height: 0.15em;
  clear: left;
}
.detail span {
  float: left;
  line-height: 150%;
  color: #666;
}
.detail ul li {
  list-style: none;
}
.listNav {
  font-size: 0;
}
.listNav ul li {
  display: inline-block;
  margin: 0.1rem 0.1rem 0 0;
  font-size: 0.15rem;
}
.listNav ul li a {
  display: block;
  padding: 0 0.12rem;
  line-height: 0.28rem;
  font-size: 0.15rem;
  border-radius: 0.28rem;
  text-align: center;
  color: #494949;
  background: #f5f5f5;
}
.describe h3 {
  color: #072;
  margin: 0.2rem 0;
  font-weight: 700;
  font-size: 0.17rem;
}
.content {
  overflow: hidden;
  font-size: 0.14rem;
}
</style>