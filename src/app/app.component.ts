import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private elementRef:ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('#navBar')
                                  .addEventListener('click', this.onClick.bind(this));
  }

  onClick(){
    this.elementRef.nativeElement.querySelector('#menu').classList.toggle('opacity-100')
    this.elementRef.nativeElement.querySelector('#menu').classList.toggle('left-[0px]')
  }

  title = 'Feiflix';
}
