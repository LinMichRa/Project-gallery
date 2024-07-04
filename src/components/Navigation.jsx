import React from 'react';
import { Link } from "react-router-dom";
import { Anime1 } from './Anime1';
import { Anime2 } from './Anime2';
import { Anime3 } from './Anime3';
import { Anime4 } from './Anime4';
import { Anime5 } from './Anime5';
import { Anime6 } from './Anime6';

const Navigation = () => {
  return (
    <div>
      <Link to="/anime1">
        <figure>
          <Anime1 />
          <figcaption>Anime 1</figcaption>
        </figure>
      </Link>

      <Link to="/anime2">
        <figure>
          <Anime2 />
          <figcaption>Anime 2</figcaption>
        </figure>
      </Link>

      <Link to="/anime3">
        <figure>
          <Anime3 />
          <figcaption>Anime 3</figcaption>
        </figure>
      </Link>

      <Link to="/anime4">
        <figure>
          <Anime4 />
          <figcaption>Anime 4</figcaption>
        </figure>
      </Link>

      <Link to="/anime5">
        <figure>
          <Anime5 />
          <figcaption>Anime 5</figcaption>
        </figure>
      </Link>

      <Link to="/anime6">
        <figure>
          <Anime6 />
          <figcaption>Anime 6</figcaption>
        </figure>
      </Link>
    </div>
  )
}

export default Navigation
