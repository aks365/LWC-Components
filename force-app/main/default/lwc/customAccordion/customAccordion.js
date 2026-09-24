
import { LightningElement } from 'lwc';

export default class CustomAccordion extends LightningElement {

    sections = [
        {
            id: 'account',
            title: 'Account Information',
            content: 'Account Name: ABC Technologies',
            isOpen: false,
            iconName: 'utility:chevronright'
        },
        {
            id: 'contact',
            title: 'Contact Information',
            content: 'Contact Name: Amit Kumar',
            isOpen: false,
            iconName: 'utility:chevronright'
        },
        {
            id: 'address',
            title: 'Address Information',
            content: 'City: Noida, Country: India',
            isOpen: false,
            iconName: 'utility:chevronright'
        }
    ];

    handleToggle(event) {
        const selectedId = event.currentTarget.dataset.id;
        this.sections = this.sections.map(section => {
            const isOpen = section.id === selectedId && !section.isOpen;
            return {
                ...section, isOpen, iconName: isOpen ? 'utility:chevrondown' : 'utility:chevronright'
            };
        });
    }
}
