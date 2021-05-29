import { Component, OnInit } from '@angular/core';

import { AuthFacadeService } from './auth/facade.service';

@Component({
  selector: 'am-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private authFacade: AuthFacadeService) {}

  ngOnInit(): void {
    this.authFacade.getCurrentUserByAPI();
  }
}
