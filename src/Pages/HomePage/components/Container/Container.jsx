import React from "react";
import classes from "./Container.module.css";
import Header from "../../../../components/Header";
import TypingText from "../TypingText/TypingText";
import Button from "../../../../components/Button";
import { Link } from "react-router-dom";

const Container = () => {
  return (
    <div className={classes.container}>
      <div className={classes.overlay}></div>
      <video
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={require("./media/chiron-sport-intro-desktop.mp4")}
          type="video/mp4"
        />
      </video>
      <Header />
      <div>
        <h2>ЛУЧШЕЕ ТЮНИНГ-АТЕЛЬЕ РОССИИ</h2>
        <h1>4MOTION</h1>
        <h3>
          Мы не просто делаем автомобили лучше, мы превращаем их в что-то
          поистине впечатляющее, что не оставит равнодушным случайного прохожего
          и подарит незабываемые впечатления водителю.
        </h3>
        <Link to="/help">
          <Button title="Сделай этот шаг" />
        </Link>
      </div>
      <TypingText
        className={classes.typing}
        phr1="Если не можешь быть лучшим - будь уникальным. ©Айртон Сенна"
        phr2="Если у тебя есть мечта, ты должен сделать всё возможное, чтобы её достичь. ©Михаэль Шумахер"
      />
    </div>
  );
};

export default Container;
