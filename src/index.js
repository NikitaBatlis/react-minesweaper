import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Board from './components/Board';

class Game extends React.Component {


    state = {
        height: 12,
        width: 12,
        mines: 20,
    };

    // handleGameStart = (difficulty) => {

    //     if (difficulty === "Beginner") {
    //         this.setState({
    //             height: 8,
    //             width: 8,
    //             mines: 10,
    //             difficulty: 'Beginner'
    //         });
    //     }
    //     if (difficulty === "Intermediate") {
    //         this.setState({
    //             height: 12,
    //             width: 12,
    //             mines: 20,
    //             difficulty: 'Intermediate'
    //         });
    //     }
    //     if (difficulty === "Expert") {
    //         this.setState({
    //             height: 16,
    //             width: 16,
    //             mines: 40,
    //             difficulty: 'Expert'
    //         });
    //     }
    // }


    render() {

        const { height, width, mines } = this.state;
        
        return (
            <div className="game">
                
                <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossorigin="anonymous"
                />

                <div className="wrapper">
                    <div className="main">
                        <Container fluid className="gameContainer">
                            <Row>
                                <Col>
                                    <div className="gameInfoLeft">

                                        <div className ="gameTitle">
                                            <h2>Minesweeper</h2>
                                        </div>

                                        <div className="rulesContainer">
                                            <h4>Rules</h4>
                                            <div>
                                                <p>You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you click on a square containing a bomb, you lose. If you manage to click all the squares (without clicking on any bombs) or flag all the mines, you win.</p>
                                                <p>Clicking a square which doesn't have a bomb reveals the number of neighbouring squares containing bombs. Use this information plus some guess work to avoid the bombs.</p>
                                                <p>To open a square, point at the square and click on it. To mark a square you think is a bomb, point and right-click.</p>
                                            </div>
                                        </div>

                                        {/* <div className="levelContainer">
                                            <h4>Change level:</h4>
                                            <DropdownButton variant="info" id="level_select" title={this.state.difficulty}>
                                                <Dropdown.Item as="button" onClick={() => this.handleGameStart('Beginner')} > Beginner </Dropdown.Item>
                                                <Dropdown.Item as="button" onClick={() => this.handleGameStart('Intermediate')}> Intermediate </Dropdown.Item>
                                                <Dropdown.Item as="button" onClick={() => this.handleGameStart('Expert')}> Expert</Dropdown.Item>
                                            </DropdownButton>
                                        </div> */}

                                    </div>
                                </Col>
                            
                                <Col className="boardColRight">
                                    <div>
                                        <Board height={height} width={width} mines={mines} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));
