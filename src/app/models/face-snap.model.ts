export class FaceSnap {
    title: string;
    description: string;
    createdDate: Date;
    snaps: number;
    imageUrl: string;
    location?: string;

    constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number, location?: string) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.createdDate = createdDate;
        this.snaps = snaps;
        this.location = location;
    }
}