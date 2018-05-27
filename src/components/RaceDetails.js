import React, {Component} from 'react'
import {connect} from 'react-redux'

class RaceDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    let details = this.props.details

    return (
      <div className="details">
        <p><label>Size:</label>{details.size}</p>
        <p><label>Speed:</label>{details.speed}</p>
        {/* <p><label>Languages:</label>{
          d.languages.map((lang, index) => {
              return <span>{lang.name} </span>
            }
          )}
        </p> */}
        <p><label>Languages:</label>{details.language_desc}</p>
        <p><label>Age:</label>{details.age}</p>
        <p><label>Alignment:</label>{details.alignment}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  attributes: state.attributes
})

export default connect(mapStateToProps)(RaceDetails)