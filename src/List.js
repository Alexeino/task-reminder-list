import React from 'react';
import data from './data';
import { MdDeleteForever, MdPeople } from 'react-icons/md';
import './App.css';

const List = () => {
  const [people, setPeople] = React.useState(data);
  console.log(people);
  const removeSingleItem = id => {
    let newList = people.filter(person => person.id !== id);
    setPeople(newList);
    if (newList.length === 0) {
      document.getElementById('btn').innerHTML = 'Refresh List';
    }
  };

  const deleteAll = () => {
    if (people.length > 0) {
      setPeople([]);
      document.getElementById('btn').innerHTML = 'Refresh List';
    } else {
      setPeople(data);
      document.getElementById('btn').innerHTML = 'Delete All';
    }
  };
  //   console.log(data);
  return (
    <div className="list_container">
      <h3>{people.length} tasks today</h3>

      {people.map(person => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="list_item">
            <img className="first_flex" src={image} alt="Img" />
            <div className="second_flex">
              <h3>{name}</h3>
              <p>{age}</p>
            </div>
            <p
              onClick={() => {
                {
                  removeSingleItem(id);
                }
              }}
              className="third_flex"
            >
              <MdDeleteForever />
            </p>
          </article>
        );
      })}
      <button onClick={() => deleteAll()} type="button" id="btn">
        Delete All
      </button>
    </div>
  );
};

export default List;
