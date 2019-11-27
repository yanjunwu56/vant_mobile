<template>
  <div class="hello container">
    <van-notice-bar class="notice" :text="text" left-icon="volume-o" />
    <router-view></router-view>
    <van-tabbar v-model="active" class='j_tabbar' @click.native="onTabbar">
      <van-tabbar-item icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">特价</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vant, {
    Lazyload
  } from 'vant';
  Vue.use(Lazyload);
  Vue.use(Vant);
  import {
    reject
  } from 'q'
  export default {
    name: 'index',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        active: 0,
        text: '中国足球应该务实一点，先把战术打法和足球的理念搞懂！输完泰国队输越南，再输缅甸，接下来没人输了',
      }
    },
    mounted() {
      // this.pro();
      this.onLoad();
    },
    methods: {

      onLoad() {
        // 异步更新数据
        // setTimeout(() => {
        //   for (let i = 0; i < 10; i++) {
        //     this.list.push(this.list.length + 1);
        //   }
        //   // 加载状态结束
        //   this.loading = false;

        //   // 数据全部加载完成
        //   if (this.list.length >= 5) {
        //     this.finished = true;
        //   }
        // }, 500);
      },
      onTabbar(){
        console.log(1)
        console.log(this.active);
        if(this.active===0){
          this.$router.push('/')
        }
        if(this.active===1){
          this.$router.push('/list')
        }
        if(this.active===2){
          this.$router.push('/detail')
        }
        if(this.active===3){
          this.$router.push('/myinfo')
        }
      },
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  #slt {
    background: gold;
    width: 750px;
  }

  .j_tabbar {
    height: 80px;
    position: fixed;
      width: 100%
  }

  .notice {
    height: 60px;
    position: relative;
    top: 0;
  }

  .swiper {
    width: 100%;
    height: 3.4rem;
  }

  .van-swipe .van-swipe-item img {
    width: 750px !important;
    height: 400px;
    display: inline-block;
  }

  .van-card__content div {
    height: 40px;
    max-height: 40px;
    line-height: 40px;
  }
  .container{ 
    height: 100%;
  }  
</style>
