import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { UtilsService } from '../../../../services/utils.service';

@Component({
  selector: 'am-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit {
  @Input() limit: number;
  @Input() total: any; // todo тут какая-то хуета с типом, ts'у не нравится number
  @Input() url: string;
  @Input() currentPage: number;

  pages: number[];

  private pagesCount: number;

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    console.warn(this.limit);
    console.warn(this.total);
    console.warn(this.url);
    console.warn(this.currentPage);

    this.pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.utilsService.range(1, this.pagesCount);
  }
}
