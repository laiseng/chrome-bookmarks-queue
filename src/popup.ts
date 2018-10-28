import * as $ from 'jquery';
import { LinkComponent } from './component/link.component';
import { LinkModel } from './model/LinkItem.model';
export class Popup {
    urls: LinkComponent;

    constructor() {
        let okbutton = document.querySelector('.okbutton');
        console.log(okbutton)
        okbutton.addEventListener('click', (e: MouseEvent) => { this.onOkClick(e); })
    }

    bindToLinkedList(urls: LinkComponent) {
        let list = document.querySelector('.linklist');
        urls.links.forEach(x => {
            let newel = document.createElement('div');
            newel.innerText = x.url;
            list.appendChild(newel)
        });
    }

    onOkClick(e: MouseEvent) {
        (e.target as HTMLButtonElement).style.backgroundColor = "red";
        let ta = document.querySelector('#tadom') as HTMLTextAreaElement;
        this.urls = new LinkComponent(ta.value);
        this.bindToLinkedList(this.urls);

        this.setBadgeCount(this.urls.count);

    }

    setBadgeCount(count:number) {
        chrome.browserAction.setBadgeBackgroundColor({
            "color": "#ff0000",
        });
        chrome.browserAction.setBadgeText({
            text: count.toString()
        });
    }

    getBackgroundData(){
        chrome.extension
    }
}

let p = new Popup();
var background = chrome.extension.getBackgroundPage(); //do this in global scope for popup.js
// chrome..getBackgroundPage((x:any)=>{
//     console.log(x)
//     x.dothis();
// })
console.log("imm")



// let count = 0;

// $(function() {
//   const queryInfo = {
//     active: true,
//     currentWindow: true
//   };

//   chrome.tabs.query(queryInfo, function(tabs) {
//     $('#url').text(tabs[0].url);
//     $('#time').text(moment().format('YYYY-MM-DD HH:mm:ss'));
//   });

//   chrome.browserAction.setBadgeText({text: count.toString()});
//   $('#countUp').click(()=>{
//     chrome.browserAction.setBadgeText({text: (++count).toString()});
//   });

//   $('#changeBackground').click(()=>{
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, {
//         color: '#555555'
//       },
//       function(msg) {
//         console.log("result message:", msg);
//       });
//     });
//   });
// });
