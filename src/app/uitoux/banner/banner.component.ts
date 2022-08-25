import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  image: any = 1

  constructor() { }

  ngOnInit(): void {
  }

  carousel(type: any) {
    if(type) {
      if(this.image === 2) this.image = 1; else this.image += 1
    } else {
      if(this.image === 1) this.image += 1; else this.image = 1
    }
  }

}
