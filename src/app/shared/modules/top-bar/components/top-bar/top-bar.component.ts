import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FacadeService } from '../../../../../auth/facade.service';
import { Observable } from 'rxjs';

import { ICurrentUser } from '../../../../../auth/types/current-user.interface';

@Component({
  selector: 'am-topbar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent implements OnInit {
  currentUser$: Observable<ICurrentUser | null>;
  isLoggedIn$: Observable<boolean | null>;

  constructor(private authFacade: FacadeService) {}

  ngOnInit(): void {
    this.currentUser$ = this.authFacade.getCurrentUser$();
    this.isLoggedIn$ = this.authFacade.getIsLoggedIn$();
  }
}
