import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Container from "./component/Container";
import Home from "./component/Home";
import New from "./component/New";
import List from "./component/List";

const App = () => {
    return (
        <Router>
            <div>
                <Container>
                    <nav
                        style={{
                            margin: "0 auto",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <h2 style={{ flexGrow: 4 }}>Brand_Back</h2>
                        <div
                            style={{
                                flexGrow: 1,
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Link to="/">Home</Link>
                            <Link to="/new">Ecrire un post</Link>
                            <Link to="/posts">Tout les posts</Link>
                        </div>
                    </nav>
                </Container>
            </div>

            <Switch>
                <Container>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/new" component={New} />
                    <Route exact path="/posts" component={List} />
                </Container>
            </Switch>
        </Router>
    );
};

export default App;
