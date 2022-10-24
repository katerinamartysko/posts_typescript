import React from 'react';

interface Props {
  error: string | null;
}

const Error = ({ error }: Props) => {
  if (!error) return null;
  return <p className="error">{error}</p>;
};

export default Error;
