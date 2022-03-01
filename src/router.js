
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/Index'
import introduce from '@/pages/introduce/Introduce'

import home from '@/pages/home/Home'
import _case from '@/pages/case/Case'

import price from '@/pages/price/Price'

import material from '@/pages/material/Material'
import question from '@/pages/question/Question'
import questionDetails from '@/pages/question/QuestionDetails'
import questionList from '@/pages/question/QuestionList'
import news from '@/pages/news/News'
import comment from '@/pages/comment/Comment'
import contact from '@/pages/contact/Contact'
// --------管理
import admin from '@/pages/admin/Admin'
import login from '@/pages/login/Login'
import platformIndex from '@/pages/admin/platform/PlatformIndex'
import commentManage from '@/pages/admin/platform/CommentManage'
import articleManage from '@/pages/admin/platform/ArticleManage'
import createArticle from '@/pages/admin/platform/CreateArticle'
import articleList from '@/pages/admin/platform/ArticleList'
import chatRoom from '@/pages/admin/platform/ChatRoom'
import  imgManage from '@/pages/admin/platform/ImgManage'
import carouselImg from '@/pages/admin/platform/CarouselImg'
import showImg from '@/pages/admin/platform/ShowImg'
import buddhaGold from '@/pages/admin/platform/BuddhaGold'
import landscapeStone from '@/pages/admin/platform/LandscapeStone'
import storeGoldPaint from '@/pages/admin/platform/StoreGoldPaint'
import storeGoldCover from '@/pages/admin/platform/StoreGoldCover'
import indoorGold from '@/pages/admin/platform/indoorGold'


Vue.use(Router)
export function createRouter () {
    let router = new Router({
        mode: 'history',
        // base: process.env.BASE_URL,
        // base:'/',
        routes: [
            {
              path: '/',
              name: 'index',
              redirect: '/home',
              component: index,
              children: [
                {
                  path: 'home',
                  name: 'home',
                  component: home,
                  meta: {
                    content: {
                      keywords: '首页',
                      description: '最近新闻'
                    }
                  },
                },
        
                {
                  path: 'case',
                  name: 'case',
                  component:_case,
                },
        
                {
                  path: 'price',
                  name: 'price',
                  component:price,
                  
                },
                {
                  path: 'material',
                  name: 'material',
                  component: material,
                  
                },
                {
                  path: 'question',
                  name: 'question',
                  component: question,
                  redirect:'question/questionList',
                  children:[
                    {
                      path: 'details/:id',
                      name: 'questionDetails',
                      component: questionDetails,
                    },
                    {
                      path: 'questionList',
                      name: 'questionList',
                      component: questionList,
                    }
                  ]
                },
                {
                  path: 'news',
                  name: 'news',
                  component: news,
                  meta: {
                    content: {
                      keywords: '最近新闻',
                      description: '最近新闻'
                    }
                  }
        
                },
                {
                  path: 'comment',
                  name: 'comment',
                  component:comment ,
                  meta: {
                    content: {
                      keywords: '留言',
                      description: '最近留言'
                    }
                  }
                },
                {
                  path: 'introduce',
                  name: 'introduce',
                  component: introduce,
                  meta: {
                    content: {
                      keywords: '南京市江宁区金瑞祥贴金工艺厂',
                      description: '金瑞祥工艺厂介绍'
                    }
                  }
                },
                {
                  path: 'contact',
                  name: 'contact',
                  component: contact,
                  meta: {
                    content: {
                      keywords: '联系方式',
                      description: '老板的联系方式:13951638402'
                    }
                  }
                },
        
              ]
            },
            {
              path: "/admin",
              name: 'admin',
              component: admin,
              redirect: '/admin/login',
              children: [
                {
                  path: "login",
                  name: 'login',
                  component: login
                },
                {
                  path: 'platformIndex',
                  name: 'platformIndex',
                  component: platformIndex,
                  redirect: 'platformIndex/commentManage',
                  children: [
                    {
                      path: 'commentManage',
                      name: 'commentManage',
                      component: commentManage
                    },
                    {
                      path: 'articleManage',
                      name: 'articleManage',
                      component: articleManage,
                      children:[
                        {
                          path: 'createArticle',
                          name: 'createArticle',
                          component: createArticle,
                        },
                        {
                          path: 'articleList',
                          name: 'articleList',
                          component: articleList,
                        },
                      ]
                    },
                    {
                      path: 'chatRoom',
                      name: 'chatRoom',
                      component: chatRoom
                    },
                    {
                      path: 'imgManage',
                      name: 'imgManage',
                      component: imgManage,
                      children: [
                        {
                          path: 'carouselImg',
                          name: 'carouselImg',
                          component: carouselImg,
                        },
                        {
                          path: 'showImg',
                          name: 'showImg',
                          component: showImg,
                        },
                        {
                          path: 'buddhaGold',
                          name: 'buddhaGold',
                          component: buddhaGold,
                        },
                        {
                          path: 'landscapeStone',
                          name: 'landscapeStone',
                          component: landscapeStone,
                        }, {
                          path: 'storeGoldPaint',
                          name: 'storeGoldPaint',
                          component: storeGoldPaint,
                        },
                        {
                          path: 'storeGoldCover',
                          name: 'storeGoldCover',
                          component: storeGoldCover,
                        },
                        {
                          path: 'indoorGold',
                          name: 'indoorGold',
                          component: indoorGold,
                        }
        
        
        
                      ]
                    }
                  ]
                }
              ]
            }
          ]
    })
    return router
}

