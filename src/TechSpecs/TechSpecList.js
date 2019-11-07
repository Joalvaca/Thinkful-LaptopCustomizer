import React from "react"

import TechSpecChoices from './TechSpecChoices';

function TechSpecList(props) {
  const options = props.features[props.tracker].map((item, index) => {
    const selectedClass =
      item.name === props.selected[props.tracker].name
        ? 'feature__selected'
        : '';
    const featureClass = 'feature__option ' + selectedClass;
    return (
      <TechSpecChoices
        key={index}
        id={index}
        tracker={props.tracker}
        addClass={featureClass}
        updateFeature={props.updateFeature}
        item={item}
      />
    );
  });

  return (
    <div className='feature' key={props.key}>
      <div className='feature__name'>{props.key}</div>
      <ul className='feature__list'>{options}</ul>
    </div>
  );
}
export default TechSpecList 