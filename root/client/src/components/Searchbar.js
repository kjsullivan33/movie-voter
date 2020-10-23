import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  margin-right: 1.6rem;
`;

const Input = styled.input`
  font-size: 1.2rem;
  margin-left: 0.5rem;
  width: 30rem;
  padding: 0.5rem;
`;

const Searchbar = ({ search, handleChange, handleKeypress, handleSubmit }) => {
  return (
    <Container>
      <Label>
        Find a movie:
        <Input
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeypress}
        />
      </Label>
      <button onClick={handleSubmit} type="submit">
        Search
      </button>
    </Container>
  );
};

export default Searchbar;
