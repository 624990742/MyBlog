/**
 * 根据数据动态生成对应的导航栏
 * @param navItems  标题数据
 * @param brandIconClass 图标
 * @returns {HTMLElement}
 */
function generateNavigationHeader(navItems,brandIconClass) {
    // 创建导航栏容器
    const navContainer = document.createElement('nav');
    navContainer.className = 'navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-sm-3 px-0';

    // 创建导航栏折叠内容容器
    const collapseContainer = document.createElement('div');
    collapseContainer.className = 'collapse navbar-collapse';
    collapseContainer.id = 'navbarSupportedContent';

    // 创建导航栏列表
    const navList = document.createElement('ul');
    navList.className = 'navbar-nav';

    // 动态生成导航项
    function generateNavItems() {
        navList.innerHTML = '';
        navItems.forEach(item => {
            const li = document.createElement('li');
            li.className = item.isActive ? 'nav-item active' : 'nav-item';
            const a = document.createElement('a');
            a.className = 'nav-link';
            a.href = item.href;
            a.textContent = item.title;
            li.appendChild(a);
            navList.appendChild(li);
        });
    }
    // 初始化导航栏
    generateNavItems();
    // 将导航栏列表添加到折叠内容容器中
    collapseContainer.appendChild(navList);
    // 创建导航栏品牌
    const brandLink = document.createElement('a');
    brandLink.className = 'navbar-brand';
    brandLink.href = 'index.html';
    brandLink.innerHTML = '<span class="' + brandIconClass + '"></span>快讯简报';

    // 创建移动端位置容器
    const mobilePosition = document.createElement('div');
    mobilePosition.className = 'mobile-position';

    // 创建主题切换容器
    const themeSwitchContainer = document.createElement('div');
    themeSwitchContainer.className = 'theme-switch-wrapper';

    const themeSwitchLabel = document.createElement('label');
    themeSwitchLabel.className = 'theme-switch';
    themeSwitchLabel.htmlFor = 'checkbox';

    const themeSwitchInput = document.createElement('input');
    themeSwitchInput.type = 'checkbox';
    themeSwitchInput.id = 'checkbox';

    const modeContainer = document.createElement('div');
    modeContainer.className = 'mode-container';
    modeContainer.innerHTML = '<i class="gg-sun"></i><i class="gg-moon"></i>';

    themeSwitchLabel.appendChild(themeSwitchInput);
    themeSwitchLabel.appendChild(modeContainer);
    themeSwitchContainer.appendChild(themeSwitchLabel);
    mobilePosition.appendChild(themeSwitchContainer);

    // 将导航栏内容添加到导航栏容器中
    navContainer.appendChild(collapseContainer);
    navContainer.appendChild(brandLink);
    navContainer.appendChild(mobilePosition);

    return navContainer;
}
