import React, { Component } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import "../styles/App.css";

class Homepage extends Component {
  state = {
    data: [
      {
        id: 1,
        image:
          "https://s1.indexmovies.xyz/wp-content/uploads/2022/06/film-trip-2022-lk21-d21.jpg",
        title: "TRIP",
      },
      {
        id: 2,
        image:
          "https://s6.indexmovies.xyz/wp-content/uploads/2022/04/film-the-batman-2022-lk21-d21.jpg",
        title: "Batman",
      },
      {
        id: 3,
        image:
          "https://s7.indexmovies.xyz/wp-content/uploads/2022/03/film-uncharted-2022-lk21-d21.jpg",
        title: "Uncharted",
      },
      {
        id: 4,
        image:
          "https://s1.indexmovies.xyz/wp-content/uploads/2021/12/film-resident-evil-welcome-to-raccoon-city-2021-lk21-d21.jpg",
        title: "Resident Evil",
      },
      {
        id: 5,
        image:
          "https://s3.indexmovies.xyz/wp-content/uploads/2022/04/film-fantastic-beasts-the-secrets-of-dumbledore-2022-lk21-d21.jpg",
        title: "Fantastic Beasts: The Secrets of Dumbledore (2022)",
      },
      {
        id: 6,
        image:
          "https://s6.indexmovies.xyz/wp-content/uploads/2022/05/film-doctor-strange-in-the-multiverse-of-madness-2022-lk21-d21.jpg",
        title: "Doctor Strange",
      },
      {
        id: 7,
        image:
          "https://s6.indexmovies.xyz/wp-content/uploads/2021/11/film-the-walking-dead-2010-lk21-d21.jpg",
        title: "Walking Dead",
      },
      {
        id: 8,
        image:
          "https://s5.indexmovies.xyz/wp-content/uploads/2021/11/film-the-flash-2014-lk21-d21.jpg",
        title: "The Flash",
      },
      {
        id: 9,
        image:
          "https://s6.indexmovies.xyz/wp-content/uploads/2022/01/film-superman-and-lois-superman-lois-2021-lk21-d21.jpg",
        title: "Superman",
      },
      {
        id: 10,
        image:
          "https://s7.indexmovies.xyz/wp-content/uploads/2022/02/film-grid-zero-2022-lk21-d21.jpg",
        title: "GRID",
      },
    ],
  };
  render() {
    return (
      <Layout>
        <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
          {this.state.data.map((item) => (
            <Card key={item.id} title={item.title} image={item.image} />
          ))}
        </div>
      </Layout>
    );
  }
}

export default Homepage;
