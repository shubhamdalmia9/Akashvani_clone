// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Firstpage from "./Pages/Firstpage";
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Firstpage} />
        <Route path="/Home" component={Homepage} />
        <Route path="/chats" component={Chatpage} />
      </div>
    </Router>
  );
}
export default App;
