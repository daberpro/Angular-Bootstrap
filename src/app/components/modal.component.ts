import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-modal-config',
	standalone: true,
	template: `
        <ng-template #content let-c="close" let-d="dismiss">
            <div class="modal-header">
                <h4 class="modal-title" id="modal-basic-title">Hi there!</h4>
                <button type="button" class="btn-close" aria-label="Close" (click)="d('Cross click')"></button>
            </div>
            <div class="modal-body">
                <p>Hello, World!</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" (click)="c('Save click')">Save</button>
            </div>
        </ng-template>

        <button class="btn btn-lg btn-outline-primary" (click)="open(content)">Launch demo modal</button>
    `,
	// add NgbModalConfig and NgbModal to the component providers
	providers: [NgbModalConfig, NgbModal],
})
export class Modal {
	constructor(
		config: NgbModalConfig,
		private modalService: NgbModal,
	) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content: any) {
		this.modalService.open(content);
	}
}