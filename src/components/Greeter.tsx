import React, { type JSX } from "react";

interface Person {
  name: string;
}

function Greeter({ name }: Person): JSX.Element {
  return <h1>Hello! {name}</h1>;
}

export default Greeter;
