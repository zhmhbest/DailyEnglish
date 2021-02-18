const mainElement = document.querySelector("main");
const mainRoot = mainElement.parentElement.parentElement;
const countMax=10;
let countLoop=1; const intervalMain = setInterval(() => {
    console.log(`${countLoop}/${countMax}`);
    // 提取Root
    for(item of document.body.children) {
        if(mainRoot !== item && null !== item) item.remove();
    }
    // 提取Main
    for(item of mainElement.children) {
        if(item.className !== 'headline-and-lead-media' && item.className !== 'article-column-container' ) item.remove();
    }
    // 优化Head
    for(item of document.head.children) {
        if(item === null) continue;
        if('TITLE'===item.tagName.toUpperCase()) continue;
        if('LINK'===item.tagName.toUpperCase() && 'stylesheet'===item.rel.toLowerCase()) continue;
        item.remove();
    }
    if(countLoop>=countMax) {
        clearInterval(intervalMain);
        // 移除lead-media
        document.querySelector("div.lead-media").remove();
        // 移除段内广告
        for(item of document.querySelectorAll('.ad-container')) item.remove();
        // 移除侧边栏
        document.querySelector("div.sidebar-right").remove();
        // 移除Subscribe
        document.querySelector("div.subscription-cta").remove();
        // 移除Sign
        document.querySelector("div.newsletter-signup-inline").parentElement.remove();
        // 移除feedback
        document.querySelector("p.author-feedback-text").remove();
        // 移除Share
        document.querySelector('.article-bottom').remove();
        // 移除Read More
        document.querySelector("div.bottom-recirc.padded-mobile").remove();
        // 禁止连接跳转
        for(item of document.querySelectorAll('p a')) { item.href='javascript:'; item.target='_self' }
        // 优化
        for(item of document.querySelectorAll('html iframe')) item.remove();
        for(item of document.querySelectorAll('html script')) item.remove();
        for(item of document.querySelectorAll('html style')) item.remove();
        console.log("Done!");
    } else countLoop++;
}, 500);
