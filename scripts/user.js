export class User {
    constructor(data) {
        this.profile = data;
        console.group('Data assigned to the User constructor');
            console.log(this.profile);
        console.groupEnd();
    }

    generateHTML() {
        return `
            <div class="user">
                <picture class="user__image">
                    <source srcset="${this.profile.image}" media="(min-width: 320px)">
                    <img src="${this.profile.image}" alt="profile picture">
                </picture>

                <div class="user__info">
                    <span>${this.profile.name}</span>
                    <span>${this.profile.position}</span>
                </div>
            </div>
        `;
    }

    insertHTML(element, html) {

    }
}
