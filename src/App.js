import "./App.css";
import Adminpage from "./pages/adminpage.component";
import Header from "./components/header/header.component";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Adminpage} />
			</Switch>
		</div>
	);
}

export default App;
