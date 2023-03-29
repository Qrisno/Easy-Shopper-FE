import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'easyShopper';
  trigger$: Subject<void> = new Subject<void>();
  imagePath!: SafeResourceUrl;
  detection: any;
  constructor(private _sanitizer: DomSanitizer, private http: HttpClient) {}

  saveImage(img: any) {
    const imgBase64 = img._imageAsDataUrl.split(',')[1];

    this.http
      .post('http://127.0.0.1:5000/', { data: imgBase64 })
      .subscribe((detection) => {
        this.detection = detection;
      });
  }

  captureImg() {
    this.trigger$.next();
  }
}
