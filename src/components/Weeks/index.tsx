import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Results from '../Results';
import { fetchWeeks } from '../../apis/footballApi';
import { WeekResults, WeeksProps } from '../../types';
import './styles.css';
import { LOADING } from '../../constants';

function Weeks({
  match: {
    params: { id },
  },
}: WeeksProps) {
  const [data, setData] = useState<WeekResults>();
  const [chosenWeek, setChosenWeek] = useState(parseInt(id, 10) - 1);

  useEffect(() => {
    const fetchData = async () => {
      const weeks = await fetchWeeks();
      setData(weeks);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setChosenWeek(parseInt(id, 10) - 1);
  }, [chosenWeek, id]);

  if (!data) return <div className="loading">{LOADING}</div>;

  return (
    <div className="weeks">
      <div className="week-chooser">
        <ul className="weeks-list">
          {data.map((w, i) => (
            <li key={i}>
              <Link
                to={`/weeks/${i + 1}`}
                className={i + 1 === +id ? 'selected' : undefined}
              >
                {i + 1}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Results results={data[chosenWeek]} />
    </div>
  );
}

export default Weeks;
