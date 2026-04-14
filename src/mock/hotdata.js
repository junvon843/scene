import localImage1 from '../assets/freenaturestock/freenaturestock-1011.jpeg'
import localImage2 from '../assets/freenaturestock/freenaturestock-1321.jpeg'
import localImage3 from '../assets/freenaturestock/freenaturestock-1458.jpeg'
import localImage4 from '../assets/freenaturestock/freenaturestock-1579.jpeg'
import localImage5 from '../assets/freenaturestock/freenaturestock-2290.jpg'

export const hotArticles = [
  {
    id: 1,
    title: '蔚蓝弧湾轻奢海岸线三日慢游',
    subtitle: '华南海岛的日落、步道与海景酒店全记录',
    cover: localImage1,
    region: '华南',
    publishAt: '2026-04-01',
    readMinutes: 12,
    summary: '从码头到弧湾观景台，这条线兼顾轻松度和出片率，适合第一次海岛自由行。',
    sections: [
      { heading: 'Day 1 海风入场', text: '下午抵达后先办理入住，不赶景点。把第一晚交给海景露台，黄昏前在酒店附近拍一组暖色调开场图，文章气质会很好。', image: localImage1 },
      { heading: 'Day 2 步道主线', text: '清晨从南侧步道上行，避开旅行团高峰。第二观景台是主机位，建议拍广角和中焦两组，既有环境也有人物细节。', image: localImage2 },
      { heading: 'Day 3 船班返程', text: '返程日不要塞行程，留 2 小时做素材补拍：早餐、海面、码头细节。后期排版时这些过渡画面非常有用。', image: localImage5 }
    ]
  },
  {
    id: 2,
    title: '鎏金古城夜游：一条路拍出电影感',
    subtitle: '避开主街拥堵，小众巷道完整攻略',
    cover: localImage5,
    region: '华北',
    publishAt: '2026-03-19',
    readMinutes: 10,
    summary: '把夜游拆成三个时间段：亮灯前、蓝调期、深夜期，素材层次会明显提升。',
    sections: [
      { heading: '亮灯前 30 分钟', text: '17:20 到达东门，先拍建筑大场景。这个时段天空还有层次，适合定下整篇文章的视觉基调。', image: localImage5 },
      { heading: '蓝调黄金窗口', text: '18:40 到 19:00 是最稳妥时间段。灯笼亮度与天空亮度接近，手机也能拍出通透画面。', image: localImage1 },
      { heading: '深夜质感收尾', text: '21:00 后游客减少，拍店铺门头、石板路反光和行人背影，能让文章更有叙事感而非单纯打卡。', image: localImage4 }
    ]
  },
  {
    id: 3,
    title: '云端摩登天际城 48 小时高质感路线',
    subtitle: '天际线、艺术展、天台餐厅一次打包',
    cover: localImage2,
    region: '华东',
    publishAt: '2026-03-08',
    readMinutes: 11,
    summary: '城市旅行最怕碎片化，这条路线把观景、艺术和夜景连成一条完整叙事线。',
    sections: [
      { heading: '半天拿下城市纵深', text: '第一天先上观景台，拍远景建立空间感；下午转去街区拍中近景，形成完整镜头语言。', image: localImage2 },
      { heading: '艺术展提升内容密度', text: '选沉浸式展馆，画面信息量高，能自然补足人物互动内容，不会只剩建筑空镜。', image: localImage3 },
      { heading: '夜景必须预留机动', text: '夜景受天气影响大，建议预留 1 小时机动时间。阴天就拍街头反光，晴天就拍天台剪影。', image: localImage4 }
    ]
  },
  {
    id: 4,
    title: '镜湖森林秋色：从晨雾到慢门的完整教程',
    subtitle: '低体力门槛也能拍出高级感游记',
    cover: localImage3,
    region: '华东',
    publishAt: '2026-02-26',
    readMinutes: 13,
    summary: '三段光线、三种拍法，适合亲子/情侣慢节奏出行，也适合新手练习图文创作。',
    sections: [
      { heading: '晨雾阶段', text: '6:30 前进入湖东步道，低饱和冷调最容易出片。建议利用前景树枝做遮挡，画面会更有纵深。', image: localImage3 },
      { heading: '下午树冠层次', text: '侧光时段拍红叶最稳，构图时尽量保留步道引导线，让视觉自然过渡到人物或远景。', image: localImage4 },
      { heading: '傍晚倒影收束', text: '日落后 20 分钟用慢门拍湖面，整篇文章会从“记录”升级到“氛围表达”。', image: localImage1 }
    ]
  }
]
