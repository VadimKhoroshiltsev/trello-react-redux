'use strict';

import * as Settings from '../data/settings';

import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

require('styles//SettingsPage.sass');

class SettingsPageComponent extends React.Component {
  componentWillMount() {
    Settings.getOpenedBoard().then(this.props.actions.setAvailableBoards);
  }

  state = {
    finished: false,
    stepIndex: 0
  };

  handleNextButtonClick() {
    const {stepIndex} = this.state;

    switch (stepIndex) {
      case 0: {
         Settings.getBoardLists(this.props.settings.activeBoard).then((lists => {
           this.props.actions.setActiveLists(lists);
           this.setState({
             stepIndex: stepIndex + 1
           });
         }).bind(this))
      } break;
    }
  }

  handleBackButtonClick() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  render() {
    const {stepIndex} = this.state;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
      />
    ];

    return (
      <Dialog title="Settings" modal={true} open={this.props.settings.opened} actions={actions}>
      <Stepper activeStep={stepIndex} orientation="vertical">
        <Step>
          <StepLabel>Select active board</StepLabel>
          <StepContent>
            <p>
              <SelectField value={this.props.settings.activeBoard} onChange={this.handleBoardChange.bind(this)}>
                {this.props.settings.boards.map(board => <MenuItem value={board} primaryText={board.name} />)}
              </SelectField>
            </p>
            {this.renderStepActions(0)}
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Select TODO list</StepLabel>
          <StepContent>
            <p>
              <SelectField>
                {this.props.settings.activeLists.map(list => <MenuItem value={list.id} primaryText={list.name} />)}
              </SelectField>
            </p>
            {this.renderStepActions(1)}
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Select Done list</StepLabel>
          <StepContent>
            <p>
              <SelectField>
                {this.props.settings.activeLists.map(list => <MenuItem value={list.id} primaryText={list.name} />)}
              </SelectField>
            </p>
            {this.renderStepActions(2)}
          </StepContent>
        </Step>
      </Stepper>
      </Dialog>
    );
  }

  handleBoardChange(event, key, board) {
    this.props.actions.setActiveBoard(board);
  }

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        {step !== 2 && (
        <RaisedButton
          label='Next'
          disabled={stepIndex === 2}
          disableTouchRipple={true}
          disableFocusRipple={true}
          disabled={stepIndex === 2}
          primary={true}
          onClick={this.handleNextButtonClick.bind(this)}
          style={{marginRight: 12}}
        />
        )}
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handleBackButtonClick.bind(this)}
          />
        )}
      </div>
    );
  }

  handleClose() {
    this.props.actions.hideSettingsPage();
  }
}

SettingsPageComponent.displayName = 'SettingsPageComponent';

// Uncomment properties you need
// SettingsPageComponent.propTypes = {};
// SettingsPageComponent.defaultProps = {};

export default SettingsPageComponent;
