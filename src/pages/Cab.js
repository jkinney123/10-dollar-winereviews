import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

// import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import { List } from "../components/List";

class About extends Component {
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
              <h1 className="text-center">
                <strong>What is Cabernet Sauvignon?</strong>
              </h1>
            </Jumbotron>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>
              "Cabernet Sauvignon is a grape they use to make red wine. It's
              French for "King of Grapes," or at least that's what you can tell
              your date. It tends to be more flavorful than most red wine. That
              can be good or bad.
            </p>

            <p>
              {" "}
              The most important thing you need to know about this wine is how
              to pronounce it. It's an old French trick to spell things funny so
              Americans sound like idiots when they pronounce them correctly
              using American English.
            </p>

            <p>
              {" "}
              CAB * ER * NAY - SAW * VAY * NON is close enough. Try to memorize
              that. If you are in a restaurant and forget, you can call it
              "Cab." "Can you recommend a good Cab?" you may ask without
              embarrassment. If the waiter says "Checkered," he is dumber than
              you. Another way to pronounce this wine is to just say it fast and
              mumble the last part. That's what most people do.
            </p>

            <p>
              {" "}
              You are supposed to pair Cabernet Sauvignon with red meat like
              thick steaks and prime rib, but only in fancy restaurants. If
              you're a guy, don't pair it with brisket, because you'll be in a
              Southern Bar-B-Que joint. Pair brisket with a Jack and Coke."
            </p>
          </div>
        </div>

        {/* </List> */}

        {/* </Col> */}

        <Footer />
      </div>
    );
  }
}

export default About;
