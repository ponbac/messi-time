// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SUPABASE } from "../../utils/dataFetcher";

const fetchUser = async (userId: string): Promise<any> => {
  const { data, error } = await SUPABASE.from("users")
    .select()
    .eq("id", userId);
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const fetchAllUsers = async (): Promise<any> => {
  const { data, error } = await SUPABASE.from("users").select();
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any | any[] | { message: string }>
) {
  const requestedUserId = req.query.id as string;

  if (requestedUserId) {
    const user = await fetchUser(requestedUserId);

    if (!user) {
      res.status(404).json({
        message: `User with id ${requestedUserId} not found`,
      });
    } else {
      res.status(200).json(user);
    }
  } else {
    const users = await fetchAllUsers();
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(400).json({
        message: `ERROR: Could not fetch users`,
      });
    }
  }
}
