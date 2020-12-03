import React, { Component } from "react";
import "./Calculator.css";

import Button from "../components/Button"
import Display from "../components/Display"
import display from "../components/Display";

const inicialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  currentIndex: 0
}

export default class Calculator extends Component { 

  state = { ...inicialState }

    constructor(props) {
        super(props)
        /* opcao 2 */
        this.setOperation = this.setOperation.bind(this)
    }

    clearMemory() {
      this.setState({...inicialState})
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(digit) {
        if (digit === '.' && this.state.displayValue.includes('.')){
          return
        }
        
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const newDisplayValue = currentValue + digit
        this.setState({displayValue: newDisplayValue, clearDisplay: false})

        if (digit !== '.') {
          const index = this.state.currentIndex
          console.log(index)
          const newValue = parseFloat(display)
          const values = [...this.state.values]
          values[index] = newValue
          this.setState({ values: values })
          console.log(values)
        }
    }

  render() {

    /* opcao 3 */
    const addDigit = digit => this.addDigit(digit)

    return (                
      <div className="calculator">
          <Display value={this.state.displayValue} />
          {/* opcao 1 */}
          <Button label="AC" click={() => this.clearMemory()} triple/>
          {/* opcao 2 */}
          <Button label="/" click={this.setOperation} operation/>
          {/* opcao 3 */}
          <Button label="7" click={addDigit}/>
          <Button label="8" click={addDigit}/>
          <Button label="9" click={addDigit}/>
          <Button label="*" click={this.setOperation} operation/>
          <Button label="4" click={addDigit}/>
          <Button label="5" click={addDigit}/>
          <Button label="6" click={addDigit}/>
          <Button label="-" click={this.setOperation} operation/>
          <Button label="1" click={addDigit}/>
          <Button label="2" click={addDigit}/>
          <Button label="3" click={addDigit}/>
          <Button label="+" click={this.setOperation} operation/>
          <Button label="0" click={addDigit} double/>
          <Button label="." click={addDigit}/>
          <Button label="=" click={this.setOperation} operation/>
      </div>
    );
  }
}
