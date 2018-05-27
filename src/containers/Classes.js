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
      this.setState({ selectedClassIndex: parseInt(index, 10) -1 })
    }

    render() {
      let classes = this.props.classes
      let selectedClass = classes[this.state.selectedClassIndex]

        return (
            <div className="classes">
                <select
                  name="class-select"
                  id="class-select"
                  size={this.props.classes.length}
                  onChange={ (e) => {
                    let classId = e.target.value

                    if(!classes[classId - 1].details) {
                      this.props.dispatch({ type: 'CLASS_FETCH_REQUESTED', id: classId})
                    }

                    this.selectClass(e.target.value)
                    this.props.dispatch({ type: 'SET_CLASS_ID', classId: parseInt(classId,10) })
                  }}>
                    {
                        classes.map((c, i) => {
                          let index = i+1
                          return <option key={index} value={index} selected={index === this.props.classId}>{c.name}</option>
                        })
                    }
                </select>
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