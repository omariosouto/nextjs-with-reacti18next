import React from 'react';
import PropTypes from 'prop-types';

interface TitleProps {
  content: string;
}

export const Title = ({ content }: TitleProps): JSX.Element => {
  return <h1>{content}</h1>;
};

Title.propTypes = {
  content: PropTypes.string.isRequired,
};
