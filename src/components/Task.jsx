import React, { useEffect, useState } from 'react';
import AddOutcome from './AddOutcome';
import Outcome from './Outcome';

const Task = () => {
  const [outcomes, setOutcomes] = useState([
    // { value: 'GET', id: '1' },
    // { value: 'PUT', id: '2' },
    // { value: 'POST', id: '3' },
    // { value: 'DELETE', id: '4' },
  ]);

  const getOutcomes = async () => {
    await fetch('/api/outcomes')
      .then((res) => {
        return res.json();
      })
      .then((data) => setOutcomes([...data.outcomes]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getOutcomes();
  }, []);

  return (
    <section id='task'>
      <h2>Advanced Frontend Development</h2>
      <h3 className='sub-title'>Week 04 - RESTful API</h3>

      <div className='section'>
        <h3>Learning Outcomes</h3>
        <p>Learn how to make a API calls using the following:</p>
        <ul id='objectives'>
          {outcomes.map((outcome, index) => (
            <Outcome
              key={outcome.id}
              outcome={outcome}
              getOutcomes={getOutcomes}
              index={index}
            />
          ))}
        </ul>
      </div>

      <AddOutcome getOutcomes={getOutcomes} />

      <div className='section'>
        <h3>Deliverables</h3>
        <p>Presentation of study from learning outcome.</p>
      </div>
    </section>
  );
};

export default Task;
