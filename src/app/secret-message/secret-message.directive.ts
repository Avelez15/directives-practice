import { Directive, ElementRef, Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appSecretMessage]'
})
export class SecretMessageDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  

  @HostListener('mouseover') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green')
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'transparent')
  }
}
