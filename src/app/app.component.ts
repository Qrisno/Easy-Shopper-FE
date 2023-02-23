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
  constructor(private _sanitizer: DomSanitizer) {}

  saveImage(img: any) {
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(
      img._imageAsDataUrl
    );
  }

  captureImg() {
    this.trigger$.next();
  }
}
