import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Wine from "../components/Wine";
import Footer from "../components/Footer";
import wines from "../reviews.json";
import WineModal from "../components/Modal";
import { Link } from "react-router-dom";
import "./style.css";

// import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import { List } from "../components/List";

class Home extends Component {
  state = {
    wines
  };

  // openModal = () => {
  //   this.setState({
  //     modalIsOpen: true
  //   });
  // };

  // closeModal = () => {
  //   this.setState({
  //     modalIsOpen: false
  //   });
  // };

  // wineClick = id => {
  //   const wines = this.state.wines;

  //   const clickedWine = wines.filter(wine => wine.id === id);

  //   if (clickedWine[0].clicked) {
  //     for (let i = 0; i < wines.length; i++) {
  //       wines[i].clicked = false;
  //     }

  //     this.setState({ wines });
  //   }
  // };

  // componentDidMount() {
  //   this.getSavedWines();
  // }

  // getSavedWines = () => {
  //   API.getSavedWines()
  //     .then(res =>
  //       this.setState({
  //         wines: res.data
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Jumbotron>
              <div className="row">
                <div className="col-md-12">
                  <h1 className="text-center scale-in-top">
                    <strong> $10 Wine reviews</strong>
                  </h1>
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-md-6">
                  <h4 className="text-center border border-dark slide-in-left">
                    {" "}
                    <Link className="Pinot" to="/Pinot">
                      What is Pinot Noir?
                    </Link>
                  </h4>
                </div>
                <div className="col-md-6">
                  <h4 className="text-center border border-dark slide-in-right">
                    <Link className="Cab" to="/Cabernet">
                      What is Cabernet Sauvignon?
                    </Link>{" "}
                  </h4>
                </div>
              </div>
            </Jumbotron>
          </div>
        </div>
        <div className="container">
          <Card title="Reviews">
            {/* <List> */}
            <div className="row">
              <div className="d-inline-flex  flex-wrap flex-fill">
                {this.state.wines.map(wine => (
                  <div className="col-md-3">
                    <Wine
                      key={wine.id}
                      // wineClick={this.wineClick}
                      // id={wine.id}
                      grape={wine.grape}
                      wineType={wine.wineType}
                      price={wine.price}
                      name={wine.name}
                      year={wine.year}
                      origin={wine.origin}
                      tastingNotes={wine.tastingNotes}
                      grade={wine.grade}
                      feel={wine.feel}
                      image={wine.image}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* </List> */}
          </Card>
          {/* </Col> */}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
