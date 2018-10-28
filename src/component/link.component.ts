import { LinkModel } from "../model/linkitem.model";

export class LinkComponent {
    links: Array<LinkModel> = [];
    count = 0;
    constructor(urlList: string) {
        this.parseLinks(urlList);
    }

    parseLinks(links: string) {
        let urls = links.match(/[^\r\n]+/g);
        urls.forEach(link => {
            this.links.push({ id: this.count, title: link, url: link });
            this.count++;
        });
    }
}