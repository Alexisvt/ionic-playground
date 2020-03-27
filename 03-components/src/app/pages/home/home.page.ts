import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

import { IComponent } from './component.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  components: IComponent[] = [
    {
      icon: 'american-football',
      name: 'Action sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alert',
      redirectTo: '/alert',
    },
  ];
  constructor(private actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {}
}
