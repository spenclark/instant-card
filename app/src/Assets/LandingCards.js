// this is a array of objects of card designes for the Sample Card Flow
// used bc they can tagged and easily searchable with javascript
// implemented in /LandingCarosuel

export const DesignedCards = [];

export const Card = (props) => {
  return (
    <div
      key={props.key}
      style={{
        width: "220px",
        height: "345px",
        background: "#EDEDED",
        borderRadius: "5px",
        boxShadow: "2px 1px 7px #c9c9c9",
      }}
    >
      {props.key}
    </div>
  );
};
