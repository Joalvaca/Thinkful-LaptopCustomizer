import React from "react"

import TechSpecChoices from './TechSpecChoices';

export default function TechSpecs(props) {
  const features = Object.keys(props.features).map(key => {
    return (
      <div className='feature' key={key}>
        <div className='feature__name'>{key}</div>
        <TechSpecList
          selected={props.selected}
          features={props.features}
          key={key}
          tracker={key}
          updateFeature={props.updateFeature}
        />
      </div>
    );
  });

  return (
    <section className='main__form'>
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      {features}
    </section>
  );
}
export default TechSpecList 