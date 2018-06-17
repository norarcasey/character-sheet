import React from 'react';

export const concatPropNames = (name, propArray) => {
  if (propArray.length < 1) return '';
  let propNames = propArray.map(p => p.name);
  return (
    <p>
      <label>{name}:</label>
      {propNames.join(', ')}
    </p>
  );
};

export const getDetails = details => {
  let results = [],
    hideProps = ['index', 'name', 'ability bonuses'];
  for (var propName in details) {
    let displayName = propName.replace('_', ' '),
      obj = { name: displayName },
      value = details[propName];

    if (hideProps.indexOf(displayName) !== -1) {
      continue;
    }

    console.log(displayName, typeof value, value.constructor === Array);

    switch (value.constructor) {
      case String:
      case Number:
        obj.value = value;
        results.push(obj);
        break;
      case Array:
        console.log(value);
        if (value.length > 0) {
          obj.value = value.map(val => val.name).join(', ');
          results.push(obj);
        }
        break;
    }
  }
  return results;
};
