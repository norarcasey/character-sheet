import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClassDetails from '../components/ClassDetails';
import { classProficiencies } from '../helpers/classHelper';

class Classes extends Component {
  constructor(props) {
    super(props);

    if (props.classes.length === 0) {
      props.dispatch({ type: 'CLASSES_FETCH_REQUESTED' });
    }
  }

  render() {
    let classes = this.props.classes;
    let selectedClass = classes[this.props.class.index - 1];

    return (
      <div className="classes">
        <ul>
          {classes.map((c, index) => {
            return (
              <li
                key={index}
                className={c.index === selectedClass.index ? 'selected' : ''}
                onClick={() => {
                  this.props.dispatch({ type: 'SET_CLASS', class: c });
                  this.props.dispatch({
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
        {classes.length > 0 && selectedClass ? (
          <ClassDetails details={selectedClass} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  classes: state.classes,
  class: state.characterClass
});

export default connect(mapStateToProps)(Classes);
