import React, { useState } from "react";

// styles
import './views.css';

// assets
import logo from '../assets/logo.svg';
import { AiFillGithub } from 'react-icons/ai';

const Home = () => {

  const [title] = useState('React Tunes');

  return (
	<div className="home">
			<img className="logo" src={logo} alt="react logo" />
			<h1>{title}</h1>
			<p>
				Jednoduchá react aplikace <br />
				pusť si 30 vteřinovou ukázku. <br />
				Zdroj najdeš na&nbsp;
				<a
					href="https://github.com/jeptun/React-Tunes"
					target="_blank"
					rel="noopener noreferrer"
				>
				Github.<AiFillGithub />
				</a>
				
			</p>
		</div>
  );
};

export default Home;
