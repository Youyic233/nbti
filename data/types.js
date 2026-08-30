/**
 * NBTI 人格类型数据（独立数据文件，可直接整份替换）
 * ------------------------------------------------------------------
 * 数据来源：用户提供的《新建 Microsoft Word 文档.docx》，共 26 个类型、8 个派系。
 *
 * NBTI_FACTIONS：派系清单（结果页条形图按派系汇总得分）
 *   key   派系标识
 *   name  派系展示名
 *
 * NBTI_TYPES：26 个人格类型，键为类型缩写（与 questions.js 中 scores 的键对应）
 *   code        类型缩写（如 HWLN）
 *   name        中文名称（如 红温龙）
 *   faction     所属派系（对应 NBTI_FACTIONS 的 key）
 *   description 人设描述
 *   image       配图地址：留空则使用内置占位奶龙插画；
 *               拿到素材后填相对路径即可，如 "assets/images/hwln.png"
 * ------------------------------------------------------------------
 */
window.NBTI_FACTIONS = [
  { key: "fire",    name: "火象行动组" },
  { key: "meme",    name: "整活乐子组" },
  { key: "zen",     name: "佛系躺平组" },
  { key: "social",  name: "社交气质组" },
  { key: "mask",    name: "清冷假面组" },
  { key: "anxiety", name: "内耗思虑组" },
  { key: "fantasy", name: "幻想自我组" },
  { key: "love",    name: "纯爱感情组" }
];

