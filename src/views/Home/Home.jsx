import NavBar from "../../components/NavBar/NavBar";
import style from "./Home.module.css";
import Hero from "../../components/Paginado/Hero";

const Home = () => {

    return (
      <div className={style.background }>
          <NavBar/>
          <Hero />
      </div>
    );
};

export default Home;
