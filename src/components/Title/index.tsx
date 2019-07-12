import React from 'react';
import PropTypes from 'prop-types';

interface ITitleProps {
  content: string;
}

export const Title = ({ content }: ITitleProps): JSX.Element => {
  return <h1>{content}</h1>;
};

Title.propTypes = {
  content: PropTypes.string.isRequired,
};
