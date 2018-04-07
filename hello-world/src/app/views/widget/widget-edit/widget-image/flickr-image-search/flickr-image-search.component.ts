import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../../models/widget.model.client';
import {FlickrService} from '../../../../../services/flickr.service.client';
import {WidgetService} from '../../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  widget: Widget;
  websiteId: string;
  pageId: string;
  // userId: string;
  // widgetId: string;
  photos: [any];
  error: string;
  searchText: string;

  constructor(private flickrService: FlickrService,
              private widgetService: WidgetService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
     this.widget = new Widget('', '',  'IMAGE', this.pageId, '', '', '', '', false);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      // this.widgetId = params['wgId'];

      return this.widgetService.createWidget(this.pageId, this.widget).subscribe(
          (widget: Widget) => {
            this.widget = widget;
          }
        );


      // if (this.widgetId !== undefined) {
      //   return this.widgetService.findWidgetById(this.widgetId).subscribe(
      //     (widget: Widget) => {
      //       this.widget = widget;
      //     }
      //   );
      // } else {
      //   return this.widgetService.createWidget(this.pageId, this.widget).subscribe(
      //     (widget: Widget) => {
      //       this.widget = widget;
      //     }
      //   );
      // }
    });
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          console.log(data);
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          console.log(val);
          this.photos = val.photos;
        }
      );


    // .then(function (response) {
    //   let dat = response.data.replace('jsonFlickrApi(', '');
    //   dat = dat.substring(0, dat.length - 1);
    //   dat = JSON.parse(dat);
    //   this.photos = dat.photos;
    // });
  }

  selectPhoto(photo) {
    // if (this.widgetId === undefined) {
    //   this.widgetService.createWidget(this.pageId, this.widget).subscribe(
    //     (widget: Widget) => {
    //       this.widget = widget;
    //       // this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    //       // this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    //     }
    //   );
    // }

    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    // console.log(this.widget);
    // console.log(this.widget._id);
    this.widget.url = url;

    // const widget = {
    //   _id: this.userId,
    //   widgetType: 'IMAGE',
    //   pageId : this.pageId,
    //   url: url,
    //   size: '',
    //   text: '',
    //   width: '',
    //   formatted: false
    // };

    this.widgetService
      .updateWidget(this.widget)
      .subscribe(
        (data: any) => {
          const result = data;
          if (result) {
            this.router.navigate(['/user/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
          } else {
            this.error = 'failed!';
          }
        }
      );
  }


    // .then(function (response) {
    //   const result = response.data;
    //   if(result){
    //     this.router.url('/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widgetId);
    //   }else{
    //     const error = 'failed!';
    //   }
    // });

}
