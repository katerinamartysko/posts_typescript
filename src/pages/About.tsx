import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <h1>
      Этот сайт отображает мои навыки работы с typescript
      <br />
      <Link to="/">ПОСТЫ</Link>
    </h1>
  );
};

export default About;
