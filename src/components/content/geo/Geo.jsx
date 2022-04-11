import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGeo } from "../../../store/slices/geo";

const Geo = () => {
  const dispatch = useDispatch();
  const { countries: countries, cities: cities } = useSelector(
    (state) => state.geo
  );
  const [geoSelected, setGeoSelected] = useState("countries");
  useEffect(() => {
    dispatch(setGeo());
  }, [dispatch]);
  return (
    <article className="geo-box">
      <div className="title">
        <h3>Geo</h3>
      </div>
      <div className="labels">
        <span
          className={geoSelected == "countries" ? "geo-active" : ""}
          onClick={() => {
            setGeoSelected("countries");
          }}
        >
          Country
        </span>
        <span
          className={geoSelected == "cities" ? "geo-active" : ""}
          onClick={() => {
            setGeoSelected("cities");
          }}
        >
          City
        </span>
      </div>
      {geoSelected == "countries" ? (
        <div className="countries">
          <div className="values">
            {countries.map((el) => (
              <div className="country">
                <div className="title">
                  <span className="name">{el.name}</span>
                  <span className="number">{el.value}%</span>
                </div>
                <div className="progress">
                  {/* <div className="value" style={{ width: el.value }}></div> */}
                  <div
                    className="value"
                    style={{ transform: `translateX(${-100 + el.value}%)` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="cities">
          <div className="values">
            {cities.map((el) => (
              <div className="country">
                <div className="title">
                  <span className="name">{el.name}</span>
                  <span className="number">{el.value}%</span>
                </div>
                <div className="progress">
                  {/* <div className="value" style={{ width: el.value }}></div> */}
                  <div
                    className="value"
                    style={{ transform: `translateX(${-100 + el.value}%)` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default Geo;
