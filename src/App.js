import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import ModelProvider from "./context/providers/ModelProvider";

import NavProvider from "./context/providers/NavProvider";
import Toggle from "./components/Toggle";
import DestinationProvider from "./context/providers/DestinationProvider";
import SharedProvider from "./context/providers/SharedProvider";
import GalleryProvider from "./context/providers/GalleryProvider";
import AnimationsProvider from "./context/providers/AnimationsProvider";
import React,{Suspense} from "react";
import Nav from "./components/Nav";
import LoadingSpinner from "./components/shared/LoadingSpinner";

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Details = React.lazy(() => import('./pages/Details'));
const Contact = React.lazy(() => import('./pages/Contact'));


function App() {
    return (
        <Router>
            <Suspense fallback={<div className="center"><LoadingSpinner/></div>}>
            <ModelProvider>
                <NavProvider>
                    <GalleryProvider>
                        <DestinationProvider>
                            <SharedProvider>
                                <AnimationsProvider>
                                    <Toggle/>
                                    <Nav/>
                                    <HelmetProvider>
                                        <Switch>
                                            <Route path='/' exact component={Home}/>
                                            <Route path='/about' exact component={About}/>
                                            <Route path='/contact' exact component={Contact}/>
                                            <Route path='/details/:id' exact component={Details}/>
                                            <Route component={NotFound}/>
                                        </Switch>
                                    </HelmetProvider>
                                </AnimationsProvider>
                            </SharedProvider>
                        </DestinationProvider>
                    </GalleryProvider>
                </NavProvider>
            </ModelProvider>
            </Suspense>
        </Router>
    );
}

export default App;
