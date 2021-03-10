import * as zhmh from "zhmh-webbasicjs";

// 初始化
const menuSelect = document.querySelector('#menu') as HTMLSelectElement;
const progressTitle = document.querySelector('#progressTitle') as HTMLSpanElement;
const progressBar = document.querySelector('#progressBar') as HTMLProgressElement;
const messageTips = document.querySelector('#messageTips') as HTMLPreElement;
const messageResult = document.querySelector('#messageResult') as HTMLPreElement;
const player = document.querySelector('#player') as HTMLAudioElement;

zhmh.ajax.get("assets/manifest.json", "json").then(res => {
    zhmh.form.setSelectOptions(menuSelect, res);
    // console.log(res);
});

// 状态变量
let currentPractice: Array<string> | undefined;
let currentPracticeIndex: number;
let currentPracticeSum: number;
let currentItem: Array<string> | undefined;
function setProgressTitle(cur: string | number, sum: string | number) {
    progressTitle.innerText = `${cur}/${sum}`;
}
function setProgress(cur: number, sum: number) {
    progressBar.value = cur;
    progressBar.max = sum;
}
function setProgressAuto() {
    setProgressTitle(currentPracticeIndex, currentPracticeSum);
    progressBar.value = currentPracticeIndex;
    progressBar.max = currentPracticeSum;
}
function palySound(s: string) {
    s = s.replace(/\/|、/g, ',');
    s = s.replace(/(\.\.\.)|\(|\)/g, '');
    console.log(s);
    if (null !== s.match(/^[\-,a-zA-Z ]+$/)) {
        // type=0 美音 | type=1 英音
        player.src = `http://dict.youdao.com/dictvoice?type=0&audio=${s.trim()}`;
        // console.log(player.networkState);
    }
}
function setMessageTips(s: string) {
    palySound(s);
    messageTips.innerHTML = s;
}
function setMessageResult(s: string) {
    palySound(s);
    messageResult.innerHTML = s;
}


// 定义全局方法
declare global {
    interface Window {
        onMenuChange: () => void,
        onButtonPre: () => void,
        onButtonNxt: () => void,
        onMsgClick: () => void,
        onHintNeed: () => void,
    }
}
window.onload = function() {
    setMessageTips("<span style='color: hotpink'>None</span>");
    setProgressTitle("NaN", "NaN");

    window.onMenuChange = function () {
        setMessageResult("");
        player.src = "";
        currentItem = undefined;
        currentPractice = undefined;

        if (menuSelect.value.length > 0) {
            zhmh.ajax.get(menuSelect.value, "text").then(res => {
                const lines = (res.split("\n") as Array<string>).sort((a: string, b: string) => {
                    return Math.random() > 0.5 ? -1 : 1;
                });
                setMessageTips("<span style='color: hotpink'>Ready</span>");
                currentPracticeIndex = 0;
                currentPracticeSum = lines.length;
                currentPractice = lines;
                setProgressAuto();
            });
        } else {
            setMessageTips("<span style='color: hotpink'>None</span>");
            setProgress(-1, -1);
            setProgressTitle("NaN", "NaN");
        }
    };
    window.onButtonPre = function() {
        if (undefined === currentPractice) return;
        if (currentPracticeIndex > 1) {
            setMessageResult("");
            currentPracticeIndex--;
            const index = currentPracticeIndex - 1;
            //
            currentItem = currentPractice[index].split('|');
            setMessageTips(currentItem[0]);
            setProgressAuto();
        }
    };
    window.onButtonNxt = function() {
        if (undefined === currentPractice) return;
        if (currentPracticeIndex < currentPracticeSum) {
            setMessageResult("");
            const index = currentPracticeIndex;
            currentPracticeIndex++;
            //
            currentItem = currentPractice[index].split('|');
            setMessageTips(currentItem[0]);
            setProgressAuto();
        }
    };
    window.onMsgClick = function() {
        if (1 === player.networkState) {
            player.play();
        }
    };
    window.onHintNeed = function() {
        if (undefined !== currentItem)
            setMessageResult(currentItem[1]);
    };
}
