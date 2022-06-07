// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { SUPABASE } from "../../utils/dataFetcher";

const fetchGroup = async (groupId: string): Promise<Group> => {
  let group: Group = {
    id: groupId.toUpperCase(),
    teams: [],
    games: [],
  };

  // TODO: Don't fetch teams here, still fetches them multiple times from the games...
  const { data: teams, error: teamsError } = await SUPABASE.from("teams")
    .select()
    .eq("groupId", groupId.toUpperCase());
  if (teamsError) {
    throw new Error(teamsError.message);
  }
  group.teams = teams;

  const { data: games, error: gamesError } = await SUPABASE.from("games")
    .select(
      `
    id,
    finished,
    homeGoals,
    awayGoals,
    homeTeam: homeTeam ( id, name, flagCode, groupId ),
    awayTeam: awayTeam ( id, name, flagCode, groupId ),
    date,
    groupId
    `
    )
    .eq("groupId", groupId.toUpperCase());
  if (gamesError) {
    throw new Error(gamesError.message);
  }
  group.games = games;

  return group;
};

const fetchGroups = async (): Promise<Group[]> => {
  const groupNames = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let groups: Group[] = [];

  await Promise.all(
    groupNames.map(async (groupName) => {
      const g = await fetchGroup(groupName);
      groups.push(g);
    })
  );

  return groups.sort((a, b) => a.id.localeCompare(b.id));
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Group | Group[] | { message: string }>
) {
  const requestedGroupId = req.query.id as string;

  if (requestedGroupId) {
    const group = await fetchGroup(requestedGroupId);

    if (!group) {
      res.status(404).json({
        message: `Group with id ${requestedGroupId} not found`,
      });
    } else {
      res.status(200).json(group);
    }
  } else {
    res.status(200).json(await fetchGroups());
  }
}
