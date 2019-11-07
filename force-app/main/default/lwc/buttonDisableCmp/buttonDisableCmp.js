import { LightningElement } from 'lwc';

export default class buttonDisableCmp extends LightningElement {
    renderedCallback() {
        let test = this.template.querySelector('lightning-button');
        test.disabled = true;
    }
}