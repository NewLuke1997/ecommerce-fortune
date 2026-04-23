// ===== Fortune Data =====
const FORTUNE_DATA = {
  levels: [
    { name: '大吉', badge: 'great', stars: 5, icon: '🔥' },
    { name: '中吉', badge: 'good', stars: 4, icon: '✨' },
    { name: '小吉', badge: 'good', stars: 3, icon: '🌟' },
    { name: '平', badge: 'normal', stars: 3, icon: '☁️' },
    { name: '小凶', badge: 'caution', stars: 2, icon: '🌧️' },
  ],

  overall: {
    great: [
      '今日运势极佳，适合大展拳脚！平台算法对你格外友好，流量洪峰就在眼前。',
      '紫气东来，财星高照。今天是你本月最佳的运营时机，抓紧推进重点项目。',
      '贵人运旺盛，可能收到大客户的询盘或平台的流量扶持，把握机会！',
    ],
    good: [
      '运势稳步上升，适合优化现有listing和调整广告策略。稳中求进是今天的关键词。',
      '今日适合做数据分析和竞品研究，洞察先机为后续爆发蓄力。',
      '贵人暗助，可能有同行分享宝贵经验或资源，保持开放心态。',
    ],
    normal: [
      '运势平稳，不宜冒进。适合做日常维护和客户回复，守成为上。',
      '今天适合复盘近期数据，找出问题所在。不求有功，但求无过。',
      '平淡中蕴藏机遇，保持耐心，做好基础工作即可。',
    ],
    caution: [
      '今日运势偏低，避免做重大决策。广告预算暂时收紧，观望为主。',
      '注意防范恶意差评和竞争对手的异常操作，多留个心眼。',
      '今天不适合上新品或调价，维持现状，静待转机。',
    ],
  },

  ads: {
    great: [
      { text: '今日广告ROI将超预期！建议加大预算20%-30%，抢占流量高地。ACOS有望创新低。', tag: '加大投放', tagType: 'yes' },
      { text: '平台今日流量充沛，CPC成本偏低。建议开启自动广告扩展长尾词覆盖。', tag: '积极投放', tagType: 'yes' },
    ],
    good: [
      { text: '广告表现中规中矩，建议维持现有预算，重点优化高转化关键词。', tag: '维持投放', tagType: 'maybe' },
      { text: '适合测试新广告素材和A+页面，为后续大促做准备。', tag: '测试优化', tagType: 'maybe' },
    ],
    normal: [
      { text: '广告效果一般，建议降低预算10%-15%，将重心放在自然排名优化上。', tag: '缩减预算', tagType: 'maybe' },
      { text: '今日CPC偏高，不建议开新广告活动，维护好现有campaign即可。', tag: '观望为主', tagType: 'maybe' },
    ],
    caution: [
      { text: '广告支出可能打水漂！建议暂停非核心广告，只保留品牌词防御性投放。', tag: '暂停投放', tagType: 'no' },
      { text: '今日容易遭遇恶意点击，开启广告否定关键词，保护好广告预算。', tag: '紧急止损', tagType: 'no' },
    ],
  },

  stock: {
    great: [
      { text: '补货黄金期！供应商配合度高，物流渠道畅通，建议趁势补充爆款库存。', tag: '及时补货', tagType: 'yes' },
      { text: '库存周转加速，建议提前备货迎接即将到来的销售高峰。', tag: '积极备货', tagType: 'yes' },
    ],
    good: [
      { text: '库存状态健康，建议检查FBA库存预警，及时处理滞销品。', tag: '检查库存', tagType: 'maybe' },
      { text: '适合和供应商谈判下季度采购价格，你的议价能力今天比较强。', tag: '适度补货', tagType: 'maybe' },
    ],
    normal: [
      { text: '库存充足，无需急补。建议盘点SKU表现，考虑淘汰末位产品。', tag: '暂不补货', tagType: 'maybe' },
      { text: '今天适合做库存数据分析，找出周转率低的SKU进行促销清仓。', tag: '盘点为主', tagType: 'maybe' },
    ],
    caution: [
      { text: '小心断货风险！但今天不适合大批量下单，先小批量紧急补货应急。', tag: '谨慎补货', tagType: 'no' },
      { text: '物流可能有延误，已下单的货物注意跟踪。避免盲目加大库存。', tag: '暂观望', tagType: 'no' },
    ],
  },

  price: {
    great: [
      { text: '今天调价效果极佳！适当提价5%-10%不会影响转化率，利润空间大增。', tag: '可以提价', tagType: 'yes' },
      { text: '竞争对手可能缺货，这是你提价收割利润的最佳窗口期。', tag: '提价收割', tagType: 'yes' },
    ],
    good: [
      { text: '价格竞争力不错，建议做小幅度价格测试，找到最优价格点。', tag: '微调测试', tagType: 'maybe' },
      { text: '可以设置优惠券和促销活动来提升转化，比直接降价更灵活。', tag: '促销引流', tagType: 'maybe' },
    ],
    normal: [
      { text: '价格保持稳定为宜，今天不是调价的好时机。关注竞品动态即可。', tag: '维持原价', tagType: 'maybe' },
      { text: '建议用工具监控竞品价格变化，为下一步调价收集数据。', tag: '观望', tagType: 'maybe' },
    ],
    caution: [
      { text: '今日忌调价！容易引发价格战，利润会被压缩。保持现有定价不动。', tag: '禁止调价', tagType: 'no' },
      { text: '竞品可能在搞低价促销，不要盲目跟风降价，坚持价值定位。', tag: '勿跟降价', tagType: 'no' },
    ],
  },

  product: {
    great: [
      { text: '选品灵感爆棚！今天直觉敏锐，关注社交媒体趋势能发现潜力爆品。', tag: '大胆选品', tagType: 'yes' },
      { text: '适合上新品！平台对新品有流量扶持期，配合好图片和关键词效果翻倍。', tag: '新品上架', tagType: 'yes' },
    ],
    good: [
      { text: '适合做产品差异化改进，在现有热销品基础上做微创新。', tag: '微创新', tagType: 'maybe' },
      { text: '可以关注小众垂直品类，竞争小利润高，适合精细化运营。', tag: '深耕垂直', tagType: 'maybe' },
    ],
    normal: [
      { text: '今天不适合上新品，建议优化现有产品的图片、标题和五点描述。', tag: '优化现有', tagType: 'maybe' },
      { text: '做好市场调研，收集用户反馈，为下一批选品做数据支撑。', tag: '调研为主', tagType: 'maybe' },
    ],
    caution: [
      { text: '今日选品容易踩坑！避免盲目跟卖热门产品，侵权风险极高。', tag: '避免新品', tagType: 'no' },
      { text: '警惕市场饱和的产品，今天容易被表面数据迷惑。远离红海品类。', tag: '远离红海', tagType: 'no' },
    ],
  },

  logistics: {
    great: [
      { text: '物流运势极佳！发货顺畅，清关快速，客户签收率创新高。', tag: '顺利畅通', tagType: 'yes' },
      { text: '今日适合大批量发货，物流商服务态度好，可能有运费折扣。', tag: '抓紧发货', tagType: 'yes' },
    ],
    good: [
      { text: '物流基本正常，注意及时更新物流追踪信息，减少客户咨询。', tag: '正常发货', tagType: 'maybe' },
      { text: '可以考虑换一家物流商试试，今天对比报价能拿到好价格。', tag: '比较物流', tagType: 'maybe' },
    ],
    normal: [
      { text: '物流无大碍，但建议预留1-2天缓冲时间，避免承诺过紧的配送时效。', tag: '留有余量', tagType: 'maybe' },
      { text: '检查海外仓库存分布，优化物流路径可节省5%-8%的配送成本。', tag: '优化路径', tagType: 'maybe' },
    ],
    caution: [
      { text: '物流容易出问题！今日发货可能遇到延误，提前和客户沟通预期。', tag: '延迟风险', tagType: 'no' },
      { text: '小心丢件和破损风险，建议购买物流保险，贵重物品暂缓发出。', tag: '暂缓发货', tagType: 'no' },
    ],
  },

  service: {
    great: [
      { text: '今日客户沟通顺畅，差评转化好评的概率极高！用心回复每一条消息。', tag: '积极沟通', tagType: 'yes' },
      { text: '客服运势旺，适合处理积压的客诉和退换货问题，客户满意度飙升。', tag: '处理客诉', tagType: 'yes' },
    ],
    good: [
      { text: '客户情绪稳定，适合做售后服务跟进，提升店铺好评率。', tag: '跟进售后', tagType: 'maybe' },
      { text: '可以主动联系老客户做复购营销，今天话术感染力较强。', tag: '复购营销', tagType: 'maybe' },
    ],
    normal: [
      { text: '按部就班回复客户消息即可，今天不适合主动出击。', tag: '常规回复', tagType: 'maybe' },
      { text: '整理常见问题FAQ，优化自动回复模板，提升客服效率。', tag: '优化模板', tagType: 'maybe' },
    ],
    caution: [
      { text: '今天容易和客户产生误会！回复前多检查一遍措辞，避免踩雷。', tag: '谨慎回复', tagType: 'no' },
      { text: '小心A-to-Z索赔和差评攻击，遇到不合理要求先冷静再处理。', tag: '冷静应对', tagType: 'no' },
    ],
  },

  poems: {
    great: [
      '东风送暖入商家，万货流通利路赊。\n今日开门迎百福，黄金满屋映朝霞。',
      '紫气东来财运旺，平台算法助飞翔。\n千单万单如流水，笑看利润日日涨。',
      '吉星高照运亨通，广告ROI映日红。\n库存充足客满门，跨境电商展鹏程。',
    ],
    good: [
      '春风化雨润无声，稳扎稳打见真功。\n莫道前路多荆棘，厚积薄发自从容。',
      '细水长流积口碑，产品为王不可违。\n今日优化三五处，明日销量自然飞。',
      '山重水复疑无路，柳暗花明又一村。\n坚持品质终有报，好评如潮满店春。',
    ],
    normal: [
      '平平淡淡才是真，守得云开见月明。\n今日无风也无雨，安心做事待天晴。',
      '静水深流藏暗涌，不急不躁养根基。\n三分运营七分等，时机一到自然起。',
      '闲看庭前花开落，漫随天外云卷舒。\n今日且做壁上观，蓄势待发待良图。',
    ],
    caution: [
      '乌云蔽日莫心焦，守拙藏锋待明朝。\n今日退步原来是，向前进步路更遥。',
      '风急天高猿啸哀，小心驶得万年船。\n且将冷眼观螃蟹，看你横行到几时。',
      '山雨欲来风满楼，此时不宜硬出头。\n韬光养晦三五日，守得云开见日头。',
    ],
  },

  colors: ['红色', '金色', '绿色', '蓝色', '紫色', '橙色', '粉色', '棕色', '黑色', '白色', '青色', '灰色'],
  numbers: ['3', '6', '8', '9', '13', '16', '18', '23', '26', '28', '33', '36', '38', '66', '68', '88', '99', '168', '888'],
  times: ['09:00-11:00', '11:00-13:00', '13:00-15:00', '15:00-17:00', '17:00-19:00', '19:00-21:00', '21:00-23:00'],
  goods: ['优化listing', '上新品', '调广告', '做促销', '复盘数据', '联系供应商', '回复客户', '研究竞品', '备货发货', '学习运营'],
  bads: ['盲目调价', '跟卖爆款', '冲动加预算', '忽视差评', '拖延发货', '抄袭listing', '恶意举报', '忽视数据'],
};

