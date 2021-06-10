import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthModule } from './auth/auth.module';
import { TopBarModule } from './shared/modules/top-bar/top-bar.module';
import { GlobalFeedModule } from './global-feed/global-feed.module';

import { AppComponent } from './app.component';

import { AuthInterceptorService } from './shared/services/auth-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot([]),
    TopBarModule,
    GlobalFeedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
