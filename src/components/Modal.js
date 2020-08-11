import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class GameOverModal extends React.Component {

         render() {
            return (
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>{this.props.message}</h4>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            );
        }
}