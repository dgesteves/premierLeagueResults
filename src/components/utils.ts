import { Results, Team, TeamResults, TeamStatus, WeekResults } from '../types';

function computeStatsWeeks(id: number, results: WeekResults): TeamStatus {
  const status: TeamStatus = {
    Club: undefined,
    Wins: 0,
    Draws: 0,
    Loses: 0,
    Points: 0,
  };

  const filteredTeam = results.map((week) =>
    week.filter((game) => game.teamIds.includes(id))
  );

  filteredTeam.forEach((item) => {
    const teamIndex = item[0].teamIds.findIndex((teamId) => teamId === id);

    if (item[0].score[0] === item[0].score[1]) {
      status.Draws += 1;
    }

    if (teamIndex === 0) {
      if (item[0].score[1] < item[0].score[0]) {
        status.Wins += 1;
      }
      if (item[0].score[1] > item[0].score[0]) {
        status.Loses += 1;
      }
    }

    if (teamIndex === 1) {
      if (item[0].score[0] < item[0].score[1]) {
        status.Wins += 1;
      }
      if (item[0].score[0] > item[0].score[1]) {
        status.Loses += 1;
      }
    }

    status.Club = item[0].teams[teamIndex];
  });
  status.Points = status.Wins * 3 + status.Draws;

  return status;
}

export function computeStats(id: number, results: TeamResults): TeamStatus {
  const status: TeamStatus = {
    Club: undefined,
    Wins: 0,
    Draws: 0,
    Loses: 0,
    Points: 0,
  };

  results.forEach((item: Results) => {
    const teamIndex = item.teamIds.findIndex((teamId) => teamId === id);

    if (item.score[0] === item.score[1]) {
      status.Draws += 1;
    }

    if (teamIndex === 0) {
      if (item.score[1] < item.score[0]) {
        status.Wins += 1;
      }
      if (item.score[1] > item.score[0]) {
        status.Loses += 1;
      }
    }

    if (teamIndex === 1) {
      if (item.score[0] < item.score[1]) {
        status.Wins += 1;
      }
      if (item.score[0] > item.score[1]) {
        status.Loses += 1;
      }
    }

    status.Club = item.teams[teamIndex];
  });
  status.Points = status.Wins * 3 + status.Draws;

  return status;
}

export function computeTable(teams: Team[], weeksMatches: WeekResults) {
  return teams.map((team, index) => computeStatsWeeks(index, weeksMatches));
}
