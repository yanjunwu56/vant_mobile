<template>
  <div class="hello">
    <van-notice-bar class="notice" :text="text" left-icon="volume-o" />
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <!-- <van-cell
    v-for="item in list"
    :key="item"
    :title="item"
  /> -->
      <van-card v-for="(item,index) in list" :key="index" :num="item.num" :price="item.price" :desc="item.desc" :title="item.title" :thumb="item.thumb" />
    </van-list>

    <!-- </van-list> -->
    <van-tabbar v-model="active" class='j_tabbar'>
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
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
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        active: 0,
        text: '中国足球应该务实一点，先把战术打法和足球的理念搞懂！输完泰国队输越南，再输缅甸，接下来没人输了',
        loading: false,
        finished: false,
        list: [
          //           num="2"
          // price="2.00"
          // desc="描述信息"  
          // title="商品标题"
          // thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          {
            num: '2',
            price: '2.0',
            desc: '描述信息',
            title: '商品标题',
            thumb: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
          },
          {
            num: '2',
            price: '2.0',
            desc: '描述信息',
            title: '商品标题',
            thumb: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
          },
          {
            num: '2',
            price: '2.0',
            desc: '描述信息',
            title: '商品标题',
            thumb: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
          },
          {
            num: '2',
            price: '2.0',
            desc: '描述信息',
            title: '商品标题',
            thumb: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
          },
          {
            num: '2',
            price: '2.0',
            desc: '描述信息',
            title: '商品标题',
            thumb: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
          },
          {
            num: '2',
            price: '2.0',
            desc: '描述信息',
            title: '商品标题',
            thumb: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
          },
          {
            num: '2',
            price: '2.0',
            desc: '描述信息',
            title: '商品标题',
            thumb: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
          }
        ],
        images: [
          "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg",
          "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34869/14/3703/113972/5cb953c1E4294d8ea/b73c538710f5c462.jpg!cr_1125x549_0_72!q70.jpg.dpg",
          "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg",
          "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34729/14/3948/120618/5cbeee07Efbe17ec5/d57ddd4fbbbc09e0.jpg!cr_1125x549_0_72!q70.jpg.dpg",
          "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34423/17/5378/97852/5cbecd7bE73730c2f/76e5359d8fb3a1e1.jpg!cr_1125x549_0_72!q70.jpg.dpg"
        ]
      }
    },
    mounted() {
      // this.pro();
      this.onLoad();
    },
    methods: {
      // pro() {
      //   var promise = new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //       console.log(11)
      //     }, 1000)
      //     resolve(1)
      //   });
      //   promise.then((res) => {
      //     console.log(22)
      //     console.log(res);
      //   })
      // }
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
  }

  .notice {
    height: 60px;
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
.van-tabbar--fixed{
  position: static	;
}
</style>
