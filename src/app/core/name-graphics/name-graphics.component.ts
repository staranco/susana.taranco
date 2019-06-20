import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sts-name-graphics',
  templateUrl: './name-graphics.component.html',
  styleUrls: ['./name-graphics.component.scss']
})
export class NameGraphicsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    window.addEventListener("load", onLoad);
    
    function onLoad() {    
      document.addEventListener("scroll", onScroll); 
    }

    function onScroll() {
      const parallaxEls = document.querySelectorAll("[data-speed]");
      console.log(document.querySelector("#viewport").getBoundingClientRect().top)

      document.querySelector("#js-scroll").getBoundingClientRect().top < -400 ? document.querySelector("#s1 path").classList.add("fill-gainsboro") : document.querySelector("#s1 path").classList.remove("fill-gainsboro")
      document.querySelector("#js-scroll").getBoundingClientRect().top < -200 ? document.querySelector("#t path").classList.add("fill-gainsboro") : document.querySelector("#t path").classList.remove("fill-gainsboro")
      document.querySelector("#js-scroll").getBoundingClientRect().top < -100 ? document.querySelector("#s2 path").classList.add("fill-gainsboro") : document.querySelector("#s2 path").classList.remove("fill-gainsboro")

      for(let item of Object.keys(parallaxEls)) {
        var parallaxEl = parallaxEls[item];
        const direction = parallaxEl.dataset.speed * (document.querySelector("#js-scroll").getBoundingClientRect().top / 40);

        parallaxEl.style.transform = `translate3d(0,${direction}px,0)`;
      }
    }
  }

}
