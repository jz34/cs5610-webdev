import { Page } from '../models/page.model.client';
import {Injectable} from '@angular/core';


@Injectable()
export class PageService {

  pages: Page[] = [
    new Page('321', 'Post 1', '456', 'Lorem' ),
    new Page('321', 'Post 2', '456', 'Lorem' ),
    new Page('321', 'Post 3', '456', 'Lorem' ),
  ];

  createPage(websiteId: String, page: Page) {

    const new_page = {
      uid: (new Date()).getTime() + '',
      name: page.name,
      websiteId: page.websiteId,
      title: page.title
    };

    this.pages.push(new_page);
  }

  findPageByWebsiteId(websiteId: String) {
    const resultSet = [];
    for ( const i in this.pages) {
      if (this.pages[i].websiteId === websiteId) {
        resultSet.push(this.pages[i]);
      }
    }
    return resultSet;
  }

  findPageByWebsiteId2(websiteId: String) {
    return this.pages.filter(function (page) {
      return page.websiteId === websiteId;
    });
  }

  findPageById(pageId: String) {
    return this.pages.find(function (page) {
      return page.uid === pageId;
    });
  }

  updatePage(pageId: String, page: Page) {
    for (const i in this.pages) {
      if (this.pages[i].uid === pageId) {
        this.pages[i].name = page.name;
        this.pages[i].title = page.title;
      }
    }
  }

  deletePage(pageId: String) {
    for (const i in this.pages) {
      if (this.pages[i].uid === pageId) {
        const j = +i;
        this.pages.splice(j, 1);
      }
    }
  }
}
