import React, { Component } from 'react'
import { connect } from 'react-redux'
import ClassDetails from '../components/ClassDetails'

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
                    return <li
                              key={classId}
                              className={classId === this.props.classId ? 'selected' : ''}
                              onClick={() => {

                                if(!classes[index].details) {
                                  this.props.dispatch({ type: 'CLASS_FETCH_REQUESTED', id: classId})
                                }

                                this.selectClass(index)
                                this.props.dispatch({ type: 'SET_CLASS_ID', classId: parseInt(classId,10) })
                            }}>{c.name}</li>
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