import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FeedModule } from '../shared/modules/feed/feed.module';

import { GlobalFeedComponent } from './components/global-feed/global-feed.component';

const routes: Routes = [{ path: '', component: GlobalFeedComponent }];

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FeedModule],
})
export class GlobalFeedModule {}
