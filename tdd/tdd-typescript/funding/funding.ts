interface jsonObject {
    permalink: string,
    company_name: string,
    number_employees: number,
    category: string,
    city: string,
    state: string,
    funded_date: string,
    raised_amount: number,
    raised_currency: string,
    round: string
}
export class FundInfo {

    private fundData: jsonObject[]

    constructor() {
        this.fundData = require('./startup-funding.json');
    }

    matchInputs(companyName: string, city: string, state: string, round: string, itr: number): boolean {

        return ((companyName === "" || this.fundData[itr].company_name === companyName) &&
            (city === "" || this.fundData[itr].city === city) &&
            (state === "" || this.fundData[itr].state === state) &&
            (round === "" || this.fundData[itr].round === round));
    }

    noParameter(companyName: string, city: string, state: string, round: string): boolean {

        return (companyName === "" && city === "" && state === "" && round === "");
    }

    findBy(companyName: string = "", city: string = "", state: string = "", round: string = ""): object {
        if (this.noParameter(companyName, city, state, round))
            return {};

        for (let itr = 0; itr < this.fundData.length; itr++) {
            if (this.matchInputs(companyName, city, state, round, itr))
                return this.fundData[itr];

        }

        return {};
    }

    where(companyName: string = "", city: string = "", state: string = "", round: string = ""): jsonObject[] {
        if (this.noParameter(companyName, city, state, round))
            return [];

        let out: jsonObject[] = [];
        for (let itr = 0; itr < this.fundData.length; itr++)
            if (this.matchInputs(companyName, city, state, round, itr))
                out.push(this.fundData[itr]);

        return out;
    }
}