window.NBTI_TYPES = {
  HWLN: {
    code: "HWLN",
    name: "红温龙",
    faction: "fire",
    description: "一点就炸的易燃体质，被冒犯直接开冲对线，情绪全写在脸上，受不得半点委屈，主打有仇当场报。",
    image: ""
  },
  HLLN: {
    code: "HLLN",
    name: "豪龙",
    faction: "fire",
    description: "行动力拉满的闯将，下雨戴口罩也要出门打球，讨厌条条框框束缚，想到什么就直接干，从不墨迹。",
    image: ""
  },
  HXLN: {
    code: "HXLN",
    name: "花小龙",
    faction: "fire",
    description: "热血自律实干派，爱折腾爱挑战不服输，说话直来直去，看不惯摆烂就爱督促人，偶尔容易热血上头。",
    image: ""
  },
  FLLN: {
    code: "FLLN",
    name: "沸龙龙",
    faction: "fire",
    description: "情绪容易亢奋上头，话多精力旺，热闹场里最活跃的那个，一激动就容易停不下来。",
    image: ""
  },
  LZLN: {
    code: "LZLN",
    name: "乐子龙",
    faction: "meme",
    description: "全网冲浪找乐子，存满梗图到处发朋友整活，哪里有热闹往哪钻，人生信条是不整活等于白活。",
    image: ""
  },
  XHLN: {
    code: "XHLN",
    name: "小黑龙",
    faction: "meme",
    description: "腹黑整活专业户，爱挑刺爱阴阳，擅长抬杠怼人，嘴下不留情，主打一个损人快乐自己。",
    image: ""
  },
  DDLN: {
    code: "DDLN",
    name: "嘟嘟龙",
    faction: "meme",
    description: "胆子肥到嘟嘟响，敢作死敢闯祸，行事跳脱天马行空，永远有出其不意的鬼点子。",
    image: ""
  },
  XYLN: {
    code: "XYLN",
    name: "显眼龙",
    faction: "meme",
    description: "天生显眼包，人越多越爱表现，走到哪都是焦点，主打一个社牛不怕社死，就要万众瞩目。",
    image: ""
  },
  SLLN: {
    code: "SLLN",
    name: "神龙",
    faction: "zen",
    description: "外界悲欢与我无瓜，别人的成就、网络的热闹都入不了眼，万事看淡，主打一个无欲则刚。",
    image: ""
  },
  SWLN: {
    code: "SWLN",
    name: "无所吊谓龙",
    faction: "zen",
    description: "顶级钝感力持有者，好坏结果都不往心里去，不纠结得失不内耗，精神状态常年放空摆烂。",
    image: ""
  },
  SGLN: {
    code: "SGLN",
    name: "僧龙",
    faction: "zen",
    description: "互联网佛系出家人，爆火热梗全 get 不到，刷屏整活直接划走，不追潮流不凑热闹，六根清净。",
    image: ""
  },
  SZLN: {
    code: "SZLN",
    name: "死者龙人",
    faction: "zen",
    description: "遇事首选装死逃避，能躺绝不坐，能躲绝不面对，主打一个与世无争，死猪不怕开水烫。",
    image: ""
  },
  GLLN: {
    code: "GLLN",
    name: "孤龙",
    faction: "social",
    description: "深度社恐爱好者，偏爱独处时光，人多场合浑身不自在，社交全靠随缘，不主动不维系。",
    image: ""
  },
  HJLN: {
    code: "HJLN",
    name: "哈基米龙",
    faction: "social",
    description: "软萌心软体质，共情力拉满，见不得别人难过，很容易被可爱事物戳中，自带治愈感。",
    image: ""
  },
  XLLN: {
    code: "XLLN",
    name: "喜龙龙",
    faction: "social",
    description: "天生乐天派开心果，走到哪都能带来快乐，情绪常年正向，很少有烦心事，自带感染力。",
    image: ""
  },
  WLLN: {
    code: "WLLN",
    name: "伪龙",
    faction: "mask",
    description: "擅长伪装情绪，表面和内心完全两副样子，真实想法藏得很深，没人能轻易看透他的底色。",
    image: ""
  },
  CKLN: {
    code: "CKLN",
    name: "刺客龙人",
    faction: "mask",
    description: "话少人冷行动力强，习惯默默做事不张扬，出手精准不拖泥带水，自带生人勿近气场。",
    image: ""
  },
  MJLN: {
    code: "MJLN",
    name: "墨镜龙",
    faction: "mask",
    description: "高冷酷哥人设，脸上常年挂着距离感，不轻易表露情绪，神秘感拉满，生人勿近。",
    image: ""
  },
  PALN: {
    code: "PALN",
    name: "PUA 自动攻击龙者",
    faction: "anxiety",
    description: "遇事第一反应反思自己错没错，刷鸡汤疯狂代入，常年陷入自我否定，精神内耗专业户。",
    image: ""
  },
  BWLN: {
    code: "BWLN",
    name: "霸王龙",
    faction: "anxiety",
    description: "记仇界天花板，吵架过去多久都能越想越气，心里默默拉清单，很难真正翻篇原谅。",
    image: ""
  },
  MTLN: {
    code: "MTLN",
    name: "密探龙",
    faction: "anxiety",
    description: "观察力拉满，心思细腻爱琢磨，擅长揣摩人心，八卦雷达灵敏，什么细节都逃不过他的眼睛。",
    image: ""
  },
  MLLN: {
    code: "MLLN",
    name: "美龙龙",
    faction: "fantasy",
    description: "精致主义至上，格外在意外表形象，出门必须收拾妥当，爱美爱精致，对自己的颜值有要求。",
    image: ""
  },
  GGLN: {
    code: "GGLN",
    name: "高光龙",
    faction: "fantasy",
    description: "自带主角滤镜，坚信自己未来能干大事，自信心爆棚，一心向往人生高光时刻。",
    image: ""
  },
  FALN: {
    code: "FALN",
    name: "幻想龙者",
    faction: "fantasy",
    description: "白日梦资深选手，天天脑补发财逆袭剧情，对未来充满美好幻想，很容易被鸡汤打动。",
    image: ""
  },
  CALN: {
    code: "CALN",
    name: "纯爱龙",
    faction: "love",
    description: "恋爱脑顶级选手，对待感情真诚专一，一旦动心就全情投入，把对方情绪放在第一位。",
    image: ""
  }
};
