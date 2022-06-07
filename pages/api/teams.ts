// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SUPABASE } from "../../utils/dataFetcher";

const fetchTeams = async (): Promise<Team[]> => {
  const { data, error } = await SUPABASE.from("teams").select();
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Team | Team[] | { message: string }>
) {
  const requestedTeamId = parseInt(req.query.id as string);
  const requestedTeamName = req.query.name as string;

  const teams: Team[] = await fetchTeams();
  if (requestedTeamId) {
    const team = teams.find((t) => t.id === requestedTeamId);

    if (!team) {
      res.status(404).json({
        message: `Team with id ${requestedTeamId} not found`,
      });
    } else {
      res.status(200).json(team);
    }
  } else if (requestedTeamName) {
    const team = teams.find(
      (t) => t.name.toLowerCase() === requestedTeamName.toLowerCase()
    );

    if (!team) {
      res.status(404).json({
        message: `Team with name ${requestedTeamName} not found`,
      });
    } else {
      res.status(200).json(team);
    }
  } else {
    res.status(200).json(teams);
  }
}
