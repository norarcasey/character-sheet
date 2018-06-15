import React from 'react';
import { connect } from 'react-redux';
import ClassDetails from '../components/ClassDetails';
import { classProficiencies } from '../helpers/classHelper';
import classes from '../data/classes';

export const Classes = ({ dispatch, characterClass }) => {
  return (
    <div className="classes">
      <ul>
        {classes.map((c, index) => {
          return (
            <li
              key={index}
              className={c.index === characterClass.index ? 'selected' : ''}
              onClick={() => {
                dispatch({ type: 'SET_CLASS', class: c });
                dispatch({
                  type: 'RESET_SKILL_PROFICIENCIES',
                  proficiencies: classProficiencies(c)
                });
              }}
            >
              {c.name}
            </li>
          );
        })}
      </ul>

      {classes.length > 0 && characterClass ? (
        <ClassDetails details={characterClass} />
      ) : (
        ''
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  characterClass: state.characterClass
});

export default connect(mapStateToProps)(Classes);
