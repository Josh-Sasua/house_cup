import { Injectable } from "@angular/core";
import { HouseDetails } from "./house-details";

@Injectable({
    providedIn: 'root'
})
export class HouseService{
    private houseDetails: HouseDetails[] = [
        {
            id: 1,
            name: 'RavenClaw',
            points: 999
        },
        {
            id: 2,
            name: 'Gryffindor',
            points: 200
        },
        {
            id: 3,
            name: 'HufflePuff',
            points: 590
        },
        {
            id: 4,
            name: 'Slytherin',
            points: 450
        },
       
    ];

    getHouseDetails(): HouseDetails[] {
        return this.houseDetails;
    }

    winnerHouse(houseDetails: HouseDetails[]): HouseDetails {
        if(houseDetails.length === 0) {
            throw new Error("No houses provided");
        }
        return houseDetails.reduce((winner, house) =>
            house.points > winner.points ? house : winner
        )   
    }
    
    getWinnerHouse(): HouseDetails {
        return this.winnerHouse(this.houseDetails);
    }
}