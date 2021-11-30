import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAccordion } from "./hooks/useAccordion";
import { PracticeRef } from "./pages/PracticeRef";
import { ComeAgain } from "./pages/ComeAgain";
import { Accordion } from "./Accordion";
import { AddElement } from "./pages/AddElement";

const accList = [
  {
    title: "cuteLuna",
    childList: [
      {
        title: "Come Again",
        path: "/ComeAgain",
        page: ComeAgain,
      },
      {
        title: "Practice Ref",
        path: "/practice-ref",
        page: PracticeRef,
      },
    ],
  },
  {
    title: "fruitsBasket",
    childList: [
      { title: "Add Element", path: "/add-element", page: AddElement },
      { title: "sea", path: "/" },
      { title: "pool", path: "/" },
    ],
  },
];

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
  const accordion = useAccordion({ list: accList });
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
              {accList.map(({ childList }) =>
                childList.map(({ path, page, hasPage }) => {
                  const DynamicComponent = page;
                  return (
                    <Route path={path}>
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
