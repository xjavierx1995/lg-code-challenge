export class ObjectResponse {
    total: number;
    objectIDs: number[];

    public constructor(init?: Partial<ObjectResponse>) {
        Object.assign(this, init);
    }
}
