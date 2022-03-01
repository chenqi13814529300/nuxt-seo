<template>
  <div class="comment">
    <el-card class="main">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/home">首页</el-breadcrumb-item>
        <el-breadcrumb-item>在线留言</el-breadcrumb-item>
      </el-breadcrumb>
      <p class="title">留言反馈</p>
      <el-input
        type="text"
        placeholder="手机号码"
        v-model="commentData.username"
        maxlength="13"
        show-word-limit
        class="username"
      ></el-input>
      <el-input
        class="text_area"
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="commentData.content"
      >
      </el-input>
      <el-button size="small" type="info" plain @click="addComment"
        >提交</el-button
      >

      <div class="comment" v-for="(item, index) in comment_list" :key="index">
        <el-image
          class="header_img"
          :src="require(`@/assets/img/random_header_img/${item.headerImg}.png`)"
          alt="随机头像"
        ></el-image>

        <span class="phone">{{ item.username | mobilePhoneFilter }}</span>
        <p class="text">{{ item.content }}</p>
        <p class="time">{{ item.createTime }}</p>
      </div>

      <el-pagination
        :page-size="queryInfo.pageSize"
        layout="prev, pager, next"
        :total="total"
        @current-change="changePage"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    let  queryInfo= {
        query: "",
        pageNum: 1,
        pageSize: 6,
      }
     let rs = await axios.get("/api/comment/all", {
      params:{
            ...queryInfo
        }
    });
    return {
      comment_list:rs.data.comments,
      total:rs.data.total
    };
  },
  head: {
    title: '「金瑞祥贴金留言页」贴金价格留言_贴金联系方式_老板评价_南京专业刻字贴金权威公司',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '金瑞祥贴金经营数十年，不满意不收费，精通【贴金装潢】｜【佛像贴金】｜【大理石贴金】｜【大理石刻字】｜【庙宇装潢】'
      },{
         hid: 'keywords',
        name: 'keywords',
        content: '南京佛像贴金,公司门牌,刻字'
      }
    ],
    
  },
  data() {
    return {
      commentData: {
        phone: "",
        content: "",
        headerImg: Math.round(Math.random() * 10),
      },
      total: null,
      comment_list: [],
      queryInfo: {
        query: "",
        pageNum: 1,
        pageSize: 6,
      },
    };
  },
  methods: {
    getComment() {
      this.$API.comment.getComment(this.queryInfo).then((res) => {
        this.comment_list = res.data.comments;
        this.total = res.data.total;
      });
    },
    addComment() {
      this.$API.comment.addComment(this.commentData).then((res) => {
        this.$message({
          message: "添加成功",
          type: "success",
        });
        this.commentData.username = "";
        this.commentData.content = "";
        this.getComment();
      });
    },
    changePage(num) {
      this.queryInfo.pageNum = num;
      this.getComment();
    },
  },
  created() {},
  mounted() {
    // this.getComment();
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 75%;
  height: 100%;
  margin: 20px auto;
  background: rgba(236, 225, 163, 0.041);
  border-radius: 5px;
  box-shadow: 10px 12px 12px rgb(247, 249, 250);
  .title {
    font-size: 30px;
    text-align: center;
  }

  .text_area,
  .username {
    width: 50%;
  }
  // 每个评论内容
  .comment {
    padding: 5px;
    min-height: 60px;
    box-shadow: 4px 4px 5px #ccc;
    margin: 10px 0;
    border-radius: 5px;
    .header_img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .phone {
      color: rgb(253, 76, 6);
    }
    .time {
      color: rosybrown;
      text-align: right;
      padding-right: 5px;
    }
  }
}

.el-pagination {
  text-align: center;
  background-color: rgba(148, 128, 14, 0.041);
}
</style>>
