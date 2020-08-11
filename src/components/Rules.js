import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import '../index.css'

export default class Rules extends React.Component {


    render(){
        
        return (

            <div>
                <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossorigin="anonymous"
                />
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="accordionCard">
                            <h4>Rules</h4>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="accordionCardBody">
                                <p>You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you click on a square containing a bomb, you lose. If you manage to click all the squares (without clicking on any bombs) or flag all the mines, you win.</p>
                                <p>Clicking a square which doesn't have a bomb reveals the number of neighbouring squares containing bombs. Use this information plus some guess work to avoid the bombs.</p>
                                <p>To open a square, point at the square and click on it. To mark a square you think is a bomb, point and right-click.</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        );

    }



    
}
