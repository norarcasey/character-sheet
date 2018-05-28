import React, { Component } from 'react'
import { connect } from 'react-redux'
import ClassDetails from '../components/ClassDetails'
import ListItem from '../components/ListItem'

class Classes extends Component {

    constructor(props) {
        super(props)

        if(props.classes.length === 0) {
          props.dispatch({type: 'CLASSES_FETCH_REQUESTED'})
        }

        this.state = {
          selectedClassIndex: 0
        }

        this.selectClass = this.selectClass.bind(this);
    }

    selectClass(index) {
      this.setState({ selectedClassIndex: parseInt(index, 10) })
    }

    render() {
      let classes = this.props.classes
      let selectedClass = classes[this.props.classId -1]

        return (
            <div className="classes">
              <ul>
                { classes.map((c, index) => {
                    let classId = index + 1

                    return <ListItem
                              key={classId}
                              index={index}
                              name={c.name}
                              list={classes}
                              className={classId === this.props.classId ? 'selected' : ''}
                              fetchDispatch={{ type: 'CLASS_FETCH_REQUESTED', id: classId}}
                              setDispatch={{ type: 'SET_CLASS_ID', classId: parseInt(classId,10) }}
                              selectItem={() => { this.selectClass(index)}}
                            />
                })}
              </ul>
              {classes.length > 0 && selectedClass.details ? (<ClassDetails details={selectedClass.details} />) : ""}
            </div>
        )
    }

}


const mapStateToProps = (state) => ({
    classes: state.classes,
    classId: state.classId

})


export default connect(mapStateToProps)(Classes)