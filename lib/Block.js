var Element = require('./Element.js');

module.exports = class Block extends Element {

	constructor(width, height){
		this._width = width || null;
		this._height = height || null;
	}

	get width(){
		return this._width;
	}
	get height(){
		return this._width;
	}

	getCSS(){

	}

}