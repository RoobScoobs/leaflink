import { User, getUsers, toggleUserDetails } from './scripts/index.js';

const userModule = (() => {
    const USER_ENDPOINT = 'https://leaflink-engineering-interview-docs.s3-us-west-2.amazonaws.com/public/frontend/UserProfileCard/user-profile-data.json';
    const element = document.querySelector('.user-gallery');
    
    const createUsers = () => {
        const profiles = getUsers(USER_ENDPOINT);

        profiles.then(profiles => {
            for (const profile of profiles) {
                const user = new User(profile);
                const component = user.generateHTML();
                user.insertHTML(element, component);
            }
        })
    };

    return {
        initialize: () => {
            createUsers();
        },
        attachListeners: (fn, type) => {
            element.addEventListener(type, fn);
        },
    };
})();

userModule.initialize();
userModule.attachListeners(toggleUserDetails, 'click');
