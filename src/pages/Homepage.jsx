import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Lottie from "lottie-react";
import axios from "axios";

import { reduxAction } from "../utils/redux/actions/action";
import CinemaLoading from "../assets/animations/cinema_animation.json";
import "../styles/App.css";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { withRouter } from "../utils/navigation";

const Homepage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  // simulasi pemanggilan
  function fetchData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        const { results } = res.data;
        setData(results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }

  const handleFav = (item) => {
    const tempLocal = localStorage.getItem("favMovie");
    if (tempLocal) {
      const temp = JSON.parse(tempLocal);
      temp.push(item);
      localStorage.setItem("favMovie", JSON.stringify(temp));
      dispatch(reduxAction("SET_FAVORITES", temp));
    } else {
      localStorage.setItem("favMovie", JSON.stringify([item]));
      dispatch(reduxAction("SET_FAVORITES", [item]));
    }
    alert("Added to favorite");
  };

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
              onClickFav={() => handleFav(item)}
              item={item}
            />
          ))}
        </div>
      </Layout>
    );
  }
};

export default withRouter(Homepage);
