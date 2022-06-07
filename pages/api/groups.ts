// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { teams } from "./teams";

const groups: Group[] = [
  {
    id: "A",
    teams: [
      teams[0],
      teams[1],
      teams[2],
      teams[3]
    ],
    games: [
      {
        id: "0",
        finished: false,
        homeTeam: teams[2],
        awayTeam: teams[3],
        homeGoals: 0,
        awayGoals: 0,
        date: "2022-11-21T11:00:00.000Z"
      },
      {
        id: "1",
        finished: false,
        homeTeam: teams[0],
        awayTeam: teams[1],
        homeGoals: 0,
        awayGoals: 0,
        date: "2022-11-21T17:00:00.000Z"
      },
      {
        id: "2",
        finished: false,
        homeTeam: teams[0],
        awayTeam: teams[2],
        homeGoals: 0,
        awayGoals: 0,
        date: "2022-11-25T14:00:00.000Z"
      },
      {
        id: "3",
        finished: false,
        homeTeam: teams[3],
        awayTeam: teams[1],
        homeGoals: 0,
        awayGoals: 0,
        date: "2022-11-25T17:00:00.000Z"
      },
      {
        id: "4",
        finished: false,
        homeTeam: teams[1],
        awayTeam: teams[2],
        homeGoals: 0,
        awayGoals: 0,
        date: "2022-11-29T16:00:00.000Z"
      },
      {
        id: "5",
        finished: false,
        homeTeam: teams[3],
        awayTeam: teams[0],
        homeGoals: 0,
        awayGoals: 0,
        date: "2022-11-29T16:00:00.000Z"
      },
    ]
  },
  {
    id: "B",
    teams: [
      teams[4],
      teams[5],
      teams[6],
      teams[7]
    ],
    games: [
      {
        id: "6",
        finished: false,
        homeTeam: teams[4],
        awayTeam: teams[5],
        homeGoals: 0,
        awayGoals: 0,
        date: "2022-11-21T14:00:00.000Z"
      },
      {
        id: "7",
        finished: false,
        homeTeam: teams[6],
        awayTeam: teams[7],
        homeGoals: 0,
        awayGoals: 0,
        date: "2022-11-21T20:00:00.000Z"
      },
      {
        id: "8",
        finished: false,
        homeTeam: teams[7],
        awayTeam: teams[5],
        homeGoals: 0,
        awayGoals: 0,
        date: "2022-11-25T11:00:00.000Z"
      },
      {
        id: "9",
        finished: false,
        homeTeam: teams[4],
        awayTeam: teams[6],
        homeGoals: 0,
        awayGoals: 0,
        date: "2022-11-25T20:00:00.000Z"
      },
      {
        id: "10",
        finished: false,
        homeTeam: teams[5],
        awayTeam: teams[6],
        homeGoals: 0,
        awayGoals: 0,
        date: "2022-11-29T20:00:00.000Z"
      },
      {
        id: "11",
        finished: false,
        homeTeam: teams[7],
        awayTeam: teams[4],
        homeGoals: 0,
        awayGoals: 0,
        date: "2022-11-29T20:00:00.000Z"
      },
    ]
  },
  {
    id: "C",
    teams: [
      teams[8],
      teams[9],
      teams[10],
      teams[11]
    ],
    games: []
  },
  {
    id: "D",
    teams: [
      teams[12],
      teams[13],
      teams[14],
      teams[15]
    ],
    games: []
  },
  {
    id: "E",
    teams: [
      teams[16],
      teams[17],
      teams[18],
      teams[19]
    ],
    games: []
  },
  {
    id: "F",
    teams: [
      teams[20],
      teams[21],
      teams[22],
      teams[23]
    ],
    games: []
  },
  {
    id: "G",
    teams: [
      teams[24],
      teams[25],
      teams[26],
      teams[27]
    ],
    games: []
  },
  {
    id: "H",
    teams: [
      teams[28],
      teams[29],
      teams[30],
      teams[31]
    ],
    games: []
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Group | Group[] | { message: string }>
) {
  const requestedGroupId = req.query.id as string;
  if (requestedGroupId) {
    const group = groups.find(
      (g) => g.id.toLowerCase() === requestedGroupId.toLowerCase()
    );

    if (!group) {
      res.status(404).json({
        message: `Group with id ${requestedGroupId} not found`,
      });
    } else {
      res.status(200).json(group);
    }
  } else {
    res.status(200).json(groups);
  }
}
