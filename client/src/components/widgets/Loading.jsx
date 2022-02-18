import React from 'react';
import { RingLoader } from 'react-spinners';
import { css } from "@emotion/react";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

// Loading...
const Loading = ({color, size}) => {
    return (
        <RingLoader 
            color={color} 
            loading={true} 
            css={override} 
            size={size} 
        />
    );
};

export default Loading;