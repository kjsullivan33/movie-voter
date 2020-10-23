import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("#root");

const options = ["October 25", "November 1", "November 8", "November 15"];

const Container = styled.div`
  position: relative;
`;

const AddButton = styled.button`
  font-size: 1.2rem;
  width: 15rem;
  padding: 0.5rem;
  background-color: #dee0df;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #bfbfbf;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  z-index: 100;
  background-color: white;
  border: 1px solid #cccccc;
  border-radius: 2px;
`;
const DropDownOptions = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #cccccc;
  }
`;

const StyledModal = styled(Modal)`
  width: 15rem;
  height: 10rem;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  background-color: white;
  outline: none;
  border: 1px solid black;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Close = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  cursor: pointer;
`;

const Message = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddDropdown = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const toggleModal = () => {
    setDropdownOpen(false);
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <Container>
        <AddButton onClick={toggleDropdown}>Add to a List</AddButton>

        {dropdownOpen && (
          <Dropdown ref={ref}>
            {options.map(option => (
              <DropDownOptions onClick={toggleModal}>{option}</DropDownOptions>
            ))}
            <button>Create List</button>
          </Dropdown>
        )}
      </Container>
      <StyledModal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Add Movie"
      >
        <Content>
          <Close onClick={toggleModal}>X</Close>
          <Message>Movie Added</Message>
        </Content>
      </StyledModal>
    </div>
  );
};

export default AddDropdown;
