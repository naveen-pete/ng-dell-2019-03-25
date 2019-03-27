import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() color = 'yellow';

  constructor(private el: ElementRef) { }

  ngOnInit() { }

  @HostListener('mouseover')
  mouseOver() {
    this.setColor(this.color);
  }

  @HostListener('mouseout')
  mouseOut() {
    this.setColor('');
  }

  private setColor(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
