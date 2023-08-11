import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeLetterColor]'
})
export class ChangeLetterColorDirective implements OnInit {

  constructor(private elRef: ElementRef, private render: Renderer2) { }
  
  ngOnInit() {
    this.render.setStyle(this.elRef.nativeElement,'color', 'teal')
  }

}
