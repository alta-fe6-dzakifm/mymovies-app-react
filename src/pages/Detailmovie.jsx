import React, { useState, useEffect } from "react";
import axios from "axios";
import Lottie from "lottie-react";

import CinemaLoading from "../assets/animations/cinema_animation.json";
import { withRouter } from "../utils/navigation";
import Layout from "../components/Layout";

const Detail = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const { movie_id } = props.params;

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
      )
      .then((res) => {
        const { data } = res;
        setData(data);
      })
      .catch((err) => alert(err.toString()))
      .finally(() => setLoading(false));
  }

  if (loading) {
    return <Lottie loop autoplay animationData={CinemaLoading} />;
  } else {
    return (
      <Layout>
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path}`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" h-full flex">
            <div className="h-auto w-3/4 m-auto grid grid-flow-col bg-slate-500 bg-opacity-60">
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
                  <span className="font-bold">Overview :</span> {data.overview}
                </h1>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center py-10">
            {data.videos.results.length === 0 ? (
              <div>
                <h1 className="text-center">No Videos</h1>
              </div>
            ) : (
              <iframe
                key={data.videos.results[0].key}
                width="600"
                height="350"
                src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
                title={data.name}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            )}
          </div>
        </div>
      </Layout>
    );
  }
};

export default withRouter(Detail);
