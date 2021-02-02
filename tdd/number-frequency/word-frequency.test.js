
import { UserDemands } from "./word-frequency.js";

describe("Testing UserDemands Functionality",()=>{

    it("does UserDemands class exists?",()=>{

        let sortWordInstance = new UserDemands();
        expect(sortWordInstance).toBeDefined();
    });


    it("does function to print sorted words according to freq exist?",()=>{

        let sortWordInstance = new UserDemands();
        expect(sortWordInstance.printWordsSortedAccordingToFrequency()).toBeDefined();

    });


    it("does function returns null when file path is not a string",()=>{

        const filePath = 123;

        let sortedWordInstance = new UserDemands();
        expect(sortedWordInstance.printWordsSortedAccordingToFrequency(filePath)).toBe('null');
    });


    it("does function above returns invalid characters when file path having invalid characters",()=>{
          
        const filePath = './src/*cricket.txt';

        let sortedWordInstance = new UserDemands();
        expect(sortedWordInstance.printWordsSortedAccordingToFrequency(filePath)).toBe("Invalid characters in filePath");
    });


    it("does function above returns file not found when valid charcacters in file path but file does nopt exist",()=>{

        const filePath = './src/cricket.txt';

        let sortedWordInstance = new UserDemands();
        expect(sortedWordInstance.printWordsSortedAccordingToFrequency(filePath)).toBe("File Not Found");
    });


    it("Does function returns correct output when file found",()=>{

        const filePath = '/home/rjain/rjain-branch/tdd/number-frequency/cricket.txt';
        
        let sortedWordInstance = new UserDemands();
        expect(sortedWordInstance.printWordsSortedAccordingToFrequency(filePath)).toStrictEqual([
            { word: 'the', count: 36 },
            { word: 'and', count: 12 },
            { word: 'a', count: 11 },
            { word: 'of', count: 11 },
            { word: 'is', count: 10 },
            { word: 'with', count: 9 },
            { word: 'in', count: 9 },
            { word: 'ball', count: 8 },
            { word: 'by', count: 8 },
            { word: 'The', count: 7 },
            { word: 'which', count: 6 },
            { word: 'to', count: 6 },
            { word: 'wicket', count: 5 },
            { word: 'side', count: 5 },
            { word: 'cricket', count: 5 },
            { word: 'Cricket', count: 4 },
            { word: 'game', count: 4 },
            { word: 'two', count: 4 },
            { word: 'each', count: 4 },
            { word: 'international', count: 4 },
            { word: 'matches', count: 4 },
            { word: 's', count: 4 },
            { word: 'bat', count: 3 },
            { word: 'played', count: 3 },
            { word: 'field', count: 3 },
            { word: 'at', count: 3 },
            { word: 'are', count: 3 },
            { word: 'Test', count: 3 },
            { word: '1', count: 2 },
            { word: '2', count: 2 },
            { word: 'between', count: 2 },
            { word: 'teams', count: 2 },
            { word: 'players', count: 2 },
            { word: 'on', count: 2 },
            { word: 'bails', count: 2 },
            { word: 'stumps', count: 2 },
            { word: 'batting', count: 2 },
            { word: 'bowled', count: 2 },
            { word: 'fielding', count: 2 },
            { word: 'prevent', count: 2 },
            { word: 'from', count: 2 },
            { word: 'either', count: 2 },
            { word: 'batter', count: 2 },
            { word: 'they', count: 2 },
            { word: 'hits', count: 2 },
            { word: 'it', count: 2 },
            { word: 'but', count: 2 },
            { word: 'before', count: 2 },
            { word: 'or', count: 2 },
            { word: 'been', count: 2 },
            { word: 'innings', count: 2 },
            { word: 'match', count: 2 },
            { word: 'who', count: 2 },
            { word: 'team', count: 2 },
            { word: 'overs', count: 2 },
            { word: 'over', count: 2 },
            { word: 'five', count: 2 },
            { word: 'play', count: 2 },
            { word: 'kit', count: 2 },
            { word: 'wear', count: 2 },
            { word: 'century', count: 2 },
            { word: 'International', count: 2 },
            { word: 'members', count: 2 },
            { word: 'more', count: 2 },
            { word: 'than', count: 2 },
            { word: 'any', count: 2 },
            { word: 'other', count: 2 },
            { word: '22', count: 1 },
            { word: 'eleven', count: 1 },
            { word: 'centre', count: 1 },
            { word: 'yard', count: 1 },
            { word: 'metre', count: 1 },
            { word: 'pitch', count: 1 },
            { word: 'end', count: 1 },
            { word: 'comprising', count: 1 },
            { word: 'balanced', count: 1 },
            { word: 'three', count: 1 },
            { word: 'scores', count: 1 },
            { word: 'runs', count: 1 },
            { word: 'striking', count: 1 },
            { word: 'running', count: 1 },
            { word: 'wickets', count: 1 },
            { word: 'while', count: 1 },
            { word: 'bowling', count: 1 },
            { word: 'tries', count: 1 },
            { word: 'this', count: 1 },
            { word: 'preventing', count: 1 },
            { word: 'leaving', count: 1 },
            { word: 'getting', count: 1 },
            { word: 'dismiss', count: 1 },
            { word: 'so', count: 1 },
            { word: 'out', count: 1 },
            { word: 'Means', count: 1 },
            { word: 'dismissal', count: 1 },
            { word: 'include', count: 1 },
            { word: 'being', count: 1 },
            { word: 'when', count: 1 },
            { word: 'dislodges', count: 1 },
            { word: 'catching', count: 1 },
            { word: 'after', count: 1 },
            { word: 'hit', count: 1 },
            { word: 'ground', count: 1 },
            { word: 'hitting', count: 1 },
            { word: 'can', count: 1 },
            { word: 'cross', count: 1 },
            { word: 'crease', count: 1 },
            { word: 'front', count: 1 },
            { word: 'When', count: 1 },
            { word: 'ten', count: 1 },
            { word: 'batters', count: 1 },
            { word: 'have', count: 1 },
            { word: 'dismissed', count: 1 },
            { word: 'ends', count: 1 },
            { word: 'swap', count: 1 },
            { word: 'roles', count: 1 },
            { word: 'adjudicated', count: 1 },
            { word: 'umpires', count: 1 },
            { word: 'aided', count: 1 },
            { word: 'third', count: 1 },
            { word: 'umpire', count: 1 },
            { word: 'referee', count: 1 },
            { word: 'They', count: 1 },
            { word: 'communicate', count: 1 },
            { word: 'off', count: 1 },
            { word: 'scorers', count: 1 },
            { word: 'record', count: 1 },
            { word: 'statistical', count: 1 },
            { word: 'information', count: 1 },
            { word: 'Forms', count: 1 },
            { word: 'range', count: 1 },
            { word: 'Twenty2', count: 1 },
            { word: 'for', count: 1 },
            { word: 'single', count: 1 },
            { word: 'days', count: 1 },
            { word: 'Traditionally', count: 1 },
            { word: 'cricketers', count: 1 },
            { word: 'all', count: 1 },
            { word: 'white', count: 1 },
            { word: 'limited', count: 1 },
            { word: 'club', count: 1 },
            { word: 'colours', count: 1 },
            { word: 'In', count: 1 },
            { word: 'addition', count: 1 },
            { word: 'basic', count: 1 },
            { word: 'some', count: 1 },
            { word: 'protective', count: 1 },
            { word: 'gear', count: 1 },
            { word: 'injury', count: 1 },
            { word: 'caused', count: 1 },
            { word: 'hard', count: 1 },
            { word: 'solid', count: 1 },
            { word: 'spheroid', count: 1 },
            { word: 'made', count: 1 },
            { word: 'compressed', count: 1 },
            { word: 'leather', count: 1 },
            { word: 'slightly', count: 1 },
            { word: 'raised', count: 1 },
            { word: 'sewn', count: 1 },
            { word: 'seam', count: 1 },
            { word: 'enclosing', count: 1 },
            { word: 'cork', count: 1 },
            { word: 'core', count: 1 },
            { word: 'layered', count: 1 },
            { word: 'tightly', count: 1 },
            { word: 'wound', count: 1 },
            { word: 'string', count: 1 },
            { word: 'earliest', count: 1 },
            { word: 'reference', count: 1 },
            { word: 'South', count: 1 },
            { word: 'East', count: 1 },
            { word: 'England', count: 1 },
            { word: 'mid', count: 1 },
            { word: '16th', count: 1 },
            { word: 'It', count: 1 },
            { word: 'spread', count: 1 },
            { word: 'globally', count: 1 },
            { word: 'expansion', count: 1 },
            { word: 'British', count: 1 },
            { word: 'Empire', count: 1 },
            { word: 'first', count: 1 },
            { word: 'second', count: 1 },
            { word: 'half', count: 1 },
            { word: '19th', count: 1 },
            { word: 'governing', count: 1 },
            { word: 'body', count: 1 },
            { word: 'Council', count: 1 },
            { word: 'ICC', count: 1 },
            { word: 'has', count: 'function has() { [native code] }1111' },
            { word: 'country', count: 2 },
            { word: 'twelve', count: 1 },
            { word: 'full', count: 1 },
            { word: 'rules', count: 1 },
            { word: 'Laws', count: 1 },
            { word: 'maintained', count: 1 },
            { word: 'Marylebone', count: 1 },
            { word: 'Club', count: 1 },
            { word: 'MCC', count: 1 },
            { word: 'London', count: 1 },
            { word: 'sport', count: 1 },
            { word: 'followed', count: 1 },
            { word: 'primarily', count: 1 },
            { word: 'Indian', count: 1 },
            { word: 'subcontinent', count: 1 },
            { word: 'Australasia', count: 1 },
            { word: 'United', count: 1 },
            { word: 'Kingdom', count: 1 },
            { word: 'southern', count: 1 },
            { word: 'Africa', count: 1 },
            { word: 'West', count: 1 },
            { word: 'Indies', count: 1 },
            { word: 'Women', count: 1 },
            { word: 'organised', count: 1 },
            { word: 'separately', count: 1 },
            { word: 'also', count: 1 },
            { word: 'achieved', count: 1 },
            { word: 'standard', count: 1 },
            { word: 'most', count: 1 },
            { word: 'successful', count: 1 },
            { word: 'playing', count: 1 },
            { word: 'Australia', count: 1 },
            { word: 'won', count: 1 },
            { word: 'seven', count: 1 },
            { word: 'One', count: 1 },
            { word: 'Day', count: 1 },
            { word: 'trophies', count: 1 },
            { word: 'including', count: 1 },
            { word: 'World', count: 1 },
            { word: 'Cups', count: 1 },
            { word: 'top', count: 1 },
            { word: 'rated', count: 1 }]);
    });

    
});