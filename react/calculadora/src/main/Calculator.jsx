import React, { Component } from "react";
import "./Calculator.css";

import Button from "../components/Button"
import Display from "../components/Display"

export default class Calculator extends Component { 

    constructor(props) {
        super(props)
        /* opcao 2 */
        this.setOperation = this.setOperation.bind(this)
    }

    clearMemory() {
        console.log('Limpar')
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(digit) {
        console.log(digit)
    }

  render() {

    /* opcao 3 */
    const addDigit = digit => this.addDigit(digit)

    return (                
      <div className="calculator">
          <Display value={100} />
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
