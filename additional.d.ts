type Group = {
    id: string;
    teams: Team[];
};

type Team = {
    id: string;
    name: string;
    flagCode: string;
}

type Match = {
    id: string;
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