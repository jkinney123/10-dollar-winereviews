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
                <strong>What is Pinot Noir?</strong>
              </h1>
            </Jumbotron>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>
              "Pinot noir is a is a grape they use to make red wine. It's French
              for "Ghost of Grapes," or at least that's what you can tell your
              date. Wine made with pinot noir tastes as if it's been watered
              down. On the plus side, it has the same alcohol content as other
              wines. In the ten-dollar range, that makes it a pretty safe bet.
            </p>
            <p>
              For years, I pronounced it "peanut noyer." Liquor store clerks and
              waiters said nothing. It's not their job to tell you that your
              zipper's down, either.
            </p>
            <p>
              {" "}
              It's "PEE-NO / no-WAHW." Say it fast. Emphasis on WAHW. If you're
              still not sure, go to YouTube and find someone wearing a tie to
              pronounce it for you. Then say it 100 times. That will make you a
              pinot noir connoisseur, or "CON-OH-SEWER," as the French would say
              it. If you're in a wine bar and someone orders a peanut noyer, you
              can laugh and snort wine out your nose.
            </p>
            <p>
              {" "}
              A character in the movie "Sideways" worshipped this wine. But he
              was a fancy type who probably paid eleven or more dollars per
              bottle. Just know this is a watery kind of wine that is usually
              easy to drink. Pinot noir pairs well with Cheetos."
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
