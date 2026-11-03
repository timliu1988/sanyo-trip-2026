// ==================== 行程資料庫 (未來擴充只需在此新增物件) ====================
const ITINERARY_DATA = {
  d1: {
    title: "Day 1 (11/27)",
    contentHtml: `
      <!-- 航班抵達 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">09:15 - 14:45</span>
          <span class="tag tag-flight">航班出發</span>
        </div>
        <div class="card-title">桃園機場 T1 報到 ➔ 降落関西空港 (KIX)</div>
        <div class="card-desc">國泰航空 CX564 (11:15 - 14:45)。入境領行李、開通網卡，備妥護照與國際駕照（日文譯本）。</div>
      </div>

      <!-- 電車接駁 (NAVITIME 原生喚醒) -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">15:00</span>
          <span class="tag tag-train">短程接駁</span>
        </div>
        <div class="card-title">関西空港 ➔ りんくうタウン (臨空城)</div>
        <div class="card-desc">搭乘 JR 關空快速或南海電鐵（1 站即達，車程約 5~6 分鐘）。</div>
        <div class="btn-row">
          <a href="navitime://" class="action-btn btn-navitime">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><circle cx="12" cy="12" r="9" fill="#B9DAA5"/><path d="M12 7v5l3 3"/></svg>
            <span>NAVITIME</span>
          </a>
          <a href="https://transit.yahoo.co.jp/search/result?from=%E9%96%A2%E8%A5%BF%E7%A9%BA%E6%B8%AF&to=%E3%82%8A%E3%82%93%E3%81%8F%E3%81%86%E3%82%BF%E3%82%A6%E3%83%B3&type=1" target="_blank" rel="noopener noreferrer" class="action-btn btn-yahoo">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><rect x="4" y="3" width="16" height="15" rx="3" fill="#FFE0E0"/><line x1="4" y1="11" x2="20" y2="11"/><circle cx="8" cy="15" r="1.5" fill="#3E3A39"/><circle cx="16" cy="15" r="1.5" fill="#3E3A39"/></svg>
            <span>Yahoo!路線情報</span>
          </a>
        </div>
      </div>

      <!-- 取車 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">15:30</span>
          <span class="tag tag-car">自駕取車</span>
        </div>
        <div class="card-title">ニコニコレンタカー 関西空港りんくうタウン駅前店</div>
        <div class="card-desc">核對合約、檢查車況、安裝 ETC 卡並確認開通 SEP 方案。電話：072-429-9085</div>
        <div class="copy-chip" onclick="navigator.clipboard.writeText('大阪府泉佐野市りんくう往来北1-834')">
          <div class="copy-chip-left">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/><circle cx="12" cy="9" r="2.5" fill="#F2A497"/></svg>
            <span>大阪府泉佐野市りんくう往来北1-834</span>
          </div>
          <span class="copy-badge">複製地址</span>
        </div>
        <div class="btn-row">
          <a href="https://www.google.com/maps/search/?api=1&query=ニコニコレンタカー+関西空港りんくうタウン駅前店" target="_blank" rel="noopener noreferrer" class="action-btn btn-gmap">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#A8D3E6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
            <span>Google 地圖</span>
          </a>
          <a href="https://maps.apple.com/?q=ニコニコレンタカー+関西空港りんくうタウン駅前店" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
            <span>Apple 地圖</span>
          </a>
        </div>
      </div>

      <!-- 神戶中途散策 (完全依據第 2、3 張模擬圖實作) -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">17:00 - 19:30</span>
          <span class="tag tag-must">中途放風</span>
        </div>
        <div class="card-title">神戶中途散策・スポット</div>
        <div class="card-desc">依停車位置選擇探索商圈。點擊步道上的手繪節點卡片，底部立即滑出日文地址與導航便籤：</div>
        
        <div class="zone-accordion">
          <!-- 商圈 1：港區 -->
          <div class="zone-card open">
            <div class="zone-header" onclick="toggleZone(this)">
              <div class="zone-header-left">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.2"><circle cx="12" cy="12" r="9" fill="#5DB7DE"/><path d="M12 7v10M7 12h10"/></svg>
                <span>神戸ハーバーランド・メリケンパーク（港區）</span>
              </div>
              <span class="zone-arrow">▼</span>
            </div>
            <div class="zone-content">
              <!-- 母地標 (含手繪摩天輪) -->
              <div class="parent-spot-card">
                <div class="parent-spot-header">
                  <svg class="parent-spot-icon" viewBox="0 0 50 50" fill="none">
                    <circle cx="25" cy="22" r="16" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="3 3"/>
                    <circle cx="25" cy="22" r="4" fill="#F6D27A" stroke="#3E3A39" stroke-width="2"/>
                    <line x1="25" y1="26" x2="16" y2="44" stroke="#3E3A39" stroke-width="2.5"/>
                    <line x1="25" y1="26" x2="34" y2="44" stroke="#3E3A39" stroke-width="2.5"/>
                    <circle cx="25" cy="6" r="2.5" fill="#F2A497"/><circle cx="41" cy="22" r="2.5" fill="#5DB7DE"/><circle cx="9" cy="22" r="2.5" fill="#B9DAA5"/>
                  </svg>
                  <div>
                    <div class="parent-spot-name">神戸アンパンマンこどもミュージアム＆モール</div>
                    <div style="font-size: 0.74rem; color: #888;">兵庫県神戸市中央区東川崎町1-6-2</div>
                  </div>
                </div>
                <div class="parent-spot-sub">1 樓商場免門票，現烤果醬爺爺麵包店與神戶限定雜貨。</div>
                <div class="btn-row">
                  <a href="https://www.google.com/maps/search/?api=1&query=神戸アンパンマンこどもミュージアム＆モール" target="_blank" rel="noopener noreferrer" class="action-btn btn-gmap">
                    <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#A8D3E6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
                    <span>Google 地圖</span>
                  </a>
                  <a href="https://maps.apple.com/?q=神戸アンパンマンこどもミュージアム＆モール" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
                    <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
                    <span>Apple 地圖</span>
                  </a>
                </div>
              </div>

              <!-- 手繪散策虛線步道 (完全依據模擬圖，所有節點都是手繪卡片、皆可點選) -->
              <div class="visual-trail-card">
                <div class="visual-trail-title">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8C8885" stroke-width="2.5"><circle cx="12" cy="5" r="3"/><path d="M12 8v8l3 4M9 13l3-2 3 2"/></svg>
                  <span>NEIGHBORHOOD WALKING ROUTE (點擊節點看便籤)</span>
                </div>
                <svg class="interactive-trail-svg" viewBox="0 0 340 245" fill="none">
                  <!-- 彎曲虛線小路 -->
                  <path d="M 50 180 C 130 180, 80 120, 200 90 C 230 80, 270 30, 240 10" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5" fill="none"/>
                  <!-- 手繪樹 -->
                  <g transform="translate(18, 185)"><rect x="13" y="18" width="4" height="12" fill="#8C8885" stroke="#3E3A39" stroke-width="2"/><path d="M5 20 C2 5, 28 5, 25 20 Z" fill="#B9DAA5" stroke="#3E3A39" stroke-width="2.2"/></g>
                  <g transform="translate(285, 120)"><rect x="13" y="18" width="4" height="12" fill="#8C8885" stroke="#3E3A39" stroke-width="2"/><path d="M5 20 C2 5, 28 5, 25 20 Z" fill="#B9DAA5" stroke="#3E3A39" stroke-width="2.2"/></g>
                  <!-- 散步小人 -->
                  <g transform="translate(50, 145)"><circle cx="8" cy="4" r="3.5" fill="#F2A497" stroke="#3E3A39" stroke-width="2"/><path d="M8 8 L8 18 L13 26 M8 18 L3 26 M4 12 L12 12" stroke="#3E3A39" stroke-width="2" stroke-linecap="round"/></g>
                  <g transform="translate(195, 130)"><circle cx="8" cy="4" r="3.5" fill="#F2A497" stroke="#3E3A39" stroke-width="2"/><path d="M8 8 L8 18 L13 26 M8 18 L3 26 M4 12 L12 12" stroke="#3E3A39" stroke-width="2" stroke-linecap="round"/></g>

                  <!-- 節點 1：觀音屋 (手繪卡片樣式) -->
                  <g class="trail-clickable" onclick="openMemo('観音屋 ハーバーランド店', '兵庫県神戸市中央区東川崎町1-6-1 モザイク2F', '現烤丹麥鹹甜融化起司蛋糕，面海觀景首選！', '觀音屋+ハーバーランド店')" transform="translate(15, 15)">
                    <rect width="145" height="58" rx="14" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.5"/>
                    <text x="72" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#D9534F">観音屋</text>
                    <text x="72" y="38" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">ハーバーランド店</text>
                    <text x="72" y="50" text-anchor="middle" font-size="9.5" font-weight="700" fill="#888">(熱起司蛋糕)</text>
                  </g>
                  <text x="80" y="90" font-size="11" font-weight="900" fill="#3E3A39">徒歩 2分</text>

                  <!-- 節點 2：西村咖啡 (手繪卡片樣式，不再只是乾淨文字) -->
                  <g class="trail-clickable" onclick="openMemo('にしむら珈琲店 ハーバーランド店', '兵庫県神戸市中央区東川崎町1丁目5-7 カルメニ1F', '紅磚外觀神戶洋風老舖分店，手沖咖啡香濃郁。', 'にしむら珈琲店+ハーバーランド店')" transform="translate(190, 60)">
                    <rect width="140" height="52" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.5"/>
                    <text x="70" y="22" text-anchor="middle" font-size="11.5" font-weight="900" fill="#3E3A39">にしむら珈琲店</text>
                    <text x="70" y="36" text-anchor="middle" font-size="10" font-weight="800" fill="#666">ハーバーランド店</text>
                    <text x="70" y="46" text-anchor="middle" font-size="8.5" font-weight="700" fill="#888">(カルメニ 1F)</text>
                  </g>
                  <text x="150" y="120" font-size="11" font-weight="900" fill="#3E3A39">徒歩 3分</text>

                  <!-- 節點 3：BE KOBE 紀念碑 (手繪卡片樣式) -->
                  <g class="trail-clickable" onclick="openMemo('メリケンパーク「BE KOBE」モニュメント', '兵庫県神戸市中央区波止場町2-2', '神戶港海景地標拍照點，夜晚港塔與海洋館點燈絕美。', 'BE+KOBE+モニュメント')" transform="translate(170, 165)">
                    <rect width="160" height="52" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.5"/>
                    <text x="80" y="22" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">メリケンパーク</text>
                    <text x="80" y="38" text-anchor="middle" font-size="11" font-weight="900" fill="#5DB7DE">BE KOBE モニュメント</text>
                  </g>
                  <text x="160" y="195" font-size="11" font-weight="900" fill="#3E3A39">徒歩 8分</text>
                </svg>
              </div>
            </div>
          </div>

          <!-- 商圈 2：三宮・元町商店街圈 -->
          <div class="zone-card">
            <div class="zone-header" onclick="toggleZone(this)">
              <div class="zone-header-left">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.2"><rect x="3" y="6" width="18" height="15" rx="3" fill="#F6D27A"/><path d="M8 6V4a4 4 0 0 1 8 0v2"/></svg>
                <span>三宮・元町商店街圈（站前熱鬧中心）</span>
              </div>
              <span class="zone-arrow">▼</span>
            </div>
            <div class="zone-content">
              <div class="parent-spot-card">
                <div class="parent-spot-name">神戸三宮センター街 ＆ 神戶元町商店街</div>
                <div class="parent-spot-sub">三宮至元町最具代表性的連綿有蓋拱廊街，藥妝、百貨與老舖林立。</div>
                <div class="btn-row">
                  <a href="https://www.google.com/maps/search/?api=1&query=神戸三宮センター街" target="_blank" rel="noopener noreferrer" class="action-btn btn-gmap">
                    <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#A8D3E6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
                    <span>Google 三宮中心街</span>
                  </a>
                  <a href="https://maps.apple.com/?q=神戸元町商店街" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
                    <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
                    <span>Apple 元町商店街</span>
                  </a>
                </div>
              </div>

              <div class="visual-trail-card">
                <div class="visual-trail-title">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8C8885" stroke-width="2.5"><circle cx="12" cy="5" r="3"/><path d="M12 8v8l3 4M9 13l3-2 3 2"/></svg>
                  <span>NEIGHBORHOOD WALKING ROUTE (點擊節點看便籤)</span>
                </div>
                <svg class="interactive-trail-svg" viewBox="0 0 340 210" fill="none">
                  <path d="M 40 40 Q 180 30, 220 90 T 80 170" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5" fill="none"/>
                  <g class="trail-clickable" onclick="openMemo('本神戸肉 森谷商店 元町本店', '兵庫県神戸市中央区元町通1丁目7-2', '神戶排隊人氣王！現炸金黃酥脆牛肉可樂餅與碎肉排。', '森谷商店+元町本店')" transform="translate(10, 15)">
                    <rect width="140" height="42" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
                    <text x="70" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">本神戸肉 森谷商店</text>
                    <text x="70" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#D9534F">(排隊金黃牛肉可樂餅)</text>
                  </g>
                  <g class="trail-clickable" onclick="openMemo('スヌーピータウンショップ 神戶店', '兵庫県神戸市中央区小野柄通8丁目1-8 神戶阪急本館8F', '神戶限定水手風 Snoopy 專屬周邊、娃娃與文具。', 'スヌーピータウンショップ+神戸店')" transform="translate(180, 70)">
                    <rect width="150" height="42" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
                    <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">Snoopy Town 神戶店</text>
                    <text x="75" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#5DB7DE">(神戶阪急本館 8F)</text>
                  </g>
                  <g class="trail-clickable" onclick="openMemo('観音屋 三宮さんちか店', '兵庫県神戸市中央区三宮町1丁目10-1 さんちか7番街', '木村拓哉推薦的現烤起司蛋糕，位於站前地下街極為順路。', '観音屋+三宮さんちか店')" transform="translate(15, 140)">
                    <rect width="140" height="42" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
                    <text x="70" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">観音屋 さんちか店</text>
                    <text x="70" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#888">(三宮站地下街 7番街)</text>
                  </g>
                  <g class="trail-clickable" onclick="openMemo('にしむら珈琲店 三宮店', '兵庫県神戸市中央区琴ノ緒町5丁目3-5', 'JR三宮站北口昭和洋風喫茶，招牌手沖與濃醇維也納咖啡。', 'にしむら珈琲店+三宮店')" transform="translate(180, 145)">
                    <rect width="145" height="42" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
                    <text x="72" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">にしむら珈琲店 三宮店</text>
                    <text x="72" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#888">(JR三宮站北口昭和老舖)</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <!-- 商圈 3：北野異人館山手圈 -->
          <div class="zone-card">
            <div class="zone-header" onclick="toggleZone(this)">
              <div class="zone-header-left">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="#F2A497"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span>北野異人館山手圈（洋風主題區）</span>
              </div>
              <span class="zone-arrow">▼</span>
            </div>
            <div class="zone-content">
              <div class="parent-spot-card">
                <div class="parent-spot-name">PEANUTS HOTEL (神戸北野)</div>
                <div class="parent-spot-sub">花生漫畫主題飯店，1 樓設有主題 Cafe 與外帶紀念品專屬區。</div>
                <div class="btn-row">
                  <a href="https://www.google.com/maps/search/?api=1&query=PEANUTS+HOTEL" target="_blank" rel="noopener noreferrer" class="action-btn btn-gmap">
                    <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#A8D3E6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
                    <span>Google 地圖</span>
                  </a>
                  <a href="https://maps.apple.com/?q=PEANUTS+HOTEL" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
                    <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
                    <span>Apple 地圖</span>
                  </a>
                </div>
              </div>

              <div class="visual-trail-card">
                <div class="visual-trail-title">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8C8885" stroke-width="2.5"><circle cx="12" cy="5" r="3"/><path d="M12 8v8l3 4M9 13l3-2 3 2"/></svg>
                  <span>NEIGHBORHOOD WALKING ROUTE (點擊節點看便籤)</span>
                </div>
                <svg class="interactive-trail-svg" viewBox="0 0 340 100" fill="none">
                  <path d="M 50 50 L 290 50" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
                  <g transform="translate(145, 25)">
                    <circle cx="8" cy="4" r="3.5" fill="#F2A497" stroke="#3E3A39" stroke-width="2"/>
                    <path d="M8 8 L8 18 L13 26 M8 18 L3 26 M4 12 L12 12" stroke="#3E3A39" stroke-width="2" stroke-linecap="round"/>
                  </g>
                  <text x="145" y="75" font-size="11" font-weight="900" fill="#3E3A39">徒歩 5分</text>
                  <g class="trail-clickable" onclick="openMemo('にしむら珈琲店 中山手本店', '兵庫県神戸市中央区中山手通1丁目26-3', '日本第一家會員制咖啡喫茶本店，如歐洲中世紀木造城堡般優雅。', 'にしむら珈琲店+中山手本店')" transform="translate(180, 25)">
                    <rect width="150" height="46" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
                    <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">にしむら珈琲店</text>
                    <text x="75" y="35" text-anchor="middle" font-size="9" font-weight="800" fill="#888">中山手本店(創始城堡店)</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 往岡山導航決策 (目前 GPS 位置出發) -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">19:40 - 22:00</span>
          <span class="tag tag-car">高速長途</span>
        </div>
        <div class="card-title">神戶市區 ➔ 岡山站前</div>
        <div class="card-desc">在市區逛完後，依當下精神與時間選擇直奔飯店或走 SEP 免費路線（導航自動以當前位置出發）：</div>
        
        <div class="route-choice-card" style="background: #FFF7F5; border-color: var(--coral);">
          <div class="route-choice-header">
            <span class="route-choice-title">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10" fill="#F2A497"/></svg>
              <span>方案 A：累了想快（從目前位置出發）</span>
            </span>
            <span class="route-choice-tag" style="background: var(--coral); color: #fff;">自費約 1100円</span>
          </div>
          <p style="font-size: 0.78rem; color: #666; margin-bottom: 8px;">鑽新神戶隧道接阪神高速 7 號，約 20 分鐘直上山陽道（省下 20 分鐘市區繁複紅綠燈）。</p>
          <div class="btn-row">
            <a href="https://www.google.com/maps/dir/?api=1&destination=スマイルホテル岡山&travelmode=driving" target="_blank" rel="noopener noreferrer" class="action-btn btn-gmap">
              <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#A8D3E6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
              <span>Google 目前位置直達</span>
            </a>
            <a href="https://maps.apple.com/?daddr=スマイルホテル岡山&dirflg=d" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
              <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
              <span>Apple 目前位置直達</span>
            </a>
          </div>
        </div>

        <div class="route-choice-card" style="background: #FFFAF0; border-color: var(--yamabuki);">
          <div class="route-choice-header">
            <span class="route-choice-title">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><circle cx="12" cy="12" r="9" fill="#F6D27A"/><line x1="12" y1="7" x2="12" y2="17"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="16" y2="14"/></svg>
              <span>方案 B：SEP 0円（先開往神戶西 IC）</span>
            </span>
            <span class="route-choice-tag" style="background: var(--yamabuki);">SEP 全額折抵</span>
          </div>
          <p style="font-size: 0.78rem; color: #666; margin-bottom: 8px;">不管人在神戶哪裡，先沿市區免費平面開往【神戶西 IC】上山陽道，全程通行費 0 円。</p>
          <div class="btn-row">
            <a href="https://www.google.com/maps/dir/?api=1&destination=神戸西IC&travelmode=driving" target="_blank" rel="noopener noreferrer" class="action-btn btn-warn">
              <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#F6D27A"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
              <span>Google 導向神戶西IC</span>
            </a>
            <a href="https://maps.apple.com/?daddr=神戸西IC&dirflg=d" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
              <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
              <span>Apple 導向神戶西IC</span>
            </a>
          </div>
        </div>

        <div class="alert-box">
          <div class="alert-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D9534F" stroke-width="2.5"><polygon points="12,2 22,20 2,20"/><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="17" r="1" fill="#D9534F"/></svg>
            <span>SEP 避坑決策提醒</span>
          </div>
          • 想省錢請走 <b>方案 B（先開平面至神戶西 IC）</b>，上山陽道後通行費全由 SEP 買單。<br>
          • 若逛完神戶已經疲憊，直接選 <b>方案 A</b>，花 1,100 円省 20 分鐘與繁雜紅綠燈。
        </div>
      </div>

      <!-- 岡山入住與拉麵 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">22:00</span>
          <span class="tag tag-hotel">住宿 Check-in</span>
        </div>
        <div class="card-title">スマイルホテル岡山 (Smile Hotel Okayama)</div>
        <div class="card-desc">辦理入住休息，放妥行李後步行前往消夜。</div>
        <div class="copy-chip" onclick="navigator.clipboard.writeText('岡山県岡山市北区磨屋町10-8')">
          <div class="copy-chip-left">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/><circle cx="12" cy="9" r="2.5" fill="#F2A497"/></svg>
            <span>岡山県岡山市北区磨屋町10-8</span>
          </div>
          <span class="copy-badge">複製地址</span>
        </div>
        <div class="btn-row" style="margin-bottom: 12px;">
          <a href="https://www.google.com/maps/search/?api=1&query=スマイルホテル岡山" target="_blank" rel="noopener noreferrer" class="action-btn btn-gmap">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#A8D3E6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
            <span>Google 地圖</span>
          </a>
          <a href="https://maps.apple.com/?q=スマイルホテル岡山" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
            <span>Apple 地圖</span>
          </a>
        </div>

        <div class="visual-trail-card" style="background: #FFF7F5; border-color: var(--coral);">
          <div class="visual-trail-title" style="color: #D9534F;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D9534F" stroke-width="2.5"><circle cx="12" cy="14" r="8" fill="#F6D27A"/><path d="M4 14 Q12 18 20 14"/></svg>
            <span>岡山站前消夜推薦 (營業至 23:30)</span>
          </div>
          <svg class="interactive-trail-svg" viewBox="0 0 340 70" fill="none">
            <path d="M 20 35 L 320 35" stroke="#3E3A39" stroke-width="2" stroke-dasharray="4 4"/>
            <text x="30" y="24" font-size="11" font-weight="900" fill="#3E3A39">徒歩 6分</text>
            <g class="trail-clickable" onclick="openMemo('麵酒一照庵 岡山本店', '岡山県岡山市北区中山下1丁目7-16', '飯店步行約 5~7 分鐘。以特色笠岡醬油拉麵與小酌下酒菜聞名，營業時間至 23:30，長途自駕後的暖胃首選！', '麵酒一照庵+岡山本店')" transform="translate(110, 10)">
              <rect width="210" height="50" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="105" y="22" text-anchor="middle" font-size="12" font-weight="900" fill="#D9534F">麵酒一照庵 岡山本店</text>
              <text x="105" y="38" text-anchor="middle" font-size="9.5" font-weight="800" fill="#666">笠岡醬油拉麵・營業至 23:30</text>
            </g>
          </svg>
        </div>
      </div>
    `
  },
  d2: { title: "Day 2 (11/28)", contentHtml: `<div class="card" style="text-align:center; padding:40px 16px;"><p style="font-size:1.1rem; font-weight:900;">Day 2 岡山 ➔ 倉敷 ➔ 尾道 規劃中</p></div>` },
  d3: { title: "Day 3 (11/29)", contentHtml: `<div class="card" style="text-align:center; padding:40px 16px;"><p style="font-size:1.1rem; font-weight:900;">Day 3 尾道 ➔ 廣島 規劃中</p></div>` },
  d4: { title: "Day 4 (11/30)", contentHtml: `<div class="card" style="text-align:center; padding:40px 16px;"><p style="font-size:1.1rem; font-weight:900;">Day 4 廣島 ➔ 宮島 規劃中</p></div>` },
  d5: { title: "Day 5 (12/01)", contentHtml: `<div class="card" style="text-align:center; padding:40px 16px;"><p style="font-size:1.1rem; font-weight:900;">Day 5 宮島 ➔ 吳市 ➔ 兵庫 規劃中</p></div>` },
  d6: { title: "Day 6 (12/02)", contentHtml: `<div class="card" style="text-align:center; padding:40px 16px;"><p style="font-size:1.1rem; font-weight:900;">Day 6 神戶 ➔ 大阪 規劃中</p></div>` },
  d7: { title: "Day 7 (12/03)", contentHtml: `<div class="card" style="text-align:center; padding:40px 16px;"><p style="font-size:1.1rem; font-weight:900;">Day 7 臨空城還車 ➔ 機場返台 規劃中</p></div>` }
};

