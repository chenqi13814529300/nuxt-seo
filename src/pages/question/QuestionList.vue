<template>
  <div>
    <div class="main">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/home">首页</el-breadcrumb-item>
        <el-breadcrumb-item>常见问题</el-breadcrumb-item>
      </el-breadcrumb>
      <p class="title">常见问题</p>

      <div class="questionList">
        <div
          v-for="(item, index) in articleList"
          :key="index"
          @click="articleDetails(item)"
        >
          <span class="title"> {{ index + 1 }} 、{{ item.title }}</span>
          <span class="time">{{ item.createTime }}</span>
        </div>
      </div>

      <el-drawer
        :title="showingArticle.title"
        size="65%"
        :visible.sync="drawer"
      >
        <div class="header">
          <span>发布时间：{{ showingArticle.createTime }} </span>
          <span>文章作者：{{ showingArticle.author }} </span>
          <span>文章来源：{{ showingArticle.origin }} </span>
          <span>阅读次数：{{ showingArticle.readTimes }}</span>
        </div>
        <div v-html="showingArticle.content"></div>
      </el-drawer>
      <!-- <div  v-html="articleList[3].content">

      </div> -->
      <el-pagination
        :page-size="queryInfo.pageSize"
        layout="prev, pager, next"
        :total="total"
        @current-change="changePage"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
     head: {
    title: '「金瑞祥常见问题页」金箔问题_刻字问题_其他问题',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '金瑞祥贴金经营数十年，不满意不收费，精通【贴金装潢】｜【佛像贴金】｜【大理石贴金】｜【大理石刻字】｜【庙宇装潢】'
      },{
         hid: 'keywords',
        name: 'keywords',
        content: '如何贴金,如何刻字,如何保养'
      }
    ],
    
  },
  async asyncData() {
    let queryInfo = {
      query: "",
      pageNum: 1,
      pageSize: 10,
    };
    let rs = await axios.get("/api/article/articleList", {
      params: {
        ...queryInfo,
      },
    });
    return {
      articleList: rs.data.list,
      total: rs.data.total,
    };
  },

  data() {
    return {
      drawer: false,
      queryInfo: {
        query: "",
        pageNum: 1,
        pageSize: 10,
      },
      total: 0,
      newsList: [],
      article: {
        content: "2",
        title: "hhaaaaaa",
      },
      articleList: [],
      showingArticle: {},
    };
  },
  methods: {
    changePage(num) {
      this.queryInfo.pageNum = num;
      this.getArticleList();
    },
    getArticleList() {
      this.$API.article.getArticleList(this.queryInfo).then((res) => {
        if (res.status == 200) {
          this.articleList = res.data.list;
          this.total = res.data.total;
        }
      });
    },
    // articleDetails(item) {
    //   if (!sessionStorage.getItem("read")) {
    //     console.log("---");
    //     sessionStorage.setItem("read", true);
    //     item.readTimes++;
    //     // 修改语句，修改readTimes字段
    //     this.$API.article.updateArticle(item).then((res) => {
    //       console.log(res);
    //       if (res.status == 200) {
    //       }
    //       sessionStorage.removeItem("read");
    //     });
    //   }
    //   this.drawer = true;
    //   this.showingArticle = item;
    // },
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
        path: "details/" + item.id,
      });
    },
  },
  mounted() {
    // this.getArticleList();
  },
  created() {
    // if (this.$route.query.article) {
    //   this.articleDetails(this.$route.query.article);
    //   this.$router.push({ query: {} });
    // }
  },
};
</script>

<style lang="less" scoped>
.main {
  .title {
    text-align: center;
    font-size: 30px;
    text-shadow: 1px 1px rgba(243, 12, 12, 0.404);
    color: rgb(87, 40, 40);
  }
}
.questionList {
  > div {
    margin: 5px 0;
    height: 35px;
    line-height: 35px;
    box-shadow: 1px 2px 6px rgba(62, 94, 75, 0.185);
    position: relative;
    cursor: pointer;
    .title {
      color: rgb(10, 36, 3);
      font-size: 18px;
    }
    .time {
      position: absolute;
      right: 5px;
      color: rgba(68, 64, 59, 0.589);
    }
  }
  > div:hover {
    background-color: rgba(10, 231, 21, 0.096);
  }
}

.header {
  text-align: center;
  font-size: 12px;
  color: rgb(50, 61, 61);
}
.el-pagination {
  text-align: center;
}
/deep/.el-drawer__header {
  text-align: center;
  color: rgb(90, 22, 22);
  font-size: 20px;
}
/deep/p {
  font-size: 18px;
  color: rgb(83, 62, 22);
  text-indent: 2em;
  color: rgb(4, 51, 14);
  padding: 5px;
}
</style>