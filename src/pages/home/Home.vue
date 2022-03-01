<template>
  <div>
    <el-carousel
      indicator-position="outside"
      :interval="6000"
      :height="dataHeight"
    >
      <el-carousel-item v-for="(item, index) in lun_bo_img" :key="index">
        <img :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
    <el-divider content-position="left"
      >贴与刻，不仅是一种需求，更是一种态度</el-divider
    >
    <div class="carve_type">
      <div>
        <img src="@/assets/img/miao.png" alt="描金漆" />
      </div>
      <div>
        <img src="@/assets/img/fou.png" alt="佛像贴金" />
      </div>
      <div>
        <img src="@/assets/img/ke.png" alt="大理石刻字" />
      </div>
    </div>
    <el-card class="product_show">
      <div class="show_box">
        <img :src="showing" alt="" class="showing" />
      </div>

      <div class="hang_img">
        <div
          :class="{ change: activeIndex == index }"
          @click="changeColor(index, item.imgUrl)"
          v-for="(item, index) in shu_img"
          :key="index"
        >
          <img :src="item.imgUrl" alt="" />
        </div>
      </div>

      <div class="history">
        <p class="history_title">贴金箔与刻字小记</p>
        <div class="content">
          <p>
            关于在佛像贴金的案例中，相信大家都看过不少这种贴金箔的效果了，老板们对南京佛像贴金箔也有各种各样的态度，说贴金箔不受欢迎是不可能的，是骗人的，在一些寺庙或洞窟中雕塑释迦牟尼像，四大菩萨像，已经司空见惯。但是，佛像是源于何时呢？
          </p>
          <p>
            佛陀成道开悟后第八年，思欲报答其母——摩耶夫人生育之恩，因而上升至忉利天，趺坐于善法堂之金石上。摩耶夫人出两道乳润世尊的口唇，以示亲子之缘，佛为其母说法。
          </p>
          
          <p>时目犍连尊者运神通力，与天匠同往忉利天，将世尊相好先绘制成图，然后下来依图刻像。不日功成，像高7尺，面目手足皆紫金色。大王见佛陀相好，心生净信，得柔顺意，烦恼业障消除，是为造像之始。</p>
          <p>现在佛像贴金已经这么流行了，<router-link to="/material">贴金的材料</router-link>也是重中之重，关乎着成品的成色,至于不同的金箔贴出来的效果不一样，所以接着大家对于<router-link to="price">贴金箔的价格</router-link>又有了一定的评估</p>
          <p>
            石刻文字是人类历史初期书籍形式之一。在石头上刻字是世界上各个民族都使用过的一种记载方法。在石器时代的人类就会用利器在岩石上雕琢出图案，叫做岩画，图形记录了当时的事迹，逐渐演变成形意文字
          </p>
          <p>刻字有几种叫法</p>
          <p>
            石刻：石刻
            泛指镌刻有文字、图案的碑碣等石制品或摩崖石壁。在书法领域，也有把镌刻后，原来无意作为书法流传的称为“石刻”，一般不表书者姓名，三国六朝以前多为；而有意作为书法流传的称为“刻石”，隋唐以后多为，通常标刻书者姓名。----《古代碑帖鉴赏》
          </p>
         
          <p>
            石刻文字是人类历史初期书籍形式之一。在石头上刻字是世界上各个民族都使用过的一种记载方法。在石器时代的人类就会用利器在岩石上雕琢出图案，叫做岩画，图形记录了当时的事迹，逐渐演变成形意文字，到了文明时代，石头刻字和摩崖石刻多用来雕刻名山名胜的书法题记，碑文刻字来记录当时发生的事件和功德陈述等，现在的石头刻字多半是用在公司的门牌园林大理石刻字方面，顾客们都非常喜爱
           <router-link to="/question/details/21">那么刻字多少钱一个平方呢？</router-link>
          </p>
          <p>
            <router-link to="introduce">我们</router-link>作为经营【十】余年的老厂，诚信经营是不用想的，不然我们也不会一直经营到现在，能维持生计一半都靠老顾客的照顾。网站上贴金刻字的图片均【无P】、【真实】，我们都是老实人，也不会营销，网站也是儿子帮忙做的。如果有什么疑问可以在<router-link to="/comment">留言</router-link>模块给我们留言，我们会尽力满足你们的要求
          </p>
        </div>
      </div>

      <el-divider content-position="right"> <router-link to="/case">贴与刻，均亲力亲为</router-link></el-divider>

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

      <div class="story">
        <div class="father">
          <img src="@/assets/img/admin.jpg" alt="老板和弥勒佛" />
        </div>
        <div class="content">
          <p class="title">贴金与刻字小知识</p>
          <el-collapse accordion v-model="activeStory">
            <el-collapse-item title="仓颉" name="1" class="brief1">
              <p class="brief">
                仓颉，原姓侯冈，名颉，号史皇氏，生于陕西省白水县杨武村鸟羽山（另一说山西临汾人）。
                我国原始象形文字的创造者，我国官吏制度及姓氏的草创人之一。
                他在石头刻字的造诣上，登峰造极，及其擅长大理石刻字，园林石头刻字
              </p>
            </el-collapse-item>
            <el-collapse-item title="入木三分" name="2" class="brief1">
              <p class="brief">
                晋帝时祭北郊，更祝版，工人削之，笔入木三分。”
                当时的皇帝要到北郊去祭祀，让王羲之把祝辞写在一块木板上，再派工人雕刻。雕刻的工人在雕刻时非常惊奇，王羲之写的字，笔力竟然渗入木头三分多。他赞叹地说：“右军将军的字，真是入木三分呀！”
                自从与此大家都爱上了石头刻字，对于大理石刻字抱着敬重的态度
              </p>
            </el-collapse-item>
            <el-collapse-item title="舒文亮" name="3" class="brief1">
              <p class="brief">
                舒文亮，著名佛像贴金工艺大师，中国嵩山少林寺下院月山寺、中国嵩山大法王寺指定首席贴金工艺大师，皈依湖南岳阳市乾明古寺（先有乾明寺后有岳阳城）上明下扬大和尚门下。
                南京贴金工艺由此而来，入们对南京佛像贴金的态度越来越恭敬，因为老板们也知道贴金箔不仅可以提高自己的产品知名度，也可以交到有缘人。
              </p>
            </el-collapse-item>
            <el-collapse-item title="贴金演变" name="4" class="brief1">
              <p class="brief">
                5000多年前的新石器时代，考古学家在四川省广汉县三星堆遗址出土文物中，发现并确认其中青铜器用黄金薄片贴饰。可见，我们的祖先在5000多年前已有珍惜黄金的意识，并掌握了贴饰黄金薄片的技术。到了3000多年前的商代，我国贴金技术日臻成熟，且广泛用于皇宫贵族或佛像寺庙的贴饰，以表现其富丽堂皇或尊贵庄重。
              </p>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </el-card>
    <el-divider content-position="left"
      >站在巨人的肩膀上，我们才能看的更远</el-divider
    >
      <div class="article_box">
    <div>
      <p>
        <span class="title">佛像贴金箔阅读推荐</span>
        <span class="more" @click="allQuestion">
           <router-link to="/question">+More</router-link>
        </span>
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
        <span class="title">大理石刻字阅读推荐</span>
        <span class="more">
          <router-link to="/question">+More</router-link>
        </span>
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
        <span class="more">
           <router-link to="/question">+More</router-link>
        </span>
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
  </div>
