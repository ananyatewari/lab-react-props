import { Component } from "react";
import "./App.css"
// import elephant from "./images/elephant.jpeg";
// import data from "./components/DataComponent.jsx"

export default class AppClass extends Component{
  // code here
  render() {

    let imgobject = this.props.images;
    let imgarr = [];
    
    imgobject.forEach(e => {
      imgarr.push(
        <img src={e.img} key={`number${e.id}`}/>
        )
      });
      
      return (
      <section>
        <h1>Gallery for AppClass.jsx</h1>
        <div className="gallery">
          {imgarr}
        </div>
    </section>
  )
}
}

