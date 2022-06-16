import React, { Component } from "react";
import axios from "axios";
import Lottie from "lottie-react";

import CinemaLoading from "../assets/animations/cinema_animation.json";
import { withRouter } from "../utils/navigation";
import Layout from "../components/Layout";

class Detail extends Component {
  state = {
    data: {},
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.fetchData();
    }, 2000);
  }

  fetchData() {
    const { movie_id } = this.props.params;
    console.log(movie_id);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=0e6ab6977a441feefe861571f011429c&language=en-US`
      )
      .then((res) => {
        const { data } = res;
        console.log(data);
        this.setState({ data });
      })
      .catch((err) => alert(err.toString()))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { data, loading } = this.state;
    if (loading) {
      return <Lottie loop autoplay animationData={CinemaLoading} />;
    } else {
      return (
        <Layout>
          <div className="h-full w-full relative flex">
            <img
              src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              alt={data.backdrop_path}
              className="relative w-full"
            />
            <div className="absolute h-full flex">
              <div className="h-3/4 w-3/4 m-auto grid grid-flow-col bg-slate-500 bg-opacity-60">
                <div className="col-span-1 m-auto p-7 flex flex-col">
                  <img
                    src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                    alt="MoviePoster"
                    className="h-[60]"
                  />
                  <a
                    href={data.homepage}
                    className="border-solid border-2 border-blue-200 text-center rounded mt-5 p-4 font-bold bg-slate-500 bg-opacity-60 text-white"
                  >
                    Watch Now
                  </a>
                </div>
                <div className="col-span-3 p-7 flex flex-col">
                  <h1 className="text-2xl font-bold mb-4 text-center">
                    {data.original_title}
                  </h1>
                  <h1 className="font-regular">
                    <span className="font-bold">Runtime: </span>
                    {data.runtime}
                  </h1>
                  <h1 className="font-regular">
                    <span className="font-bold">Release Date: </span>
                    {data.release_date}
                  </h1>
                  <h1 className="font-regular">
                    <span className="font-bold">Genres :</span>{" "}
                    {data.genres.map((genre) => genre.name).join(", ")}
                  </h1>
                  <h1 className="font-regular">
                    <span className="font-bold">Language :</span>{" "}
                    {data.original_language}
                  </h1>
                  <h1 className="font-regular">
                    <span className="font-bold">Overview :</span>{" "}
                    {data.overview}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      );
    }
  }
}

export default withRouter(Detail);
