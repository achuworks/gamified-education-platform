import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const PointsModal = ({ show, onHide }) => {
  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleClose = () => {
    setShowSecondModal(true);
  };

  const handleSecondModalClose = () => {
    setShowSecondModal(false);
    onHide();
  };

  return (
    <>
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
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSecondModal} onHide={handleSecondModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Reminder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <p className="text-dark">Make sure to right-click ✔️ on the paths in the roadmap to follow a structured pathway to capture your progress 🗺️, dude!</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSecondModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PointsModal;
