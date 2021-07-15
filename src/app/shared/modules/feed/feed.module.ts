import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FeedComponent } from './components/feed/feed.component';

import { FeedApiService } from './services/api.service';
import { FeedFacadeService } from './facade.service';
import { FeedStateService } from './services/state.service';

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [FeedComponent],
  providers: [FeedFacadeService, FeedApiService, FeedStateService],
})
export class FeedModule {}
