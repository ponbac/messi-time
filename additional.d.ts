type Group = {
    id: string;
    teams: Team[];
    games: Game[];
};

type Team = {
    id: string;
    name: string;
    flagCode: string;
}

type Game = {
    id: string;
    finished: boolean;
    homeTeam: Team;
    awayTeam: Team;
    homeGoals: number;
    awayGoals: number;
    date: string;
}

type Player = {
    name: string;
    description: string;
    avatar: string;
    score: number;
  };