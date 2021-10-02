import React from "react";

// component

const About = () => {
  return (
    <article className="about">
      <h1>About</h1>

      <p>
        Tato webová aplikace je vytvořena díky turotiálu na <a href="https://learn2code.cz/aplikace/skupiny#/react/chapters/01-react">learn2code.cz</a>&nbsp;
        a jedná se o vyhledávání v písniček v iTunes databazi. App postavena na React.js a Typescript. Dále je na Css použito experimentálně Sass.
        Málou funkcí vypoumůže JS knihovna Lodash.
      </p>

    </article>
  );
};

export default About;
