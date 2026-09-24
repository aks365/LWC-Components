import { LightningElement } from 'lwc';

export default class ModalPopup extends LightningElement {
    isModalOpen = false;

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }
}
