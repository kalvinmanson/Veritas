import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  mobile:boolean = false;
  group3Services:any = [];
  servicios:any = [];



  constructor() { }

  ngOnInit() {
    let timer = setInterval(()=>{
      if(window.screen.width < 768) { this.mobile = true; } else { this.mobile = false; }
    }, 1000);
    this.arServicios();
    let nar = this.servicios;
    while (nar.length > 0)
    this.group3Services.push(nar.splice(0, 3));
    this.arServicios();

  }
  arServicios() {
    this.servicios = [
      { i: 1, img: '/assets/img/service2.jpg', title: 'Other Text', subt: 'Amet ipsum lorem' },
      { i: 2, img: '/assets/img/service1.jpg', title: 'Lorem', subt: 'Amet ipsum lorem' },
      { i: 3, img: '/assets/img/service3.jpg', title: 'Category', subt: 'Lorem ipsum dolor' },
      { i: 1, img: '/assets/img/service1.jpg', title: 'Second', subt: 'Amet ipsum lorem' },
      { i: 2, img: '/assets/img/service2.jpg', title: 'Content', subt: 'Amet ipsum lorem' },
      { i: 3, img: '/assets/img/service3.jpg', title: 'Category', subt: 'Lorem ipsum dolor' },
      { i: 1, img: '/assets/img/service2.jpg', title: 'Title', subt: 'Amet ipsum lorem' },
      { i: 2, img: '/assets/img/service1.jpg', title: 'Service', subt: 'Amet ipsum lorem' }
    ]
  }

}
