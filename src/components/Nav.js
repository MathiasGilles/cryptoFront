import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./HomePage/Home";
import User from "./User/User";
import {Li, Nav, Ul, NavLink} from "../styles/Nav.styles";

function NavBarre() {
    return (
        <BrowserRouter>
            <Nav>
                <Ul>
                    <Li>
                        <NavLink href="/">Home</NavLink>
                    </Li>
                    <Li>
                        <NavLink href="/user">User</NavLink>
                    </Li>
                </Ul>
            </Nav>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/user" component={User}/>
            </Switch>
        </BrowserRouter>
    )
}

export default NavBarre