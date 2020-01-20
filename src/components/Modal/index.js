import React from "react";
import { Modal, ButtonToolbar, } from "react-bootstrap";
import "./style.css";

class WineModal extends React.Component {
  state = {
    lgShow: false
  };

  render() {
    return (
      <div>
        <ButtonToolbar>
          <button
            onClick={() => this.setState({ lgShow: true })}
            type="button"
            className="btn btn-dark"
          >
            See Full Review
          </button>
          <Modal
            size="lg"
            show={this.state.lgShow}
            onHide={() => this.setState({ lgShow: false })}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header>
              <button
                onClick={() => this.setState({ lgShow: false })}
                type="button"
                className="btn btn-dark"
              >
                Close
          </button>
            </Modal.Header>
            <Modal.Body>



              <img
                className="img-fluid"
                src={this.props.image}
                alt="Wine"
              />
              <div className="container">
                <div className="row">
                  <div className="col-md-4 p-2">
                    grape: <h5> {this.props.grape} </h5>
                  </div>
                  <div className="col-md-4 p-2">
                    price: <h5> {this.props.price} </h5>
                  </div>
                  <div className="col-md-4 p-2">
                    year: <h5> {this.props.year} </h5>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="m-2">
                        <h5>
                          <small>origin: </small> {this.props.origin}
                        </h5>
                      </p>
                    </div>

                    <div className="col-md-6">
                      <p className="m-2">
                        <h5>
                          <small>Wine Type: </small> {this.props.wineType}
                        </h5>
                      </p>
                    </div>
                  </div>
                  <div className="row p-2">
                    <div className="col-md-12 m-2">
                      <h6>Tasting Notes: </h6>
                      <p className="m-2 ">
                        {this.props.tastingNotes}
                        <br />
                      </p>
                      <h5>
                        <small> rating:</small> <strong>{this.props.rating}</strong>
                      </h5>
                    </div>
                  </div>
                  <div className="row p-2">
                    <div className="col-md-12 m-2">
                      <h6>Feel: </h6>
                      <p className="m-2 ">{this.props.feel}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>


          </Modal>
        </ButtonToolbar>
      </div>
    );
  }
}

export default WineModal;
