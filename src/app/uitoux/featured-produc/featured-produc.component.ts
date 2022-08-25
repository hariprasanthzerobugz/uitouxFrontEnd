import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-featured-produc',
  templateUrl: './featured-produc.component.html',
  styleUrls: ['./featured-produc.component.scss']
})
export class FeaturedProducComponent implements OnInit {

  listData: any[] = []
  constructor(
    private uitouxService: GlobalService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.uitouxService.productList({type: 'featuredProduct'})?.subscribe(res => {
      const {status, data, message} = res
      if(status) {
        this.listData = data
        this.cdr.detectChanges()
      } else {
        alert(message)
      }
    }, error => alert(error?.message ?? 'Error'))
  }


}
