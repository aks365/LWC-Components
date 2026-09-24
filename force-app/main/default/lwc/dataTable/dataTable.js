
import { LightningElement } from 'lwc';

export default class DataTable extends LightningElement {

    searchKey = '';
    sortedBy;
    sortDirection = 'asc';

    columns = [
        {
            label: 'Account Name',
            fieldName: 'Name',
            type: 'text',
            sortable: true
        },
        {
            label: 'Industry',
            fieldName: 'Industry',
            type: 'text',
            sortable: true
        },
        {
            label: 'Phone',
            fieldName: 'Phone',
            type: 'phone',
            sortable: true
        },
        {
            label: 'Website',
            fieldName: 'Website',
            type: 'url',
            sortable: true
        }
    ];

    data = [
        {
            Id: '1',
            Name: 'ABC Technologies',
            Industry: 'Technology',
            Phone: '9876543210',
            Website: 'https://example.com'
        },
        {
            Id: '2',
            Name: 'Global Healthcare',
            Industry: 'Healthcare',
            Phone: '9876543211',
            Website: 'https://example.org'
        },
        {
            Id: '3',
            Name: 'Bright Finance',
            Industry: 'Finance',
            Phone: '9876543212',
            Website: 'https://example.net'
        },
        {
            Id: '4',
            Name: 'Tech Solutions',
            Industry: 'Technology',
            Phone: '9876543213',
            Website: 'https://example.com'
        }
    ];

    get filteredData() {
        let result = this.data.filter(record =>
            record.Name.toLowerCase().includes(
                this.searchKey.toLowerCase()
            )
        );

        if (this.sortedBy) {
            result = [...result].sort((a, b) => {
                let valueA = a[this.sortedBy] || '';
                let valueB = b[this.sortedBy] || '';

                let comparison = String(valueA).localeCompare(
                    String(valueB),
                    undefined,
                    { numeric: true }
                );

                return this.sortDirection === 'asc'
                    ? comparison
                    : -comparison;
            });
        }

        return result;
    }

    handleSearch(event) {
        this.searchKey = event.target.value;
    }

    handleSort(event) {
        this.sortedBy = event.detail.fieldName;
        this.sortDirection = event.detail.sortDirection;
    }
}