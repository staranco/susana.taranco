import { Component, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../app-routing.animations';
import hoverEffect from 'hover-effect';


@Component({
  selector: 'sts-home',
  animations: [routerTransition],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    window.addEventListener("load", onLoad);
    
    function onLoad() {     
      window.focus();
      window.addEventListener("resize", onResize);
    }
    
    function onResize() {
      let mq = window.matchMedia( "(max-width: 767px)" );
      if (mq.matches) {
        document.getElementsByTagName("canvas")[0].style.display = "none"
      } else {
        document.getElementsByTagName("canvas")[0].style.display = "block"
      }
    }

    new hoverEffect({
      parent: document.querySelector("#featured-image"),
      intensity: .3,
      image1: "../assets/images/sts-once-i-was-a-child@00x.webp",
      image2: "../assets/images/sts-once-i-was-a-child@00x.webp",
      displacementImage: "../assets/images/displacement.png"
    });
    
  }
  
  constructor() {}
}
