import React, { Component } from 'react';
import './keypad.css';

const operations = {
    actions: ["RESET", "EXIT", "STAY", "AWAY", "*", "#", "F", "A", "P", "CHIME"]
};

const numbers = {
    keys: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
};

const leds = {
    actions: ["Ready", "Armed", "Memory", "Bypass", "Trouble", "Program"]
};

export class Keypad extends Component {
    constructor() {
      super();
  
      this.state = {
        value: 0,
        symbol: "",
        total: 0
      };
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    // the operations will be defined here
    calculations(symbol, value, total) {
      switch (symbol) {
        case "RESET":
          total += parseInt(value, 10);
          break;
        case "EXIT":
          total -= parseInt(value, 10);
          break;
        case "STAY":
          total /= parseInt(value, 10);
          break;
        case "AWAY":
          total *= parseInt(value, 10);
          break;
        default:
          // do nothing
      }
      return total;
    }
  
    handleClick(e) {
      let value = this.state.value,
        symbol = this.state.symbol,
        total = this.state.total;
  
      if (e.target.value.match(/([0-9])/g) && this.state.value === 0) {
        value = e.target.value;
        this.setState({ value: value });
      } else if (e.target.value.match(/([0-9])/g)) {
        value += e.target.value;
        this.setState({ value: value });
      } else if (e.target.value.match(/([/*+-])/g)) {
        if (symbol === "") {
          symbol = e.target.value;
          total = parseInt(value, 10);
        } else {
          if (total === 0) {
            total = parseInt(value, 10);
            symbol = e.target.value;
          } else if (total !== 0) {
            total = this.calculations(symbol, value, total);
          }
        }
        symbol = e.target.value;
        this.setState({ value: 0, total: total, symbol: symbol });
      } else if (e.target.value.match(/(#)/g)) {
        total = this.calculations(symbol, value, total);
        value = total;
        this.setState({ value: total, symbol: "" });
      } else if (e.target.value === "*") {
        this.setState({
          value: 0,
          symbol: "",
          total: 0
        });
      }
    }
  
    render() {
      return (
        <div className="center-container">
          <div className="keypad">
            <form>
              <label>
                <input
                  className="screen"
                  value={this.state.value}
                />
              </label>
            </form>
          </div>
          <div className="leds">
            <div className="led"
                type="submit"
                name="ready"
                value="led1"
            >
                {leds.actions[0]}
            </div>
            <div className="led"
                type="submit"
                name="armed"
                value="led2"
              >
                {leds.actions[1]}
            </div>
            <div className="led"
                type="submit"
                name="memory"
                value="led3"
              >
                {leds.actions[2]}
            </div>
            <div className="led"
                type="submit"
                name="bypass"
                value="led4"
              >
                {leds.actions[3]}
            </div>
            <div className="led"
                type="submit"
                name="trouble"
                value="led5"
              >
                {leds.actions[4]}
            </div>
            <div className="led"
                type="submit"
                name="program"
                value="led6"
              >
                {leds.actions[5]}
            </div>
          </div>
          <div className="container">
            <div className="button">
              <button
                type="submit"
                name="number1"
                value="1"
                onClick={this.handleClick}
              >
                {numbers.keys[1]}
              </button>
            </div>
            <div className="button">
              <button
                type="submit"
                name="number2"
                value="2"
                onClick={this.handleClick}
              >
                {numbers.keys[2]}
              </button>
            </div>
            <div className="button">
              <button
                type="submit"
                name="number3"
                value="3"
                onClick={this.handleClick}
              >
                {numbers.keys[3]}
              </button>
            </div>
            <div className="button operations-button">
              <button
                type="submit"
                name="stay"
                value="STAY"
                onClick={this.handleClick}
              >
                {" "}         {operations.actions[2]}
              </button>
            </div>
            <div className="button">
              <button
                type="submit"
                name="number4"
                value="4"
                onClick={this.handleClick}
              >
                {numbers.keys[4]}
              </button>
            </div>
            <div className="button">
              <button
                type="submit"
                name="number5"
                value="5"
                onClick={this.handleClick}
              >
                {numbers.keys[5]}
              </button>
            </div>
            <div className="button">
              <button
                type="submit"
                name="number6"
                value="6"
                onClick={this.handleClick}
              >
                {numbers.keys[6]}
              </button>
            </div>
            <div className="button operations-button">
              <button
                type="submit"
                name="hash"
                value="#"
                onClick={this.handleClick}
              >
                {operations.actions[3]}
              </button>
            </div>
            <div className="button">
              <button
                type="submit"
                name="number7"
                value="7"
                onClick={this.handleClick}
              >
                {numbers.keys[7]}
              </button>
            </div>
            <div className="button">
              <button
                type="submit"
                name="number8"
                value="8"
                onClick={this.handleClick}
              >
                {numbers.keys[8]}
              </button>
            </div>
            <div className="button">
              <button
                type="submit"
                name="number9"
                value="9"
                onClick={this.handleClick}
              >
                {numbers.keys[9]}
              </button>
            </div>
            <div className="button operations-button">
              <button
                type="submit"
                name="exit"
                value="EXIT"
                onClick={this.handleClick}
              >
                {operations.actions[1]}
              </button>
            </div>
            <div className="button results-button">
              <button
                type="submit"
                name="star"
                value="*"
                onClick={this.handleClick}
              >
                {operations.actions[4]}
              </button>
            </div>
            <div className="button">
              <button
                type="submit"
                name="number0"
                value="0"
                onClick={this.handleClick}
              >
                {numbers.keys[0]}
              </button>
            </div>
            <div className="button results-button">
              <button
                type="submit"
                name="hash"
                value="#"
                onClick={this.handleClick}
              >
                {operations.actions[5]}
              </button>
            </div>
            <div className="button operations-button">
              <button
                type="submit"
                name="reset"
                value="RESET"
                onClick={this.handleClick}
              >
                {operations.actions[0]}
              </button>
            </div>
            <div className="button operations-button">
              <button
                type="submit"
                name="fire"
                value="F"
                onClick={this.handleClick}
              >
                {operations.actions[6]}
              </button>
            </div>
            <div className="button operations-button">
              <button
                type="submit"
                name="ambulance"
                value="A"
                onClick={this.handleClick}
              >
                {operations.actions[7]}
              </button>
            </div>
            <div className="button operations-button">
              <button
                type="submit"
                name="police"
                value="P"
                onClick={this.handleClick}
              >
                {operations.actions[8]}
              </button>
            </div>
            <div className="button operations-button">
              <button
                type="submit"
                name="chime"
                value="CHIME"
                onClick={this.handleClick}
              >
                {operations.actions[9]}
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
  