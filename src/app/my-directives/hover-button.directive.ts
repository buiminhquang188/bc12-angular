import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHoverButton]',
})
export class HoverButtonDirective implements OnInit {
  constructor(private ElementRef: ElementRef, private renderer2: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer2.addClass(this.ElementRef.nativeElement, 'btn-danger');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer2.removeClass(this.ElementRef.nativeElement, 'btn-danger');
  }

  ngOnInit() {
    this.renderer2.addClass(this.ElementRef.nativeElement, 'btn-success');
  }
}
