import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { AvatarPageRoutingModule } from './avatar-routing.module';
import { AvatarPage } from './avatar.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AvatarPageRoutingModule, ComponentsModule],
  declarations: [AvatarPage],
})
export class AvatarPageModule {}
