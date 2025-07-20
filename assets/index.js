document.addEventListener("DOMContentLoaded", function() {
const mainHtml = `
        <!-- 主要内容区域 -->
        <main class="solar-main-content">
            <!-- 轮播横幅区域 -->
            <section class="solar-banner">
                <div class="solar-banner-container">
                    <div class="solar-banner-slide active">
                        <div class="solar-banner-content">
                            <h2 class="lang" key="BANNER_SLIDE_ONE_TITLE">欢迎来到 Solar Community</h2>
                            <p class="lang" key="BANNER_SLIDE_ONE_DESCRIPTION">探索无限可能，连接全球创作者</p>
                            <button class="solar-banner-btn  lang" key="BANNER_SLIDE_ONE_BUTTON">立即探索</button>
                        </div>
                        <div class="solar-banner-image">
                            <div class="solar-banner-placeholder"></div>
                        </div>
                    </div>
                    <div class="solar-banner-slide">
                        <div class="solar-banner-content">
                            <h2 class="lang" key="BANNER_SLIDE_TWO_TITLE">创作者中心</h2>
                            <p class="lang" key="BANNER_SLIDE_TWO_DESCRIPTION">分享你的创意，获得更多关注</p>
                            <button class="solar-banner-btn lang" key="BANNER_SLIDE_TWO_BUTTON">开始创作</button>
                        </div>
                        <div class="solar-banner-image">
                            <div class="solar-banner-placeholder"></div>
                        </div>
                    </div>
                    <div class="solar-banner-slide">
                        <div class="solar-banner-content">
                            <h2 class="lang" key="BANNER_SLIDE_THREE_TITLE">社区活动</h2>
                            <p class="lang" key="BANNER_SLIDE_THREE_DESCRIPTION">参与精彩活动，赢取丰厚奖励</p>
                            <button class="solar-banner-btn lang" key="BANNER_SLIDE_THREE_BUTTON">查看活动</button>
                        </div>
                        <div class="solar-banner-image">
                            <div class="solar-banner-placeholder"></div>
                        </div>
                    </div>
                    <!-- 轮播控制 -->
                    <div class="solar-banner-controls">
                        <button class="solar-banner-prev">‹</button>
                        <button class="solar-banner-next">›</button>
                    </div>
                    <div class="solar-banner-indicators">
                        <span class="active"></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </section>

            <!-- 分类导航栏 -->
            <section class="solar-category-nav">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="solar-category-container">
                        <div class="solar-category-tabs" id="categoryTabs">
                            <button class="solar-category-tab lang active" key="HOT">热门</button>
                            <button class="solar-category-tab lang" key="New">最新</button>
                            <button class="solar-category-tab lang" key="GAME">游戏</button>
                            <button class="solar-category-tab lang" key="TECH">科技</button>
                            <button class="solar-category-tab lang" key="LIFESTYLE">生活</button>
                            <button class="solar-category-tab lang" key="ENTERTAIN">娱乐</button>
                            <button class="solar-category-tab lang" key="EDUCATION">教育</button>
                            <button class="solar-category-tab lang"  key="MUSIC">音乐</button>
                            <button class="solar-category-tab lang"  key="SPORTS">体育</button>
                            <button class="solar-category-tab lang" key="ANIME">动漫</button>
                            <button class="solar-category-tab lang" key="MOVIE">电影</button>
                            <button class="solar-category-tab lang" key="DRAMA">电视剧</button>
                            <button class="solar-category-tab lang" key="DOCUMENTARY">纪录片</button>
                            <button class="solar-category-tab lang" key="DANCE">舞蹈</button>
                            <button class="solar-category-tab lang" key="FASHION">时尚</button>
                            <button class="solar-category-tab lang" key="CAR">汽车</button>
                            <button class="solar-category-tab lang" key="KNOWLEDGE">知识</button>
                        </div>
                        <!-- 自定义滑动条 -->
                        <div class="solar-scrollbar-container">
                            <div class="solar-scrollbar-track">
                                <div class="solar-scrollbar-thumb" id="scrollbarThumb"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 主内容区域 -->
            <section class="solar-content-section">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="solar-layout">
                        <!-- 主要内容网格 -->
                        <div class="solar-content-grid">
                            <!-- 内容卡片 -->
                            <div class="solar-content-card">
                                <div class="solar-card-image">
                                    <div class="solar-image-placeholder"></div>
                                    <div class="solar-card-duration">12:34</div>
                                </div>
                                <div class="solar-card-content">
                                    <h3 class="solar-card-title">探索人工智能的未来发展趋势</h3>
                                    <div class="solar-card-meta">
                                        <span class="solar-card-author">TechExplorer</span>
                                        <span class="solar-card-time">2小时前</span>
                                    </div>
                                    <div class="solar-card-stats">
                                        <span>👍 1.2k</span>
                                        <span>💬 89</span>
                                        <span>📤 156</span>
                                    </div>
                                </div>
                            </div>

                            <div class="solar-content-card">
                                <div class="solar-card-image">
                                    <div class="solar-image-placeholder"></div>
                                    <div class="solar-card-duration">8:45</div>
                                </div>
                                <div class="solar-card-content">
                                    <h3 class="solar-card-title">游戏开发入门教程：从零开始制作你的第一个游戏</h3>
                                    <div class="solar-card-meta">
                                        <span class="solar-card-author">GameDev Studio</span>
                                        <span class="solar-card-time">5小时前</span>
                                    </div>
                                    <div class="solar-card-stats">
                                        <span>👍 856</span>
                                        <span>💬 124</span>
                                        <span>📤 89</span>
                                    </div>
                                </div>
                            </div>

                            <div class="solar-content-card">
                                <div class="solar-card-image">
                                    <div class="solar-image-placeholder"></div>
                                    <div class="solar-card-duration">15:22</div>
                                </div>
                                <div class="solar-card-content">
                                    <h3 class="solar-card-title">美食制作：传统中式点心的制作技巧</h3>
                                    <div class="solar-card-meta">
                                        <span class="solar-card-author">美食达人</span>
                                        <span class="solar-card-time">1天前</span>
                                    </div>
                                    <div class="solar-card-stats">
                                        <span>👍 2.3k</span>
                                        <span>💬 267</span>
                                        <span>📤 445</span>
                                    </div>
                                </div>
                            </div>

                            <div class="solar-content-card">
                                <div class="solar-card-image">
                                    <div class="solar-image-placeholder"></div>
                                    <div class="solar-card-duration">6:18</div>
                                </div>
                                <div class="solar-card-content">
                                    <h3 class="solar-card-title">旅行日记：探索日本京都的隐秘景点</h3>
                                    <div class="solar-card-meta">
                                        <span class="solar-card-author">旅行者小王</span>
                                        <span class="solar-card-time">2天前</span>
                                    </div>
                                    <div class="solar-card-stats">
                                        <span>👍 1.8k</span>
                                        <span>💬 156</span>
                                        <span>📤 234</span>
                                    </div>
                                </div>
                            </div>

                            <div class="solar-content-card">
                                <div class="solar-card-image">
                                    <div class="solar-image-placeholder"></div>
                                    <div class="solar-card-duration">20:15</div>
                                </div>
                                <div class="solar-card-content">
                                    <h3 class="solar-card-title">编程教程：React开发实战项目</h3>
                                    <div class="solar-card-meta">
                                        <span class="solar-card-author">CodeMaster</span>
                                        <span class="solar-card-time">3天前</span>
                                    </div>
                                    <div class="solar-card-stats">
                                        <span>👍 3.1k</span>
                                        <span>💬 298</span>
                                        <span>📤 567</span>
                                    </div>
                                </div>
                            </div>

                            <div class="solar-content-card">
                                <div class="solar-card-image">
                                    <div class="solar-image-placeholder"></div>
                                    <div class="solar-card-duration">11:33</div>
                                </div>
                                <div class="solar-card-content">
                                    <h3 class="solar-card-title">健身指南：居家锻炼的有效方法</h3>
                                    <div class="solar-card-meta">
                                        <span class="solar-card-author">健身教练Lisa</span>
                                        <span class="solar-card-time">4天前</span>
                                    </div>
                                    <div class="solar-card-stats">
                                        <span>👍 1.5k</span>
                                        <span>💬 89</span>
                                        <span>📤 178</span>
                                    </div>
                                </div>
                            </div>

                            <div class="solar-content-card">
                                <div class="solar-card-image">
                                    <div class="solar-image-placeholder"></div>
                                    <div class="solar-card-duration">9:27</div>
                                </div>
                                <div class="solar-card-content">
                                    <h3 class="solar-card-title">音乐制作：如何创作你的第一首电子音乐</h3>
                                    <div class="solar-card-meta">
                                        <span class="solar-card-author">MusicProducer</span>
                                        <span class="solar-card-time">5天前</span>
                                    </div>
                                    <div class="solar-card-stats">
                                        <span>👍 967</span>
                                        <span>💬 67</span>
                                        <span>📤 123</span>
                                    </div>
                                </div>
                            </div>

                            <div class="solar-content-card">
                                <div class="solar-card-image">
                                    <div class="solar-image-placeholder"></div>
                                    <div class="solar-card-duration">14:56</div>
                                </div>
                                <div class="solar-card-content">
                                    <h3 class="solar-card-title">摄影技巧：如何拍出专业级的人像照片</h3>
                                    <div class="solar-card-meta">
                                        <span class="solar-card-author">摄影师张三</span>
                                        <span class="solar-card-time">1周前</span>
                                    </div>
                                    <div class="solar-card-stats">
                                        <span>👍 2.7k</span>
                                        <span>💬 234</span>
                                        <span>📤 389</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 侧边栏 -->
                        <aside class="solar-sidebar">
                            <!-- 热门话题 -->
                            <div class="solar-sidebar-section">
                                <h3 class="solar-sidebar-title">热门话题</h3>
                                <div class="solar-topic-list">
                                    <div class="solar-topic-item">
                                        <span class="solar-topic-rank">1</span>
                                        <span class="solar-topic-name">#人工智能发展</span>
                                        <span class="solar-topic-count">12.3万</span>
                                    </div>
                                    <div class="solar-topic-item">
                                        <span class="solar-topic-rank">2</span>
                                        <span class="solar-topic-name">#游戏开发教程</span>
                                        <span class="solar-topic-count">8.7万</span>
                                    </div>
                                    <div class="solar-topic-item">
                                        <span class="solar-topic-rank">3</span>
                                        <span class="solar-topic-name">#美食制作</span>
                                        <span class="solar-topic-count">6.5万</span>
                                    </div>
                                    <div class="solar-topic-item">
                                        <span class="solar-topic-rank">4</span>
                                        <span class="solar-topic-name">#旅行分享</span>
                                        <span class="solar-topic-count">5.2万</span>
                                    </div>
                                    <div class="solar-topic-item">
                                        <span class="solar-topic-rank">5</span>
                                        <span class="solar-topic-name">#编程学习</span>
                                        <span class="solar-topic-count">4.8万</span>
                                    </div>
                                </div>
                            </div>

                            <!-- 推荐用户 -->
                            <div class="solar-sidebar-section">
                                <h3 class="solar-sidebar-title lang" key="FOLLOW_RECOMMEND">推荐关注</h3>
                                <div class="solar-user-list">
                                    <div class="solar-user-item">
                                        <div class="solar-user-avatar"></div>
                                        <div class="solar-user-info">
                                            <div class="solar-user-name">TechExplorer</div>
                                            <div class="solar-user-desc">科技探索者</div>
                                        </div>
                                        <button class="solar-follow-btn lang" key="FOLLOW">关注</button>
                                    </div>
                                    <div class="solar-user-item">
                                        <div class="solar-user-avatar"></div>
                                        <div class="solar-user-info">
                                            <div class="solar-user-name">GameDev Studio</div>
                                            <div class="solar-user-desc">游戏开发工作室</div>
                                        </div>
                                        <button class="solar-follow-btn lang" key="FOLLOW">关注</button>
                                    </div>
                                    <div class="solar-user-item">
                                        <div class="solar-user-avatar"></div>
                                        <div class="solar-user-info">
                                            <div class="solar-user-name">美食达人</div>
                                            <div class="solar-user-desc">美食制作专家</div>
                                        </div>
                                        <button class="solar-follow-btn lang" key="FOLLOW">关注</button>
                                    </div>
                                </div>
                            </div>

                            <!-- 社区公告 -->
                            <div class="solar-sidebar-section">
                                <h3 class="solar-sidebar-title lang" key="COMMUNITY_ANNOUNCEMENT">社区公告</h3>
                                <div class="solar-announcement-list">
                                    <div class="solar-announcement-item">
                                        <div class="solar-announcement-title">新功能上线通知</div>
                                        <div class="solar-announcement-time">2024-01-15</div>
                                    </div>
                                    <div class="solar-announcement-item">
                                        <div class="solar-announcement-title">社区规则更新</div>
                                        <div class="solar-announcement-time">2024-01-10</div>
                                    </div>
                                    <div class="solar-announcement-item">
                                        <div class="solar-announcement-title">春节活动预告</div>
                                        <div class="solar-announcement-time">2024-01-08</div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    `;
    document.getElementById("root-c").insertAdjacentHTML('afterbegin', mainHtml);
});
// 语言切换功能
      document.addEventListener('DOMContentLoaded', function() {
        const trigger = document.getElementById('language-trigger');
        const dropdown = document.getElementById('language-dropdown');
        const options = dropdown.querySelectorAll('.language-option');
        
        // 切换下拉菜单显示/隐藏
        trigger.addEventListener('click', function(e) {
          e.preventDefault();
          dropdown.classList.toggle('show');
          trigger.classList.toggle('active');
        });
        
        // 点击语言选项
        options.forEach(option => {
          option.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有active状态
            options.forEach(opt => opt.classList.remove('active'));
            
            // 添加active状态到当前选项
            this.classList.add('active');
            
            // 更新触发器文本
            const languageText = this.textContent;
            trigger.textContent = 'Language：' + languageText;
            
            // 隐藏下拉菜单
            dropdown.classList.remove('show');
            trigger.classList.remove('active');
            
            // 这里可以添加实际的语言切换逻辑
            console.log('Selected language:', this.id);
          });
        });
        
        // 点击外部区域关闭下拉菜单
        document.addEventListener('click', function(e) {
          if (!trigger.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
            trigger.classList.remove('active');
          }
        });

        // 轮播功能
        const slides = document.querySelectorAll('.solar-banner-slide');
        const indicators = document.querySelectorAll('.solar-banner-indicators span');
        const prevBtn = document.querySelector('.solar-banner-prev');
        const nextBtn = document.querySelector('.solar-banner-next');
        let currentSlide = 0;

        function showSlide(index) {
          // 隐藏所有幻灯片
          slides.forEach(slide => slide.classList.remove('active'));
          indicators.forEach(indicator => indicator.classList.remove('active'));
          
          // 显示当前幻灯片
          slides[index].classList.add('active');
          indicators[index].classList.add('active');
        }

        function nextSlide() {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
        }

        function prevSlide() {
          currentSlide = (currentSlide - 1 + slides.length) % slides.length;
          showSlide(currentSlide);
        }

        // 绑定事件
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // 指示器点击事件
        indicators.forEach((indicator, index) => {
          indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
          });
        });

        // 自动播放
        setInterval(nextSlide, 5000);

        // 自定义滑动条功能
        const categoryTabs = document.getElementById('categoryTabs');
        const scrollbarThumb = document.getElementById('scrollbarThumb');
        const scrollbarTrack = scrollbarThumb.parentElement;
        
        let isDragging = false;
        let startX = 0;
        let startScrollLeft = 0;
        let thumbStartX = 0;

        // 初始化滑动条
        function initScrollbar() {
          updateScrollbarThumb();
          
          // 监听标签容器滚动事件
          categoryTabs.addEventListener('scroll', updateScrollbarThumb);
          
          // 监听窗口大小变化
          window.addEventListener('resize', updateScrollbarThumb);
        }

        // 更新滑动条拇指位置和大小
        function updateScrollbarThumb() {
          const containerWidth = categoryTabs.clientWidth;
          const contentWidth = categoryTabs.scrollWidth;
          const scrollLeft = categoryTabs.scrollLeft;
          
          // 如果内容不需要滚动，隐藏滑动条
          if (contentWidth <= containerWidth) {
            scrollbarTrack.parentElement.style.display = 'none';
            return;
          } else {
            scrollbarTrack.parentElement.style.display = 'block';
          }
          
          // 计算拇指宽度（按比例）
          const thumbWidth = Math.max((containerWidth / contentWidth) * containerWidth, 40);
          
          // 计算拇指位置
          const maxThumbLeft = containerWidth - thumbWidth;
          const thumbLeft = (scrollLeft / (contentWidth - containerWidth)) * maxThumbLeft;
          
          // 应用样式
          scrollbarThumb.style.width = thumbWidth + 'px';
          scrollbarThumb.style.left = thumbLeft + 'px';
        }

        // 拇指拖拽事件
        scrollbarThumb.addEventListener('mousedown', function(e) {
          isDragging = true;
          startX = e.clientX;
          thumbStartX = parseInt(scrollbarThumb.style.left) || 0;
          startScrollLeft = categoryTabs.scrollLeft;
          
          scrollbarThumb.classList.add('dragging');
          document.body.style.userSelect = 'none'; // 防止文本选择
          
          e.preventDefault();
        });

        // 轨道点击事件
        scrollbarTrack.addEventListener('click', function(e) {
          if (e.target === scrollbarThumb) return;
          
          const trackRect = scrollbarTrack.getBoundingClientRect();
          const clickX = e.clientX - trackRect.left;
          const thumbWidth = scrollbarThumb.offsetWidth;
          const newThumbLeft = Math.max(0, Math.min(clickX - thumbWidth / 2, trackRect.width - thumbWidth));
          
          // 计算对应的滚动位置
          const containerWidth = categoryTabs.clientWidth;
          const contentWidth = categoryTabs.scrollWidth;
          const maxThumbLeft = containerWidth - thumbWidth;
          const scrollRatio = newThumbLeft / maxThumbLeft;
          const newScrollLeft = scrollRatio * (contentWidth - containerWidth);
          
          categoryTabs.scrollLeft = newScrollLeft;
        });

        // 全局鼠标移动事件
        document.addEventListener('mousemove', function(e) {
          if (!isDragging) return;
          
          const deltaX = e.clientX - startX;
          const containerWidth = categoryTabs.clientWidth;
          const contentWidth = categoryTabs.scrollWidth;
          const thumbWidth = scrollbarThumb.offsetWidth;
          const maxThumbLeft = containerWidth - thumbWidth;
          
          // 计算新的拇指位置
          const newThumbLeft = Math.max(0, Math.min(thumbStartX + deltaX, maxThumbLeft));
          
          // 计算对应的滚动位置
          const scrollRatio = newThumbLeft / maxThumbLeft;
          const newScrollLeft = scrollRatio * (contentWidth - containerWidth);
          
          categoryTabs.scrollLeft = newScrollLeft;
          
          e.preventDefault();
        });

        // 全局鼠标释放事件
        document.addEventListener('mouseup', function() {
          if (isDragging) {
            isDragging = false;
            scrollbarThumb.classList.remove('dragging');
            document.body.style.userSelect = '';
          }
        });

        // 触摸事件支持（移动端）
        scrollbarThumb.addEventListener('touchstart', function(e) {
          isDragging = true;
          const touch = e.touches[0];
          startX = touch.clientX;
          thumbStartX = parseInt(scrollbarThumb.style.left) || 0;
          startScrollLeft = categoryTabs.scrollLeft;
          
          scrollbarThumb.classList.add('dragging');
          e.preventDefault();
        });

        document.addEventListener('touchmove', function(e) {
          if (!isDragging) return;
          
          const touch = e.touches[0];
          const deltaX = touch.clientX - startX;
          const containerWidth = categoryTabs.clientWidth;
          const contentWidth = categoryTabs.scrollWidth;
          const thumbWidth = scrollbarThumb.offsetWidth;
          const maxThumbLeft = containerWidth - thumbWidth;
          
          const newThumbLeft = Math.max(0, Math.min(thumbStartX + deltaX, maxThumbLeft));
          const scrollRatio = newThumbLeft / maxThumbLeft;
          const newScrollLeft = scrollRatio * (contentWidth - containerWidth);
          
          categoryTabs.scrollLeft = newScrollLeft;
          e.preventDefault();
        });

        document.addEventListener('touchend', function() {
          if (isDragging) {
            isDragging = false;
            scrollbarThumb.classList.remove('dragging');
          }
        });

        // 初始化滑动条
        initScrollbar();

        // 分类标签切换功能
        const categoryTabButtons = document.querySelectorAll('.solar-category-tab');
        categoryTabButtons.forEach(tab => {
          tab.addEventListener('click', function() {
            // 移除所有active状态
            categoryTabButtons.forEach(t => t.classList.remove('active'));
            // 添加active状态到当前标签
            this.classList.add('active');
          });
        });

        // 内容卡片点击事件
        const contentCards = document.querySelectorAll('.solar-content-card');
        contentCards.forEach(card => {
          card.addEventListener('click', function() {
            console.log('点击了内容卡片:', this.querySelector('.solar-card-title').textContent);
          });
        });

        // 关注按钮点击事件
        const followBtns = document.querySelectorAll('.solar-follow-btn');
        followBtns.forEach(btn => {
          btn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (this.textContent === '关注') {
              this.textContent = '已关注';
              this.style.background = '#6b7280';
            } else {
              this.textContent = '关注';
              this.style.background = '#3b82f6';
            }
          });
        });

        // 备用内容加载逻辑
        setTimeout(function() {
          const rootC = document.getElementById('root-c');
          const placeholder = rootC.querySelector('.content-placeholder');
          
          // 检查外部脚本是否成功加载了内容
          if (placeholder && rootC.children.length === 1) {
            // 如果外部脚本没有加载内容，显示备用内容
            rootC.innerHTML = `
              <div class="main-content">
                <div style="text-align: center; padding: 3rem; background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                  <h2 style="color: #1f2937; margin-bottom: 1rem;">欢迎来到 Solar Community</h2>
                  <p style="color: #6b7280; margin-bottom: 2rem;">外部脚本暂时无法加载，这是备用内容显示。</p>
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
                    <div style="padding: 1.5rem; background: #f3f4f6; border-radius: 8px;">
                      <h3 style="color: #374151; margin-bottom: 0.5rem;">主页</h3>
                      <p style="color: #6b7280; font-size: 0.9rem;">浏览最新的社区内容</p>
                    </div>
                    <div style="padding: 1.5rem; background: #f3f4f6; border-radius: 8px;">
                      <h3 style="color: #374151; margin-bottom: 0.5rem;">短视频</h3>
                      <p style="color: #6b7280; font-size: 0.9rem;">观看精彩的短视频内容</p>
                    </div>
                    <div style="padding: 1.5rem; background: #f3f4f6; border-radius: 8px;">
                      <h3 style="color: #374151; margin-bottom: 0.5rem;">热门</h3>
                      <p style="color: #6b7280; font-size: 0.9rem;">发现热门话题和内容</p>
                    </div>
                    <div style="padding: 1.5rem; background: #f3f4f6; border-radius: 8px;">
                      <h3 style="color: #374151; margin-bottom: 0.5rem;">游戏中心</h3>
                      <p style="color: #6b7280; font-size: 0.9rem;">体验各种有趣的游戏</p>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }
        }, 3000); // 等待3秒后检查是否需要显示备用内容
      });
