import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ErrorMessageModule } from '../errorMessage/errorMessage.module';
import { LoadingModule } from '../loading/loading.module';

import { FeedComponent } from './components/feed/feed.component';

import { FeedApiService } from './services/api.service';
import { FeedFacadeService } from './facade.service';
import { FeedStateService } from './services/state.service';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
  ],
  exports: [FeedComponent],
  providers: [FeedFacadeService, FeedApiService, FeedStateService],
})
export class FeedModule {}
