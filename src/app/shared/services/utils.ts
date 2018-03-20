export class Utils {
    constructor() {}

    static patternGeneratorForToken() {
        let token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        return token;
    }
}