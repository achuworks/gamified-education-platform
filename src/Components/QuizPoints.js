import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PointsModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Congratulations!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <h4 className="text-primary">🎉 Great Job Dude! 🏆</h4>
          <p className="text-dark">You've earned <strong>50 points</strong> for completing the quiz!</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PointsModal;
