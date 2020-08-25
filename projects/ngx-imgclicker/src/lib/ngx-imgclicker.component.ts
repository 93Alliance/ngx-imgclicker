import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, OnDestroy, HostListener } from '@angular/core';
import { Options, defaultOptions } from './options';
import { mergeJson } from './utils';

import createPanZoom from 'panzoom';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-imgclicker',
  template: `
    <div #outerdiv style="position:fixed;top:0;left:0;z-index:999;width:100%;height:100%;display:none;" [ngStyle]="outerDivStyle">
      <div #innerdiv style="position:absolute;">
          <img #targetImg [ngStyle]="targetImgStyle" src="" />
      </div>
    </div>
  `,
})
export class NgxImgclickerComponent implements OnInit, OnDestroy {

  @Input() root: HTMLElement;
  @Input() options: Options;

  outerDivStyle: any;
  targetImgStyle: any;

  @ViewChild('outerdiv', {static: true})
  private outerdiv: ElementRef;

  @ViewChild('innerdiv', {static: true})
  private innerdiv: ElementRef;

  @ViewChild('targetImg', {static: true})
  private targetImg: ElementRef;

  private pZController: any;

  constructor(private renderer: Renderer2) {
    this.onClick = this.onClick.bind(this);
  }

  ngOnInit(): void {
    if (!this.options) {
      this.options = defaultOptions;
    } else {
      mergeJson(this.options, defaultOptions); // merge options
    }

    this.outerDivStyle = {
      background: this.options.background
    };

    this.targetImgStyle = {
      border: this.options.imgBorder
    };

    this.outerdiv.nativeElement.ondblclick = () => {
      this.renderer.setStyle(this.outerdiv.nativeElement, 'display', 'none');
      this.pZController.dispose();
      this.pZController = null;
    };

    this.targetImg.nativeElement.onload = () => {
      this.renderer.setStyle(this.outerdiv.nativeElement, 'display', 'block');
      this.pZController = createPanZoom(this.innerdiv.nativeElement, {autocenter: true, bounds: true});
    };

    if (!this.root) {
      this.root = document.body;
    }

    this.root.addEventListener('dblclick', this.onClick);
  }

  ngOnDestroy(): void {
    if (this.pZController) {
      this.pZController.dispose();
    }
    if (this.root) {
      this.root.removeEventListener('dblclick', this.onClick);
    }
  }

  private onClick(event: any) {
    const targetElement = event.target;
    if (targetElement.nodeName === 'IMG' && !targetElement.isEqualNode(this.targetImg.nativeElement)) {
      const clickedInside = this.root.contains(targetElement);
      if (clickedInside) {
        this.showImage(targetElement);
      }
    }
  }

  private showImage(targetElement: any) {
    let src: any;
    if (this.options.urlCallback) {
      src = this.options.urlCallback(targetElement.src);
    }
    this.targetImg.nativeElement.src = src;
  }
}