</template>

<script>
import axios from 'axios'
import myArticle from "./Article";
export default {
  async asyncData() {
    let rs1 = await axios.get("/api/img/getHomeImg", {
      params: {
        typeId: 4,
      },
    });
     let rs2 = await axios.get("/api/img/getHomeImg", {
      params: {
        typeId: 1,
      },
    });
     let rs3 = await axios.get("/api/img/getHomeImg", {
      params: {
        typeId: 6,
      },
    });
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
    let res1 = await axios.get("/api/article/articleByType", {
      params: {
        ...queryInfo1,
      },
    });
      let res2 = await axios.get("/api/article/articleByType", {
      params: {
        ...queryInfo2,
      },
    });
      let res3 = await axios.get("/api/article/articleByType", {
      params: {
        ...queryInfo3,
      },
    })
    console.log(rs3);
    return {
      lun_bo_img: rs1.data,
      shu_img:rs2.data,
      showing:rs2.data[0].imgUrl,
      various_img:rs3.data,
       articleByType1: res1.data.list,
      articleByType2: res2.data.list,
      articleByType3: res3.data.list,
    };
  },
  data() {
    return {
      dataHeight: "90vh",
      various_img: [],
      activeIndex: 0,
      activeName: "",
      labels: [
        "室内贴金",
        "佛像贴金",
        "景观石刻字",
        "刻字描金漆",
        "刻字贴金箔",
      ],
      imgType: "",
      previewList: [],
      activeStory: ["1"],
     
      total: 0,
      result:null,
      project: 'default'
    };
  },
  components: {
    myArticle,
  },
  methods: {
    handleClick(tab, event) {
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
        console.log(this.previewList);
      });
    },
    getLunBoImg() {
      this.$API.image
        .getHomeImg(this.$constant.IMG_TYPE.IMG_LUN_BO)
        .then((res) => {
          this.lun_bo_img = res.data;
        });
    },
    getShuImg() {
      this.$API.image
        .getHomeImg(this.$constant.IMG_TYPE.IMG_SHU)
        .then((res) => {
          this.shu_img = res.data;
          this.showing = this.shu_img[0].imgUrl;
        });
    },

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

    changeColor(index, url) {
      this.showing = url;
      this.activeIndex = index;
    },
     allQuestion() {
      this.$router.push("/question");
    },
     articleDetails(item) {
      this.$router.push({
        path: "/question/details/" + item.id,
      });
    },
  },
  computed: {},
  created() {
  },
  mounted() {
    // this.getVariousImg();
  },
};
</script>

