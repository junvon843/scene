import localImage1 from '../assets/freenaturestock/freenaturestock-1011.jpeg'
import localImage2 from '../assets/freenaturestock/freenaturestock-1321.jpeg'
import localImage3 from '../assets/freenaturestock/freenaturestock-1458.jpeg'
import localImage4 from '../assets/freenaturestock/freenaturestock-1579.jpeg'
import localImage5 from '../assets/freenaturestock/freenaturestock-2290.jpg'

export const scenicCategories = ['雪山峡谷', '海岛海岸', '城市人文', '森林湖泊', '古迹遗产']

export const regions = ['华东', '华南', '西南', '西北', '华北']

export const seasons = ['春', '夏', '秋', '冬', '四季皆宜']

export const scenicSpots = [
  {
    id: 1,
    title: '霞慕尼云镜雪谷',
    region: '西南',
    season: '冬',
    type: '雪山峡谷',
    cover: 'https://images.unsplash.com/photo-1519817650390-64a93db511aa?auto=format&fit=crop&w=1500&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1508264165352-258859e62245?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1517823382935-51a93f4209ea?auto=format&fit=crop&w=1600&q=80'
    ],
    intro: '海拔落差丰富，冰川与云海同框，是摄影与轻徒步爱好者的圣地。',
    tags: ['冰川徒步', '日照金山', '奢华民宿'],
    baseLikes: 2860,
    ticket: '220 元 / 人',
    openTime: '08:00 - 18:30',
    tips: ['凌晨出发可避开人流', '高反人群建议提前适应海拔', '景区昼夜温差明显，注意保暖'],
    content: '霞慕尼云镜雪谷以壮阔雪山和层叠峡谷著称，冬季可观测高概率云海与日照金山。谷内木栈道维护良好，沿线观景台视野开阔，适合深度拍摄和精品游记创作。',
    noteSections: [
      { title: '晨曦雪峰', text: '清晨第一缕光线打在山脊，整个谷地会泛起浅金色。', image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1500&q=80' },
      { title: '峡谷步道', text: '栈道穿梭于松林之间，途中可见冰瀑和融雪溪流。', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1500&q=80' }
    ]
  },
  {
    id: 2,
    title: '蔚蓝弧湾秘境岛',
    region: '华南',
    season: '夏',
    type: '海岛海岸',
    cover: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1600&q=80'
    ],
    intro: '海水清澈如琉璃，礁石海岸和细白沙滩形成极强层次感。',
    tags: ['潜水', '帆船', '海景度假'],
    baseLikes: 3520,
    ticket: '免门票，船票 160 元',
    openTime: '全天开放',
    tips: ['防晒等级建议 50+', '离岛船班次需提前确认', '浮潜建议穿防护鞋'],
    content: '蔚蓝弧湾秘境岛拥有高透明度海域，适合潜水、日落拍摄和轻奢度假。沿海步道可俯瞰弧形海湾，夜晚可体验海边露台晚餐。',
    noteSections: [
      { title: '海湾日落', text: '傍晚时分天空被染成橘粉色，海面反射层次丰富。', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1500&q=80' },
      { title: '礁石线漫步', text: '沿着礁石线步行，随手一拍就是杂志封面感。', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1500&q=80' }
    ]
  },
  {
    id: 3,
    title: '镜湖森林秘语谷',
    region: '华东',
    season: '秋',
    type: '森林湖泊',
    cover: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1500&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80'
    ],
    intro: '湖面如镜，秋季红叶映湖，步道舒适，适合家庭与情侣慢游。',
    tags: ['森林疗愈', '湖畔骑行', '亲子游'],
    baseLikes: 2418,
    ticket: '98 元 / 人',
    openTime: '07:30 - 17:30',
    tips: ['秋季周末建议错峰', '可租电助力自行车环湖', '携带轻便雨具'],
    content: '镜湖森林秘语谷以静谧湖区与原始林木闻名，空气湿润清新。秋季层林尽染，游览动线成熟，适合慢节奏旅行与图文记录。',
    noteSections: [
      { title: '晨雾湖畔', text: '清晨薄雾漂浮在湖面，氛围感极强。', image: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=1500&q=80' },
      { title: '红叶步道', text: '步道两侧红叶茂密，适合拍摄人像大片。', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80' }
    ]
  },
  {
    id: 4,
    title: '鎏金古城时光轴',
    region: '华北',
    season: '四季皆宜',
    type: '古迹遗产',
    cover: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1500&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80'
    ],
    intro: '古建与现代光影融合，夜游灯光秀极具沉浸感。',
    tags: ['历史文化', '夜游', '美食街区'],
    baseLikes: 3176,
    ticket: '120 元 / 人',
    openTime: '09:00 - 21:30',
    tips: ['夜游建议提前预约', '古城地面多石板，建议防滑鞋', '美食街区高峰在 19 点后'],
    content: '鎏金古城时光轴完整保留传统街巷肌理，并通过灯光叙事打造沉浸式夜游体验。白天适合历史文化探访，夜晚则是城市氛围大片主场。',
    noteSections: [
      { title: '城门落日', text: '古城门在夕阳下呈现温润金色质感。', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1500&q=80' },
      { title: '夜色街巷', text: '灯笼点亮石板路，街巷层次与氛围兼具。', image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1500&q=80' }
    ]
  },
  {
    id: 5,
    title: '云端摩登天际城',
    region: '华东',
    season: '春',
    type: '城市人文',
    cover: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1500&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80'
    ],
    intro: '高空观景台、艺术街区、精品餐饮三位一体，都市旅行首选。',
    tags: ['都市漫游', '地标打卡', '艺术展览'],
    baseLikes: 2899,
    ticket: '观景台 180 元',
    openTime: '10:00 - 22:00',
    tips: ['观景台建议预约黄昏场', '地铁换乘最方便', '热门展览需提前购票'],
    content: '云端摩登天际城融合摩登建筑与人文艺术，适合城市深度游。春季气候舒适，夜间天际线极具视觉冲击，适合拍摄高质感旅行内容。',
    noteSections: [
      { title: '天际线时刻', text: '黄昏与夜色交替时，城市灯光渐次点亮。', image: 'https://images.unsplash.com/photo-1486308510493-aa64833637b9?auto=format&fit=crop&w=1500&q=80' },
      { title: '艺术街区', text: '街区墙绘与装置艺术丰富，创作素材充足。', image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1500&q=80' }
    ]
  },
  {
    id: 6,
    title: '大漠星河秘境线',
    region: '西北',
    season: '秋',
    type: '雪山峡谷',
    cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80'
    ],
    intro: '戈壁地貌与星空露营结合，拥有强烈荒野高级感。',
    tags: ['星空营地', '越野', '荒野摄影'],
    baseLikes: 2230,
    ticket: '套票 260 元',
    openTime: '08:30 - 20:00',
    tips: ['昼夜温差大需备冲锋衣', '星空拍摄建议携带三脚架', '越野路线请跟随向导'],
    content: '大漠星河秘境线是一条集地貌观光、荒野露营与星空摄影于一体的深度线路。秋季天候稳定，夜空通透，是高质量旅行内容创作热门地。',
    noteSections: [
      { title: '沙丘光影', text: '侧逆光下沙丘纹理细腻，大片感十足。', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1500&q=80' },
      { title: '银河营地', text: '夜里银河清晰可见，露营氛围满分。', image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1500&q=80' }
    ]
  }
]

export const travelNotes = [
  {
    id: 101,
    scenicId: 2,
    title: '在弧湾看一场奶油橘日落',
    excerpt: '从码头到悬崖步道，海风一点点把城市带来的焦虑吹散。傍晚时分，当夕阳把海面染成奶油橘，那一刻你会明白——有些风景，真的值得跨越大半个中国去遇见。',
    author: '星野旅人',
    views: 12890,
    publishAt: '2026-03-12',
    cover: localImage1,
    readingMinutes: 9,
    location: '华南·蔚蓝弧湾秘境岛',
    sections: [
      { heading: '出发前的准备', text: '这条线路最舒服的节奏是两天一夜——白天拍海岸线，傍晚等落日，夜里住在靠海的露台酒店。提前一周订船票和岛上接驳车，尤其是周末，票会很紧张。行李不用带太多，几件舒服的衣服、防晒霜、一双防水鞋就够了。最重要的是带一颗愿意慢下来的心。', image: localImage2 },
      { heading: '步道上的偶遇', text: '从南码头步行到弧湾观景台，大约四十分钟。途中有三段礁石观景点，每一个都值得停下来看一看。我最喜欢的是第二段——站在礁石上，看海浪一层层涌来又退去，阳光穿透浪花，形成钻石般的光斑。那一刻，你会忘记时间的存在，只想让这片蓝再多停留一会儿。', image: localImage1 },
      { heading: '日落那十二分钟', text: '傍晚六点十分左右，天空开始出现橘粉色的渐变。最后十二分钟是黄金时刻——太阳一点点沉入海面，云层被染成奶油橘，整个世界像是被裹进了一层暖光。提前半小时到达机位，让朋友背向海面站着，你会得到一张干净的轮廓剪影，背景是整片燃烧的晚霞。', image: localImage5 }
    ],
    gear: ['24-70mm 镜头', '偏振镜', '轻便三脚架', '防晒衣和防水鞋'],
    itinerary: ['Day1 14:00 入岛办理入住', 'Day1 17:20 弧湾观景台拍日落', 'Day2 07:30 海岸步道晨拍后返程'],
    budget: ['船票 160 元', '海景酒店 680 元/晚', '餐食约 220 元/天'],
    longBody: [
      '这条海岛线路最大的优点是节奏舒适，几乎没有强制赶路的压力。把拍摄重心放在傍晚和清晨，你会同时拿到柔和暖光和清透冷光两套风格，内容呈现会更完整。',
      '岛上的商业化不算重，仍然保留了不少自然海岸线。建议把时间留给步道与观景台，不要把行程排满。慢下来后，你会发现海风、浪声和光线变化本身就是最好的旅行体验。有时候，不需要拍很多照片，光是坐在礁石上发一场呆，就已经足够值得。',
      '我常常想起那天傍晚，夕阳把海面染成奶油橘的那一刻。那是一种说不出的颜色——温暖、柔软、像是童年里某个模糊又美好的记忆。我想，这大概就是旅行的意义：不是为了看多少风景，而是为了在某个瞬间，被这片风景彻底打动，然后在心里记一辈子。'
    ]
  },
  {
    id: 102,
    scenicId: 1,
    title: '雪谷轻徒步：雪山里的温柔时光',
    excerpt: '路线难度友好，真正累的是后半段风口，但当你站在木桥上等待第一束光打在雪脊上时，那些辛苦瞬间烟消云散。原来，雪山的美，是需要用脚步去换的。',
    author: '林间慢行',
    views: 9876,
    publishAt: '2026-02-21',
    cover: localImage4,
    readingMinutes: 11,
    location: '西南·霞慕尼云镜雪谷',
    sections: [
      { heading: '徒步节奏', text: '全线约十三公里，海拔缓升，不追求速度。每两公里安排一次补水，真正累的是后半段风口，风从峡谷里灌过来，把人吹得有点站不稳。这时候咬牙往前走一段，转过弯就会豁然开朗——一片开阔的雪原出现在眼前，阳光从云层缝隙里洒下来，那一刻你会觉得，所有的辛苦都是值得的。', image: localImage4 },
      { heading: '高光时刻', text: '清晨七点，在木桥上等待第一束光。太阳从山背后探出头，雪脊一点点被点亮，从灰白变成金色，再变成纯白。那种变化像是魔法。站在那里，看雪山在晨光里苏醒，空气冷得清脆，呼吸间满是松树和雪的味道。这个机位拍人像和风景都很稳——背景是整片雪山，前景是木桥的栏杆，人在中间，像是走进了一幅画。', image: localImage3 },
      { heading: '返程路上', text: '回程不要走原路，换到北侧林线小道。这条路更安静，光影也更柔和——阳光从树林缝隙里洒下来，形成斑驳的光点。走在林间，听自己的脚步声在雪地上轻轻回响，偶尔有只雪兔从灌木丛里窜出来，又很快消失。快到出口的时候，有一家山口咖啡馆，可以坐在露台上喝一杯热可可，看整个峡谷全景，让雪山的美在心里多停留一会儿。', image: localImage2 }
    ],
    gear: ['登山杖', '保暖中层', '头灯', '热水保温杯'],
    itinerary: ['Day1 06:00 出发进入雪谷', 'Day1 09:30 木桥机位拍摄', 'Day1 13:00 北侧林线返程'],
    budget: ['景区门票 220 元', '向导拼团 300 元', '补给与餐饮 150 元'],
    longBody: [
      '雪谷路线并不极限，但气候变化很快，真正决定体验的是准备是否充足。分层穿衣、补水和节奏控制比“走得快”更重要，尤其是第一次上高海拔的朋友。',
      '如果你希望产出高质量游记，建议把“徒步记录”和“情绪画面”同时拍。前者讲路线价值，后者讲感受和氛围，两者结合会让整篇文章更像一个完整故事。'
    ]
  },
  {
    id: 103,
    scenicId: 4,
    title: '古城夜游与小众机位地图',
    excerpt: '避开拥挤主街，走三条侧巷就能拍到灯笼长街和城墙全景。',
    author: '镜头收藏家',
    views: 15420,
    publishAt: '2026-03-02',
    cover: localImage5,
    readingMinutes: 8,
    location: '华北·鎏金古城时光轴',
    sections: [
      { heading: '侧巷路线', text: '主街人流大，但古城真正出片的地方在平行侧巷。17:30 后灯光渐开，建议先走东门连廊，再折返到南巷。', image: localImage5 },
      { heading: '夜景参数', text: '手持拍摄推荐快门不低于 1/80，ISO 可拉到 1600。城墙灯带颜色偏暖，白平衡建议控制在 3600-4200。', image: localImage1 },
      { heading: '美食与休息', text: '南巷尽头有一家开放式庭院餐吧，二层露台可直拍灯笼街。点一份热汤面，等待蓝调时刻非常舒服。', image: localImage2 }
    ],
    gear: ['35mm 定焦', '便携补光灯', '充电宝'],
    itinerary: ['17:00 东门连廊开拍', '18:20 南巷蓝调时刻', '20:00 城墙夜景收尾'],
    budget: ['门票 120 元', '城内餐饮 180 元', '夜间茶馆 88 元'],
    longBody: [
      '古城拍摄容易陷入“只拍主街”的惯性，但真正独特的镜头通常藏在侧巷和转角。提前踩点后再回到高峰时段，你会明显提高出片效率。',
      '夜色里的人文氛围是古城最迷人的部分。建议保留一些“非标准机位”，比如店铺窗内光、行人背影和石板路反光，这些细节会让你的文章更有在场感。'
    ]
  },
  {
    id: 104,
    scenicId: 5,
    title: '摩登城市：在高楼的缝隙里找回自己',
    excerpt: '观景台、展览、天台餐厅——这不是打卡列表，而是用两天的时间，在城市的光影里找到一种节奏感。在高处俯瞰人间，在艺术里感受柔软，在夜晚让城市的灯火陪你喝一杯酒。',
    author: '舟行万里',
    views: 8450,
    publishAt: '2026-01-28',
    cover: localImage2,
    readingMinutes: 10,
    location: '华东·云端摩登天际城',
    sections: [
      { heading: '城市纵线', text: '上午直达观景台，下午逛艺术街区，晚上预约天台餐厅。这样安排可以同时拿到白天与夜晚两组城市光线。站在玻璃幕墙前俯瞰整座城市，那些平日里让你焦虑的高楼此刻变得渺小，像是棋盘上的棋子。', image: localImage2 },
      { heading: '展览选择', text: '建议挑“沉浸影像”类展馆，视觉效果强，社交平台传播度更高。工作日午后人少，拍摄自由度最好。', image: localImage3 },
      { heading: '夜景拍摄', text: '天台拍摄时注意利用玻璃反射构图，人物与城市灯海叠加会有非常现代的质感。', image: localImage4 }
    ],
    gear: ['70-200mm 镜头', '偏冷调滤镜', '小型稳定器'],
    itinerary: ['Day1 上午观景台', 'Day1 下午艺术展馆', 'Day1 夜晚天台餐厅与街拍'],
    budget: ['观景台票 180 元', '展览门票 120 元', '餐饮 300-500 元'],
    longBody: [
      '城市旅行最容易做成“打卡列表”，但真正高级的体验来自节奏感。把同一片城市在白天、黄昏、夜晚分开看，你会捕捉到完全不同的情绪层次。',
      '建议在文章里加入交通和时间管理细节，比如地铁站出口选择、排队高峰时段、餐厅预约窗口。这些信息非常实用，也能显著提升你的内容质量。'
    ]
  },
  {
    id: 105,
    scenicId: 3,
    title: '镜湖秋色：晨雾与红叶的诗意漫步',
    excerpt: '晨雾时段、红叶下午光和傍晚倒影——这不是三个拍摄时段，而是三种完全不同的诗意。在镜湖，秋天是被慢下来的时光雕琢出来的。',
    author: '木舟',
    views: 11230,
    publishAt: '2026-03-30',
    cover: localImage3,
    readingMinutes: 7,
    location: '华东·镜湖森林秘语谷',
    sections: [
      { heading: '晨雾时分', text: '六点二十前到湖东步道，能抓到最轻薄的一层雾。这个时段的色调偏蓝，整个世界像是被调进了水墨画。站在湖边，你几乎听不到任何声音——没有游客的喧嚣，只有偶尔的鸟鸣和树叶的沙沙声。', image: localImage3 },
      { heading: '红叶午后', text: '两点半到四点的侧光最适合拍树冠层次。压低机位，让步道的线条延伸到画面深处，前景的红叶和远处的湖面连成一条视觉的河流。这时候也可以拍人像——侧光让轮廓清晰，红叶背景温暖而丰富，人站在里面像是被秋天拥抱。', image: localImage4 },
      { heading: '倒影收尾', text: '日落后二十分钟水面最平静，慢门拍摄会把红叶与远山融合成油画感。蹲在湖边，看着倒影和实景重叠，那一刻突然明白：镜湖为什么叫镜湖——因为它真的能把整个秋天的美，完完整整地复制一遍。', image: localImage1 }
    ],
    gear: ['ND 滤镜', '快门线', '防潮垫'],
    itinerary: ['06:20 湖东步道晨雾', '15:00 红叶林线拍人像', '18:10 湖心平台慢门收尾'],
    budget: ['门票 98 元', '环湖车 40 元', '简餐与咖啡 90 元'],
    longBody: [
      '镜湖的魅力在于“慢”，不用追求一口气走完所有点位。把重点放在三个时段，反而能得到最完整的光线变化和叙事结构。',
      '这条线特别适合情侣或亲子同行，因为体力门槛低、步道完整且休息点充足。写游记时建议加入“停留建议”，读者会更容易复刻你的体验。'
    ]
  },
  {
    id: 106,
    scenicId: 6,
    title: '荒野星空：在银河下找回沉默的自己',
    excerpt: '从设备准备到参数设置，第一次拍银河也能有作品。但比照片更珍贵的是——在荒野里，在没有灯光污染的地方，你会第一次听见自己心跳的声音。',
    author: '北屿',
    views: 7650,
    publishAt: '2026-02-08',
    cover: localImage4,
    readingMinutes: 12,
    location: '西北·大漠星河秘境线',
    sections: [
      { heading: '营地搭建', text: '优先选背风沙丘后方，地面平整且远离车道光污染。帐篷入口朝东，便于凌晨收光时快速撤离。搭建帐篷的时候，太阳正在沙丘背后落下，整个天空被染成橘红色，沙丘的纹理在侧逆光下清晰可见，那一刻你会觉得，沙漠的美不只在星空，也在黄昏。', image: localImage4 },
      { heading: '银河升起', text: '首拍建议用14mm、f/2.8、20s、ISO 3200，先确保银河可见，再逐步优化前景亮度。当银河真正出现在眼前的那一刻，你会屏住呼吸——那条光带横跨整个天空，像是宇宙在向你展示它的全部秘密。光是站在那里，看银河一点点升起，就已经足够让人沉醉。', image: localImage5 },
      { heading: '深夜与清晨', text: '夜里温差很大，热饮和保暖层要充足。拍摄结束后先检查器材再休息，防止沙尘进入卡口。凌晨的时候，坐在沙丘上看星星一颗颗消失，太阳从地平线探出头，沙漠被染成金色——那种从黑夜到白昼的过渡，是荒野最动人的时刻。', image: localImage2 }
    ],
    gear: ['超广角镜头', '头灯（红光模式）', '备用电池 3 块', '防沙收纳袋'],
    itinerary: ['17:00 营地搭建与踩点', '20:30 前景试拍与对焦', '00:30 银河竖构图主拍'],
    budget: ['线路套票 260 元', '露营位 200 元', '后勤补给 160 元'],
    longBody: [
      '荒野线路的关键不只是“拍到银河”，而是能否在安全前提下完成拍摄流程。提前踩点、确认撤离路线和补给位置，是这条线路最重要的准备。',
      '如果是第一次拍星空，不要贪多。先稳定拿到1-2张清晰银河图，再尝试前景叠加和延时。循序渐进会让你的作品质量提升更快。',
      '离开荒野的时候，我回头看了一眼。沙丘还在那里，银河已经消失，但我知道，那种在星空下沉默的感觉，已经被我装进了心里。城市里太吵，我们常常听不见自己的声音，但在荒野里，在银河下，你会第一次听见自己心跳的声音——那是一种很奇怪的感觉，像是宇宙在告诉你：你很小，但你很重要。'
    ]
  }
]
