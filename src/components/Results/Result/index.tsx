import React, { memo } from 'react';
import { Results } from '../../../types';
import './styles.css';
import { Link } from 'react-router-dom';

function Result({ teams, score, teamIds }: Results) {
  const renderGameResult = () => {
    if (score[0] > score[1]) {
      return (
        <p>
          <Link to={`/teams/${teamIds[0]}`}>
            <strong>{`${teams[0]}`}</strong>
          </Link>
          {' VS '}
          <Link to={`/teams/${teamIds[1]}`}>{`${teams[1]}`}</Link>
          <span>{` ${score[0]} - ${score[1]}`}</span>
        </p>
      );
    }
    if (score[0] < score[1]) {
      return (
        <p>
          <Link to={`/teams/${teamIds[0]}`}>{`${teams[0]}`}</Link>
          {' VS '}
          <Link to={`/teams/${teamIds[1]}`}>
            <strong>{`${teams[1]}`}</strong>
          </Link>
          <span>{` ${score[0]} - ${score[1]}`}</span>
        </p>
      );
    }
    return (
      <p>
        <Link to={`/teams/${teamIds[0]}`}>{`${teams[0]}`}</Link>
        {' VS '}
        <Link to={`/teams/${teamIds[1]}`}>{`${teams[1]}`}</Link>
        <span>{` ${score[0]} - ${score[1]}`}</span>
      </p>
    );
  };

  return <div className="game-result">{renderGameResult()}</div>;
}

export default memo(Result);
