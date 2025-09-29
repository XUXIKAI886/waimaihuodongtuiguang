import { defineConfig } from 'vitepress'

const repoBase = (() => {
  if (process.env.DEPLOY_BASE) return process.env.DEPLOY_BASE
  const repo = process.env.GITHUB_REPOSITORY
  if (repo) return `/${repo.split('/')[1]}/`
  return '/'
})()

export default defineConfig({
  lang: 'zh-CN',
  base: repoBase,
  title: '美团活动推广手册',
  description: '外卖营销活动与推广工具的知识总览',
  srcDir: '.',
  themeConfig: {
    logo: '/logo.svg',
    outline: 'deep',
    nav: [
      { text: '呈尚策划', link: '/' },
      { text: '外卖活动知识', link: '/waimai-activities/' },
      { text: '外卖推广知识', link: '/waimai-promotion/' }
    ],
    sidebar: {
      '/waimai-activities/': [
        {
          text: '外卖活动知识',
          items: [
            { text: '概览', link: '/waimai-activities/' },
            {
              text: '销量提升',
              collapsed: false,
              items: [
                { text: '满减活动', link: '/waimai-activities/manjian-huodong' },
                { text: '减配送费活动', link: '/waimai-activities/jian-peisongfei' }
              ]
            },
            {
              text: '吸引新客',
              collapsed: false,
              items: [
                { text: '买赠活动', link: '/waimai-activities/mai-zeng-huodong' },
                { text: '折扣商品', link: '/waimai-activities/zhekou-shangpin' },
                { text: '优惠券（集点返券，下单返券）', link: '/waimai-activities/youhuiquan-jidian-xiadan' },
                { text: '门店新客立减', link: '/waimai-activities/xinke-lijian' },
                { text: '精准营销', link: '/waimai-activities/jingzhun-yingxiao' }
              ]
            }
          ]
        }
      ],
      '/waimai-promotion/': [
        {
          text: '外卖推广知识',
          items: [
            { text: '概览', link: '/waimai-promotion/' },
            {
              text: '推广投放工具',
              collapsed: false,
              items: [
                { text: '点金推广', link: '/waimai-promotion/campaign-tools/dianjin-tuiguang' },
                { text: '拼好饭推广', link: '/waimai-promotion/campaign-tools/pinhaofan-tuiguang' },
                { text: '超级流量卡', link: '/waimai-promotion/campaign-tools/chaoji-liuliangka' },
                { text: '铂金展位', link: '/waimai-promotion/campaign-tools/bojin-zhanwei' },
                { text: '订单通', link: '/waimai-promotion/campaign-tools/dingdan-tong' }
              ]
            },
            {
              text: '经营配套能力',
              collapsed: false,
              items: [
                { text: '金字招牌', link: '/waimai-promotion/operation-support/jinzi-zhaopai' },
                { text: '赏金联盟', link: '/waimai-promotion/operation-support/shangjin-lianmeng' },
                { text: '袋鼠店长', link: '/waimai-promotion/operation-support/daishu-dianzhang' },
                { text: '精准营销', link: '/waimai-promotion/operation-support/jingzhun-yingxiao' }
              ]
            }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
