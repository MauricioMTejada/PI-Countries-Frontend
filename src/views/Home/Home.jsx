import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPaises, } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import style from "./Home.module.css";
import Hero from "../../components/Paginado/Hero";

const Home = () => {

  // Solicito información de todos los países al servidor.
    // const dispatch = useDispatch();
    // useEffect(() => { dispatch(getPaises()); }, [dispatch]);

    return (
      <div className={style.background }>
          {/* <NavBar/> */}
          <Hero />
      </div>
    );
};

export default Home;
