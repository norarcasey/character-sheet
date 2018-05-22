import React from 'react'
import { connect } from 'react-redux'


const Classes = ({ classes, dispatch }) => {

    dispatch({type: 'CLASSES_FETCH_REQUESTED'})

    return (
        <select>
            {
                classes.map((c, i) => {
                    return <option key={i}>{c.name}</option>
                })
            }
        </select>
    )

}

const mapStateToProps = (state) => ({
    classes: state.classes
})


export default connect(mapStateToProps)(Classes)