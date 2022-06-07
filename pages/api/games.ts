// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SUPABASE } from "../../utils/dataFetcher";

const fetchGames = async (): Promise<Game[]> => {
  const { data, error } = await SUPABASE.from("games")
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
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Game | Game[] | { message: string }>
) {
    res.status(200).json(await fetchGames());
}
