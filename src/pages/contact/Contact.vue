<template>
  <div class="contact">
       <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/home">首页</el-breadcrumb-item>
        <el-breadcrumb-item>联系我们</el-breadcrumb-item>
      </el-breadcrumb>
        <p class="title">联系方式</p>

    <el-card>
      <el-descriptions title="联系信息">
        <el-descriptions-item label="姓名">陈惠胜</el-descriptions-item>
        <el-descriptions-item label="手机号">13951638402</el-descriptions-item>
        <el-descriptions-item label="居住地">南京市江宁区横溪街道甘西社区下脉腰10-1号</el-descriptions-item>
        <el-descriptions-item label="企业">
          <el-tag size="small">南京市江宁区金瑞祥贴金工艺厂</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址"
          >南京市江宁区横溪街道甘西社区下脉腰10-1号</el-descriptions-item
        >
      </el-descriptions>
    </el-card>
  </div>
</template>

<script>
export default {
  head: {
    title: '「金瑞祥贴金联系页」联系方式_南京江宁_质量保障_金瑞祥_专业_信誉_13951638402',
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
};
</script>

<style lang="less" scoped>
.contact {
  padding: 20px;
  width: 75%;
  margin: auto;
}
 .title {
    font-size: 30px;
    text-align: center;
  }
</style>