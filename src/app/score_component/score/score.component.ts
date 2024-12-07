import { Component, OnInit } from '@angular/core';
import { HouseDetails } from '../../model/house-details';
import { HouseService } from '../../model/house-service';
import { RouterModule } from '@angular/router';
import { ScoreDetailsComponent } from "../score-details/score-details.component";

@Component({
  selector: 'app-score',
  imports: [RouterModule, ScoreDetailsComponent],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit {

  houseDetails!: HouseDetails[];
  winnerHouse: HouseDetails | null = null;

  constructor(private houseService: HouseService) {
  }

  ngOnInit(): void {
    this.houseDetails = this.houseService.getHouseDetails();
 
  }
}
