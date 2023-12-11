import React from 'react';

//Prend un array en props et en fait l'affichage d'un des arguments de vente de ArgenBank
function Features(item) {
   const props = item.props
   return (
      <div className="feature-item">
         <img src={props.icon} alt={props.alt} className="feature-icon" />
         <h3 className="feature-item-title">{props.title}</h3>
         <p>{props.description}</p>
      </div>
   );
};

export default Features;