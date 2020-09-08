import React from 'react';
import Result from './Result';
import { ResultsProps } from '../../types';

function Results({ results }: ResultsProps) {
  return (
    <div className="results">
      {results.map((result, index: number) => {
        return <Result key={index} {...result} />;
      })}
    </div>
  );
}

export default Results;
