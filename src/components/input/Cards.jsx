import "./Cards.css";

const Cards = () => {
  return (
    <div className="cardsFather">
      <div className="card">
        <div className="cardImg">
          <img
            src="https://picsum.photos/id/1/100/100"
            alt=""
            className="imgCard"
          />
          <div className="cardText">
            <h3 className="nameCard">Jon Dou</h3>
            <p className="relationCard">Parent</p>
            <p className="telCard">(+998) 99844-56-64</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
