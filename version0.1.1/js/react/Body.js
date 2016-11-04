import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Body extends React.Component{
	constructor(){
		super();
		this.state = {
		 value:null,
		}
	}

	update(e){

		var showdown  = require('showdown'),
    	converter = new showdown.Converter(),
   	 	text      = e.target.value,
   	 	html = converter.makeHtml(text);

		
		this.state.value = html
		

		$('#viewMarkdown').html(this.state.value);
	}

	
	render(){
		return(
			<div className="container">
			<Textarea onChange={this.update.bind(this)} class="setMarkdownTextarea" placeholder="Enter your markdown" ></Textarea>
			<ViewMarkdown/>
			</div>
		)
	}
}

class Textarea extends Body{
	render(){
		return(
			<textarea className={this.props.class}  placeholder={this.props.placeholder} onChange ={this.props.onChange}></textarea>
		)
	}
}

class ViewMarkdown extends Body{
	render(){
		return(
			<div id="viewMarkdown" className="viewMarkdown"></div>
		)
	}
}
export default Body;