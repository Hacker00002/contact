import "./Cards.css";

const Cards = (props) => {
  return (
    <div className="cardsFather">
      {props.contact.map((elem) => {
        return (
          <div onClick={() => props.deleteContacts(elem.id)} className="card">
            <div className="cardImg">
              <img src={elem.img} alt="" className="imgCard" />
              <div className="cardText">
                <h3 className="nameCard">{elem.name}</h3>
                <p className="relationCard">{elem.relation}</p>
                <p className="telCard">(+998){elem.tel}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
