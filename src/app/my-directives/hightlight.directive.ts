import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective implements OnInit {

  // ElementRef: element sửa dụng trong directive này
  // private elementsRef: Access modify
  constructor(private elementsRef: ElementRef) { }

  // ngOnInIt sẽ chạy khi có element đó rồi.
  ngOnInit(){
    this.elementsRef.nativeElement.style.backgroundColor = 'green';
  }
}
