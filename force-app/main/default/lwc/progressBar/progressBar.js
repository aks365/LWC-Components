
import { LightningElement } from 'lwc';

export default class ProgressBar extends LightningElement {

    progress = 30;

    get progressStyle() {
        return `width: ${this.progress}%;`;
    }

    get isComplete() {
        return this.progress >= 100;
    }

    get statusMessage() {
        if (this.progress === 100) {
            return 'Task completed successfully!';
        }
        return 'Task is in progress...';
    }

    increaseProgress() {
        this.progress = Math.min(this.progress + 10, 100);
    }

    resetProgress() {
        this.progress = 0;
    }
}