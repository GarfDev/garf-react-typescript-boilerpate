import React from 'react';
import { useDispatch } from 'react-redux';
import { setImage } from '../actions';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default function Homepage() {
  const dispatch = useDispatch();

  const handleOnMouseHover = () => {
    dispatch(
      setImage(
        // eslint-disable-next-line max-len
        'https://images.unsplash.com/photo-1588783948922-d2f155b13c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=920&q=80',
      ),
    );
  };

  return (
    <Container>
      <Link
        to="/image"
        onMouseEnter={() => {
          handleOnMouseHover();
        }}
      >
        GOOOOOOO
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
