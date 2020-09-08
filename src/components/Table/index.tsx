import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchTeamsAndWeeks } from '../../apis/footballApi';
import { computeTable } from '../utils';
import { TeamStatus } from '../../types';
import './styles.css';
import { LOADING } from '../../constants';

function Table() {
  const [table, setTable] = useState<TeamStatus[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchTeamsAndWeeks();
      setTable(computeTable(response.teams, response.weeks));
    };
    fetchData();
  }, []);

  if (!table) return <div className="loading">{LOADING}</div>;

  const renderTableHead = () => {
    return (
      <tr>
        {Object.keys(table[0]).map((key, index) => (
          <th key={index}>{key}</th>
        ))}
      </tr>
    );
  };

  const renderTableBody = () => {
    return table.map((element: TeamStatus, index: number) => (
      <tr key={index}>
        <td className="teams-name">
          <img
            src={`http://acor.sl.pt:7777/logos/${index}`}
            alt={element.Club}
          />
          <Link to={`/teams/${index}`}>{element.Club}</Link>
        </td>
        <td>{element.Wins}</td>
        <td>{element.Draws}</td>
        <td>{element.Loses}</td>
        <td className="points">{element.Points}</td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>{renderTableHead()}</thead>
      <tbody>{renderTableBody()}</tbody>
    </table>
  );
}

export default Table;
