// highlight.directive.ts
import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#d3d3d3'); 
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('white'); 
  }

  private highlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}