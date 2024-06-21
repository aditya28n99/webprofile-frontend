// Loader.jsx
import React from 'react';
import styled from 'styled-components';
import LoaderGif from '../../images/GIF/Opener Loading.gif'

const LoaderWrapper = styled.div`
  display: flex;
`;

const LoaderImage = styled.img`
  width: 100px; /* Adjust size as needed */
  height: 100px;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderImage src={LoaderGif} alt="Please Wait: Loading..." />
    </LoaderWrapper>
  );
};

export default Loader;
