import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-image',
  templateUrl: './banner-image.component.html',
  styleUrls: ['./banner-image.component.scss']
})
export class BannerImageComponent implements OnInit {

  @Input() picture: any
  @Input() header: any
  @Input() content: any

  constructor() { }

  ngOnInit(): void {
  }

}
