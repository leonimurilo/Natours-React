import React, {Component} from 'react';

class Composition extends Component {
  renderImages(){
    let imgs = [];
    for (let i = 1; i <= 3; i++) {
      imgs.push(<img key={i} src={this.props.photos["p"+i].url} alt={this.props.photos["p"+i].alt} className={"composition__photo composition__photo--p"+i}/>);
    }
    return(imgs);
  }

  render() {
    return (<div className="composition">
      {this.renderImages()}
    </div>);
  }

}

// requires 3 photos objects that must contain alt and url properties
function requirePhotos(props, propName, componentName) {
  for (let i = 1; i <= 3; i++) {
    if (!props[propName]["p" + i] || !props[propName]["p" + i].url || !props[propName]["p" + i].alt) {
      return new Error(`X'${componentName}' component requires p1, p2 and p3 to have url and alt properties.`);
    }
  }
}

Composition.propTypes = {
  photos: requirePhotos
};

export default Composition;
