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
import BoardChoosingStep from './settings/BoardChoosingStepComponent';

require('styles//SettingsPage.sass');

class SettingsPageComponent extends React.Component {
  componentWillMount(){
    Settings.getOpenedBoard().then(this.props.actions.setAvailableBoards);
  }


  state = {
    finished: false,
    stepIndex: 0
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1
    });
  };

  handlePrev = () => {
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
    let handleChange = (event, index, value) => this.setState({value});
    return (
      <Dialog title="Settings" modal={true} open={this.props.settings.opened} actions={actions}>
      <Stepper activeStep={stepIndex} orientation="vertical">
        <Step>
          <StepLabel>Select active board</StepLabel>
          <StepContent>
            <p>
              Select active board: <br/>
              <SelectField value={this.props.settings.activeBoardId} onChange={this.boardChanged.bind(this)}>
                {this.props.settings.boards.map(board => <MenuItem value={board.id} primaryText={board.name} />)}
              </SelectField>
            </p>
            {this.renderStepActions(0)}
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Create an ad group</StepLabel>
          <StepContent>
            <p>An ad group contains one or more ads which target a shared set of keywords.</p>
            {this.renderStepActions(1)}
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Create an ad</StepLabel>
          <StepContent>
            <p>
              Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they are running and how to resolve approval issues.
            </p>
            {this.renderStepActions(2)}
          </StepContent>
        </Step>
      </Stepper>
      </Dialog>
    );
  }

  boardChanged(event, key, boardId) {
    this.props.actions.setActiveBoardId(boardId);
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
          onClick={this.handleNext.bind(this)}
          style={{marginRight: 12}}
        />
        )}
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev.bind(this)}
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
