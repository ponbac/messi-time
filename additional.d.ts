type Group = {
    id: string;
    teams: Team[];
};

type Team = {
    id: string;
    name: string;
}

type Player = {
    name: string;
    description: string;
    avatar: string;
    score: number;
  };