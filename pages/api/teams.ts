// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const teams: Team[] = [
  { id: "0", name: "Qatar", flagCode: "qa" },
  { id: "1", name: "Ecuador", flagCode: "ec" },
  { id: "2", name: "Senegal", flagCode: "sn" },
  { id: "3", name: "Netherlands", flagCode: "nl" },
  { id: "4", name: "England", flagCode: "gb" },
  { id: "5", name: "Iran", flagCode: "ir" },
  { id: "6", name: "USA", flagCode: "us" },
  { id: "7", name: "Wales", flagCode: "gb-wls" },
  { id: "8", name: "Argentina", flagCode: "ar" },
  { id: "9", name: "Saudi Arabia", flagCode: "sa" },
  { id: "10", name: "Mexico", flagCode: "mx" },
  { id: "11", name: "Poland", flagCode: "pl" },
  { id: "12", name: "France", flagCode: "fr" },
  { id: "13", name: "Unknown", flagCode: "se" },
  { id: "14", name: "Denmark", flagCode: "dk" },
  { id: "15", name: "Tunisia", flagCode: "tn" },
  { id: "16", name: "Spain", flagCode: "es" },
  { id: "17", name: "Unknown", flagCode: "se" },
  { id: "18", name: "Germany", flagCode: "de" },
  { id: "19", name: "Japan", flagCode: "jp" },
  { id: "20", name: "Belgium", flagCode: "be" },
  { id: "21", name: "Canada", flagCode: "ca" },
  { id: "22", name: "Morocco", flagCode: "ma" },
  { id: "23", name: "Croatia", flagCode: "hr" },
  { id: "24", name: "Portugal", flagCode: "pt" },
  { id: "25", name: "Uruguay", flagCode: "uy" },
  { id: "26", name: "Ghana", flagCode: "gh" },
  { id: "27", name: "South Korea", flagCode: "kr" },
  { id: "28", name: "Brazil", flagCode: "br" },
  { id: "29", name: "Serbia", flagCode: "rs" },
  { id: "30", name: "Switzerland", flagCode: "ch" },
  { id: "31", name: "Cameroon", flagCode: "cm" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Team | Team[] | { message: string }>
) {
  const requestedTeamId = req.query.id as string;
  const requestedTeamName = req.query.name as string;
  if (requestedTeamId) {
    const team = teams.find(
      (t) => t.id.toLowerCase() === requestedTeamId.toLowerCase()
    );

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

export { teams };
