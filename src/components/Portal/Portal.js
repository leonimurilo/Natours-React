import ReactDOM from 'react-dom';
import React16Portal from './React16Portal';
import DOMPortal from './DOMPortal';

export default ReactDOM.createPortal ? React16Portal : DOMPortal;
