export class ObjectResponse {
    total: number;
    objectIDs: number[];

    public constructor(init?: Partial<Object>) {
        Object.assign(this, init);
    }
}
