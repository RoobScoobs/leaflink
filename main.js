import { User } from './scripts/index.js';
import { getUsers } from './scripts/index.js';

const userModule = (() => {
    const USER_ENDPOINT = 'https://leaflink-engineering-interview-docs.s3-us-west-2.amazonaws.com/public/frontend/UserProfileCard/user-profile-data.json';
    
    return {
        createUsers: () => {
            const profiles = getUsers(USER_ENDPOINT);
            profiles.then(profiles => {
                for (const profile of profiles) {
                    const user = new User(profile);
                    user.generateHTML();
                }
            })
        },
        initialize: function() {
            this.createUsers();
        }   
    };
})();

userModule.initialize();
