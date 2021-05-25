import { Component, OnInit } from '@angular/core';
import { FacadeService } from './auth/facade.service';

@Component({
  selector: 'am-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private authFacade: FacadeService) {}

  ngOnInit(): void {
    this.authFacade.getCurrentUserByAPI();
  }
}
