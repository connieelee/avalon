import { connect } from 'react-redux';
import React from 'react';

import defaultCharacterSelections from '../gameUtils/characters';
import { setRoles } from '../redux/roles';
import ChooseRoles from '../components/ChooseRoles';

const mapState = state => ({
  numPlayers: state.numPlayers,
  numMinions: state.numMinions,
});

const mapDispatch = dispatch => ({
  setRoles: roles => dispatch(setRoles(roles)),
});

class ChooseRolesContainer extends React.Component {
  constructor() {
    super();
    this.state = defaultCharacterSelections;
    this.selectRole = this.selectRole.bind(this);
    this.submitSelections = this.submitSelections.bind(this);
  }

  validateSelection(category, selected, numAllowed) {
    // BUG: after limit reached cannot unselect
    const numSelected = Object.keys(selected)
      .reduce((acc, cur) => selected[cur] ? acc + 1 : acc, 0);
    if (numSelected >= numAllowed) {
      throw new Error(`Up to ${numAllowed} ${category} allowed.`);
    }
  }

  updateState(category, currentlySelected, selectedRole) {
    const nextSelected = Object.assign({}, currentlySelected);
    nextSelected[selectedRole] = !currentlySelected[selectedRole];
    this.setState({
      [`selected${category[0].toUpperCase()}${category.slice(1)}`]: nextSelected,
    });
  }

  selectRole(evt) {
    const category = evt.target.parentNode.id.slice(0, 4);
    let selected, numAllowed;
    if (category === 'good') {
      selected = this.state.selectedGood;
      numAllowed = this.props.numPlayers - this.props.numMinions;
    } else if (category === 'evil') {
      selected = this.state.selectedEvil;
      numAllowed = this.props.numMinions;
    }
    this.validateSelection(category, selected, numAllowed);
    this.updateState(category, selected, evt.target.innerText);
  }

  submitSelections(evt) {
    // TODO
  }

  render() {
    return (
      <ChooseRoles
        {...this.state}
        {...this.props}
        selectRole={this.selectRole}
        submitSelections={this.submitSelections}
      />
    );
  }
}

export default connect(mapState, mapDispatch)(ChooseRolesContainer);
