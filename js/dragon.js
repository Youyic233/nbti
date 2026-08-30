/**
 * 内置占位奶龙插画（SVG 字符串）
 * 拿到正式奶龙素材后，在 data/types.js 中给每个类型填 image 路径即可，
 * 结果页会优先使用 image，留空时才回退到这张占位图。
 */
window.NBTI_DRAGON_SVG = `
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="奶龙占位插画">
  <!-- 尾巴 -->
  <path d="M148 150 q30 6 26 -18 q-2 -12 -14 -12" fill="none" stroke="#f5c518" stroke-width="14" stroke-linecap="round"/>
  <!-- 身体 -->
  <ellipse cx="100" cy="118" rx="58" ry="54" fill="#f5c518"/>
  <!-- 白肚皮 -->
  <ellipse cx="100" cy="134" rx="38" ry="34" fill="#fff7dd"/>
  <!-- 小翅膀 -->
  <path d="M46 104 q-22 -6 -26 14 q14 8 28 -2z" fill="#eec00f"/>
  <path d="M154 104 q22 -6 26 14 q-14 8 -28 -2z" fill="#eec00f"/>
  <!-- 龙角 -->
  <path d="M72 66 q-6 -18 6 -26 q6 14 4 26z" fill="#eec00f"/>
  <path d="M128 66 q6 -18 -6 -26 q-6 14 -4 26z" fill="#eec00f"/>
  <!-- 眼睛 -->
  <circle cx="80" cy="100" r="7" fill="#3d2e00"/>
  <circle cx="120" cy="100" r="7" fill="#3d2e00"/>
  <circle cx="82.5" cy="97.5" r="2.2" fill="#fff"/>
  <circle cx="122.5" cy="97.5" r="2.2" fill="#fff"/>
  <!-- 腮红 -->
  <ellipse cx="66" cy="116" rx="8" ry="5" fill="#ffb3a0" opacity=".75"/>
  <ellipse cx="134" cy="116" rx="8" ry="5" fill="#ffb3a0" opacity=".75"/>
  <!-- 嘴巴 -->
  <path d="M90 118 q10 9 20 0" fill="none" stroke="#3d2e00" stroke-width="3.5" stroke-linecap="round"/>
  <!-- 鼻孔 -->
  <circle cx="94" cy="110" r="1.6" fill="#3d2e00" opacity=".6"/>
  <circle cx="106" cy="110" r="1.6" fill="#3d2e00" opacity=".6"/>
</svg>`;
