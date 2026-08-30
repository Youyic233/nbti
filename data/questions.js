/**
 * NBTI 题库数据（独立数据文件，可直接整份替换）
 * ------------------------------------------------------------------
 * 字段说明：
 *   id      题号
 *   text    题干
 *   options 选项数组，每项：
 *     label  选项文案
 *     scores 该选项给各【人格类型】加的分值（键为 types.js 中的类型缩写，
 *            如 HWLN / LZLN；一个选项可给多个类型加不同权重）
 *
 * 计分规则：每个选项把分值累加到对应类型；全部答完后得分最高的类型
 * 即为测试结果；结果页同时按派系汇总各派系总分画出条形图。
 *
 * 注意：以下 scores 权重为占位设计（依据各类型人设描述人工匹配），
 * 26 个类型均可达，拿到正式计分规则后直接改这里即可。
 * ------------------------------------------------------------------
 */
window.NBTI_QUESTIONS = [
  {
    id: 1,
    text: "半夜刷短视频刷到五点，明天还要早起上班上课，你会",
    options: [
      { label: "想了想快天亮了，继续刷", scores: { SWLN: 2, LZLN: 1 } },
      { label: "在无限的煎熬中，睡不着觉", scores: { PALN: 2 } },
      { label: "秒睡", scores: { SWLN: 2, SZLN: 1 } }
    ]
  },
  {
    id: 2,
    text: "点外卖吃到一半发现菜里有小动物，你的第一反应",
    options: [
      { label: "我糙理的，不给我赔十万你们就别干了", scores: { HWLN: 2 } },
      { label: "蛋白质比牛肉高几十倍，大补", scores: { LZLN: 2, DDLN: 1 } },
      { label: "算了多一事不如少一事，直接全部扔掉", scores: { SZLN: 2 } }
    ]
  },
  {
    id: 3,
    text: "网上看到一个很离谱的段子，你会",
    options: [
      { label: "骚扰好友", scores: { LZLN: 2, XYLN: 1 } },
      { label: "自己看完乐呵乐呵的划走", scores: { GLLN: 1, LZLN: 1 } },
      { label: "感觉没啥意思，直接划走", scores: { SGLN: 2 } }
    ]
  },
  {
    id: 4,
    text: "和人吵架过后，事情已经过去了很久",
    options: [
      { label: "越想越气，真想给他来一拳", scores: { BWLN: 2, HWLN: 1 } },
      { label: "偶尔会想起，但不会纠结", scores: { SWLN: 2 } },
      { label: "她一定有她的道理，错的人是我", scores: { PALN: 2 } }
    ]
  },
  {
    id: 5,
    text: "如果一夜之间拥有一大笔钱，你会",
    options: [
      { label: "直接躺平摆烂", scores: { SZLN: 2, SWLN: 1 } },
      { label: "请亲朋好友吃喝玩乐", scores: { FLLN: 2, XLLN: 1 } },
      { label: "我重生了，我是一个理财大师", scores: { GGLN: 2 } }
    ]
  },
  {
    id: 6,
    text: "刷到网上争论激烈的热点话题",
    options: [
      { label: "秒跟团，激烈对线", scores: { HWLN: 2, XHLN: 1 } },
      { label: "默默吃瓜，群纭众生看笑话", scores: { MTLN: 2, LZLN: 1 } },
      { label: "快速划走，完全不想掺和", scores: { SLLN: 2 } }
    ]
  },
  {
    id: 7,
    text: "突然收到陌生人发来一大段小作文",
    options: [
      { label: "认真看完，耐心回复一大段", scores: { HJLN: 2 } },
      { label: "他是不是暗恋我，我好紧张", scores: { FALN: 2, PALN: 1 } },
      { label: "感到压力，反手一个举报", scores: { MJLN: 2 } }
    ]
  },
  {
    id: 8,
    text: "本来计划好的安排，被别人临时打乱",
    options: [
      { label: "你他喵的，故意的吧", scores: { HWLN: 2 } },
      { label: "有点不爽，心里偷偷骂他两句再随机应变", scores: { WLLN: 2 } },
      { label: "无所谓，给他了呗", scores: { SWLN: 2 } }
    ]
  },
  {
    id: 9,
    text: "想到未来几十年后的生活",
    options: [
      { label: "吾本是众生中的一员，无所吊谓", scores: { SLLN: 2 } },
      { label: "凭我的实力，以后绝对成大事", scores: { GGLN: 2 } },
      { label: "幻想自己发财", scores: { FALN: 2 } }
    ]
  },
  {
    id: 10,
    text: "刷朋友圈看到熟人发 emo 文案",
    options: [
      { label: "主动私聊，暖男在狗前面", scores: { HJLN: 2, CALN: 1 } },
      { label: "默默点个赞，给个支持", scores: { HJLN: 1, GLLN: 1 } },
      { label: "直接划走，心想：哪来的嘉豪", scores: { XHLN: 2 } }
    ]
  },
  {
    id: 11,
    text: "看到网上别人分享的成功经验鸡汤",
    options: [
      { label: "疯狂代入，开始自我PUA", scores: { PALN: 2 } },
      { label: "一眼看透，一笑淡风云", scores: { SLLN: 2, MJLN: 1 } },
      { label: "你牛逼，你说了算", scores: { XHLN: 1, SWLN: 1 } }
    ]
  },
  {
    id: 12,
    text: "被人莫名其妙阴阳怪气了一通",
    options: [
      { label: "当场怼回去，你算老几", scores: { HWLN: 2 } },
      { label: "内心不爽，直接走开", scores: { BWLN: 1, WLLN: 1 } },
      { label: "自我怀疑，开始反思是不是自己的问题", scores: { PALN: 2 } }
    ]
  },
  {
    id: 13,
    text: "对象吵架冷战，对方半天不回消息",
    options: [
      { label: "疯狂胡思乱想，反复翻看聊天记录折磨自己", scores: { PALN: 2, CALN: 1 } },
      { label: "先冷静一会，平复情绪后再沟通", scores: { HXLN: 1, MTLN: 1 } },
      { label: "该干嘛干嘛，老子还要费时费力猜你心思", scores: { MJLN: 2 } }
    ]
  },
  {
    id: 14,
    text: "另一半翻看你的手机查岗",
    options: [
      { label: "十分抵触，学习资料机密不可泄漏", scores: { WLLN: 2 } },
      { label: "凭什么你的不给我看", scores: { HWLN: 1, BWLN: 1 } },
      { label: "无所谓，随便看，手机里能有啥", scores: { SWLN: 2 } }
    ]
  },
  {
    id: 15,
    text: "谈恋爱之后，你看待未来结婚这件事",
    options: [
      { label: "很早就会幻想以后的生活", scores: { FALN: 2, CALN: 1 } },
      { label: "走一步看一步，不会过早设想太远", scores: { SWLN: 1, SZLN: 1 } },
      { label: "一码归一码，恋爱是恋爱，结婚是结婚", scores: { CKLN: 2 } }
    ]
  },
  {
    id: 16,
    text: "对象给你发长篇小作文倾诉情绪，而你正在打游戏打到关键局",
    options: [
      { label: "立刻放下游戏优先回复对方", scores: { CALN: 2 } },
      { label: "简单回消息安抚，打完这一把再细聊", scores: { HXLN: 1, WLLN: 1 } },
      { label: "打仗呢你发信息，这不纯捣乱吗", scores: { HLLN: 2 } }
    ]
  },
  {
    id: 17,
    text: "朋友吐槽你的对象，指出对方的缺点",
    options: [
      { label: "你这家伙有对象吗，在这跟我撒野", scores: { HWLN: 1, CALN: 1 } },
      { label: "客观听进去，私下自己重新观察", scores: { MTLN: 2 } },
      { label: "趁对象不在，偷偷跟着说她几句", scores: { XHLN: 2, WLLN: 1 } }
    ]
  },
  {
    id: 18,
    text: "手头好几件事堆在一起，同时需要处理",
    options: [
      { label: "心态崩了但还是哭着做", scores: { PALN: 1, HXLN: 1 } },
      { label: "分优先级，一件一件挨个搞定", scores: { HXLN: 2, CKLN: 1 } },
      { label: "直接摆烂，闷头大睡", scores: { SZLN: 2 } }
    ]
  },
  {
    id: 19,
    text: "出门忘带手机，你会",
    options: [
      { label: "直接二话不说回去带，就算快迟到了", scores: { HLLN: 2, CKLN: 1 } },
      { label: "幻想各种意外没手机做不了", scores: { FALN: 1, PALN: 1 } },
      { label: "无所谓，正好清净一会", scores: { GLLN: 2, SGLN: 1 } }
    ]
  },
  {
    id: 20,
    text: "做选择的时候，你更偏向相信",
    options: [
      { label: "直觉感受，第一感觉最重要", scores: { DDLN: 1, HLLN: 1 } },
      { label: "权衡利弊，理性对比各种条件", scores: { MTLN: 2, CKLN: 1 } },
      { label: "顺其自然，随缘吧", scores: { SWLN: 2 } }
    ]
  },
  {
    id: 21,
    text: "被别人当众夸奖吹捧",
    options: [
      { label: "有点害羞，会不好意思", scores: { GLLN: 2, HJLN: 1 } },
      { label: "坦然收下，跟对方客气客气", scores: { MLLN: 2, XYLN: 1 } },
      { label: "你这家伙不会是在嘲讽我吧", scores: { MTLN: 1, PALN: 1 } }
    ]
  },
  {
    id: 22,
    text: "刷到别人晒出很厉害的成就、成绩",
    options: [
      { label: "内心毫无波澜，和我无关", scores: { SLLN: 2 } },
      { label: "真心佩服，当作参考激励自己", scores: { HXLN: 2, GGLN: 1 } },
      { label: "哟，有人妄想跟神比", scores: { GGLN: 2, XHLN: 1 } }
    ]
  },
  {
    id: 23,
    text: "参加集体活动，需要你主动出来发言展示",
    options: [
      { label: "紧张社恐，能躲就躲", scores: { GLLN: 2 } },
      { label: "做好心理建设，硬着头皮完成", scores: { HXLN: 1, WLLN: 1 } },
      { label: "豪情在天", scores: { XYLN: 2, HLLN: 1 } }
    ]
  },
  {
    id: 24,
    text: "如果外面下雨了，你会",
    options: [
      { label: "在家刷视频", scores: { SZLN: 1, GLLN: 1 } },
      { label: "和朋友开黑", scores: { FLLN: 1, LZLN: 1 } },
      { label: "带黑色口罩出去打篮球", scores: { HLLN: 2, MLLN: 1 } }
    ]
  },
  {
    id: 25,
    text: "一件事情还没有尘埃落定，结果未知",
    options: [
      { label: "反复焦虑，不停脑补各种结局", scores: { PALN: 2 } },
      { label: "放平心态，静静等待结果到来", scores: { SLLN: 1, SWLN: 1 } },
      { label: "无所吊谓，该来的还是会来的", scores: { SWLN: 2 } }
    ]
  },
  {
    id: 26,
    text: "刷评论区满屏刷 MJ 蜘蛛侠暗号，你会怎么做",
    options: [
      { label: "跟着复制刷屏，对接暗号", scores: { LZLN: 2, XYLN: 1 } },
      { label: "看懂梗，默默围观不发言", scores: { MTLN: 1, LZLN: 1 } },
      { label: "什么玩意，隔着刷屏", scores: { SGLN: 2 } }
    ]
  },
  {
    id: 27,
    text: "上网刷到 “野生狗奶”，你的第一反应",
    options: [
      { label: "感觉莫名其妙，无法理解", scores: { SGLN: 2 } },
      { label: "想买来喝", scores: { DDLN: 2 } },
      { label: "保存图片骚扰好友", scores: { LZLN: 2, XHLN: 1 } }
    ]
  },
  {
    id: 28,
    text: "网上看到别人玩 “老叟戏顽童”，形容实力碾压对手，你会",
    options: [
      { label: "懂你意思，但是很少拿来用", scores: { LZLN: 1, MTLN: 1 } },
      { label: "看不懂，直接忽略这条弹幕评论", scores: { SGLN: 2 } },
      { label: "用到生活实际中", scores: { XHLN: 2, LZLN: 1 } }
    ]
  },
  {
    id: 29,
    text: "刷短视频刷到 “胆子真是肥嘟嘟” 你会",
    options: [
      { label: "循环播放，分享好友", scores: { LZLN: 1, FLLN: 1 } },
      { label: "刚好提醒我饿了，点个外卖", scores: { SZLN: 1, SWLN: 1 } },
      { label: "你的胆子真是肥嘟嘟的", scores: { DDLN: 2, XHLN: 1 } }
    ]
  },
  {
    id: 30,
    text: "刷到短视频一大堆魔性洗脑鬼畜二创，循环魔性 BGM",
    options: [
      { label: "听着一般，立马拖动进度条跳过", scores: { SGLN: 1, MJLN: 1 } },
      { label: "日常随口能哼两句", scores: { XLLN: 1, LZLN: 1 } },
      { label: "越听越上头，跟着音乐跳起来", scores: { FLLN: 2, XLLN: 1 } }
    ]
  }
];
