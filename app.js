// ==================== 行程資料庫 ====================
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
        <div class="card-title">桃園機場 (TPE) T1 ➔ 関西空港 (KIX) T1</div>
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

      <!-- 神戸中途散策 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">17:00 - 19:30</span>
          <span class="tag tag-must">中途放風</span>
        </div>
        <div class="card-title">神戸中途散策・スポット</div>
        <div class="card-desc">依停車位置選擇探索商圈。點擊步道上的節點卡片，底部立即滑出日文地址與地圖便籤：</div>
        
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
              <!-- 母地標 -->
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
                <div class="parent-spot-sub">1 樓商場免門票，現烤果醬爺爺麵包店與神戸限定雜貨。</div>
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

              <!-- 手繪散策步道 (港區) -->
              <div class="visual-trail-card">
                <div class="visual-trail-title">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8C8885" stroke-width="2.5"><circle cx="12" cy="5" r="3"/><path d="M12 8v8l3 4M9 13l3-2 3 2"/></svg>
                  <span>NEIGHBORHOOD WALKING ROUTE (點擊節點看便籤)</span>
                </div>
                
                <svg class="interactive-trail-svg" viewBox="0 0 340 310" fill="none">
                  <!-- 連貫虛線路徑 -->
                  <path d="M 85 85 C 85 105, 245 40, 245 60" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
                  <path d="M 245 135 C 245 155, 245 160, 245 175" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
                  <path d="M 245 250 C 245 265, 170 250, 170 260" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
                  
                  <!-- 路樹裝飾 -->
                  <g transform="translate(14, 185)"><rect x="13" y="18" width="4" height="12" fill="#8C8885" stroke="#3E3A39" stroke-width="2"/><path d="M5 20 C2 5, 28 5, 25 20 Z" fill="#B9DAA5" stroke="#3E3A39" stroke-width="2.2"/></g>
                  <g transform="translate(290, 20)"><rect x="13" y="18" width="4" height="12" fill="#8C8885" stroke="#3E3A39" stroke-width="2"/><path d="M5 20 C2 5, 28 5, 25 20 Z" fill="#B9DAA5" stroke="#3E3A39" stroke-width="2.2"/></g>

                  <!-- 散步小人 -->
                  <g transform="translate(130, 95)"><circle cx="8" cy="4" r="3.5" fill="#F2A497" stroke="#3E3A39" stroke-width="2"/><path d="M8 8 L8 18 L13 26 M8 18 L3 26 M4 12 L12 12" stroke="#3E3A39" stroke-width="2" stroke-linecap="round"/></g>

                  <!-- 節點 1：觀音屋 -->
                  <g class="trail-clickable" onclick="openMemo('観音屋 ハーバーランド店', '兵庫県神戸市中央区東川崎町1-6-1 umieモザイク 2F', '現烤丹麥鹹甜融化起司蛋糕，面海觀景首選！電話：078-360-1537', '観音屋+ハーバーランド店')" transform="translate(12, 12)">
                    <rect width="146" height="52" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.5"/>
                    <text x="73" y="22" text-anchor="middle" font-size="12" font-weight="900" fill="#3E3A39">観音屋</text>
                    <text x="73" y="35" text-anchor="middle" font-size="10" font-weight="900" fill="#3E3A39">ハーバーランド店</text>
                    <text x="73" y="46" text-anchor="middle" font-size="8.5" font-weight="700" fill="#777">(熱起司蛋糕)</text>
                    <text x="73" y="69" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 2分</text>
                  </g>

                  <!-- 節點 2：西村咖啡 -->
                  <g class="trail-clickable" onclick="openMemo('にしむら珈琲店 ハーバーランド店', '兵庫県神戸市中央区東川崎町1丁目5-7 カルメニ1F', '紅磚外觀神戸洋風老舖分店，手沖咖啡香濃郁。電話：078-362-6220', 'にしむら珈琲店+ハーバーランド店')" transform="translate(172, 60)">
                    <rect width="146" height="52" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.5"/>
                    <text x="73" y="22" text-anchor="middle" font-size="11.5" font-weight="900" fill="#3E3A39">にしむら珈琲店</text>
                    <text x="73" y="35" text-anchor="middle" font-size="10" font-weight="800" fill="#3E3A39">ハーバーランド店</text>
                    <text x="73" y="46" text-anchor="middle" font-size="8.5" font-weight="700" fill="#777">(カルメニ 1F)</text>
                    <text x="73" y="69" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 3分</text>
                  </g>

                  <!-- 節點 3：Snoopy Town 神戶店 (MOSAIC 2F) -->
                  <g class="trail-clickable" onclick="openMemo('スヌーピータウンショップ 神戸店', '兵庫県神戸市中央区東川崎町1-6-1 umieモザイク 2F', 'umie MOSAIC 2樓，近摩天輪！各式史努比限定周邊與雜貨專門店。電話：078-360-6788', 'スヌーピータウンショップ+神戸店')" transform="translate(162, 150)">
                    <rect width="166" height="52" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.5"/>
                    <text x="83" y="22" text-anchor="middle" font-size="11.5" font-weight="900" fill="#3E3A39">Snoopy Town 神戸店</text>
                    <text x="83" y="36" text-anchor="middle" font-size="10" font-weight="800" fill="#3E3A39">umie モザイク 2階</text>
                    <text x="83" y="47" text-anchor="middle" font-size="8.5" font-weight="700" fill="#777">(摩天輪旁專賣店)</text>
                    <text x="83" y="69" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 4分</text>
                  </g>

                  <!-- 節點 4：BE KOBE -->
                  <g class="trail-clickable" onclick="openMemo('メリケンパーク「BE KOBE」モニュメント', '兵庫県神戸市中央区波止場町2-2 メリケンパーク内', '神戸港海景地標拍照點，夜晚港塔與海洋館點燈絕美。', 'BE+KOBE+メリケンパーク')" transform="translate(85, 240)">
                    <rect width="170" height="48" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.5"/>
                    <text x="85" y="21" text-anchor="middle" font-size="11.5" font-weight="900" fill="#3E3A39">メリケンパーク</text>
                    <text x="85" y="37" text-anchor="middle" font-size="11.5" font-weight="900" fill="#3E3A39">BE KOBE モニュメント</text>
                  </g>
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
                <div class="parent-spot-name">神戸三宮センター街 ＆ 神戸元町商店街</div>
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

              <!-- 手繪散策步道 (三宮・元町) -->
              <div class="visual-trail-card">
                <div class="visual-trail-title">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8C8885" stroke-width="2.5"><circle cx="12" cy="5" r="3"/><path d="M12 8v8l3 4M9 13l3-2 3 2"/></svg>
                  <span>NEIGHBORHOOD WALKING ROUTE (點擊節點看便籤)</span>
                </div>
                <svg class="interactive-trail-svg" viewBox="0 0 340 220" fill="none">
                  <path d="M 85 55 C 130 55, 140 60, 245 60" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
                  <path d="M 245 105 C 245 120, 245 130, 245 145" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
                  <path d="M 170 165 C 130 165, 120 165, 85 165" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>

                  <!-- 節點 1：森谷商店 -->
                  <g class="trail-clickable" onclick="openMemo('本神戸肉 森谷商店 元町本店', '兵庫県神戸市中央区元町通1丁目7-2', '神戸排隊人氣王！現炸金黃酥脆牛肉可樂餅與碎肉排。電話：078-391-4129', '森谷商店+元町本店')" transform="translate(10, 15)">
                    <rect width="150" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
                    <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">本神戸肉 森谷商店</text>
                    <text x="75" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(排隊金黃牛肉可樂餅)</text>
                    <text x="75" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 5分</text>
                  </g>

                  <!-- 節點 2：Snoopy Town 三宮店 -->
                  <g class="trail-clickable" onclick="openMemo('スヌーピータウンショップ 三宮店', '兵庫県神戸市中央区三宮町1-6-18 エイツビル2F', '三宮商圈專賣店！各式史努比限定雜貨與文具。電話：078-332-7701', 'スヌーピータウンショップ+三宮店')" transform="translate(170, 30)">
                    <rect width="155" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
                    <text x="77" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">Snoopy Town 三宮店</text>
                    <text x="77" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(エイツビル 2F)</text>
                    <text x="77" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 3分</text>
                  </g>

                  <!-- 節點 3：にしむら珈琲店 三宮店 -->
                  <g class="trail-clickable" onclick="openMemo('にしむら珈琲店 三宮店', '兵庫県神戸市中央区琴ノ緒町5丁目3-5', 'JR三宮站北口昭和洋風喫茶，招牌手沖與濃醇維也納咖啡。電話：078-241-2777', 'にしむら珈琲店+三宮店')" transform="translate(170, 135)">
                    <rect width="155" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
                    <text x="77" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">にしむら珈琲店 三宮店</text>
                    <text x="77" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(JR三宮站北口昭和老舖)</text>
                    <text x="77" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 4分</text>
                  </g>

                  <!-- 節點 4：觀音屋 さんちか店 -->
                  <g class="trail-clickable" onclick="openMemo('観音屋 さんちか店', '兵庫県神戸市中央区三宮町1丁目10-1 さんちか7番街', '木村拓哉推薦的現烤起司蛋糕，位於站前地下街極為順路。電話：078-391-1710', '観音屋+さんちか店')" transform="translate(10, 135)">
                    <rect width="150" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
                    <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">観音屋 さんちか店</text>
                    <text x="75" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(三宮站地下街 7番街)</text>
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
                <div class="parent-spot-sub">花生漫畫主題飯店，1 樓設有主題 Cafe 與外帶紀念品專屬區。電話：078-200-5810</div>
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

              <!-- 手繪散策步道 (北野) -->
              <div class="visual-trail-card">
                <div class="visual-trail-title">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8C8885" stroke-width="2.5"><circle cx="12" cy="5" r="3"/><path d="M12 8v8l3 4M9 13l3-2 3 2"/></svg>
                  <span>NEIGHBORHOOD WALKING ROUTE (點擊節點看便籤)</span>
                </div>
                <svg class="interactive-trail-svg" viewBox="0 0 340 100" fill="none">
                  <path d="M 30 50 L 150 50" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
                  <g transform="translate(80, 25)">
                    <circle cx="8" cy="4" r="3.5" fill="#F2A497" stroke="#3E3A39" stroke-width="2"/>
                    <path d="M8 8 L8 18 L13 26 M8 18 L3 26 M4 12 L12 12" stroke="#3E3A39" stroke-width="2" stroke-linecap="round"/>
                  </g>
                  
                  <g class="trail-clickable" onclick="openMemo('神戸にしむら珈琲店 中山手本店', '兵庫県神戸市中央区中山手通1丁目26-3', '日本第一家會員制咖啡喫茶本店，如歐洲中世紀木造城堡般優雅。電話：078-221-1872', '神戸にしむら珈琲店+中山手本店')" transform="translate(160, 25)">
                    <rect width="165" height="46" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
                    <text x="82" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">にしむら珈琲店</text>
                    <text x="82" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">中山手本店 (城堡老舖)</text>
                    <text x="82" y="60" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 5分</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 往岡山導航決策 (修復神戶西IC定錨) -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">19:40 - 22:00</span>
          <span class="tag tag-car">高速長途</span>
        </div>
        <div class="card-title">神戸市區 ➔ 岡山站前</div>
        <div class="card-desc">在市區逛完後，依當下精神與時間選擇直奔飯店或走 SEP 免費路線（導航自動以當前位置出發）：</div>
        
        <div class="route-choice-card" style="background: #FFF7F5; border-color: var(--coral);">
          <div class="route-choice-header">
            <span class="route-choice-title">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10" fill="#F2A497"/></svg>
              <span>方案 A：累了想快（從目前位置出發）</span>
            </span>
            <span class="route-choice-tag" style="background: var(--coral); color: #fff;">自費約 1100円</span>
          </div>
          <p style="font-size: 0.78rem; color: #666; margin-bottom: 8px;">鑽新神戸隧道接阪神高速 7 號，約 20 分鐘直上山陽道（省下 20 分鐘市區繁複紅綠燈）。</p>
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
              <span>方案 B：SEP 0円（先開往神戸西 IC）</span>
            </span>
            <span class="route-choice-tag" style="background: var(--yamabuki);">SEP 全額折抵</span>
          </div>
          <p style="font-size: 0.78rem; color: #666; margin-bottom: 8px;">不管人在神戸哪裡，先沿市區免費平面開往【神戸西 IC】上山陽道，全程通行費 0 円。</p>
          <div class="btn-row">
            <a href="https://www.google.com/maps/dir/?api=1&destination=兵庫県神戸市西区+神戸西IC&travelmode=driving" target="_blank" rel="noopener noreferrer" class="action-btn btn-warn">
              <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#F6D27A"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
              <span>Google 導向神戸西IC</span>
            </a>
            <a href="https://maps.apple.com/?daddr=兵庫県神戸市西区+神戸西IC&dirflg=d" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
              <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
              <span>Apple 導向神戸西IC</span>
            </a>
          </div>
        </div>

        <div class="alert-box">
          <div class="alert-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D9534F" stroke-width="2.5"><polygon points="12,2 22,20 2,20"/><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="17" r="1" fill="#D9534F"/></svg>
            <span>SEP 避坑決策提醒</span>
          </div>
          • 想省錢請走 <b>方案 B（先開平面至神戸西 IC）</b>，上山陽道後通行費全由 SEP 買單。<br>
          • 若逛完神戸已經疲憊，直接選 <b>方案 A</b>，花 1,100 円省 20 分鐘與繁雜紅綠燈。
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
              <text x="105" y="22" text-anchor="middle" font-size="12" font-weight="900" fill="#3E3A39">麵酒一照庵 岡山本店</text>
              <text x="105" y="38" text-anchor="middle" font-size="9.5" font-weight="800" fill="#777">笠岡醬油拉麵・營業至 23:30</text>
            </g>
          </svg>
        </div>
      </div>
    `
    },
    d2: {
        title: "Day 2 (11/28)",
        contentHtml: `
      <!-- 吉備津神社 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">10:00 - 11:15</span>
          <span class="tag tag-car">晨間自駕</span>
        </div>
        <div class="card-title">岡山出發 ➔ 吉備津神社</div>
        <div class="card-desc">10:00 從飯店出發（車程約 25 分）。參拜國寶本殿，漫步 400 公尺壯麗木造長迴廊（桃太郎傳說原型神社），設有免費大型停車場。</div>
        <div class="copy-chip" onclick="navigator.clipboard.writeText('岡山県岡山市北区吉備津931')">
          <div class="copy-chip-left">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/><circle cx="12" cy="9" r="2.5" fill="#F2A497"/></svg>
            <span>岡山県岡山市北区吉備津931</span>
          </div>
          <span class="copy-badge">複製地址</span>
        </div>
        <div class="btn-row">
          <a href="https://www.google.com/maps/search/?api=1&query=吉備津神社" target="_blank" rel="noopener noreferrer" class="action-btn btn-gmap">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#A8D3E6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
            <span>Google 地圖</span>
          </a>
          <a href="https://maps.apple.com/?q=吉備津神社" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
            <span>Apple 地圖</span>
          </a>
        </div>
      </div>

      <!-- 倉敷美觀地區 (白天散策) -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">11:40 - 14:15</span>
          <span class="tag tag-must">日間老街</span>
        </div>
        <div class="card-title">倉敷美觀地區・白壁老街散策</div>
        <div class="card-desc">車停【倉敷市營中央停車場】（地下平面，首小時 300円 / 後續 100円半小時）。白天約 2.5 小時含午餐、採買布丁與 Snoopy，並登阿智神社俯瞰全景。</div>
        
        <!-- 停車場母卡片 -->
        <div class="parent-spot-card">
          <div class="parent-spot-header">
            <svg class="parent-spot-icon" viewBox="0 0 50 50" fill="none">
              <rect x="8" y="8" width="34" height="34" rx="8" fill="#A8D3E6" stroke="#3E3A39" stroke-width="2.5"/>
              <text x="25" y="33" text-anchor="middle" font-size="22" font-weight="900" fill="#3E3A39">P</text>
            </svg>
            <div>
              <div class="parent-spot-name">倉敷市営中央駐車場</div>
              <div style="font-size: 0.74rem; color: #888;">岡山県倉敷市中央2-6-1（美觀入口正對面）</div>
            </div>
          </div>
          <div class="btn-row">
            <a href="https://www.google.com/maps/search/?api=1&query=倉敷市営中央駐車場" target="_blank" rel="noopener noreferrer" class="action-btn btn-gmap">
              <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#A8D3E6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
              <span>Google 停車場</span>
            </a>
            <a href="https://maps.apple.com/?q=倉敷市営中央駐車場" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
              <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
              <span>Apple 停車場</span>
            </a>
          </div>
        </div>

        <!-- 倉敷手繪步道 -->
        <div class="visual-trail-card">
          <div class="visual-trail-title">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8C8885" stroke-width="2.5"><circle cx="12" cy="5" r="3"/><path d="M12 8v8l3 4M9 13l3-2 3 2"/></svg>
            <span>KURASHIKI BIKAN ROUTE (點擊節點看便籤)</span>
          </div>
          
          <svg class="interactive-trail-svg" viewBox="0 0 340 225" fill="none">
            <path d="M 85 55 C 130 55, 140 60, 245 60" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
            <path d="M 245 105 C 245 120, 245 130, 245 145" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
            <path d="M 170 165 C 130 165, 120 165, 85 165" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>

            <!-- 散步小人 -->
            <g transform="translate(145, 95)"><circle cx="8" cy="4" r="3.5" fill="#F2A497" stroke="#3E3A39" stroke-width="2"/><path d="M8 8 L8 18 L13 26 M8 18 L3 26 M4 12 L12 12" stroke="#3E3A39" stroke-width="2" stroke-linecap="round"/></g>

            <!-- 節點 1：倉敷美觀地區 -->
            <g class="trail-clickable" onclick="openMemo('倉敷美観地区（柳並木・白壁老街）', '岡山県倉敷市本町', '柳樹運河與江戶白壁倉庫群，推薦順買有鄰庵微笑布丁。', '倉敷美観地区')" transform="translate(10, 15)">
              <rect width="150" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">倉敷美観地区</text>
              <text x="75" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(白壁運河・布丁採買)</text>
              <text x="75" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 2分</text>
            </g>

            <!-- 節點 2：SNOOPY Chocolat 倉敷 -->
            <g class="trail-clickable" onclick="openMemo('SNOOPY Chocolat 倉敷', '岡山県倉敷市本町5-3', '倉敷限定丹寧藍主題史努比巧克力與周邊專賣店！', 'SNOOPY+Chocolat+倉敷')" transform="translate(170, 30)">
              <rect width="155" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="77" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">SNOOPY Chocolat</text>
              <text x="77" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(倉敷限定丹寧史努比)</text>
              <text x="77" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 2分</text>
            </g>

            <!-- 節點 3：倉敷牛仔街 -->
            <g class="trail-clickable" onclick="openMemo('倉敷デニムストリート（倉敷牛仔街）', '岡山県倉敷市中央1-10-11', '日本丹寧聖地兒島發源品牌集結，藍色丹寧霜淇淋與包子必看。', '倉敷デニムストリート')" transform="translate(170, 135)">
              <rect width="155" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="77" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">倉敷デニムストリート</text>
              <text x="77" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(日本丹寧牛仔街)</text>
              <text x="77" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 6分</text>
            </g>

            <!-- 節點 4：阿智神社 -->
            <g class="trail-clickable" onclick="openMemo('阿智神社', '岡山県倉敷市本町12-1', '位於鶴形山頂，由美觀老街步行石階直達，可俯瞰整片倉敷黑瓦屋頂全景與購買花纏守。', '阿智神社')" transform="translate(10, 135)">
              <rect width="150" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">阿智神社</text>
              <text x="75" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(鶴形山俯瞰美觀全景)</text>
            </g>
          </svg>
        </div>

        <div class="alert-box" style="margin-top: 10px;">
          <div class="alert-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D9534F" stroke-width="2.5"><polygon points="12,2 22,20 2,20"/><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="17" r="1" fill="#D9534F"/></svg>
            <span>時間卡點提醒：14:15 準時南下</span>
          </div>
          • 11 月底太陽 <b>16:50 落日</b>，且難波牧場 <b>17:00 打烊</b>，最晚 14:15 需從倉敷開車出發（車程約 40 分鐘）。
        </div>
      </div>

      <!-- 下津井・瀨戶大橋海線追夕陽 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">14:55 - 17:05</span>
          <span class="tag tag-car">海線絕景</span>
        </div>
        <div class="card-title">下津井漁港 ➔ 瀨戶大橋夕陽百選</div>
        <div class="card-desc">沿瀨戶內海海岸線自駕串聯四大景點（彼此車程僅 3~5 分鐘），點擊方塊查看詳情與地圖：</div>

        <!-- 自駕海線手繪步道 -->
        <div class="visual-trail-card">
          <div class="visual-trail-title">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8C8885" stroke-width="2.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
            <span>SETO BRIDGE COASTAL ROUTE (點擊節點看便籤)</span>
          </div>
          
          <svg class="interactive-trail-svg" viewBox="0 0 340 230" fill="none">
            <path d="M 85 55 C 130 55, 140 60, 245 60" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
            <path d="M 245 105 C 245 120, 245 130, 245 145" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
            <path d="M 170 165 C 130 165, 120 165, 85 165" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>

            <!-- 路樹裝飾 -->
            <g transform="translate(142, 95)"><rect x="13" y="18" width="4" height="12" fill="#8C8885" stroke="#3E3A39" stroke-width="2"/><path d="M5 20 C2 5, 28 5, 25 20 Z" fill="#B9DAA5" stroke="#3E3A39" stroke-width="2.2"/></g>

            <!-- 節點 1：難波牧場 -->
            <g class="trail-clickable" onclick="openMemo('難波牧場アイス屋さん（SeaSideFarm）', '岡山県倉敷市下津井5-2388-11', '14:55-15:35｜牧場現榨生乳義式冰淇淋，海景露天座位超療癒（11月營業至17:00）。', '難波牧場アイス屋さん')" transform="translate(10, 15)">
              <rect width="150" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">難波牧場 冰淇淋店</text>
              <text x="75" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(15:30前抵達吃冰)</text>
              <text x="75" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">車程 4分</text>
            </g>

            <!-- 節點 2：むかし下津井回船問屋 -->
            <g class="trail-clickable" onclick="openMemo('むかし下津井回船問屋', '岡山県倉敷市下津井1丁目7-23', '機動順遊點｜江戶至明治時代北前船繁榮商行古民家，免費參觀並設有免費停車場（營業 09:00-17:00）。', 'むかし下津井回船問屋')" transform="translate(170, 30)">
              <rect width="155" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="77" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">むかし下津井回船問屋</text>
              <text x="77" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(江戶北前船古商行聚落)</text>
              <text x="77" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">車程 3分</text>
            </g>

            <!-- 節點 3：田土浦公園 -->
            <g class="trail-clickable" onclick="openMemo('田土浦公園（瀬戸大橋正下方防波堤）', '岡山県倉敷市下津井田之浦1-1', '15:40-16:05｜近距離仰望瀨戶大橋巨型鋼樑結構，路邊可暫停，手機 0.5x 仰角拍出震撼構圖。', '田土浦公園')" transform="translate(170, 135)">
              <rect width="155" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="77" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">田土浦公園</text>
              <text x="77" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(大橋鋼骨正下方 0.5x仰拍)</text>
              <text x="77" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">車程 4分</text>
            </g>

            <!-- 節點 4：鷲羽山第二展望台 -->
            <g class="trail-clickable" onclick="openMemo('鷲羽山第二展望台', '岡山県倉敷市下津井田之浦', '16:15-17:05｜日本夕陽百選名所！開車直達免費停車場，欣賞 16:50 夕陽與瀨戶大橋餘暉。', '鷲羽山第二展望台')" transform="translate(10, 135)">
              <rect width="150" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">鷲羽山第二展望台</text>
              <text x="75" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(16:50 夕陽百選名所)</text>
            </g>
          </svg>
        </div>
      </div>

      <!-- 折返倉敷看夜景與味噌豬排晚餐 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">18:00 - 20:15</span>
          <span class="tag tag-must">點燈＆晚餐</span>
        </div>
        <div class="card-title">折返倉敷美觀夜間點燈 ➔ 梅之木味噌豬排</div>
        <div class="card-desc">
          • <b>17:15 - 17:55</b>：順路北上開回【倉敷市營中央停車場】。<br>
          • <b>18:00 - 19:15</b>：悠閒散步於人潮散去後的倉敷川夜間點燈與水上白壁倒影。<br>
          • <b>19:15 - 20:15</b>：步行前往美觀地區北側享用名店晚餐（營業至 20:20）。
        </div>

        <div class="visual-trail-card" style="background: #FFF7F5; border-color: var(--coral);">
          <div class="visual-trail-title" style="color: #D9534F;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D9534F" stroke-width="2.5"><circle cx="12" cy="14" r="8" fill="#F6D27A"/><path d="M4 14 Q12 18 20 14"/></svg>
            <span>倉敷晚餐推薦 (點擊開地址與地圖)</span>
          </div>
          <svg class="interactive-trail-svg" viewBox="0 0 340 75" fill="none">
            <path d="M 20 35 L 320 35" stroke="#3E3A39" stroke-width="2" stroke-dasharray="4 4"/>
            <g class="trail-clickable" onclick="openMemo('味噌かつ 梅の木', '岡山県倉敷市阿智2-19-3', '美觀地區北側名店！無油炸健康做法搭配秘製濃醇味噌醬，營業至 20:20。', '味噌かつ+梅の木+倉敷')" transform="translate(65, 10)">
              <rect width="210" height="52" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="105" y="22" text-anchor="middle" font-size="12" font-weight="900" fill="#3E3A39">味噌かつ 梅の木 (梅之木味噌豬排)</text>
              <text x="105" y="38" text-anchor="middle" font-size="9.5" font-weight="800" fill="#777">美觀地區北側・營業至 20:20</text>
            </g>
          </svg>
        </div>
      </div>

      <!-- 夜奔福山住宿 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">20:30 - 21:15</span>
          <span class="tag tag-hotel">住宿 Check-in</span>
        </div>
        <div class="card-title">倉敷 IC ➔ 福山站前大和 Roynet 飯店</div>
        <div class="card-desc">由【倉敷 IC】上山陽自動車道向西直達【福山東 IC】（SEP 100% 全額涵蓋通行費），入住福山站前飯店。</div>
        <div class="copy-chip" onclick="navigator.clipboard.writeText('広島県福山市三之丸町1-1')">
          <div class="copy-chip-left">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/><circle cx="12" cy="9" r="2.5" fill="#F2A497"/></svg>
            <span>広島県福山市三之丸町1-1</span>
          </div>
          <span class="copy-badge">複製地址</span>
        </div>
        <div class="btn-row">
          <a href="https://www.google.com/maps/dir/?api=1&destination=ダイワロイネットホテル福山駅前&travelmode=driving" target="_blank" rel="noopener noreferrer" class="action-btn btn-gmap">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#A8D3E6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
            <span>Google 目前位置直達</span>
          </a>
          <a href="https://maps.apple.com/?daddr=ダイワロイネットホテル福山駅前&dirflg=d" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
            <span>Apple 目前位置直達</span>
          </a>
        </div>
      </div>
    `
    },
    d3: {
        title: "Day 3 (11/29)",
        contentHtml: `
      <!-- 上午彈性雙寺巡禮 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">10:00 - 13:30</span>
          <span class="tag tag-car">彈性雙寺</span>
        </div>
        <div class="card-title">福山出發 ➔ 楓葉巡禮（視紅葉狀況彈性調整）</div>
        <div class="card-desc">出發前先看官網紅葉狀況；若已過見頃，可直接省去雙寺，直接前往尾道千光寺與商店街：</div>

        <!-- 選項 1：神勝寺 -->
        <div class="parent-spot-card" style="margin-bottom: 10px;">
          <div class="parent-spot-header">
            <svg class="parent-spot-icon" viewBox="0 0 50 50" fill="none">
              <path d="M10 38 Q25 14 40 38 Z" fill="#A8D3E6" stroke="#3E3A39" stroke-width="2.5" stroke-linejoin="round"/>
              <line x1="6" y1="38" x2="44" y2="38" stroke="#3E3A39" stroke-width="2.5" stroke-linecap="round"/>
              <circle cx="34" cy="16" r="5" fill="#F2A497" stroke="#3E3A39" stroke-width="2"/>
            </svg>
            <div>
              <div class="parent-spot-name">【選項 1】神勝寺 禅と庭のミュージアム</div>
              <div style="font-size: 0.74rem; color: #888;">広島県福山市沼隈町上山南91</div>
            </div>
          </div>
          <div class="parent-spot-sub">
            • 福山出發車程約 25 分鐘（免費山路）。10:00 開門直接趕 <b>10:10–10:40《洸庭》首場</b>，隨後拍水池紅葉（境內無餐飲）。
          </div>
          <div class="copy-chip" onclick="navigator.clipboard.writeText('広島県福山市沼隈町上山南91')">
            <div class="copy-chip-left">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/><circle cx="12" cy="9" r="2.5" fill="#F2A497"/></svg>
              <span>広島県福山市沼隈町上山南91</span>
            </div>
            <span class="copy-badge">複製地址</span>
          </div>
          <div class="btn-row">
            <a href="https://www.google.com/maps/search/?api=1&query=神勝寺+禅と庭のミュージアム" target="_blank" rel="noopener noreferrer" class="action-btn btn-gmap">
              <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#A8D3E6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
              <span>Google 地圖</span>
            </a>
            <a href="https://maps.apple.com/?q=神勝寺+禅と庭のミュージアム" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
              <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
              <span>Apple 地圖</span>
            </a>
          </div>
        </div>

        <!-- 選項 2：今高野山 龍華寺 -->
        <div class="parent-spot-card">
          <div class="parent-spot-header">
            <svg class="parent-spot-icon" viewBox="0 0 50 50" fill="none">
              <path d="M8 34 Q25 18 42 34" stroke="#3E3A39" stroke-width="3" stroke-linecap="round"/>
              <path d="M12 38 Q25 24 38 38" stroke="#F2A497" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="16" y1="26" x2="16" y2="36" stroke="#3E3A39" stroke-width="2"/>
              <line x1="34" y1="26" x2="34" y2="36" stroke="#3E3A39" stroke-width="2"/>
            </svg>
            <div>
              <div class="parent-spot-name">【選項 2】今高野山 龍華寺（世羅町）</div>
              <div style="font-size: 0.74rem; color: #888;">広島県世羅郡世羅町甲山152</div>
            </div>
          </div>
          <div class="parent-spot-sub">
            • 拍攝神之橋紅葉與觀音堂楓毯（免費停車場）。結束後沿國道 184 號南下進尾道（車程約 40 分鐘）。
          </div>
          <div style="margin-bottom: 8px;">
            <a href="https://www.imakouya.nss55.net/momiji.php" target="_blank" rel="noopener noreferrer" class="action-btn btn-warn" style="width: 100%; justify-content: center;">
              <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z" fill="#F2A497"/></svg>
              <span>查看每日紅葉最新情況 (官方速報)</span>
            </a>
          </div>
          <div class="copy-chip" onclick="navigator.clipboard.writeText('広島県世羅郡世羅町甲山152')">
            <div class="copy-chip-left">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/><circle cx="12" cy="9" r="2.5" fill="#F2A497"/></svg>
              <span>広島県世羅郡世羅町甲山152</span>
            </div>
            <span class="copy-badge">複製地址</span>
          </div>
          <div class="btn-row">
            <a href="https://www.google.com/maps/search/?api=1&query=今高野山+龍華寺" target="_blank" rel="noopener noreferrer" class="action-btn btn-gmap">
              <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#A8D3E6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
              <span>Google 地圖</span>
            </a>
            <a href="https://maps.apple.com/?q=今高野山+龍華寺" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
              <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
              <span>Apple 地圖</span>
            </a>
          </div>
        </div>
      </div>

