<template>
  <div class="ListCon">
    <header-bar></header-bar>
    <banner></banner>
    <div>
      <shop-details :title="arr.title" :loc_name="arr.loc_name" :image="arr.image" :begin_time="arr.begin_time" :end_time="arr.end_time" :address="arr.address" :fee_str="arr.fee_str" :category_name="arr.category_name" :time_str="arr.time_str" :content="arr.content"></shop-details>
    </div>
    <download></download>
  </div>
</template>
<script>
import HeaderBar from "../publics/HeaderBar";
import Banner from "../publics/Banner";
import ShopDetails from "../home/ShopDetails";
import Download from '../publics/Download'
export default {
  components: {
    HeaderBar,
    Banner,
    ShopDetails,
    Download
  },
  data() {
    return {
      arr: []
    };
  },
  methods: {},
  created() {
      let newId=this.$route.query.id;
    this.axios({
      method: "get",
      url: "/homelist"
    }).then((ok) => {
    ok.data.shouye.filter((v,i)=>{
        if(v.id==newId){
            this.arr = ok.data.shouye[i];
            console.log(this.arr);
        }
    },(err)=>{
        console.log(err);
    })
        
    });
  }
};
</script>

<style scoped>
</style>