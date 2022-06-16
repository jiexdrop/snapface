export class FaceSnap {
    id: number;
    title: string;
    description: string;
    createdDate: Date;
    snaps: number;
    imageUrl: string;
    location?: string;

    constructor(id: number, title: string, description: string, imageUrl: string, createdDate: Date, snaps: number, location?: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.createdDate = createdDate;
        this.snaps = snaps;
        this.location = location;
    }
}