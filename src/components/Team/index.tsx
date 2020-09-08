import React, { useEffect, useState } from 'react';
import { fetchTeam } from '../../apis/footballApi';
import Results from '../Results';
import './styles.css';
import { computeStats } from '../utils';
import { TeamData, TeamProps, TeamStatus } from '../../types';
import { GAMES, LOADING } from '../../constants';

function Team({
  match: {
    params: { id },
  },
}: TeamProps) {
  const [data, setData] = useState<TeamData>();
  const [computeTeamStats, setComputeTeamStats] = useState<TeamStatus>();

  useEffect(() => {
    const fetch = async () => {
      const teamData = await fetchTeam(id);
      setData(teamData);
      setComputeTeamStats(computeStats(+teamData.id, teamData.results));
    };
    fetch();
  }, [id]);

  if (!data) return <div className="loading">{LOADING}</div>;

  return (
    <div className="team">
      <header className="team-header">
        <img src={data.logo} alt={data.name} />
        <h2>{data.name}</h2>
      </header>

      <div className="team-status">
        {`${computeTeamStats?.Wins} wins,
         ${computeTeamStats?.Draws} draws,
          ${computeTeamStats?.Loses} loses,
           ${computeTeamStats?.Points} points`}
      </div>

      <h2>{GAMES}</h2>
      <Results results={data.results} />
    </div>
  );
}

export default Team;
