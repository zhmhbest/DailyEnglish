

const onLinkClick = (() => {
    const the_canvas = document.createElement('canvas');
    const the_context = the_canvas.getContext('2d');
    const the_div = document.querySelector('div');
    the_div.appendChild(the_canvas);
    the_div.style['padding-left'] = '15%';
    the_canvas.style['margin-left'] = '0';
    //
    let pageCount = 0;
    let pageCurrent = 0;
    let pdfCurrent = null;

    function loadPDF(pdf) {
        pdfCurrent = pdf;
        pageCount = pdf.numPages;
        pageCurrent = 1;
    }

    function rederPage(pageIndex) {
        pageCurrent = pageIndex;

        pdfCurrent.getPage(pageCurrent).then((page) => {
            let viewport = page.getViewport({ scale: 2.0, });
            the_canvas.height = viewport.height;
            the_canvas.width = viewport.width;
            page.render({
                canvasContext: the_context,
                viewport: viewport,
            });
        });
    }

    the_canvas.onclick = function(e) {
        if( e.offsetY < the_canvas.clientHeight/2 ) {
            if(pageCurrent!==1) {
                rederPage(pageCurrent-1)
            }
            // console.log("上一页");
        } else {
            if(pageCurrent!==pageCount) {
                rederPage(pageCurrent+1)
            }
            // console.log("下一页");
        }
    };

    return (url) => {
        const loadingTask = pdfjsLib.getDocument({
            url: url,
            cMapUrl: 'https://unpkg.com/pdfjs-dist@2.0.943/cmaps/', // 引入pdf.js的字体
            cMapPacked: true
        });
        loadingTask.promise.then((pdf) => {
            loadPDF(pdf);
            rederPage(1);
        });
    }
})();


(() => {
    const after_all = function () {
        const tag_as = document.querySelectorAll('li a');
        for (let item of tag_as) {
            let href = item.href;
            item.href = 'javascript: onLinkClick("' + href +  '")';
        }
    };
    const pre_onload = window.onload;
    if (undefined !== pre_onload && null !== pre_onload) {
        window.onload = function () {
            pre_onload();
            after_all();
        }
    } else {
        window.onload = after_all;
    }
})();