<!-- 尾道本通商店街・完整美食清單與散策步道 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">13:30 - 18:00</span>
          <span class="tag tag-must">山城＆美食</span>
        </div>
        <div class="card-title">尾道本通商店街・拉麵＆尾道燒 ＆ 千光寺散策</div>
        <div class="card-desc">
          • <b>《秘密のケンミンSHOW》推薦</b>：尾道拉麵 千兩（14:30前）、村上お好み焼き 尾道燒（週日至15:00）。<br>
          • <b>尾道拉麵 List</b>：Borracho（-16:00）、Tatsumi（-18:00）、中華拉麵 朱（-17:00）、Shoya（-17:00）。<br>
          • <b>散策與採買</b>：17:00 前買 lemon’n spice 檸檬飲、搭纜車登千光寺公園，18:00 前至尾道ええもんや買伴手禮。點擊下方任意節點開啟地圖便籤：
        </div>

        <!-- 尾道全景點手繪步道 SVG (完整收錄 9 個節點，全部皆可點擊) -->
        <div class="visual-trail-card">
          <div class="visual-trail-title">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8C8885" stroke-width="2.5"><circle cx="12" cy="5" r="3"/><path d="M12 8v8l3 4M9 13l3-2 3 2"/></svg>
            <span>ONOMICHI FOOD & WALK ROUTE (點擊節點看便籤)</span>
          </div>
          
          <svg class="interactive-trail-svg" viewBox="0 0 340 505" fill="none">
            <!-- 連貫虛線路徑 -->
            <path d="M 85 55 C 130 55, 140 60, 245 60" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
            <path d="M 245 105 C 245 120, 245 130, 245 145" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
            <path d="M 170 165 C 130 165, 120 165, 85 165" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
            <path d="M 85 205 C 85 225, 245 225, 245 245" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
            <path d="M 170 265 C 130 265, 120 265, 85 265" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
            <path d="M 85 305 C 85 325, 245 325, 245 345" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
            <path d="M 170 365 C 130 365, 120 365, 85 365" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
            <path d="M 85 405 C 85 425, 170 425, 170 442" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>

            <!-- 散步小人 -->
            <g transform="translate(145, 95)"><circle cx="8" cy="4" r="3.5" fill="#F2A497" stroke="#3E3A39" stroke-width="2"/><path d="M8 8 L8 18 L13 26 M8 18 L3 26 M4 12 L12 12" stroke="#3E3A39" stroke-width="2" stroke-linecap="round"/></g>

            <!-- 節點 1：尾道拉麵 千兩 -->
            <g class="trail-clickable" onclick="openMemo('尾道ラーメン 千両（尾道拉麵 千兩）', '広島県尾道市土堂1-1-10', '【秘密のケンミンSHOW】40年町中華老店，拉麵配炒飯炸雞。週日午間至 14:30，務必提早入店！', '尾道ラーメン+千両')" transform="translate(10, 15)">
              <rect width="150" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">尾道拉麵 千兩</text>
              <text x="75" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(週日至14:30・老店)</text>
              <text x="75" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 5分</text>
            </g>

            <!-- 節點 2：村上お好み焼き (尾道燒) -->
            <g class="trail-clickable" onclick="openMemo('村上お好み焼き（尾道燒）', '広島県尾道市久保2-1-14', '【秘密のケンミンSHOW】雞胗＋炸魷魚天婦羅尾道燒，僅六日營業（週日至 15:00）。', '村上お好み焼き+尾道')" transform="translate(170, 30)">
              <rect width="155" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="77" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">村上お好み焼き</text>
              <text x="77" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(雞胗尾道燒・至15:00)</text>
              <text x="77" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 6分</text>
            </g>

            <!-- 節點 3：Borracho (排隊店 -16:00) -->
            <g class="trail-clickable" onclick="openMemo('尾道中華そば ボラーチョ (Borracho)', '広島県尾道市土堂1-4-14', '尾道本通商店街人氣排隊名店！營業時間 11:00–16:00（週四休）。', 'Borracho+尾道')" transform="translate(170, 135)">
              <rect width="155" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="77" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">Borracho (排隊店)</text>
              <text x="77" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(尾道拉麵・營業至16:00)</text>
              <text x="77" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 1分</text>
            </g>

            <!-- 節點 4：lemon'n spice -->
            <g class="trail-clickable" onclick="openMemo('lemon’n spice 尾道本店', '広島県尾道市土堂1-4-22', '瀨戶內無農藥檸檬特色飲品專賣店！週日營業 10:00–17:00，就在 Borracho 隔壁。', 'lemon%27n+spice+尾道')" transform="translate(10, 135)">
              <rect width="150" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">lemon’n spice</text>
              <text x="75" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(週日至17:00・檸檬飲)</text>
              <text x="75" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 3分</text>
            </g>

            <!-- 節點 5：Tatsumi (排隊店 -18:00) -->
            <g class="trail-clickable" onclick="openMemo('尾道ラーメン 壱番館 / たつみ (Tatsumi)', '広島県尾道市土堂1-12-13', '高人氣排隊拉麵店！週六日營業 10:00–18:00，下午時段也能吃到熱騰騰尾道拉麵。', 'Tatsumi+尾道')" transform="translate(170, 235)">
              <rect width="155" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="77" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">Tatsumi (排隊店)</text>
              <text x="77" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(尾道拉麵・週日至18:00)</text>
              <text x="77" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 4分</text>
            </g>

            <!-- 節點 6：中華拉麵 朱 (-17:00) -->
            <g class="trail-clickable" onclick="openMemo('中華そば 朱（中華拉麵 朱）', '広島県尾道市十四日元町6-16', '承襲傳奇老店「朱華園」風味的經典醬油拉麵與背脂，營業 11:00–17:00。', '中華そば+朱+尾道')" transform="translate(10, 235)">
              <rect width="150" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">中華拉麵 朱</text>
              <text x="75" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(經典朱華園系・至17:00)</text>
              <text x="75" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 1分</text>
            </g>

            <!-- 節點 7：Shoya (-17:00) -->
            <g class="trail-clickable" onclick="openMemo('尾道ラーメン しょうや (Shoya)', '広島県尾道市十四日元町5-13', '濃郁小魚乾高湯搭配背脂尾道拉麵，營業 10:00–17:00，就在「朱」旁邊。', '尾道ラーメン+しょうや')" transform="translate(170, 335)">
              <rect width="155" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="77" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">Shoya (しょうや)</text>
              <text x="77" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(魚介背脂拉麵・至17:00)</text>
              <text x="77" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 5分</text>
            </g>

            <!-- 節點 8：千光寺公園 -->
            <g class="trail-clickable" onclick="openMemo('千光寺公園（千光寺山纜車）', '広島県尾道市西土堂町19-1', '搭千光寺山纜車登頂俯瞰尾道水道與向島絕景，下山可順道漫步文學之道與貓之細道。', '千光寺公園')" transform="translate(10, 335)">
              <rect width="150" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">千光寺公園</text>
              <text x="75" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(纜車俯瞰尾道水道全景)</text>
              <text x="75" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 6分</text>
            </g>

            <!-- 節點 9：尾道ええもんや (物產店 -18:00) -->
            <g class="trail-clickable" onclick="openMemo('尾道ええもんや（物產伴手禮店）', '広島県尾道市東御所町4-2', '匯集尾道在地柑橘點心、拉麵禮盒與精選物產，營業 10:00–18:00。', '尾道ええもんや')" transform="translate(85, 442)">
              <rect width="170" height="48" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.5"/>
              <text x="85" y="21" text-anchor="middle" font-size="11.5" font-weight="900" fill="#3E3A39">尾道ええもんや</text>
              <text x="85" y="37" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(物產店・營業至 18:00)</text>
            </g>
          </svg>
        </div>
      </div>

      <!-- 尾道前往廣島住宿 (連續入住 2 晚) -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">18:15 - 20:00</span>
          <span class="tag tag-hotel">連住 2 晚</span>
        </div>
        <div class="card-title">尾道 ➔ 維瑟爾廣島和平大道飯店 Check-in</div>
        <div class="card-desc">由【尾道 IC】上山陽自動車道向西行駛至【廣島 IC】（SEP 100% 全額涵蓋），車程約 1.5 小時，預計 20:00 抵達辦理入住（11/29–11/30 連住兩晚）。</div>
        <div class="copy-chip" onclick="navigator.clipboard.writeText('広島県広島市中区宝町5-37')">
          <div class="copy-chip-left">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/><circle cx="12" cy="9" r="2.5" fill="#F2A497"/></svg>
            <span>広島県広島市中区宝町5-37</span>
          </div>
          <span class="copy-badge">複製地址</span>
        </div>
        <div class="btn-row">
          <a href="https://www.google.com/maps/dir/?api=1&destination=ベッセルホテル広島平和大通り&travelmode=driving" target="_blank" rel="noopener noreferrer" class="action-btn btn-gmap">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#A8D3E6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
            <span>Google 目前位置直達</span>
          </a>
          <a href="https://maps.apple.com/?daddr=ベッセルホテル広島平和大通り&dirflg=d" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
            <span>Apple 目前位置直達</span>
          </a>
        </div>
      </div>

      <!-- 廣島消夜與深夜採買 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">20:15 - 22:00+</span>
          <span class="tag tag-must">消夜＆採買</span>
        </div>
        <div class="card-title">消夜：廣島燒 八昌（藥研堀店）➔ 唐吉訶德</div>
        <div class="card-desc">
          • <b>20:15</b> 放好行李立刻步行前往【八昌 藥研堀店】享用正宗雙蛋黃廣島燒（週日營業至 21:00，由飯店步行約 10 分鐘）。<br>
          • <b>21:00 以後</b> 步行 5 分鐘至【唐吉訶德 廣島八丁堀店】（營業至凌晨 05:00）慢慢採買補貨。
        </div>

        <div class="visual-trail-card" style="background: #FFF7F5; border-color: var(--coral);">
          <div class="visual-trail-title" style="color: #D9534F;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D9534F" stroke-width="2.5"><circle cx="12" cy="14" r="8" fill="#F6D27A"/><path d="M4 14 Q12 18 20 14"/></svg>
            <span>廣島流川・八丁堀夜間步行 (點擊看便籤)</span>
          </div>
          <svg class="interactive-trail-svg" viewBox="0 0 340 110" fill="none">
            <path d="M 85 50 L 250 50" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
            <g transform="translate(158, 22)">
              <circle cx="8" cy="4" r="3.5" fill="#F2A497" stroke="#3E3A39" stroke-width="2"/>
              <path d="M8 8 L8 18 L13 26 M8 18 L3 26 M4 12 L12 12" stroke="#3E3A39" stroke-width="2" stroke-linecap="round"/>
            </g>

            <!-- 節點 1：八昌 藥研堀店 -->
            <g class="trail-clickable" onclick="openMemo('お好み焼き 八昌（藥研堀店）', '広島県広島市中区薬研堀10-6', '【秘密のケンミンSHOW】八昌系總本山正宗雙蛋黃廣島燒！週日營業至 21:00，建議抵達飯店先衝這家。', 'お好み焼き+八昌+薬研堀')" transform="translate(10, 20)">
              <rect width="145" height="50" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="72" y="21" text-anchor="middle" font-size="11.5" font-weight="900" fill="#3E3A39">八昌（藥研堀店）</text>
              <text x="72" y="36" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(雙蛋黃廣島燒・至21:00)</text>
              <text x="72" y="66" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 5分</text>
            </g>

            <!-- 節點 2：唐吉訶德 八丁堀店 -->
            <g class="trail-clickable" onclick="openMemo('ドン・キホーテ 広島八丁堀店（唐吉訶德）', '広島県広島市中区新天地5-3', '營業至凌晨 05:00！就在八昌步行 5 分鐘距離，吃完廣島燒再悠閒採買藥妝零食。', 'ドン・キホーテ+広島八丁堀店')" transform="translate(180, 20)">
              <rect width="150" height="50" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="75" y="21" text-anchor="middle" font-size="11.5" font-weight="900" fill="#3E3A39">唐吉訶德 八丁堀店</text>
              <text x="75" y="36" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(營業至凌晨 05:00)</text>
            </g>
          </svg>
        </div>

        <!-- 週日公休美食備忘 -->
        <div class="alert-box" style="margin-top: 10px;">
          <div class="alert-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D9534F" stroke-width="2.5"><polygon points="12,2 22,20 2,20"/><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="17" r="1" fill="#D9534F"/></svg>
            <span>《秘密のケンミンSHOW》週日公休避坑備忘（改排 11/30 週一）</span>
          </div>
          • <b>鐵板燒 中ちゃん（海膽菠菜名店）</b>：広島県広島市中区弥生町6-7（週日公休，改排週一晚餐）。<br>
          • <b>中華そば くにまつ 八丁堀本店（廣島無湯擔擔麵）</b>：広島県広島市中区八丁堀8-10（週日公休，改排週一）。
        </div>
      </div>
    `
    },
    d4: {
        title: "Day 4 (11/30)",
        contentHtml: `
      <!-- 呉市軍港巡禮 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">09:30 - 12:00</span>
          <span class="tag tag-car">軍港自駕</span>
        </div>
        <div class="card-title">廣島出發 ➔ 呉市海事歷史科學館（大和博物館）＆ 鐵鯨館</div>
        <div class="card-desc">
          • <b>09:30 - 10:10</b> 從維瑟爾廣島和平大道飯店出發，走廣島呉道路（クレアライン），車程約 35~40 分鐘（獨立收費道路，非 SEP 範圍，單程約 730 円）。<br>
          • <b>10:10 - 12:00</b> 參觀 1/10 大和號戰艦模型與馬路正對面的退役真實潛水艇【鐵鯨館】。車停【大和博物館停車場】或對面【youme Town 呉】。
        </div>
        <div class="copy-chip" onclick="navigator.clipboard.writeText('広島県呉市宝町5-20')">
          <div class="copy-chip-left">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/><circle cx="12" cy="9" r="2.5" fill="#F2A497"/></svg>
            <span>広島県呉市宝町5-20</span>
          </div>
          <span class="copy-badge">複製地址</span>
        </div>
        <div class="btn-row">
          <a href="https://www.google.com/maps/search/?api=1&query=大和ミュージアム" target="_blank" rel="noopener noreferrer" class="action-btn btn-gmap">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#A8D3E6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
            <span>Google 大和博物館</span>
          </a>
          <a href="https://maps.apple.com/?q=海上自衛隊呉史料館" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
            <span>Apple 鐵鯨館</span>
          </a>
        </div>
      </div>

      <!-- 呉市海軍咖哩與名物午餐 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">12:00 - 13:15</span>
          <span class="tag tag-must">呉市美食</span>
        </div>
        <div class="card-title">呉市海軍咖哩 ＆《秘密のケンミンSHOW》名物</div>
        <div class="card-desc">三處名店皆在呉市區平地、開車順路 5 分鐘內可達，點擊下方節點開啟地址與導航便籤：</div>

        <div class="visual-trail-card">
          <div class="visual-trail-title">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8C8885" stroke-width="2.5"><circle cx="12" cy="5" r="3"/><path d="M12 8v8l3 4M9 13l3-2 3 2"/></svg>
            <span>KURE PORT GOURMET ROUTE (點擊節點看便籤)</span>
          </div>
          <svg class="interactive-trail-svg" viewBox="0 0 340 195" fill="none">
            <path d="M 85 55 C 130 55, 140 60, 245 60" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
            <path d="M 245 105 C 245 120, 170 120, 170 130" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>

            <!-- 節點 1：呉海自咖哩 -->
            <g class="trail-clickable" onclick="openMemo('呉ハイカラ食堂 / Beacon（呉海自咖哩）', '広島県呉市宝町4-21', '海上自衛隊艦艇官方認證復刻配方咖哩，大和博物館步行 2 分鐘即達。', '呉ハイカラ食堂')" transform="translate(10, 15)">
              <rect width="150" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">呉海自咖哩 (艦艇配方)</text>
              <text x="75" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(博物館旁步行即達)</text>
              <text x="75" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">車程 4分</text>
            </g>

            <!-- 節點 2：呉冷麵 珍來軒 -->
            <g class="trail-clickable" onclick="openMemo('呉冷麺 珍来軒（呉冷麵 珍來軒）', '広島県呉市本通4-10-1', '【秘密のケンミンSHOW】平打寬麵配特製酸甜微辣湯汁與鮮蝦仁，呉市靈魂冷麵名店！', '珍来軒+呉市')" transform="translate(170, 30)">
              <rect width="155" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="77" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">呉冷麵 珍來軒</text>
              <text x="77" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(番組推薦・酸甜平打冷麵)</text>
              <text x="77" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">車程 2分</text>
            </g>

            <!-- 節點 3：メロンパン 呉市本店 -->
            <g class="trail-clickable" onclick="openMemo('メロンパン 呉本店（橄欖球型哈密瓜麵包）', '広島県呉市本通7-14-1', '【秘密のケンミンSHOW】外型像橄欖球、內餡塞滿厚重特濃卡士達醬的昭和在地老牌麵包！', 'メロンパン+呉市本通')" transform="translate(80, 130)">
              <rect width="180" height="48" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="90" y="21" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">メロンパン（呉市本店）</text>
              <text x="90" y="36" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(橄欖球型厚卡士達麵包)</text>
            </g>
          </svg>
        </div>
      </div>

      <!-- 廣島和平紀念資料館 ＆ 商店街 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">14:00 - 18:30</span>
          <span class="tag tag-must">和平＆逛街</span>
        </div>
        <div class="card-title">廣島和平紀念資料館 ➔ 原爆圓頂屋 ➔ 本通商店街</div>
        <div class="card-desc">
          • <b>13:15 - 13:55</b> 原路開回廣島市區，停在「平和公園前」或本通周邊收費停車場。<br>
          • <b>14:00 - 16:30</b> 參觀資料館（營業至 19:00，最晚 18:30 入館，建議預約 14:00 場次），步行串聯和平公園與原爆圓頂屋。<br>
          • <b>16:30 - 18:30</b> 走過元安橋進入【廣島本通商店街 ＆ 廣島 PARCO】輕鬆逛街。
        </div>
        <div style="margin-bottom: 10px;">
          <a href="https://hpmmuseum.jp/" target="_blank" rel="noopener noreferrer" class="action-btn btn-warn" style="width: 100%; justify-content: center;">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="3" fill="#F6D27A"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg>
            <span>預約和平紀念資料館門票 (建議 14:00 場次)</span>
          </a>
        </div>

        <div class="visual-trail-card">
          <div class="visual-trail-title">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8C8885" stroke-width="2.5"><circle cx="12" cy="5" r="3"/><path d="M12 8v8l3 4M9 13l3-2 3 2"/></svg>
            <span>HIROSHIMA PEACE PARK WALK (點擊節點看便籤)</span>
          </div>
          <svg class="interactive-trail-svg" viewBox="0 0 340 110" fill="none">
            <path d="M 85 50 L 250 50" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
            <g transform="translate(158, 22)">
              <circle cx="8" cy="4" r="3.5" fill="#F2A497" stroke="#3E3A39" stroke-width="2"/>
              <path d="M8 8 L8 18 L13 26 M8 18 L3 26 M4 12 L12 12" stroke="#3E3A39" stroke-width="2" stroke-linecap="round"/>
            </g>

            <!-- 節點 1：和平資料館與原爆圓頂屋 -->
            <g class="trail-clickable" onclick="openMemo('広島平和記念資料館 ＆ 原爆ドーム', '広島県広島市中区中島町1-2', '營業至 19:00（最晚 18:30 入館）。參觀完沿和平公園步行即可抵達原爆圓頂屋。', '広島平和記念資料館')" transform="translate(10, 20)">
              <rect width="145" height="50" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="72" y="21" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">和平資料館＆圓頂屋</text>
              <text x="72" y="36" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(營業至19:00・步行串聯)</text>
              <text x="72" y="66" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 5分</text>
            </g>

            <!-- 節點 2：廣島本通商店街 & PARCO -->
            <g class="trail-clickable" onclick="openMemo('広島本通商店街 ＆ 広島PARCO', '広島県広島市中区本通', '過元安橋即達廣島最核心有頂棚商店街，傍晚逛街採買不受天氣影響。', '広島本通商店街')" transform="translate(180, 20)">
              <rect width="150" height="50" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="75" y="21" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">廣島本通 ＆ PARCO</text>
              <text x="75" y="36" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(核心有頂棚商店街)</text>
            </g>
          </svg>
        </div>
      </div>

      <!-- 週一晚間美食補完計畫 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">18:30 - 21:30</span>
          <span class="tag tag-must">週一補完清單</span>
        </div>
        <div class="card-title">廣島牛尾湯 ＆《秘密のケンミンSHOW》週一營業名店</div>
        <div class="card-desc">昨天（週日）公休的「中ちゃん」與「くにまつ」在週一全部正常營業！都在本通／流川步行圈內，晚間續住【維瑟爾廣島和平大道飯店】（第 2 晚）：</div>

        <div class="visual-trail-card" style="background: #FFF7F5; border-color: var(--coral);">
          <div class="visual-trail-title" style="color: #D9534F;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D9534F" stroke-width="2.5"><circle cx="12" cy="14" r="8" fill="#F6D27A"/><path d="M4 14 Q12 18 20 14"/></svg>
            <span>週一限定美食步行路線 (點擊節點看便籤)</span>
          </div>
          <svg class="interactive-trail-svg" viewBox="0 0 340 195" fill="none">
            <path d="M 85 55 C 130 55, 140 60, 245 60" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
            <path d="M 245 105 C 245 120, 170 120, 170 130" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>

            <!-- 節點 1：廣島牛尾湯 -->
            <g class="trail-clickable" onclick="openMemo('廣島牛尾湯（テールスープ 専門）', '広島県広島市中区流川町', '營業時間 17:00–22:00，濃郁乳白牛尾湯搭配鹽味牛舌與白飯，暖胃首選！', 'テールスープ+流川町')" transform="translate(10, 15)">
              <rect width="150" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">廣島牛尾湯</text>
              <text x="75" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(17:00-22:00・濃郁暖胃)</text>
              <text x="75" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 3分</text>
            </g>

            <!-- 節點 2：鐵板燒 中ちゃん -->
            <g class="trail-clickable" onclick="openMemo('鉄板焼 中ちゃん（海膽菠菜創始名店）', '広島県広島市中区弥生町6-7', '【秘密のケンミンSHOW】週一正常營業！招牌必點「海膽菠菜（ウニホーレン）」配烤法國麵包。', '中ちゃん+広島')" transform="translate(170, 30)">
              <rect width="155" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="77" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">鐵板燒 中ちゃん</text>
              <text x="77" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(週一營業・海膽菠菜)</text>
              <text x="77" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 6分</text>
            </g>

            <!-- 節點 3：中華そば くにまつ 八丁堀本店 -->
            <g class="trail-clickable" onclick="openMemo('中華そば くにまつ 八丁堀本店', '広島県広島市中区八丁堀8-10', '【秘密のケンミンSHOW】廣島無湯擔擔麵創始店！週一晚間 17:00–20:00 營業，記得攪拌 30 次以上再吃。', 'くにまつ+八丁堀本店')" transform="translate(80, 130)">
              <rect width="180" height="48" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="90" y="21" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">中華そば くにまつ 本店</text>
              <text x="90" y="36" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(晚間17-20點・無湯擔擔麵)</text>
            </g>
          </svg>
        </div>
      </div>
    `
    },
    d5: {
        title: "Day 5 (12/01)",
        contentHtml: `
      <!-- 宮島口渡輪與滿潮大鳥居 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">10:00 - 15:00</span>
          <span class="tag tag-must">宮島半日遊</span>
        </div>
        <div class="card-title">廣島退房 ➔ 宮島口渡輪 ➔ 嚴島神社滿潮大鳥居</div>
        <div class="card-desc">
          • <b>10:00 - 10:40</b> 退房開往宮島口（車程約 40 分鐘，停周邊大型平面停車場）。<br>
          • <b>11:00 左右</b> 搭 <b>JR 宮島渡輪</b>（09:10–16:10 班次刻意駛近大鳥居，來回票 400 円＋訪問稅 100 円＝共 500 円）。<br>
          • 參拜 <b>嚴島神社</b>（06:30–17:00，門票 300 円）欣賞白天滿潮海上大鳥居，並逛宮島表參道商店街。
        </div>
        <div style="margin-bottom: 10px;">
          <a href="https://jr-miyajimaferry.co.jp/timetable/" target="_blank" rel="noopener noreferrer" class="action-btn btn-warn" style="width: 100%; justify-content: center;">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><circle cx="12" cy="12" r="9" fill="#F6D27A"/><path d="M12 7v5l3 3"/></svg>
            <span>查看 JR 宮島渡輪時刻表 (09:10-16:10 繞近鳥居)</span>
          </a>
        </div>

        <div class="visual-trail-card">
          <div class="visual-trail-title">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8C8885" stroke-width="2.5"><circle cx="12" cy="5" r="3"/><path d="M12 8v8l3 4M9 13l3-2 3 2"/></svg>
            <span>MIYAJIMA ISLAND ROUTE (點擊節點看便籤)</span>
          </div>
          <svg class="interactive-trail-svg" viewBox="0 0 340 195" fill="none">
            <path d="M 85 55 C 130 55, 140 60, 245 60" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
            <path d="M 245 105 C 245 120, 170 120, 170 130" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>

            <!-- 節點 1：宮島口渡輪碼頭 -->
            <g class="trail-clickable" onclick="openMemo('JR宮島フェリー 宮島口桟橋', '広島県廿日市市宮島口1-11-5', '09:10–16:10 班次會刻意駛近海上大鳥居！來回票 400円＋訪問稅 100円（宮島口老店穴子飯うえの亦在此）。', 'JR宮島フェリー+宮島口')" transform="translate(10, 15)">
              <rect width="150" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">宮島口渡輪碼頭</text>
              <text x="75" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(JR渡輪・駛近大鳥居)</text>
              <text x="75" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">船程 10分</text>
            </g>

            <!-- 節點 2：嚴島神社 & 海上大鳥居 -->
            <g class="trail-clickable" onclick="openMemo('嚴島神社 ＆ 海上大鳥居', '広島県廿日市市宮島町1-1', '營業時間 06:30–17:00，門票 300円。12/1 白天為滿潮景觀，整座朱紅社殿與大鳥居浮於海面上。', '嚴島神社')" transform="translate(170, 30)">
              <rect width="155" height="46" rx="10" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="77" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">嚴島神社＆海上大鳥居</text>
              <text x="77" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(12/1白天滿潮絕景)</text>
              <text x="77" y="62" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 5分</text>
            </g>

            <!-- 節點 3：宮島表參道商店街 & 星巴克 -->
            <g class="trail-clickable" onclick="openMemo('宮島表参道商店街 ＆ スターバックス厳島表参道店', '広島県廿日市市宮島町535', '【秘密のケンミンSHOW】星鰻飯（あなごめし ふじたや/うえの）、現烤帶殼牡蠣、現炸紅葉饅頭、星巴克 2F 海景座！', '宮島表参道商店街')" transform="translate(75, 130)">
              <rect width="190" height="48" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="95" y="21" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">宮島表參道 ＆ 星巴克海景店</text>
              <text x="95" y="36" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(穴子飯・烤牡蠣・炸紅葉饅頭)</text>
            </g>
          </svg>
        </div>
      </div>

      <!-- THE OUTLETS HIROSHIMA & 山陽道休息站長征 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">15:00 - 20:00</span>
          <span class="tag tag-car">順路購物＆長征</span>
        </div>
        <div class="card-title">THE OUTLETS HIROSHIMA ➔ 山陽道休息站 ➔ 岡山</div>
        <div class="card-desc">
          • <b>15:00 - 15:40</b> 搭船返回宮島口取車，北上開往五日市方向（車程約 25~30 分鐘）。<br>
          • <b>15:40 - 17:30</b> 逛【THE OUTLETS HIROSHIMA】（營業至 20:00，免費停車），結束直接從旁邊【五日市 IC】上山陽道（SEP 100% 涵蓋）。<br>
          • <b>17:30 - 20:00</b> 沿山陽自動車道向東返回岡山（約 2~2.5 小時，沿途順停休息站）。
        </div>
        <div class="copy-chip" onclick="navigator.clipboard.writeText('広島県広島市佐伯区石内東4-1-1')">
          <div class="copy-chip-left">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/><circle cx="12" cy="9" r="2.5" fill="#F2A497"/></svg>
            <span>広島県広島市佐伯区石内東4-1-1</span>
          </div>
          <span class="copy-badge">複製地址</span>
        </div>
        <div class="btn-row" style="margin-bottom: 10px;">
          <a href="https://www.google.com/maps/search/?api=1&query=THE+OUTLETS+HIROSHIMA" target="_blank" rel="noopener noreferrer" class="action-btn btn-gmap">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#A8D3E6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
            <span>Google OUTLETS</span>
          </a>
          <a href="https://maps.apple.com/?q=THE+OUTLETS+HIROSHIMA" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
            <span>Apple OUTLETS</span>
          </a>
        </div>

        <div class="visual-trail-card" style="background: #FFFCF7;">
          <div class="trail-label"><span>山陽自動車道沿途休息站（SA）特色推薦</span></div>
          <div style="font-size: 0.82rem; line-height: 1.6; padding: 4px;">
            • <b>小谷 SA</b>：廣島名產、安芸高田特色點心<br>
            • <b>福山 SA</b>：薔薇霜淇淋、尾道拉麵伴手禮<br>
            • <b>吉備 SA</b>：桃太郎周邊、岡山白桃聖代
          </div>
        </div>
      </div>

      <!-- 岡山住宿與夜間採買 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">20:00 - 23:00</span>
          <span class="tag tag-hotel">住宿＆夜逛</span>
        </div>
        <div class="card-title">三井花園飯店岡山 ➔ AEON MALL ＆ 站前採買</div>
        <div class="card-desc">飯店位於岡山站東口徒步 2 分鐘，正對面即為 AEON MALL 岡山。抵達後先衝 21:00 打烊的 AEON，再逛松本清與唐吉訶德：</div>
        <div class="copy-chip" onclick="navigator.clipboard.writeText('岡山県岡山市北区駅元町1-7')">
          <div class="copy-chip-left">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/><circle cx="12" cy="9" r="2.5" fill="#F2A497"/></svg>
            <span>岡山県岡山市北区駅元町1-7</span>
          </div>
          <span class="copy-badge">複製地址</span>
        </div>
        <div class="btn-row" style="margin-bottom: 12px;">
          <a href="https://www.google.com/maps/dir/?api=1&destination=三井ガーデンホテル岡山&travelmode=driving" target="_blank" rel="noopener noreferrer" class="action-btn btn-gmap">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#A8D3E6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
            <span>Google 直達飯店</span>
          </a>
          <a href="https://maps.apple.com/?daddr=三井ガーデンホテル岡山&dirflg=d" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
            <span>Apple 直達飯店</span>
          </a>
        </div>

        <!-- 岡山站前購物手繪步道 -->
        <div class="visual-trail-card">
          <div class="visual-trail-title">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8C8885" stroke-width="2.5"><circle cx="12" cy="5" r="3"/><path d="M12 8v8l3 4M9 13l3-2 3 2"/></svg>
            <span>OKAYAMA STATION SHOPPING (點擊節點看便籤)</span>
          </div>
          <svg class="interactive-trail-svg" viewBox="0 0 340 110" fill="none">
            <path d="M 85 50 L 250 50" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5"/>
            <g transform="translate(158, 22)">
              <circle cx="8" cy="4" r="3.5" fill="#F2A497" stroke="#3E3A39" stroke-width="2"/>
              <path d="M8 8 L8 18 L13 26 M8 18 L3 26 M4 12 L12 12" stroke="#3E3A39" stroke-width="2" stroke-linecap="round"/>
            </g>

            <!-- 節點 1：AEON MALL 岡山 -->
            <g class="trail-clickable" onclick="openMemo('イオンモール岡山（AEON MALL 岡山）', '岡山県岡山市北区下石井1-2-1', '10:00–21:00（部分餐廳至 22:00）。西日本最大級！星巴克備前燒杯、3COINS+、無印良品、中川政七商店、屋頂花園。', 'イオンモール岡山')" transform="translate(10, 20)">
              <rect width="145" height="50" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="72" y="21" text-anchor="middle" font-size="11.5" font-weight="900" fill="#3E3A39">AEON MALL 岡山</text>
              <text x="72" y="36" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(營業至21:00・飯店對面)</text>
              <text x="72" y="66" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 3分</text>
            </g>

            <!-- 節點 2：一番街 / Bic / 松本清 / 唐吉訶德 -->
            <g class="trail-clickable" onclick="openMemo('岡山一番街 / Bic Camera / 松本清 / 唐吉訶德', '岡山県岡山市北区駅元町', '一番街(-20:00)換1500円券、Bic Camera(-20:30)換1000円券、松本清東口店(-23:00)、唐吉訶德營業至凌晨。', '岡山一番街')" transform="translate(180, 20)">
              <rect width="150" height="50" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.2"/>
              <text x="75" y="21" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">一番街・藥妝・唐吉訶德</text>
              <text x="75" y="36" text-anchor="middle" font-size="9" font-weight="800" fill="#777">(松本清至23:00・唐吉凌晨)</text>
            </g>
          </svg>
        </div>

        <div class="alert-box" style="margin-top: 10px;">
          <div class="alert-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D9534F" stroke-width="2.5"><polygon points="12,2 22,20 2,20"/><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="17" r="1" fill="#D9534F"/></svg>
            <span>百貨打烊＆兌換券彈性策略</span>
          </div>
          • 若想在 12/1 晚間換到 <b>一番街（20:00）</b>與 <b>Bic Camera（20:30）</b>抵用券，建議 17:00 前離開 OUTLETS（約 19:15 抵岡山）。<br>
          • 若想在 OUTLETS 逛久一點，則把一番街、Bic Camera 與 AEON 留到 <b>12/2（週三）早上 10:00</b> 退房寄放行李後去逛（走過馬路即達）。
        </div>
      </div>
    `
    },
    d6: {
        title: "Day 6 (12/02)",
        contentHtml: `<div class="card" style="text-align:center; padding:40px 16px;"><p style="font-size:1.1rem; font-weight:900;">Day 6 神戸 ➔ 大阪 規劃中</p></div>`
    },
    d7: {
        title: "Day 7 (12/03)",
        contentHtml: `
      <!-- 早餐輕食 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">08:30 - 10:00</span>
          <span class="tag tag-train">朝食・喫茶</span>
        </div>
        <div class="card-title">梅田站前晨間咖啡與輕食</div>
        <div class="card-desc">早晨在梅田悠閒享受現烤麵包與手沖咖啡，為採買行程儲備體力。</div>
        <div class="visual-trail-card" style="background: #FFFCF7;">
          <div class="trail-label" style="font-size: 0.75rem; font-weight: 900; color: #888; margin-bottom: 4px;">梅北廣場周邊咖啡推薦</div>
          <div style="font-size: 0.82rem; line-height: 1.6; padding: 4px;">
            • <b>THE CITY BAKERY グランフロント大阪</b> (梅北広場 B1F・招牌椒鹽可頌)<br>
            • <b>GARB MONAQUE</b> (梅北広場 1F・大片落地窗景觀、Q彈湯種吐司套餐)
          </div>
        </div>
      </div>

      <!-- 梅田排隊伴手禮・手繪散策步道 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">10:00 - 12:45</span>
          <span class="tag tag-must">最後採買</span>
        </div>
        <div class="card-title">梅田排隊人氣伴手禮・散策路線</div>
        <div class="card-desc">依地下連通道順路動線規劃，點擊步道上的店家卡片可查看日文地址與導航便籤：</div>

        <!-- 母地標卡片 -->
        <div class="parent-spot-card">
          <div class="parent-spot-name">阪神梅田本店 ＆ グランフロント大阪</div>
          <div class="parent-spot-sub">大阪甜點一級戰區，匯集日本超難買的夢幻限定排隊點心。</div>
          <div class="btn-row">
            <a href="https://www.google.com/maps/search/?api=1&query=阪神梅田本店" target="_blank" rel="noopener noreferrer" class="action-btn btn-gmap">
              <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#A8D3E6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
              <span>Google 阪神梅田</span>
            </a>
            <a href="https://maps.apple.com/?q=グランフロント大阪" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
              <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
              <span>Apple Grand Front</span>
            </a>
          </div>
        </div>

        <!-- 手繪步道 SVG -->
        <div class="visual-trail-card">
          <div class="visual-trail-title">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8C8885" stroke-width="2.5"><circle cx="12" cy="5" r="3"/><path d="M12 8v8l3 4M9 13l3-2 3 2"/></svg>
            <span>NEIGHBORHOOD SWEETS ROUTE (點擊節點看便籤)</span>
          </div>
          
          <svg class="interactive-trail-svg" viewBox="0 0 340 245" fill="none">
            <!-- 手繪彎曲虛線小路 -->
            <path d="M 50 180 C 130 180, 80 120, 200 90 C 230 80, 270 30, 240 10" stroke="#3E3A39" stroke-width="2.2" stroke-dasharray="5 5" fill="none"/>
            
            <!-- 手繪樹 -->
            <g transform="translate(18, 185)">
              <rect x="13" y="18" width="4" height="12" fill="#8C8885" stroke="#3E3A39" stroke-width="2"/>
              <path d="M5 20 C2 5, 28 5, 25 20 Z" fill="#B9DAA5" stroke="#3E3A39" stroke-width="2.2"/>
            </g>
            <g transform="translate(285, 120)">
              <rect x="13" y="18" width="4" height="12" fill="#8C8885" stroke="#3E3A39" stroke-width="2"/>
              <path d="M5 20 C2 5, 28 5, 25 20 Z" fill="#B9DAA5" stroke="#3E3A39" stroke-width="2.2"/>
            </g>

            <!-- 散步小人 -->
            <g transform="translate(50, 145)">
              <circle cx="8" cy="4" r="3.5" fill="#F2A497" stroke="#3E3A39" stroke-width="2"/>
              <path d="M8 8 L8 18 L13 26 M8 18 L3 26 M4 12 L12 12" stroke="#3E3A39" stroke-width="2" stroke-linecap="round"/>
            </g>
            <g transform="translate(195, 130)">
              <circle cx="8" cy="4" r="3.5" fill="#F2A497" stroke="#3E3A39" stroke-width="2"/>
              <path d="M8 8 L8 18 L13 26 M8 18 L3 26 M4 12 L12 12" stroke="#3E3A39" stroke-width="2" stroke-linecap="round"/>
            </g>

            <!-- 節點 1：BRULEE MERIZE (阪神梅田 B1F) -->
            <g class="trail-clickable" onclick="openMemo('BRULEE MERIZE 阪神梅田本店', '大阪府大阪市北区梅田1丁目13-13 阪神梅田本店 B1F', '東京超人氣焦糖烤布蕾專賣！金黃酥脆塔皮包覆濃郁布蕾卡士達與苦甜焦糖醬。', 'BRULEE+MERIZE+阪神梅田本店')" transform="translate(15, 15)">
              <rect width="145" height="52" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.5"/>
              <text x="72" y="22" text-anchor="middle" font-size="11.5" font-weight="900" fill="#3E3A39">BRULEE MERIZE</text>
              <text x="72" y="35" text-anchor="middle" font-size="10" font-weight="900" fill="#3E3A39">阪神梅田本店 B1F</text>
              <text x="72" y="46" text-anchor="middle" font-size="8.5" font-weight="700" fill="#777">(黃金流心布蕾塔)</text>
              <text x="72" y="68" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 1分</text>
            </g>

            <!-- 節點 2：DROOLY (阪神梅田 B1F 同層) -->
            <g class="trail-clickable" onclick="openMemo('DROOLY 阪神梅田本店', '大阪府大阪市北区梅田1丁目13-13 阪神梅田本店 B1F', '全日本唯一常設店！小熊包裝超可愛，藍紋起司搭配優質蜂蜜夾心餅乾與費南雪，鹹甜濃郁極致！', 'DROOLY+阪神梅田本店')" transform="translate(180, 60)">
              <rect width="145" height="52" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.5"/>
              <text x="72" y="22" text-anchor="middle" font-size="11.5" font-weight="900" fill="#3E3A39">DROOLY 阪神梅田</text>
              <text x="72" y="35" text-anchor="middle" font-size="9.5" font-weight="800" fill="#3E3A39">全國唯一常設門市</text>
              <text x="72" y="46" text-anchor="middle" font-size="8.5" font-weight="700" fill="#777">(蜂蜜藍紋起司費南雪)</text>
              <text x="72" y="68" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">徒歩 7分</text>
            </g>

            <!-- 節點 3：治一郎 (Grand Front 大阪 南館 B1F) -->
            <g class="trail-clickable" onclick="openMemo('治一郎 グランフロント大阪店', '大阪府大阪市北区大深町4-20 グランフロント大阪 南館B1F', '日本殿堂級年輪蛋糕！24層極致濕潤綿密，完全不需要配水就化在嘴裡，布丁也極度濃醇。', '治一郎+グランフロント大阪店')" transform="translate(170, 165)">
              <rect width="160" height="52" rx="12" fill="#FFFCF6" stroke="#3E3A39" stroke-width="2.5"/>
              <text x="80" y="22" text-anchor="middle" font-size="11" font-weight="900" fill="#3E3A39">治一郎 グランフロント</text>
              <text x="80" y="35" text-anchor="middle" font-size="9.5" font-weight="800" fill="#3E3A39">南館 B1F</text>
              <text x="80" y="46" text-anchor="middle" font-size="8.5" font-weight="700" fill="#777">(極致濕潤24層年輪)</text>
            </g>
          </svg>
        </div>
      </div>

      <!-- 前往還車 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">13:00 - 14:30</span>
          <span class="tag tag-car">自駕還車</span>
        </div>
        <div class="card-title">大阪市區 ➔ りんくうタウン (臨空城)</div>
        <div class="card-desc">
          • <b>13:00</b> 梅田出發：走阪神高速 1 號環狀線 ➔ 4 號灣岸線南下（車程約 45~55 分鐘）。<br>
          • 抵達前於臨空城周邊加油站加滿油，保留油單備查。<br>
          • <b>14:30 前</b> 於租車門市完成還車手續，檢查隨身行李與結算 ETC。
        </div>
        <div class="btn-row" style="margin-bottom: 10px;">
          <a href="https://www.google.com/maps/dir/?api=1&destination=ニコニコレンタカー+関西空港りんくうタウン駅前店&travelmode=driving" target="_blank" rel="noopener noreferrer" class="action-btn btn-gmap">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" fill="#A8D3E6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
            <span>Google 導航還車點</span>
          </a>
          <a href="https://maps.apple.com/?daddr=ニコニコレンタカー+関西空港りんくうタウン駅前店&dirflg=d" target="_blank" rel="noopener noreferrer" class="action-btn btn-amap">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><path d="M12 2C7.5 2 4 5.5 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.5-3.5-8-8-8z" fill="#F0EFEB"/><circle cx="12" cy="10" r="3" fill="#B9DAA5"/></svg>
            <span>Apple 導航還車點</span>
          </a>
        </div>
        <!-- 還車後短程電車接駁 (NAVITIME 原生喚醒) -->
        <div style="font-size: 0.78rem; font-weight: 800; color: #666; margin-bottom: 6px;">還車後搭乘電車至關西機場 (1 站直達)：</div>
        <div class="btn-row">
          <a href="navitime://" class="action-btn btn-navitime">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><circle cx="12" cy="12" r="9" fill="#B9DAA5"/><path d="M12 7v5l3 3"/></svg>
            <span>NAVITIME</span>
          </a>
          <a href="https://transit.yahoo.co.jp/search/result?from=%E3%82%8A%E3%82%93%E3%81%8F%E3%81%86%E3%82%BF%E3%82%A6%E3%83%B3&to=%E9%96%A2%E8%A5%BF%E7%A9%BA%E6%B8%AF&type=1" target="_blank" rel="noopener noreferrer" class="action-btn btn-yahoo">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#3E3A39" stroke-width="2.5"><rect x="4" y="3" width="16" height="15" rx="3" fill="#FFE0E0"/><line x1="4" y1="11" x2="20" y2="11"/><circle cx="8" cy="15" r="1.5" fill="#3E3A39"/><circle cx="16" cy="15" r="1.5" fill="#3E3A39"/></svg>
            <span>Yahoo!路線情報</span>
          </a>
        </div>
      </div>

      <!-- 免稅店與出境 -->
      <div class="card">
        <div class="card-header-bar">
          <span class="card-time">14:45 - 16:15</span>
          <span class="tag tag-flight">返台登機</span>
        </div>
        <div class="card-title">KIX Duty Free 免稅購物 ＆ 登機返台</div>
        <div class="card-desc">
          • 國泰航空 CX565 (16:15 KIX ➔ 18:30 TPE)。<br>
          • 關西機場 T1 辦理報到手續與託運行李。<br>
          • 把握安檢後 KIX Duty Free 免稅店最後補貨（Royce 生巧克力、日本地酒等）。<br>
          • <b>15:45</b> 抵達登機門準備登機。
        </div>
      </div>
    `
    }
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
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 商圈折疊
function toggleZone(headerEl) {
    headerEl.parentElement.classList.toggle('open');
}

// 底部手繪便籤 Drawer 控制 (無 Emoji、標準地標搜尋 API)
let currentDrawerAddr = '';
function openMemo(name, addr, desc, searchKey) {
    document.getElementById('drawer-title').textContent = name;
    document.getElementById('drawer-desc').textContent = desc;
    document.getElementById('drawer-addr').textContent = addr;
    currentDrawerAddr = addr;

    const queryParam = encodeURIComponent(searchKey || name);
    document.getElementById('drawer-btn-gmap').href = `https://www.google.com/maps/search/?api=1&query=${queryParam}`;
    document.getElementById('drawer-btn-amap').href = `https://maps.apple.com/?q=${queryParam}`;

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
        setTimeout(() => {
            badge.textContent = oldText;
        }, 1500);
    }
}

// 主視圖切換 (SPA)
function switchView(viewId) {
    document.querySelectorAll('.view-container').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));

    const target = document.getElementById(viewId);
    if (target)
        target.classList.add('active');

    if (viewId === 'view-itinerary')
        document.getElementById('btn-itinerary').classList.add('active');
    if (viewId === 'view-flights')
        document.getElementById('btn-flights').classList.add('active');
    if (viewId === 'view-prep')
        document.getElementById('btn-prep').classList.add('active');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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
    ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'].forEach(key => {
        if (localStorage.getItem('checklist_' + key) === '1') {
            const box = document.getElementById(key);
            if (box) {
                box.textContent = '✓';
                box.parentElement.classList.add('done');
            }
        }
    });
});