// ==================== 頁面渲染與互動控制 ====================

let currentDay = 'd1';

// 初始化渲染 Day 按鈕列
function initDaySelector() {
  const bar = document.getElementById('day-selector-bar');
  bar.innerHTML = Object.keys(ITINERARY_DATA).map(key => `
    <button class="day-btn ${key === currentDay ? 'active' : ''}" onclick="switchDay('${key}')">
      ${ITINERARY_DATA[key].title}
    </button>
  `).join('');
  renderItinerary();
}

// 切換天數
function switchDay(dayKey) {
  currentDay = dayKey;
  document.querySelectorAll('.day-btn').forEach((btn, index) => {
    btn.classList.toggle('active', Object.keys(ITINERARY_DATA)[index] === dayKey);
  });
  renderItinerary();
}

// 渲染當前天數卡片
function renderItinerary() {
  const container = document.getElementById('itinerary-cards-container');
  container.innerHTML = ITINERARY_DATA[currentDay].contentHtml;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 商圈折疊
function toggleZone(headerEl) {
  headerEl.parentElement.classList.toggle('open');
}

// 底部手繪便籤 Drawer 控制 (無 Emoji、標準 API)
let currentDrawerAddr = '';
function openMemo(name, addr, desc, searchKey) {
  document.getElementById('drawer-title').textContent = name;
  document.getElementById('drawer-desc').textContent = desc;
  document.getElementById('drawer-addr').textContent = addr;
  currentDrawerAddr = addr;

  document.getElementById('drawer-btn-gmap').href = `https://www.google.com/maps/search/?api=1&query=${searchKey || encodeURIComponent(name)}`;
  document.getElementById('drawer-btn-amap').href = `https://maps.apple.com/?q=${searchKey || encodeURIComponent(name)}`;

  document.getElementById('drawer-backdrop').classList.add('show');
  document.getElementById('memo-drawer').classList.add('open');
}

function closeMemo() {
  document.getElementById('drawer-backdrop').classList.remove('show');
  document.getElementById('memo-drawer').classList.remove('open');
}

function copyDrawerAddr() {
  if (currentDrawerAddr) {
    navigator.clipboard.writeText(currentDrawerAddr);
    const badge = document.querySelector('.memo-drawer .copy-badge');
    const oldText = badge.textContent;
    badge.textContent = '已複製！';
    setTimeout(() => { badge.textContent = oldText; }, 1500);
  }
}

// 主視圖切換 (SPA)
function switchView(viewId) {
  document.querySelectorAll('.view-container').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));

  const target = document.getElementById(viewId);
  if (target) target.classList.add('active');

  if (viewId === 'view-itinerary') document.getElementById('btn-itinerary').classList.add('active');
  if (viewId === 'view-flights') document.getElementById('btn-flights').classList.add('active');
  if (viewId === 'view-prep') document.getElementById('btn-prep').classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 倒數計時器
