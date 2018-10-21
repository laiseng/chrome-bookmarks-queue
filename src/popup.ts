// import * as moment from 'moment';
import * as $ from 'jquery';
export class Popup {
    constructor() {
        let okbutton = document.querySelector('.okbutton');
        console.log(okbutton)

        okbutton.addEventListener('click', e => {
            (e.target as HTMLButtonElement).style.backgroundColor = "red";

            let ta = document.querySelector('#tadom') as HTMLTextAreaElement;
            this.bindToLinkedList(ta.value);
        })
    }

    bindToLinkedList(textAreaValues: string) {
        let list = document.querySelector('.linklist');
        let urls = textAreaValues.match(/[^\r\n]+/g);
        urls.forEach(x => {
            let newel = document.createElement('div');
            newel.innerText = x;
            list.appendChild(newel)
        });
    }
}

let p = new Popup();
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
