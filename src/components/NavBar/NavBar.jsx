import { Link, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";

const NavBar = () => {
    const dispatch = useDispatch()
    const location = useLocation();

    // Cadena a Buscar:
        const [searchString, setSearchString] = useState("");

    // Detecta cambios a la entrada:
        function handleChange(event) {
            event.preventDefault();
            setSearchString(event.target.value);
            // console.log(searchString);
          }

    // Submit:
        function handleSubmit(event) {
            event.preventDefault();
            if(searchString === "") {
              alert("Coloque el nombre de un país.");
              } else { dispatch(getByName(searchString)); }
              //setCurrentPage(1);
              }

    const styleButton = {
      height: "24px",
      padding: "0px",
      display: "flex",
      alignSelf: "flex-end"
    }

    const styleText = { fontWeight: "bold", color: "#310336"}
    const styleDiv = { display: "flex",  alignItems: "center"};

  return (
    <div className={style.mainContainer}>
    {/* <div> */}

      <Link to="/home" style={styleText}>Home</Link>
      <Link to="/create" style={styleText}>Form</Link>

      <div style={styleDiv}>
          {location.pathname === "/create" ? (
            <div style={{ width: '228px', height: '23px' }}/>) : (

            <form onChange={handleChange}>
              <div className={style.formContainer}>
                <input placeholder="Buscar" />
                <button type="submit" onClick={handleSubmit} style={styleButton}>
                  Buscar
                </button>
              </div>
            </form>
          )}
      </div>

    </div>
  );
};

export default NavBar;
