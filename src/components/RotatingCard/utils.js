export function validateColor(props, propName, componentName){
  componentName = componentName || 'RotatingCard';

  if(!props[propName] || typeof props[propName] !== 'string'){
    return new Error(`'${componentName}' component requires a valid color: primary, secondary, tertiary ...`);
  }
}
