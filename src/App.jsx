import './App.css';
// import elephant from "./images/elephant.jpeg";
// import imageData from './components/DataComponent.jsx';
// import data from "./components/DataComponent.jsx"

function App(props) {
  // code here
  let imgobject = props.images;
  let imgarr = [];

  imgobject.forEach(e => {
    imgarr.push(
      <img src={e.img} key={`number${e.id}`}/>
    )
  });

  return (
    <section>
      <h1>Gallery for App.jsx</h1>
      <div className="gallery">
        {imgarr}
      </div>
    </section>
  )
}

export default App;
