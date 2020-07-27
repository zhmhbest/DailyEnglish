// 提取主内容
document.querySelector('main').innerHTML =
    document.querySelector('.headline-and-lead-media').innerHTML +
    document.querySelector('.article-content').innerHTML
document.querySelector('body').innerHTML = document.querySelector('main').parentElement.innerHTML

// 移除底部栏
document.querySelector('.article-bottom').remove()
document.querySelector('.most-popular-feed').remove()
document.querySelector('.newsletter-callout').remove()
document.querySelector('.bottom-recirc').remove()

// 移除广告
for(item of document.querySelectorAll('.ad-container')) item.remove()

// 优化
for(item of document.querySelectorAll('p a')) item.parentElement.innerHTML = item.parentElement.innerText
for(item of document.querySelectorAll('iframe')) item.remove()
for(item of document.querySelectorAll('script')) item.remove()
