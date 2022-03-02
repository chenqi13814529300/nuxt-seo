<!--  -->
<template>
  <div class="main">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/home">首页</el-breadcrumb-item>
      <el-breadcrumb-item>工程案例</el-breadcrumb-item>
    </el-breadcrumb>
    <p class="title">工程案例</p>
    <div>
     <p> 很多人觉得我们这些图片比不上其他公司，觉得我们技术比不上他们，如果有这种想法真的不是你们的错，是我们把现场原图直接拍下来了，并没有进行一些加工。</p>
     <p>对于贴金箔、大理石刻字等我们从不输其他人，我们公司有着悠久的历史，从2013年就开始经营这个行业，有着不错的口碑，我们因为注重经济划算，基本从未花钱宣传，做广告太费钱了，这样给老板们做项目的时候就需要提高报价。</p>
     <p>这并不是我的初心，我想让双方花最少的钱，办最踏实的事情，至于你可能怀疑，<strong>你做的网站我都看到了，咋叫没有花钱宣传呢，老板这你就冤枉我了，这网站是我儿子帮我做的，现在研一了，像我们这些农村人生活真的不易，一辈子就靠这技术养家糊口。</strong></p>
    </div>
    <el-tabs
      tab-position="left"
      style="height: 400px"
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane :label="item" v-for="(item, index) in labels" :key="index">
        <div class="type_img_list">
          <div v-for="(imgItem, index) in various_img" :key="index">
            <el-image
              :src="imgItem.imgUrl"
              alt="该类型下的图片"
              :preview-src-list="previewList"
            ></el-image>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from "axios";

export default {
  async asyncData() {
    let previewList=[]
    let rs = await axios.get("/api/img/getHomeImg", {
      params: {
        typeId: 6,
      },
    });
    for (let i = 0; i < rs.data.length; i++) {
      previewList[i] = rs.data[i].imgUrl;
    }
    return {
      various_img: rs.data,
      previewList:previewList
    };
  },
  head: {
    title:
      "「金瑞祥贴金案例页」佛像贴金_大理石刻字_公司门牌_室内贴金_石刻字_南京专业贴金刻字",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "金瑞祥贴金经营数十年，不满意不收费，精通【贴金装潢】｜【佛像贴金】｜【大理石贴金】｜【大理石刻字】｜【庙宇装潢】",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "南京佛像贴金,公司门牌,刻字",
      },
    ],
  },
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      labels: [
        "室内贴金",
        "佛像贴金",
        "景观石刻字",
        "刻字描金漆",
        "刻字贴金箔",
      ],
      activeName: "",
      various_img: [],
      previewList: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getVariousImg() {
      this.$API.image
        .getHomeImg(this.$constant.IMG_TYPE.IMG_SHI_NEI_TIE)
        .then((res) => {
          this.various_img = res.data;
          for (let i = 0; i < this.various_img.length; i++) {
            this.previewList[i] = this.various_img[i].imgUrl;
          }
        });
    },
    handleClick(tab, event) {
      console.log(tab.index);
      switch (tab.index) {
        case "0":
          this.imgType = this.$constant.IMG_TYPE.IMG_SHI_NEI_TIE;
          break;
        case "1":
          this.imgType = this.$constant.IMG_TYPE.IMG_FOU_XIANG;
          break;
        case "2":
          this.imgType = this.$constant.IMG_TYPE.IMG_JIN_GUN;
          break;
        case "3":
          this.imgType = this.$constant.IMG_TYPE.IMG_MIAO_JIN_QI;
          break;
        case "4":
          this.imgType = this.$constant.IMG_TYPE.IMG_TIE_JIN_BO;
          break;
      }
      this.$API.image.getHomeImg(this.imgType).then((res) => {
        this.various_img = res.data;
        for (let i = 0; i < this.various_img.length; i++) {
          this.previewList[i] = this.various_img[i].imgUrl;
        }
        console.log(this.various_img);
        console.log(this.previewList);
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getVariousImg();
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped lang="less">
/*@import url(); 引入公共css类*/

.main {
  padding-top: 15px;
  width: 75%;
  margin: auto;
  .title {
    font-size: 30px;
    text-shadow: 1px 1px rgba(243, 12, 12, 0.404);
    color: rgb(87, 40, 40);
    text-align: center;
  }
  .content {
    font-size: 19px;
    color: rgb(87, 28, 17);
  }
}
  p {
    font-size: 18px;
    color: rgb(83, 62, 22);
    text-indent: 2em;
  }
.type_img_list {
  display: flex;
  flex-wrap: wrap;
  div {
    width: 23%;
    // background-color: red;
    margin: 1%;
    .el-image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>