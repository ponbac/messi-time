import { createClient } from "@supabase/supabase-js";
import useSWR, { Fetcher } from "swr";

const API_URL = "/api";
const SUPABASE = createClient(
  "https://ewzrzvitukrwrxtvifkv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3enJ6dml0dWtyd3J4dHZpZmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ2MTIwMzksImV4cCI6MTk3MDE4ODAzOX0.0BowcecwZUYnFQjdohl9YTsvRW05bkbbEnRHQsuc0lE",
  {
    schema: "public",
    headers: { "bobba-man": "qatar" },
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  }
);
const FETCHER = (url: RequestInfo) => fetch(url).then(r => r.json())

const useGroups = (): {groups: Group[] | undefined, isLoading: boolean, isError: Error} => {
  const { data, error } = useSWR<Group[]>("/api/groups", FETCHER);

  return { groups: data, isLoading: !error && !data, isError: error };
};

const fetchGroup = async (groupId: string): Promise<Group> => {
  const response = await fetch(`${API_URL}/groups?id=${groupId}`);
  const data = await response.json();
  return data;
};

const fetchAllTeams = async (): Promise<Team[]> => {
  const response = await fetch(`${API_URL}/teams`);
  const data = await response.json();
  return data;
};

const fetchTeam = async (teamId?: string, teamName?: string): Promise<Team> => {
  let query = "";
  if (teamId) {
    query = `id=${teamId}`;
  } else if (teamName) {
    query = `name=${teamName}`;
  } else {
    throw new Error("Team id or name must be provided");
  }

  const response = await fetch(`${API_URL}/teams?${query}`);
  const data = await response.json();
  return data;
};

export { SUPABASE, fetchGroup, useGroups };
