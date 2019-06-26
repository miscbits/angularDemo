export class User {

    username: string;
    email: string;
    name: string;
    verified: boolean;

    constructor(
        username: string,
        email: string,
        name: string,
        verified: boolean
        ) {
        this.username = username;
        this.email = email;
        this.name = name;
        this.verified = verified;
    }

}
