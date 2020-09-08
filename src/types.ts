export type Team =
  | 'AFC Bournemouth'
  | 'Arsenal FC'
  | 'Brighton & Hove Albion'
  | 'Burnley FC'
  | 'Chelsea FC'
  | 'Crystal Palace'
  | 'Everton FC'
  | 'Huddersfield Town'
  | 'Leicester City'
  | 'Liverpool FC'
  | 'Manchester City'
  | 'Manchester United'
  | 'Newcastle United'
  | 'Southampton FC'
  | 'Stoke City'
  | 'Swansea City'
  | 'Tottenham Hotspur'
  | 'Watford FC'
  | 'West Bromwich Albion'
  | 'West Ham United';

export interface Results {
  score: number[];
  teamIds: number[];
  teams: Team[];
}

export interface TeamData {
  id: string;
  logo: string;
  name: Team;
  results: TeamResults;
}

export type TeamResults = Results[];
export type WeekResults = TeamResults[];

export interface TeamStatus {
  Club: Team | undefined;
  Wins: number;
  Draws: number;
  Loses: number;
  Points: number;
}

export interface TeamProps {
  match: {
    params: {
      id: string;
    };
  };
}

export interface ResultsProps {
  results: TeamResults;
}

export interface WeeksProps {
  match: {
    params: {
      id: string;
    };
  };
}
