import React from "react"
import TotalPrice from './TotalPrice';
import PartsSummary from './PartsSummary';

export default function Pricing(props) {
  const summary = Object.keys(props.selected).map(key => (
    <div className='summary__option' key={key}>
      <div className='summary__option__label'>{key} </div>
      <div className='summary__option__value'>{props.selected[key].name}</div>
      <div className='summary__option__cost'>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(props.selected[key].cost)}
      </div>
    </div>
  ));

  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );

  return (
    <section className='main__summary'>
      <h3>NEW GREENLEAF 2018</h3>
      <PartsSummary partSummary={summary} />
      <TotalPrice total={total} />
    </section>
  );
}