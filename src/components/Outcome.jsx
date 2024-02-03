import React, { useState } from 'react';

const Outcome = ({ index, outcome, getOutcomes }) => {
  const [edit, setEdit] = useState(false);
  const [outcomeEdit, setOutcomeEdit] = useState(outcome.value);

  const handSave = async () => {
    await fetch(`/api/outcomes/${index}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: outcomeEdit }),
    })
    .then((res) => {
        if (res.ok) {
          getOutcomes();
          setEdit(false);
        }
      })
    .catch((err) => console.log(err));

  };

  const handleDelete = async () => {
    await fetch(`/api/outcomes/${outcome.id}`, {
      method: 'DELETE',
    })
   .then((res) => {
        if (res.ok) {
          getOutcomes();
        }
      })
   .catch((err) => console.log(err));
  };

  return (
    <li>
      <div className='outcome'>
        <span>{index + 1}</span>
        {edit ? (
          <input
            type='text'
            name='outcome'
            value={outcomeEdit}
            placeholder={outcome.value}
            onChange={(e) => setOutcomeEdit(e.target.value)}
          />
        ) : (
          <p>{outcome.value}</p>
        )}
      </div>
      <div className='actions'>
        {edit ? (
          <button
            type='button'
            name='save'
            className='edit'
            onClick={handSave}
            disabled={outcomeEdit.length < 1}
          >
            SAVE
          </button>
        ) : (
          <button
            type='button'
            name='edit'
            className='edit'
            onClick={() => setEdit(true)}
          >
            EDIT
          </button>
        )}
        <button
          type='button'
          name='delete'
          className='delete'
          onClick={handleDelete}
        >
          DELETE
        </button>
      </div>
    </li>
  );
};

export default Outcome;
