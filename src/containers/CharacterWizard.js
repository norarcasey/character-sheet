import React, { Component } from 'react'
import Classes from './Classes'
import Races from './Races'

class CharacterWizard extends Component {

    constructor(props) {
        super(props)

        this.state = {
          activeTab: 'class'
        }
    }

    render() {
        return (
          <section className="character-wizard">
            <nav>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault
                  this.setState({activeTab: 'class'})
                }}
                className={this.state.activeTab === 'class'? 'active' : ''}>Class</a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault
                  this.setState({activeTab: 'race'})
                }}
                className={this.state.activeTab === 'race'? 'active' : ''}>Race</a>
            </nav>
            <div className="character-wizard-details">
              {this.state.activeTab === 'class' ? <Classes /> : <Races />}
            </div>
          </section>

        )
    }

}

export default CharacterWizard