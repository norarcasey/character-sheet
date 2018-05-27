import React, { Component } from 'react'
import Classes from './Classes'
import Races from './Races'

class CharacterWizard extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
          <section className="character-wizard">
            <nav>
              <a href="#">Class</a>
              <a href="#" className="active">Race</a>
            </nav>
            <div className="character-wizard-details">
              {/* <Classes /> */}
              <Races />
            </div>
          </section>

        )
    }

}

export default CharacterWizard