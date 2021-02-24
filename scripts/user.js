export class User {
    constructor(data) {
        this.profile = data;
        console.group('Data assigned to the User constructor');
            console.log(this.profile);
        console.groupEnd();

        this.setTotalComments();
        this.setMaxRating();
        this.setAvgRating();
    }

    setTotalComments() {
        this.profile.totalComments = this.profile.comments.length;
    }

    setMaxRating() {
        this.profile.maxRating = Math.max(...this.profile.ratings);
    }

    setAvgRating() {
        const sum = this.profile.ratings.reduce((accumulator, value) => accumulator + value);
        this.profile.avgRating = (sum / this.profile.ratings.length).toFixed(2);
    }

    generateHTML() {
        return `
            <div class="user">
                <picture class="user__image">
                    <source srcset="${this.profile.image}" media="(min-width: 320px)">
                    <img src="${this.profile.image}" alt="profile picture">
                </picture>

                <div class="user__info" data-expanded="false">
                    <span>${this.profile.name}</span>
                    <span>${this.profile.position}</span>
                </div>

                <ul class="user-stats">
                    <li class="user-stats__item">
                        <h4>
                            <span>&#9733;</span>${this.profile.follower_count} Followers
                        </h4>
                    </li>
                    <li class="user-stats__item">
                        <h4>
                            <span>&#9733;</span>${this.profile.avgRating} / ${this.profile.maxRating} Ratings
                        </h4>
                    </li>
                    <li class="user-stats__item">
                        <h4>
                            <span>&#9733;</span>${this.profile.totalComments} Comments
                        </h4>
                    </li>
                </ul>
            </div>
        `;
    }

    insertHTML(element, html) {
        element.insertAdjacentHTML('beforeend', html);
    }
}
