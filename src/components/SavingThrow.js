import React, { Component } from 'react';

class SavingThrow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modifier: props.modifier,
      proficiencyBonus: 0
    };

    this.updateModifier = this.updateModifier.bind(this);
  }

  updateModifier(proficiencyBonus) {
    this.setState({ proficiencyBonus: parseInt(proficiencyBonus, 10) });
  }

  render() {
    return (
      <div className="saving-throw">
        <input
          type="checkbox"
          disabled={!this.props.isProficient}
          checked={this.props.isProficient}
          value={this.props.proficiencyBonus}
          onChange={e => {
            this.updateModifier(e.target.checked ? e.target.value : 0);
          }}
        />
        <label>
          {this.props.modifier + this.state.proficiencyBonus}&nbsp;{
            this.props.abilityScore.full_name
          }
        </label>
      </div>
    );
  }
}

export default SavingThrow;
