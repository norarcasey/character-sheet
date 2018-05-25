import React, { Component } from 'react'
import { connect } from 'react-redux'


class Classes extends Component {

    constructor(props) {
        super(props)

        props.dispatch({type: 'CLASSES_FETCH_REQUESTED'})
    }

    render() {
        return (
            <div className="character-class">
                <label htmlFor="class-select">Class</label>{' '}
                <select name="class-select" id="class-select" size={this.props.classes.length}>
                    {
                        this.props.classes.map((c, i) => {
                            return <option key={i}>{c.name}</option>
                        })
                    }
                </select>
            </div>
        )
    }

}


const mapStateToProps = (state) => ({
    classes: state.classes
})


export default connect(mapStateToProps)(Classes)