import "./App.css";
import Adminpage from "./pages/adminpage.component";
// import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
// import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
// import CollectionPreview from "./components/preview-collection/preview-collection.component";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Adminpage} />
				{/* <Route path="/signin" component={SignInAndSignUpPage} /> */}
				{/* <Route path="/shop" component={ShopPage} /> */}
				{/* <Route path="/collection" component={CollectionPreview} /> */}
			</Switch>
		</div>
	);
}

export default App;
