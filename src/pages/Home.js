import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Wine from "../components/Wine";
import Footer from "../components/Footer";
import wines from "../reviews.json";
// import WineModal from "../components/Modal";
// import { Link } from "react-router-dom";
import "./style.css";

// import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import { List } from "../components/List";





class Home extends Component {
  constructor(props) {
    super(props)
    this.sortByRating = this.sortByRating.bind(this);
    // this.updateSearch = this.updateSearch.bind(this);
    this.state = {
      wines: [],
      term: ''
    };
  }

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

  componentDidMount() {
    this.setState({
      wines: wines,

    })
  }

  sortByRating() {
    const { wines } = this.state
    let newWines = wines
    wines.sort((a, b) => b.rating - a.rating)

    this.setState({

      wines: newWines
    })
    console.log(wines);
    console.log(newWines);
  }


  // updateSearch(event) {
  //   this.setState({
  //     term: event.target.value
  //   });
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

    // function searchingFor(term) {
    //   return function (x) {
    //     return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
    //   }
    // }


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

            </Jumbotron>
          </div>
        </div>
        <div className="container">
          <Card title="Reviews">
            {/* <List> */}
            <div className="row p-4">
              <div className="col-md-6 d-flex justify-content-end">
                <button onClick={this.sortByRating} className="text-center">Order by Rating</button>
              </div>
              <div className="col-md-6">
                <form>
                  <input type="text" value={this.state.term} onChange={this.updateSearch} />
                </form>
              </div>
            </div>

            <div className="row">
              <div className="d-inline-flex  flex-wrap flex-fill">
                {this.state.wines.map(wine => (
                  <div className="col-md-3 cardSty">
                    <Wine key={wine.id}
                      // wineClick={this.wineClick}
                      // id={wine.id}
                      grape={wine.grape}
                      wineType={wine.wineType}
                      price={wine.price}
                      name={wine.name}
                      year={wine.year}
                      origin={wine.origin}
                      tastingNotes={wine.tastingNotes}
                      rating={wine.rating}
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
