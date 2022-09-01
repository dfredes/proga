import { ElementRef, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ToastController } from '@ionic/angular';

import { Pag5PageRoutingModule } from './pag5-routing.module';

import { Pag5Page } from './pag5.page';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pag5PageRoutingModule
  ],
  declarations: [Pag5Page]
})
export class Pag5PageModule {
scanActive = false;
scanResult = null;
@ViewChild('video', { static: false}) video: ElementRef;

videoElement: any;

constructor(private toastCtrl: ToastController) {}

ngAfterViewInit() {
this.videoElement = this.video.nativeElement;

}

startScan() {

}
stopScan() {
this.scanActive = false;

}

reset() {
this.scanResult = null;
  }

async showQrToast() {
const toast = await this.toastCtrl.create()



}