// ===== State =====
let selectedPlatform = null;

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  initPlatformButtons();
  initDateInput();
});

function createParticles() {
  const container = document.getElementById('particles');
  const colors = ['rgba(212,168,67,0.3)', 'rgba(192,57,43,0.2)', 'rgba(240,215,140,0.2)'];
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${Math.random() * 15 + 10}s;
      animation-delay: ${Math.random() * 10}s;
    `;
    container.appendChild(p);
  }
}

function initPlatformButtons() {
  document.querySelectorAll('.platform-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.platform-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedPlatform = btn.dataset.platform;
    });
  });
}

function initDateInput() {
  const dateInput = document.getElementById('birthdate');
  dateInput.max = new Date().toISOString().split('T')[0];
}

// ===== Seeded Random =====
function seededRandom(seed) {
  let s = seed;
  return function() {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function getDateSeed(name, birthdate, platform) {
  const today = new Date();
  const dateStr = `${today.getFullYear()}${today.getMonth()}${today.getDate()}`;
  const str = `${name}${birthdate}${platform}${dateStr}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + ch;
    hash = hash & hash;
  }
  return Math.abs(hash) + 1;
}

function pick(arr, rng) {
  return arr[Math.floor(rng() * arr.length)];
}

function pickLevel(rng) {
  const weights = [0.15, 0.30, 0.30, 0.18, 0.07];
  const r = rng();
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
    if (r < sum) return FORTUNE_DATA.levels[i];
  }
  return FORTUNE_DATA.levels[2];
}

