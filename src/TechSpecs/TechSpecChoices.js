import React from "react"

export default function TechSpechChoice(props) {
  return (
    <li key={props.id} className='feature__item'>
      <div
        className={props.addClass}
        onClick={e => props.updateFeature(props.tracker, props.item)}
      >
        {props.item.name}(
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(props.item.cost)}
        )
      </div>
    </li>
  );
}