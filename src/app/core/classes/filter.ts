export class Filter {
    q: string;
    departmentId: string;
    hasImages: boolean;

    public constructor(init?: Partial<Filter>) {
        Object.assign(this, init);


        if (this.departmentId !== '') {
            this.departmentId = this.departmentId.toString().replaceAll(',', '|')
        }
    }
}