<style lang="less" scoped>
/deep/.a{
text-decoration: none;
}
img {
  width: 100%;
  height: 100%;
}
.main {
  padding: 0;
  margin: auto;
}

.carve_type {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  div {
    width: 22%;
    height: 18%;
  }
}

.product_show {
  margin: auto;
  width: 75%;
  height: 100%;
  background: rgba(128, 120, 75, 0.021);
  .show_box {
    display: flex;
    justify-content: center;
    .showing {
      background: #ffc;
      border-top: 12px solid rgba(5, 247, 5, 0.377);
      border-right: 12px solid rgba(0, 153, 204, 0.26);
      border-bottom: 12px solid rgba(153, 255, 153, 0.288);
      border-left: 12px solid rgba(255, 204, 51, 0.247);
      width: 45%;
      height: 80vh;
    }
  }
}

.hang_img {
  // margin-top: 10px;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  div {
    width: 13%;
    height: 24vh;
    box-sizing: border-box;
    margin: 0 1px;
    cursor: pointer;
    img {
      vertical-align: top;
    }
  }
  // 动态样式修改
  .change {
    border: 3px solid rgba(141, 243, 7, 0.986);
  }
}

.history {
  padding-right: 15px;
  padding-bottom: 15px;
  width: 100%;
  // height: 400px;
  box-shadow: 4px 4px 5px #888888;
  .history_title {
    text-align: center;
    font-size: 25px;
    text-shadow: 1px 1px rgba(243, 12, 12, 0.404);
    color: rgb(87, 40, 40);
  }
  .content {
    .title {
      color: tomato;
      text-shadow: 2px 2px 5px rgb(105, 41, 41);
    }
    p {
      text-indent: 2em;
      color: rgb(105, 76, 22);
    }
  }
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

// 故事
.story {
  margin-top: 50px;
  display: flex;
  .father {
    flex: 1;
  }
  .content {
    flex: 1;
    padding-left: 10px;
    .title {
      text-shadow: 1px 1px rgba(243, 12, 12, 0.404);
      color: rgb(87, 40, 40);
    }
    .brief_ist {
      .brief {
        border-radius: 5px;
        padding-left: 10px;
        box-shadow: 4px 4px 6px #ccc;
        width: 97%;
        background-color: rgba(72, 93, 105, 0.048);
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
.article_box {
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

/deep/.el-collapse-item__content {
  padding: 5px;
}
</style>>