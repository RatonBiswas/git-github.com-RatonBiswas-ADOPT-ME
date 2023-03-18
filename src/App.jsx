// import React from "react";
import {createRoot} from "react-dom";
import Pet from "./pet"
// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.bread),
//   ]);
// };

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Buddy",
  //     animal: "Cat",
  //     bread: "Bread",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     bread: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Papers",
  //     animal: "Bird",
  //     bread: "Cocktail",
  //   }),
  // ]);
 
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Buddy" animal="Cat" bread="Bread"/>
      <Pet name="Luna" animal="Dog" bread="Havanese"/>
      <Pet name="Papers" animal="Bird" bread="Cocktail"/>
    </div>
  
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
