import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'easyShopper';
  trigger$: Subject<void> = new Subject<void>();
  imagePath!: SafeResourceUrl;
  detection: any;
  weight: any;
  constructor(private http: HttpClient, private elRef: ElementRef) {}
  prices: any = {
    person: 2,
    apple: 3.2,
    banana: 4.2,
    orange: 5,
  };
  ngAfterViewInit() {
    console.log(this.elRef.nativeElement.querySelector('.weight'));
  }
  saveImage(img: any) {
    const imgBase64 = img._imageAsDataUrl.split(',')[1];

    this.http
      .post('http://127.0.0.1:5000/', { data: imgBase64 })
      .subscribe((detection) => {
        this.detection = detection;
        console.log(detection);
      });
  }

  captureImg() {
    console.log('here');

    this.trigger$.next();
  }
}
