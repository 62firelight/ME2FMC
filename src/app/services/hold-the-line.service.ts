import { Injectable } from '@angular/core';

export interface HtlResult {
  currentHtlScores: Map<string, number>,
  totalHtlScore: number,
  htlScore: number,
  htlDeaths: string[],
}

export interface HtlDeaths {
  defenders: string[],
  numberOfHtlDeaths: number
}

@Injectable({
  providedIn: 'root'
})
export class HoldTheLineService {
  htlScores = new Map([
    ['Grunt', 4],
    ['Zaeed', 4],
    ['Garrus', 4],
    ['Thane', 2],
    ['Legion', 2],
    ['Samara', 2],
    ['Morinth', 2],
    ['Jacob', 2],
    ['Miranda', 2],
    ['Jack', 1],
    ['Kasumi', 1],
    ['Tali', 1],
    ['Mordin', 1],
  ]);
  htlResult: HtlResult = {
    currentHtlScores: new Map(),
    totalHtlScore: 0,
    htlScore: 0,
    htlDeaths: []
  };

  constructor() { }

  reset() {
    this.htlResult.currentHtlScores.clear();
    this.htlResult.totalHtlScore = 0;
    this.htlResult.htlScore = 0;
    this.htlResult.htlDeaths = [];
  }

  getHtlCalculation(): HtlResult {
    return this.htlResult;
  }

  getHtlScore(name: string, loyal: boolean): number {
    const htlScore = this.htlScores.get(name);

    if (htlScore === undefined) {
      return 0;
    }

    return htlScore + (loyal ? 1 : 0);
  }

  calculateHtlScore(availableSquadmates: any[]): HtlDeaths {
    this.htlResult.totalHtlScore = 0;

    // Create list of squadmate scores and sum total score
    for (const squadmate of availableSquadmates) {
      if (!squadmate.recruited || squadmate.inCurrentSquad || squadmate.deathReason !== '') {
        continue;
      }

      const htlScore = this.getHtlScore(squadmate.name, squadmate.loyal);

      this.htlResult.currentHtlScores.set(squadmate.name, htlScore);
      this.htlResult.totalHtlScore += htlScore;
    }

    // Calculate average
    // this.htlScore = this.totalHtlScore / this.currentHtlScores.size;
    this.htlResult.htlScore = this.htlResult.totalHtlScore / 3;

    // Round average to 1dp
    // this.htlScore = Math.round(this.htlScore * 10) / 10;

    // Round score down
    this.htlResult.htlScore = Math.floor(this.htlResult.htlScore);

    const numberOfDefenders = this.htlResult.currentHtlScores.size;
    const defenders = [...this.htlResult.currentHtlScores.keys()];

    if (this.htlResult.htlScore > numberOfDefenders) {
      this.htlResult.htlScore = numberOfDefenders;
    }

    const numberOfDeaths = numberOfDefenders - this.htlResult.htlScore;

    return {
      defenders: defenders,
      numberOfHtlDeaths: numberOfDeaths
    };

    // OLD (thresholds are from flowchart)
    // if (numberOfDefenders >= 5) {
    //   if (this.htlScore < 2.0 && this.htlScore >= 1.5) {
    //     // Kill one squadmate
    //     this.killHtlDefenders(defenders, 1);
    //   } else if (this.htlScore < 1.5 && this.htlScore >= 0.5) {
    //     // Kill two squadmates
    //     this.killHtlDefenders(defenders, 2);
    //   } else if (this.htlScore < 0.5 && this.htlScore >= 0.0) {
    //     // Kill three squadmates
    //     this.killHtlDefenders(defenders, 3);
    //   }
    // } else if (numberOfDefenders === 4) {
    //   if (this.htlScore < 2.0 && this.htlScore > 1.0) {
    //     // Kill one squadmate
    //     this.killHtlDefenders(defenders, 1);
    //   } else if (this.htlScore <= 1.0 && this.htlScore >= 0.5) {
    //     // Kill two squadmates
    //     this.killHtlDefenders(defenders, 2);
    //   } else if (this.htlScore < 0.5 && this.htlScore > 0.0) {
    //     // Kill three squadmates
    //     this.killHtlDefenders(defenders, 3);
    //   } else if (this.htlScore <= 0.0) {
    //     // Kill all squadmates
    //     this.killHtlDefenders(defenders, 4);
    //   }
    // } else if (numberOfDefenders === 3) {
    //   if (this.htlScore < 2.0 && this.htlScore >= 1.0) {
    //     // Kill one squadmate
    //     this.killHtlDefenders(defenders, 1);
    //   } else if (this.htlScore < 1.0 && this.htlScore > 0.0) {
    //     // Kill two squadmates
    //     this.killHtlDefenders(defenders, 2);
    //   } else if (this.htlScore <= 0.0) {
    //     // Kill all three squadmates
    //     this.killHtlDefenders(defenders, 3);
    //   }
    // } else if (numberOfDefenders === 2) {
    //   if (this.htlScore < 2.0 && this.htlScore > 0.0) {
    //     // Kill one squadmate
    //     this.killHtlDefenders(defenders, 1);
    //   } else if (this.htlScore <= 0.0) {
    //     // Kill both squadmates
    //     this.killHtlDefenders(defenders, 2);
    //   }
    // } else if (numberOfDefenders === 1) {
    //   if (this.htlScore < 2.0 && this.htlScore >= 0.0) {
    //     // Kill squadmate
    //     this.killHtlDefenders(defenders, 1);
    //   }
    // }
  }

  setHtlDeaths(htlDeaths: string[]) {
    this.htlResult.htlDeaths = htlDeaths;    
  }
}
