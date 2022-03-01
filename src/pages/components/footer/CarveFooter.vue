<template>
  <div class="">
    <div class="recommend">
      <span>友情链接:</span>
      <a ref="nofollow" href="https://baike.baidu.com/item/%E5%88%BB%E5%AD%97/2402645?fr=aladdin">刻字</a>

      <a ref="nofollow" href="https://tieba.baidu.com/f?kw=%BF%CC%D7%D6&fr=ala0&tpl=5&dyTabStr=MCwzLDYsNCw3LDEsNSwyLDgsOQ%3D%3D">刻字贴吧</a>
      <a ref="nofollow" href="https://www.chanxan.com/">激光切割机</a>
      
      <a ref="nofollow" href="http://www.gudiaotj.com">古雕工艺贴金装饰</a>
      <a ref="nofollow" href="https://baike.baidu.com/item/%E7%9F%B3%E5%A4%B4%E5%88%BB%E5%AD%97/8207412?fr=aladdin">石头刻字</a>
      <a ref="nofollow" href="https://baike.baidu.com/item/%E8%B4%B4%E9%87%91/15415179?fromtitle=%E8%B4%B4%E9%87%91%E7%AE%94&fromid=8554675&fr=aladdin">贴金箔</a>
      <a ref="nofollow" href="http://www.shiyizhang.com/tags/184-0.html">刻字工厂</a>
      <a ref="nofollow" href="https://b2b.baidu.com/slist/053074397b64">爱采购</a>
      <a ref="nofollow" href="https://tieba.baidu.com/f?dyTabStr=MCw2LDQsMywxLDUsMiw3LDgsOQ%3D%3D&fr=ala0&kw=%CC%F9%B0%C9&tpl=5">百度贴吧</a>
      
      
    </div>
    <div class="footer">
      <div class="left">
        <img
          src="@/assets/img/logo.png"
          class="logo"
          alt="南京市江宁区金瑞祥贴金工艺厂的logo"
        />
        <div class="go_si">
          <p>公司地址：江苏省南京市江宁区横溪街道甘西社区下脉腰10-1号</p>
          <p class="chenqi">网站负责人：陈祁（若有侵权请联系13814529300）</p>
        </div>
      </div>
      <div class="right">
        <div class="right_content">
          <div class="wx_box">
            <img src="@/assets/img/wx.jpg" alt="微信联系方式" class="wx" />
          </div>

          <div class="tele">
            <!-- <title>南京市江宁区金瑞祥贴金工艺厂</title>
    <meta name="description" content="贴金,刻字,如佛像贴金,大理石刻字,大理石贴金箔,室内贴金等" />
    <meta name="Keywords" content="南京贴金,南京刻字" />  -->
            <p>联系电话：13951638402</p>
            <!-- <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> -->
            <p>QQ:1693368640</p>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>
        Copyright © 2020-2022 南京市江宁区金瑞祥贴金工艺厂 版权所有
        <a
        class="icp"
         href="https://beian.miit.gov.cn/#/Integrated/index">苏ICP备2021008093号</a>
        
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>

.recommend {
  width: 100%;
  height: 40px;
 background-color: rgb(13, 49, 37);
  span {
    padding-left: 4%;
    font-size: 18px;
    color: rgba(209, 195, 195, 0.658);
    line-height: 40px;
  }
  a {
    line-height: 40px;
    color: rgba(209, 195, 195, 0.658);


    font-size: 12px;
   text-decoration: none;
  }
}
.footer {
  width: 100%;
  height: 200px;
  background-color: rgb(50, 50, 50);
  display: flex;
  color: white;
}

.left {
  flex: 3;
  position: relative;
  .logo {
    position: absolute;
    top: 5%;
    height: 45%;
  }
  .go_si {
    position: absolute;
    top: 45%;
    left: 5%;
  }
}
.right {
  flex: 2;
  .right_content {
    display: flex;
    width: 100%;
    height: 100%;
    div {
      flex: 1;
    }
    .wx_box {
      // position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .wx {
        width: 45%;
      }
    }
    .tele {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}

.chenqi {
  font-size: 12px;
  color: white;
}
.copyright {
  width: 100%;
  height: 40px;
  background-color: rgb(13, 49, 37);
  p {
    font-size: 10px;
    color: white;
    text-align: center;
    line-height: 40px;
    margin: 0;
  }
  .icp{
  text-decoration: none;
    color: white;
  
}
}
</style>> 
