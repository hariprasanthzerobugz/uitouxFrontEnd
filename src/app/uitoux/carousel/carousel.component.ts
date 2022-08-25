import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

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
