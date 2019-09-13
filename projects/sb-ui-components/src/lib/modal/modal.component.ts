import { Component, OnInit, Input, ViewEncapsulation, ElementRef, OnDestroy } from '@angular/core';
import { ModalService } from '../_services';

/************************
 *    Modal Wapper
 ************************
 * size: sm,md,lg and full
 * theme: primary, warning, tertiary, success, secondary and error
 * isClosable: true and false
 * customClass: Add custom classes to modal wrapper
 * Note: Syles do not apply to Child components like header, content and actions
 *       because the css selector gets modified for default angular encapsulation mode
 *       hence encapsulation: ViewEncapsulation.None is added
 * https://stackblitz.com/edit/angular-6-custom-modal-dialog
 * *********************/

@Component({
  selector: 'sb-modal',
  template: `
  <div
    *ngIf="!showmodal"
    (click)="showmodal = showmodal"
    class="sbmodalWrapper {{customClass}}"
    [ngClass]="{
      'sbmodal--isNotClosable': isClosable == false,
      'sbmodal--isClosable': isClosable == true,
      'sbmodal--primary': theme == 'primary',
      'sbmodal--warning': theme == 'warning',
      'sbmodal--tertiary': theme == 'tertiary',
      'sbmodal--success': theme == 'success',
      'sbmodal--secondary': theme == 'secondary',
      'sbmodal--error': theme == 'error',
      'sbmodal--sm': size == 'sm',
      'sbmodal--md': size == 'md',
      'sbmodal--lg': size == 'lg',
      'sbmodal--full': size == 'full'
    }"
    >
    <div class="sbmodal">
      <ng-content></ng-content>
    </div>
  </div>
  `,
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ModalComponent implements OnInit, OnDestroy {
  private element: any;
  showmodal: boolean;
  @Input() id: string;
  @Input() isClosable: boolean;
  @Input() size: string;
  @Input() theme: string;
  @Input() customClass: string;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    const modal = this;

    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', (e: any) => {
      if (e.target.classList.contains('sbmodal--isClosable')) {
        modal.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('sbmodal--open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('sbmodal--open');
  }

}

/************************
 *    Modal Header
 ************************
 * hideCloseButton is an optional boolean config.
 * If set true then close button wont be shown on modal header.
 * *********************/

@Component({
  selector: 'sb-modal-header',
  template: `
  <div class="sbmodal__header">
    <h4><ng-content></ng-content></h4>
    <button
      *ngIf="!hideCloseButton"
      title="Close"
      class="i-link sbbtn-close">
      X
        <svg class="sbicon sbicon--close sbicon--xs sbicon--white">
          <use xlink:href="../assets/images/logo.png"></use>
        </svg>
    </button>
  </div>`,
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalHeaderComponent implements OnInit {
  @Input() hideCloseButton: boolean;

  constructor() { }

  ngOnInit() {}

}

/************************
 *    Modal Content
 ************************
 * isScrollable is an optional boolean config.
 * If set true then content box will have scrollbar
 * otherwise it will be lengthy as per the content.
 * *********************/

@Component({
  selector: 'sb-modal-content',
  template: `
  <div
    class="sbmodal__content"
    [ngClass]="{
      'sbmodal__content-scroll': isScrollable == true
    }"
    >
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalContentComponent implements OnInit {
  @Input() isScrollable: boolean;

  constructor() { }

  ngOnInit() {}

}

/************************
 *   Modal Actions
 * *********************/

@Component({
  selector: 'sb-modal-actions',
  template: `
  <div class="sbmodal__actions">
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalActionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
