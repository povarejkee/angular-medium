import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FeedComponent } from './components/feed/feed.component';

import { FeedApiService } from './services/api.service';

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [FeedComponent],
  providers: [FeedApiService],
})
export class FeedModule {}
