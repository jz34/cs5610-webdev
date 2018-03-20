import { Page } from '../models/page.model.client';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


// injecting Http service into PageService
@Injectable()
export class PageService {
  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

  createPage(websiteId: String, page: Page) {
    return this.http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page).map(
      (res: Response) => {
        return res.json();
      }
    );
  }


  findPageByWebsiteId(websiteId: String) {
    return this.http.get(this.baseUrl + '/api/website/' + websiteId + '/page').map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findPageById(pageId: String) {
    return this.http.get(this.baseUrl + '/api/page/' + pageId).map(
      (res: Response) => {
        return res.json();
      }
    );
  }



  updatePage(page: Page) {
    return this.http.put(this.baseUrl + '/api/page/' + page.pid, page).map(
      (res: Response) => {
        return res.json();
      }
    );
  }


  deletePage(pageId: String) {
    return this.http.delete(this.baseUrl + '/api/page/' + pageId).map(
      (res: Response) => {
        return res.json();
      }
    );
  }
}


