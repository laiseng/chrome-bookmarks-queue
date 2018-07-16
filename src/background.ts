export class BookmarkQueue {
    constructor() {

    }

    start() {
        chrome.contextMenus.create({ type: "normal", id: "0", title: "queue bookmark" });
        chrome.bookmarks.getTree(x => {
            console.log(x[0]);

            x[0].children ? x[0].children.forEach(y => {
                this.parseChildren(y);
            }) : null;
        })

        this.listenContextClick();
    }

    listenContextClick() {
        chrome.contextMenus.onClicked.addListener((contextData, tab) => {
            console.log(contextData, tab);
        });
    }

    parseChildren(child: chrome.bookmarks.BookmarkTreeNode, ) {
        this.addMenu(child);
        child.children ? child.children.forEach(c => {
            this.parseChildren(c);

        }) : null;
    }

    addMenu(c: chrome.bookmarks.BookmarkTreeNode) {
        // console.log(c);
        !c.url ? chrome.contextMenus.create({
            type: "normal", id: c.id, title: c.title ? c.title : c.id, parentId: c.parentId, onclick: (data, tab) => {
                console.log(c);
            }
        }) : null;
    }
}

let b = new BookmarkQueue();
b.start();