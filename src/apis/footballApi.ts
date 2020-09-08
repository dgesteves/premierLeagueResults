import axios from 'axios';
import { FOOTBALL_API_BASE_URL } from '../constants';

async function fetchDataByPath(path: string) {
  try {
    const response = await axios.get(`${FOOTBALL_API_BASE_URL}${path}`);
    return response.data;
  } catch (e) {
    return e;
  }
}

export async function fetchTeams() {
  const response = await fetchDataByPath('/teams');
  return response;
}

export async function fetchTeam(id: string) {
  const response = await fetchDataByPath(`/teams/${id}`);
  return response;
}

export async function fetchWeeks() {
  const response = await fetchDataByPath('/weeks');
  return response;
}

export async function fetchWeek(id: string) {
  const response = await fetchDataByPath(`/weeks/${id}`);
  return response;
}

export async function fetchTeamsAndWeeks() {
  const [teams, weeks] = await axios.all([fetchTeams(), fetchWeeks()]);
  return {
    teams,
    weeks,
  };
}
