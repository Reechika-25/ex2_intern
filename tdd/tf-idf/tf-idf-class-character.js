class Character{

    static isAlpha(ch){

        return ((ch >= 'a'  && ch <= 'z') ||
                (ch >= 'A'  && ch <= 'Z') ||
                (ch >= '0'  && ch <= '9') ||
                (ch === '\''));
    }
}


exports.Character = Character;