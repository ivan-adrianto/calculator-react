import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import backspace from './backspace.svg'

class TombolAngka extends Component {

    clicked =  (e) => {
        this.props.onClick(e.target.name)
    }

    render() {
        return (
            <div className = 'buttons'>
                <Button variant="success" className = "operator" name="(" onClick={this.clicked}>(</Button>
                <Button variant="success" className = "operator" name=")" onClick={this.clicked}>)</Button>
                <Button variant="success" className = "operator" name="C" onClick={this.clicked}>C</Button>
                <Button variant="success" className = "operator" name="CE" onClick={this.clicked}><img src={backspace} alt='backspace'></img></Button>
                <br/>
                


                <Button variant="success" className = "number" name="1" onClick={this.clicked}>1</Button>
                <Button variant="success" className = "number" name="2" onClick={this.clicked}>2</Button>
                <Button variant="success" className = "number" name="3" onClick={this.clicked}>3</Button>
                <Button variant="success" className = "operator" name="+" onClick={this.clicked}>+</Button>
                <br/>
                


                <Button variant="success" className = "number" name="4" onClick={this.clicked}>4</Button>
                <Button variant="success" className = "number" name="5" onClick={this.clicked}>5</Button>
                <Button variant="success" className = "number" name="6" onClick={this.clicked}>6</Button>
                <Button variant="success" className = "operator" name="-" onClick={this.clicked}>-</Button>
                <br/>
                

                <Button variant="success" className = "number" name="7" onClick={this.clicked}>7</Button>
                <Button variant="success" className = "number" name="8" onClick={this.clicked}>8</Button>
                <Button variant="success" className = "number" name="9" onClick={this.clicked}>9</Button>
                <Button variant="success" className = "operator" name="*" onClick={this.clicked}>x</Button>
                <br/>
                


                <Button variant="success" className = "operator" name="." onClick={this.clicked}>.</Button>
                <Button variant="success" className = "number" name="0" onClick={this.clicked}>0</Button>
                <Button variant="success" className = "operator" name="=" onClick={this.clicked}>=</Button>
                <Button variant="success" className = "operator" name="/" onClick={this.clicked}>÷</Button>
                <br/>
            </div>
        );
    }
}


export default TombolAngka;