function updateCountdown() {
  const targetDate = new Date('2026-11-27T14:45:00+09:00').getTime();
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('cd-days').textContent = days;
    document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
    document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
    document.getElementById('countdown-text').textContent = `距離 2026/11/27 (五) 降落關西機場還有 ${days} 天`;
  }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// 備忘勾選持久化
function toggleCheck(item, key) {
  item.classList.toggle('done');
  const isDone = item.classList.contains('done');
  const box = document.getElementById(key);
  box.textContent = isDone ? '✓' : '';
  localStorage.setItem('checklist_' + key, isDone ? '1' : '0');
}

// 日幣換算
function calcTwd() {
  const jpy = parseFloat(document.getElementById('jpy-input').value) || 0;
  const twd = Math.round(jpy * 0.21);
  document.getElementById('twd-result').textContent = `約新台幣：NT$ ${twd.toLocaleString()}`;
}

// 頁面載入執行
window.addEventListener('DOMContentLoaded', () => {
  initDaySelector();
  ['c1','c2','c3','c4','c5','c6'].forEach(key => {
    if (localStorage.getItem('checklist_' + key) === '1') {
      const box = document.getElementById(key);
      if (box) {
        box.textContent = '✓';
        box.parentElement.classList.add('done');
      }
    }
  });
});