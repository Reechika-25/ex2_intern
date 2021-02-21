
import { FundInfo } from "./funding";

describe("Testing FundInfo functionality",()=>{

    it("does FundInfo class exits?",()=>{

        let fundInstance = new FundInfo();
        expect(fundInstance).toBeDefined();
    });


    it("does FundInfo has findBy function?",()=>{

        let fundInstance = new FundInfo();
        expect(fundInstance.findBy()).toBeDefined();
    });


    it("does FundInfo has where function?",()=>{

        let fundInstance = new FundInfo();
        expect(fundInstance.where()).toBeDefined();
    });


    it("findBy function returns an empty object when no parameter is passed",()=>{

        let fundInstance = new FundInfo();
        expect(fundInstance.findBy()).toStrictEqual({});
    });


    it("where function returns an empty array when no parameter is passed",()=>{

        let fundInstance = new FundInfo();
        expect(fundInstance.where()).toStrictEqual([]);
    });


    it("where function returns an empty object when non string parameters are passed",()=>{

        const companyName = 123;
        const city = "San Franciso";

        let fundInstance = new FundInfo();
        expect(fundInstance.where()).toStrictEqual([]);
    });


    it("findBy function produces the right output when parameter matches",()=>{

        const companyName = "Zing";
        const city = "Mountain View";
        const state = "CA";
        const round = "a";

        let fundInstance = new FundInfo();
        expect(fundInstance.findBy(companyName,city,state,round)).toStrictEqual({
            "permalink": "zing",
            "company_name": "Zing",
            "number_employees": 0,
            "category": "web",
            "city": "Mountain View",
            "state": "CA",
            "funded_date": "1-Jan-07",
            "raised_amount": 13000000,
            "raised_currency": "USD",
            "round": "a"
          });
    });


    it("where function returns all the records when parameters matches",()=>{

        const companyName = "LifeLock";
        const city = "Tempe";
        const state = "AZ";

        let fundInstance = new FundInfo();
        expect(fundInstance.where(companyName,city,state)).toStrictEqual([{
            "permalink": "lifelock",
            "company_name": "LifeLock",
            "number_employees": 0,
            "category": "web",
            "city": "Tempe",
            "state": "AZ",
            "funded_date": "1-May-07",
            "raised_amount": 6850000,
            "raised_currency": "USD",
            "round": "b"
          },
          {
            "permalink": "lifelock",
            "company_name": "LifeLock",
            "number_employees": 0,
            "category": "web",
            "city": "Tempe",
            "state": "AZ",
            "funded_date": "1-Oct-06",
            "raised_amount": 6000000,
            "raised_currency": "USD",
            "round": "a"
          },
          {
            "permalink": "lifelock",
            "company_name": "LifeLock",
            "number_employees": 0,
            "category": "web",
            "city": "Tempe",
            "state": "AZ",
            "funded_date": "1-Jan-08",
            "raised_amount": 25000000,
            "raised_currency": "USD",
            "round": "c"
          }]);


    });

    

});