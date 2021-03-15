import React from "react";

export const CreateElement = () =>
  React.createElement(
    "main",
    null,
    React.createElement("header", null, "Trying react"),
    React.createElement(
      "section",
      null,
      React.createElement("p", null, "Hi !"),
      React.createElement("p", null, "React is a JS component library")
    )
  );

export const CreateElementAsJsx = () => (
  <main>
    <header>Trying react</header>
    <section>
      <p>Hi !</p>
      <p>React is a JS component library</p>
    </section>
  </main>
);

export const Jsx = () => (
  <figure>
    <figcaption>Hi !</figcaption>
    <img src="https://example.com/image.jpg" />
  </figure>
);

export const JsxAsCreateElement = () =>
  React.createElement(
    "figure",
    null,
    React.createElement("figcaption", null, "Hi !"),
    React.createElement("img", { src: "https://example.com/image.jpg" })
  );
