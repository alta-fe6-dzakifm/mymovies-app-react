import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Lottie from "lottie-react";
import { withRouter } from "../utils/navigation";
import { useNavigate } from "react-router-dom";

import CinemaLoading from "../assets/animations/cinema_animation.json";
import "../styles/App.css";

const Homepage = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // state = {
  //   data: [],
  //   loading: true,
  // };
  useEffect(() => {
    fetchData();
  }, []);
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.fetchData();
  //   }, 2000);
  // }

  // simulasi pemanggilan
  function fetchData() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=1fcd7008d5b1654db8f404670d2ed815&language=en-US"
      )
      .then((res) => {
        const { results } = res.data;
        // this.setState({ data: results });
        // console.log(res.data);
        setData(results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }

  if (loading) {
    return <Lottie loop autoplay animationData={CinemaLoading} />;
  } else {
    return (
      <Layout>
        <div className="grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.poster_path}
              onClickItem={() => navigate(`movie/${item.id}`)}
            />
          ))}
        </div>
      </Layout>
    );
  }
};

export default withRouter(Homepage);
