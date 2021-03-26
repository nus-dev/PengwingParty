export class ViewContents {
    public equals(contents: this): boolean {
        return false;
    }
}

export abstract class View<VIEWCONTENTS extends ViewContents> {
    protected contents: VIEWCONTENTS;
    protected container: HTMLDivElement;

    constructor() {
        this.contents = this.getInitialContents();
    }

    public setContents(contents: VIEWCONTENTS): void {
        this.createElementIfNotExist();

        const isContentsChange: boolean = !contents.equals(this.contents);
        this.contents = contents;

        if (isContentsChange) {
            this.renderView();
        }
    } 

    private createElementIfNotExist(): void {
        if (!this.container) this.createElement();
    }

    public getContainer(): HTMLDivElement {
        this.createElementIfNotExist();

        return this.container;
    }

    protected abstract createElement(): void;
    protected abstract getInitialContents(): VIEWCONTENTS;
    protected abstract renderView(): void;
}