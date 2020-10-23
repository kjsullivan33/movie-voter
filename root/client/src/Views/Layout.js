import React from "react";
import styled from "styled-components";

import Sidebar from "../components/Sidebar";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Content = styled.div`
  padding: 2rem;
  margin-left: 20rem;
  width: 100%;
`;

const Layout = ({ children }) => (
  <Container>
    <Sidebar />
    <Content>{children}</Content>
  </Container>
);

export default Layout;
