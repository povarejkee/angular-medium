import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { TopBarModule } from './shared/modules/top-bar/top-bar.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthModule, RouterModule.forRoot([]), TopBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
