import React from "react";
import Person from "./Person";

function List() {
  const names = ["bruce", "clarke", "diana"];
  const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>);
//   const persons = [
//     {
//       id: 1,
//       name: "Bruce",
//       age: 30,
//       skill: "React",
//     },
//     {
//       id: 2,
//       name: "clarke",
//       age: 3,
//       skill: "Vue",
//     },
//     {
//       id: 3,
//       name: "Diana",
//       age: 43,
//       skill: "Js",
//     },
//   ];
//   const personList = persons.map((person) => (
//     <Person key={person.id} person={person}></Person>
//   ));
  return <div>{nameList}</div>;
}

export default List;
