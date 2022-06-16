import React, { Component } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Lottie from "lottie-react";

import CinemaLoading from "../assets/animations/cinema_animation.json";
import "../styles/App.css";

class Homepage extends Component {
  state = {
    data: [],
    loading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.fetchData();
    }, 2000);
  }

  // simulasi pemanggilan
  fetchData() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=1fcd7008d5b1654db8f404670d2ed815&language=en-US"
      )
      .then((res) => {
        const { results } = res.data;
        this.setState({ data: results });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => this.setState({ loading: false }));
  }
  render() {
    if (this.state.loading) {
      return <Lottie loop autoplay animationData={CinemaLoading} />;
    } else {
      return (
        <Layout>
          <div className="grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
            {this.state.data.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.poster_path}
              />
            ))}
          </div>
        </Layout>
      );
    }
  }
}

export default Homepage;
