// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const teams: Team[] = [
  { id: "0", name: "Qatar", flagCode: "QA" },
  { id: "1", name: "Ecuador", flagCode: "EC" },
  { id: "2", name: "Senegal", flagCode: "SN" },
  { id: "3", name: "Netherlands", flagCode: "NL" },
  { id: "4", name: "England", flagCode: "GB" },
  { id: "5", name: "Iran", flagCode: "IR" },
  { id: "6", name: "USA", flagCode: "US" },
  { id: "7", name: "Unknown", flagCode: "SE" },
  { id: "8", name: "Argentina", flagCode: "AR" },
  { id: "9", name: "Saudi Arabia", flagCode: "SA" },
  { id: "10", name: "Mexico", flagCode: "MX" },
  { id: "11", name: "Poland", flagCode: "PL" },
  { id: "12", name: "France", flagCode: "FR" },
  { id: "13", name: "Unknown", flagCode: "SE" },
  { id: "14", name: "Denmark", flagCode: "DK" },
  { id: "15", name: "Tunisia", flagCode: "TN" },
  { id: "16", name: "Spain", flagCode: "ES" },
  { id: "17", name: "Unknown", flagCode: "SE" },
  { id: "18", name: "Germany", flagCode: "DE" },
  { id: "19", name: "Japan", flagCode: "JP" },
  { id: "20", name: "Belgium", flagCode: "BE" },
  { id: "21", name: "Canada", flagCode: "CA" },
  { id: "22", name: "Morocco", flagCode: "MA" },
  { id: "23", name: "Croatia", flagCode: "HR" },
  { id: "24", name: "Portugal", flagCode: "PT" },
  { id: "25", name: "Uruguay", flagCode: "UY" },
  { id: "26", name: "Ghana", flagCode: "GH" },
  { id: "27", name: "South Korea", flagCode: "KR" },
  { id: "28", name: "Brazil", flagCode: "BR" },
  { id: "29", name: "Serbia", flagCode: "RS" },
  { id: "30", name: "Switzerland", flagCode: "CH" },
  { id: "31", name: "Cameroon", flagCode: "CM" },
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
