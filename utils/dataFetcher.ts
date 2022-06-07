const API_URL = "/api";

const fetchAllGroups = async (): Promise<Group[]> => {
  const response = await fetch(`${API_URL}/groups`);
  const data = await response.json();
  return data;
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

export { fetchGroup, fetchAllGroups };