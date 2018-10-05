import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Veritas';
  menuOpened:boolean = false;
  miniHeader:boolean = false;

  constructor() { }

  ngOnInit() {

    let timer = setInterval(()=>{
      let top  = window.pageYOffset || document.documentElement.scrollTop;
      if(top > 250) { this.miniHeader = true; } else { this.miniHeader = false; }
    }, 500);
  }


}
