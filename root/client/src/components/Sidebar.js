import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { connect } from "react-redux";

import { getLists } from "../redux/lists/actions";

const Container = styled.div`
  width: 20rem;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  color: white;
`;

const Content = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  font-size: 1.6rem;
`;

const Item = styled.div`
  margin-bottom: 1.6rem;
`;

const ListItem = styled.div`
  margin-left: 0.25rem;
  font-size: 1.2rem;
`;

const Sidebar = ({ lists, getLists }) => {
  useEffect(() => {
    getLists();
    // const fetchData = async () => {
    //   const result = await axios.get(url, { params });
    //   setMovies(result.data);
    // };

    // fetchData();
  }, []);

  return (
    <Container>
      <Content>
        <Item>
          <Link to="/">Home</Link>
        </Item>
        <Item>
          Lists In Progress
          {lists && lists.map(list => <ListItem>{list}</ListItem>)}
        </Item>
        <Item>Vote</Item>
      </Content>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    lists: state.lists.lists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLists: () => dispatch(getLists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
