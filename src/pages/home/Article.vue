<!--  -->
<template>
  <div class="main">
    <div>
      <p>
        <span class="title">佛像贴金箔阅读推荐</span>
        <span class="more" @click="allQuestion">+More</span>
      </p>

      <div
        class="list"
        v-for="(item, index) in articleByType1"
        :key="index"
        @click="articleDetails(item)"
      >
        <div>
          <p><i class="el-icon-caret-right"></i>{{ item.title }}</p>
        </div>
      </div>
    </div>
    <div>
      <p>
        <span class="title">大理石贴金箔阅读推荐</span>
        <span class="more">+More</span>
      </p>

      <div
        class="list"
        v-for="(item, index) in articleByType2"
        :key="index"
        @click="articleDetails(item)"
      >
        <div>
          <p><i class="el-icon-caret-right"></i>{{ item.title }}</p>
        </div>
      </div>
    </div>
    <div>
      <p>
        <span class="title">其他问题阅读推荐</span>
        <span class="more">+More</span>
      </p>

      <div
        class="list"
        v-for="(item, index) in articleByType3"
        :key="index"
        @click="articleDetails(item)"
      >
        <div>
          <p><i class="el-icon-caret-right"></i>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    let queryInfo1 = {
      type: 1,
      pageNum: 1,
      pageSize: 10,
    };
    let queryInfo2 = {
      type: 2,
      pageNum: 1,
      pageSize: 10,
    };
    let queryInfo3 = {
      type: 3,
      pageNum: 1,
      pageSize: 10,
    };
    let rs1 = await axios.get("/api/article/articleByType", {
      params: {
        ...queryInfo1,
      },
    });
    let rs2 = await axios.get("/api/article/articleByType", {
      params: {
        ...queryInfo2,
      },
    });
    let rs3 = await axios.get("/api/article/articleByType", {
      params: {
        ...queryInfo3,
      },
    });
    return {
      articleByType1: rs1.data.list,
      articleByType2: rs2.data.list,
      articleByType3: rs3.data.list,
    };
  },
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      queryInfo: {
        type: 1,
        pageNum: 1,
        pageSize: 10,
      },
      // articleByType1: [],
      // articleByType2: [],
      // articleByType3: [],

      total: 0,
      result: null,
      project: "default",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    allQuestion() {
      this.$router.push("question");
    },
    getarticleByType1() {
      this.$API.article.getArticleByType(this.queryInfo).then((res) => {
        if (res.status == 200) {
          this.articleByType1 = res.data.list;
          this.total = res.data.total;
        }
      });
    },
    getarticleByType2() {
      this.queryInfo.type = 2;
      this.$API.article.getArticleByType(this.queryInfo).then((res) => {
        if (res.status == 200) {
          this.articleByType2 = res.data.list;
          this.total = res.data.total;
        }
      });
    },
    getarticleByType3() {
      this.queryInfo.type = 3;
      this.$API.article.getArticleByType(this.queryInfo).then((res) => {
        if (res.status == 200) {
          this.articleByType3 = res.data.list;
          this.total = res.data.total;
        }
      });
    },
    articleDetails(item) {
      if (!sessionStorage.getItem("read")) {
        sessionStorage.setItem("read", true);
        item.readTimes++;
        // 修改语句，修改readTimes字段
        this.$API.article.updateArticle(item).then((res) => {
          if (res.status == 200) {
          }
          sessionStorage.removeItem("read");
        });
      }
      this.$router.push({
        path: "/question/details/" + item.id,
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.getarticleByType1();
    // this.getarticleByType2();
    // this.getarticleByType3();
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
  width: 75%;
  display: flex;
  margin: auto;
  > div {
    flex: 1;
    margin: 0 5px;
    .list {
      > div {
        width: 100%;
        height: 40px;
        box-shadow: 2px 2px 6px rgba(204, 204, 204, 0.432);
        margin: 2px 0;
        line-height: 40px;
        cursor: pointer;
        color: rgb(80, 56, 11);
        border-radius: 5px;
      }
      > div:hover {
        box-shadow: 2px 2px 6px rgba(127, 231, 67, 0.479);
      }
    }
    .title {
      color: rgb(122, 82, 30);
      font-size: 22px;
    }
    p {
      width: 100%;
      color: rgb(4, 61, 44);
      position: relative;
    }
    .more {
      right: 0;
      position: absolute;
      cursor: pointer;
      color: red;
      font-size: 16px;
    }
  }
}
</style>