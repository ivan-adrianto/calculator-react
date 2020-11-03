import React, { Component } from 'react';
import Display from "./Display"
import TombolAngka from "./TombolAngka";
import './App.css';
import calc from './letscalc.png';
import phone from './phone.png';
import { Button, Col, Container, Row } from "react-bootstrap";
import PrevOperationz from "./PrevOperationz";
import back from './right-arrow-black-triangle.svg'
import home from './rounded-black-square-shape.svg'
import optionss from './dry-clean.svg'

class App extends Component {

    state = {
        result: '',
        prevOperation: ''
    };
    forbiddenOnes = ['++', '**', '//', '+*', '-*', '-+', '*+', '+/', '/+', '*/', '/*', '-/', '-*', '..', '--', '+-', '*-', '()']
    specialOperators = ['=', 'C', 'CE']
    noSpecialBegin = ['=', '*', '/']


    onClick = button => {
        if (this.state.prevOperation !== '') {
            let operators = ['+', '-', '*', '/']
            if (operators.indexOf(button) > -1) {
                this.setState({
                    result: this.state.result + button,
                    prevOperation: ''
                });
            } else {
                if (this.specialOperators.indexOf(button) > -1) {
                    console.log('yes')
                    return this.specialOps(button)
                } else {
                    this.setState({
                        result: button,
                        prevOperation: ''
                    });
                }
            }
        }
        else if (this.state.prevOperation === '') {
            if (this.state.result === '') {
                if (this.noSpecialBegin.indexOf(button) > -1) {
                    this.setState({
                        result: ''
                    })
                } else {
                    return this.normalOps(button)
                }
            } else {
                return this.normalOps(button)
            }

        }

    };

    normalOps = (ini) => {
        if (this.specialOperators.indexOf(ini) > -1) {
            return this.specialOps(ini)
        } else if (this.forbiddenOnes.indexOf(this.state.result[this.state.result.length - 1] + ini) > -1) {
            this.setState({
                result: this.state.result.slice(0, -1) + ini
            })
        }
        else if (this.state.result.length > 11) {
            this.setState({
                result: this.state.result
            })
        }
        else {
            this.setState({
                result: this.state.result + ini
            })
        }
    }

    specialOps = (ini) => {
        if (ini === 'CE') {
            return this.backspace()
        } else if (ini === 'C') {
            return this.reset()
        } if (ini === "=") {
            return this.calculate()
        }
    }

    calculate = () => {

        try {
            let singkatan = eval(this.state.result);
            let final = singkatan.toFixed(singkatan.toString().length - (singkatan.toString().length - 12) - ((singkatan.toString().split(".")[0].length) + 1))
            if (singkatan.toString().length > 12) {
                try {
                    this.setState({
                        prevOperation: this.state.result,
                        result: (final || '') + ''
                    })
                } catch (e) {

                    this.setState({
                        result: "error"
                    })

                }
            } else {
                try {
                    this.setState({
                        prevOperation: this.state.result,
                        result: (singkatan) + ''
                    })
                } catch (e) {
                    this.setState({
                        result: 0
                    })

                }
            }
        } catch (e) {
            this.setState({
                result: "error"
            })
        }


    };

    reset = () => {
        this.setState({
            result: "",
            prevOperation: ''
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1),
            prevOperation: ''
        })
    };



    render() {
        return (
            <div>
                <Row>
                    <div className='letscalc'>
                        <img src={calc} className="lets" alt="calc" />
                    </div>
                    <div className="mockup">
                        <div className="phone">
                            <img src={phone} className="App-phone" alt="phone" />
                        </div>
                        <div className="calcbutton">
                            <PrevOperationz prevOps={this.state.prevOperation} />
                            <Display result={this.state.result} />
                            <TombolAngka onClick={this.onClick} />
                        </div>
                        <div className="mockup-menu">
                            <img src={home} alt='home'></img>
                            <img src={optionss} alt='option'></img>
                            <img src={back} alt='back'></img>
                        </div>
                    </div>
                </Row>
            </div>
        );
    }
}

export default App;
