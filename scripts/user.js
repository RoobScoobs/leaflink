export class User {
    constructor(data) {
        this.profile = data;
        console.group('Data assigned to the User constructor');
            console.log(this.profile);
        console.groupEnd();
    }

    generateHTML() {
        
    }
}
