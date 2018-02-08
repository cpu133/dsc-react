import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Tabs, Tab, } from 'material-ui/Tabs';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, } from 'material-ui/Table';

import { Keypad } from './keypad.js';
import { Container, Row, Col, ScreenClassRender } from 'react-grid-system';

import './App.css';

const muiTheme = getMuiTheme({
  "palette": {
    "primary1Color": "#4d4d4d",
    "primary2Color": "#d50000",
    "accent1Color": "#ff5252",
    "accent2Color": "#424242"
  }
});

const dynamicFontSize = (screenClass, props) => {
  let fontSize = 14;
  if (screenClass === 'xs')
    fontSize = 7;
  return {
    fontSize: `${fontSize}px`,
  };
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }

  tabChange = (value) => {
    this.setState({
      value: value,
    });
  };

  selectState = {
    value: null,
  };

  selectChange = (event, index, value) => this.setState({
    value
  });

  render() {
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <div className="App">
          <Tabs value={ this.state.value } onChange={ this.tabChange }>
            <Tab label="Keypad" value={ 1 }>
              <div className="keypad">
                <div className="keypad-board">
                  <Keypad />
                </div>
              </div>
            </Tab>
            <Tab label="Log" value={ 2 }>
              <Table selectable={false}>
                <TableHeader adjustForCheckbox={ false } displaySelectAll={ false }>
                  <TableRow>
                    <TableHeaderColumn>#</TableHeaderColumn>
                    <TableHeaderColumn>Time</TableHeaderColumn>
                    <TableHeaderColumn>Type</TableHeaderColumn>
                    <TableHeaderColumn>Content</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={ false }>
                  <TableRow>
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>2018-02-04T18:03:26.858Z</TableRowColumn>
                    <TableRowColumn>PANEL: 0xc3</TableRowColumn>
                    <TableRowColumn>0x11 0x0 0x2A 0xAA 0xA 0xAA 0xAA 0xAA 0xAA 0x2</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </Tab>
            <Tab label="Zones" value={ 3 }>
              <Table selectable={false}>
                <TableHeader adjustForCheckbox={ false } displaySelectAll={ false }>
                  <TableRow>
                    <TableHeaderColumn>Zone</TableHeaderColumn>
                    <TableHeaderColumn>Area</TableHeaderColumn>
                    <TableHeaderColumn>PIR/MAG</TableHeaderColumn>
                    <TableHeaderColumn>Count</TableHeaderColumn>
                    <TableHeaderColumn>Type</TableHeaderColumn>
                    <TableHeaderColumn>Partition</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={ false }>
                  <TableRow>
                    <TableRowColumn>01</TableRowColumn>
                    <TableRowColumn>Some Room</TableRowColumn>
                    <TableRowColumn>Mag</TableRowColumn>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>STAY</TableRowColumn>
                    <TableRowColumn>1</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>02</TableRowColumn>
                    <TableRowColumn>Another Room</TableRowColumn>
                    <TableRowColumn>PIR</TableRowColumn>
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>FOLLOW</TableRowColumn>
                    <TableRowColumn>1</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </Tab>
            <Tab label="Settings" value={ 4 }>
              <Container fluid>
                <Row>
                  <Col xs={ 12 } sm={ 4 }>
                    <TextField hintText="Schedule" floatingLabelText="Enter shedule" />
                    <br />
                  </Col>
                  <Col xs={ 12 } sm={ 4 }>
                    <TextField hintText="Job Name" floatingLabelText="Enter job name" />
                    <br />
                  </Col>
                  <Col xs={ 12 } sm={ 4 }>
                    <SelectField floatingLabelText="Action" floatingLabelFixed={ true } value={ this.selectState.value } onChange={ this.selectChange }>
                      <MenuItem value={ null } primaryText="Select action" />
                      <MenuItem value={ 1 } primaryText="Arm" />
                      <MenuItem value={ 2 } primaryText="Stay" />
                      <MenuItem value={ 3 } primaryText="Disarm" />
                    </SelectField>
                  </Col>
                </Row>
              </Container>
              <Container fluid>
                <Row>
                  <Col xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 }>
                    <ScreenClassRender style={ dynamicFontSize }><pre>
                      <code>*    *    *    *    *    *<br/>
            ┬    ┬    ┬    ┬    ┬    ┬<br/>
            │    │    │    │    │    |<br/>
            │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)<br/>
            │    │    │    │    └───── month (1 - 12)<br/>
            │    │    │    └────────── day of month (1 - 31)<br/>
            │    │    └─────────────── hour (0 - 23)<br/>
            │    └──────────────────── minute (0 - 59)<br/>
            └───────────────────────── second (0 - 59, optional)</code>
                  </pre></ScreenClassRender>
                  </Col>
                </Row>
              </Container>
              <Container fluid>
                <Row className="buttonPadding">
                  <Col xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 }>
                    <RaisedButton label="Add Scheduled Event" secondary={ true } />
                  </Col>
                </Row>
              </Container>
              <Table fixedHeader={ false } style={ { tableLayout: "auto" } }>
                <TableHeader adjustForCheckbox={ false } displaySelectAll={ false }>
                  <TableRow>
                    <TableHeaderColumn>#</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Action</TableHeaderColumn>
                    <TableHeaderColumn>Delete</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={ false }>
                  <TableRow>
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>*****</TableRowColumn>
                    <TableRowColumn>DUMMY</TableRowColumn>
                    <TableRowColumn>ROW</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </Tab>
          </Tabs>
        </div>
      </MuiThemeProvider>
      );
  }
}

export default App;