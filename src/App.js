import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAccordion } from "./hooks/useAccordion";
import { routeList } from "./pages/config/routeList";
import { Accordion } from "./Accordion";
import {Skeleton} from "@mui/material";


const Menu = styled.div`
  width: 20%;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
`;

const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: #282c34;
`;

const Header = styled.header`
  text-align: center;
  color: #fff;
  background: #363c49;
  font-size: 2rem;
  font-family: monospace;
  padding: 1rem 0;
`;

const RightPart = styled.div`
  color: #fff;
  padding: 2rem;
  width: 80%;
  height: 50vh;

`;

function App() {
  const accordion = useAccordion({ list: routeList });
  return (
    <Router>
      <AppWrapper>
        <Header>React Examples</Header>
        <Content>
          <Menu>
            <Accordion {...accordion} />
          </Menu>
          <RightPart>
            <Switch>
              {routeList.map(({ childList }) =>
                childList.map(({ path, page, hasPage }, i) => {
                  const DynamicComponent = page;
                  return (
                    <Route path={path} key={path}>
                      {page ? <DynamicComponent /> : "Under Maintenance"}
                    </Route>
                  );
                })
              )}
            </Switch>
          </RightPart>
        </Content>
      </AppWrapper>
    </Router>
  );
}

export default App;