// ===== Main Fortune Logic =====
function drawFortune() {
  const name = document.getElementById('username').value.trim();
  const birthdate = document.getElementById('birthdate').value;

  if (!selectedPlatform) { showToast('⚠️ 请选择一个电商平台'); return; }
  if (!name) { showToast('⚠️ 请输入你的名字'); return; }
  if (!birthdate) { showToast('⚠️ 请选择出生日期'); return; }

  // Loading animation
  const btn = document.getElementById('drawBtn');
  btn.classList.add('loading');
  btn.querySelector('.draw-btn-text').textContent = '🎋 抽签中...';

  setTimeout(() => {
    btn.classList.remove('loading');
    btn.querySelector('.draw-btn-text').textContent = '🎋 开始抽签';
    generateFortune(name, birthdate, selectedPlatform);
  }, 1500);
}

function generateFortune(name, birthdate, platform) {
  const seed = getDateSeed(name, birthdate, platform);
  const rng = seededRandom(seed);

  const level = pickLevel(rng);
  const platformNames = {
    amazon: 'Amazon', shopee: 'Shopee', lazada: 'Lazada',
    tiktok: 'TikTok Shop', temu: 'Temu', shein: 'SHEIN',
    ebay: 'eBay', aliexpress: 'AliExpress',
  };

  // Badge
  const badgeEl = document.getElementById('resultBadge');
  badgeEl.textContent = `${platformNames[platform]} · ${level.name}日`;
  badgeEl.className = `result-badge ${level.badge}`;

  // Title
  document.getElementById('resultTitle').textContent = `${name}的今日运势`;

  // Date
  const today = new Date();
  document.getElementById('resultDate').textContent =
    `${today.getFullYear()}年${today.getMonth()+1}月${today.getDate()}日 · ${['日','一','二','三','四','五','六'][today.getDay()]}`;

  // Overall
  document.getElementById('overallIcon').textContent = level.icon;
  document.getElementById('overallStars').textContent =
    '★'.repeat(level.stars) + '☆'.repeat(5 - level.stars);
  document.getElementById('overallText').textContent = pick(FORTUNE_DATA.overall[level.badge], rng);

  // Fortunes
  const categories = ['ad', 'stock', 'price', 'product', 'logistics', 'service'];
  categories.forEach(cat => {
    const data = pick(FORTUNE_DATA[cat === 'ad' ? 'ads' : cat][level.badge], rng);
    document.getElementById(`${cat}Text`).textContent = data.text;
    const tagEl = document.getElementById(`${cat}Tag`);
    tagEl.textContent = data.tag;
    tagEl.className = `fortune-tag ${data.tagType}`;
  });

  // Lucky items
  document.getElementById('luckyColor').textContent = pick(FORTUNE_DATA.colors, rng);
  document.getElementById('luckyNumber').textContent = pick(FORTUNE_DATA.numbers, rng);
  document.getElementById('luckyTime').textContent = pick(FORTUNE_DATA.times, rng);
  document.getElementById('luckyGood').textContent = pick(FORTUNE_DATA.goods, rng);
  document.getElementById('luckyBad').textContent = pick(FORTUNE_DATA.bads, rng);

  // Poem
  document.getElementById('poemText').textContent = pick(FORTUNE_DATA.poems[level.badge], rng);

  // Show result
  const section = document.getElementById('resultSection');
  section.style.display = 'block';
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== Share =====
function shareFortune() {
  const name = document.getElementById('resultTitle').textContent;
  const badge = document.getElementById('resultBadge').textContent;
  const text = `🏮 跨境电商运势签\n\n${name}\n${badge}\n\n广告：${document.getElementById('adTag').textContent}\n库存：${document.getElementById('stockTag').textContent}\n选品：${document.getElementById('productTag').textContent}\n\n快来测测你的今日电商运势 👉`;

  if (navigator.share) {
    navigator.share({ title: '跨境电商运势签', text });
  } else {
    navigator.clipboard.writeText(text).then(() => showToast('📋 运势已复制到剪贴板！'));
  }
}

// ===== Toast =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
