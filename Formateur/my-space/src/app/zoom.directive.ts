import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  @HostBinding('style.transform') transform = 'scale(1)';
  @HostBinding('style.transition') transition = 'transform .4s ease';

  @HostListener('mouseenter')
  zoomIn() {
    this.transform = 'scale(1.2)';
  }

  @HostListener('mouseleave')
  zoomOut() {
    this.transform = 'scale(1)';
  }

  constructor() {
    console.log('appZoom');
  }

}
