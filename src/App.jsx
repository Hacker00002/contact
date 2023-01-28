import { useState } from "react";
import "./App.css";
import Cards from "./components/input/Cards";
import Shokhjahon from "./assets/img/5377597198793032607_121.jpg";
import Muhammadqodir from "./assets/img/5233741521231134382_99.jpg";
import Elbek from "./assets/img/5242288622114293870_99.jpg";

function App(props) {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [tel, setTel] = useState("");
  const [img, setImg] = useState("");
  const [contact, setContact] = useState([
    {
      id: 1,
      name: "Shoxjahonaka",
      relation: "Friend",
      tel: "900005000",
      img: Shokhjahon,
    },
    {
      id: 2,
      name: "Muhammadqodir",
      relation: "Friend",
      tel: "900550777",
      img: Muhammadqodir,
    },
    {
      id: 3,
      name: "Elbek",
      relation: "Friend",
      tel: "975707070",
      img: Elbek,
    },
  ]);
  const addContactHandler = (evt) => {
    evt.preventDefault();
    let newContact = {
      id: Math.random().toString(),
      name: name,
      relation: relation,
      tel: tel,
      img: img,
    };
    if (name === "" || relation === "" || tel === "" || img === "") {
      return name;
    }
    setContact([...contact, newContact]);
    setName("");
    setRelation("");
    setTel("");
    setImg("");
  };
  const deleteContactHandler = (id) => {
    const results = contact.filter((contact) => {
      if (contact.id !== id) {
        return contact;
      }
    });
    setContact(results);
  };

  return (
    <div className="container">
      <div className="App">
        <div className="allContentFather">
          <div className="father">
            <form className="form">
              <div className="name">
                <i class="fa-solid icons fa-file-signature"></i>
                <input
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Name"
                  className="AddName"
                />
              </div>
              <div className="name">
                <i class="fa-solid icons fa-people-roof"></i>
                <input
                  required
                  onChange={(e) => setRelation(e.target.value)}
                  value={relation}
                  type="text"
                  placeholder="Relation"
                  className="AddRelation"
                />
              </div>
              <div className="name">
                <i class="fa-solid icons fa-phone"></i>
                <input
                  required
                  onChange={(e) => setTel(e.target.value)}
                  value={tel}
                  type="number"
                  placeholder="Telephone num"
                  className="AddTel"
                />
              </div>
              <div className="name">
                <i class="fa-regular icons fa-images"></i>
                <input
                  required
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  type="url"
                  placeholder="Image"
                  className="AddImg"
                />
              </div>
              <button onClick={addContactHandler} type="submit">
                Add contact
              </button>
            </form>
          </div>
          {/* add */}
          <Cards
            deleteContacts={deleteContactHandler}
            key={contact.id}
            contact={contact}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
