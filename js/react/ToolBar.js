import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class ToolBar extends React.Component {

	render(){
	 	return (
	 		<div className="ui menu">
	 			<Item id='toolStrong'><i className="bold icon"></i></Item>
				<Item id='toolItalic'><i className="italic icon"></i></Item>
				<Item id='toolUrl'><i className="linkify icon"></i></Item>
				<Item id='toolImg'> <i className="image icon"></i></Item>
				<Item id='toolTitle'><i className="text height icon"></i></Item>
				<Item id='toolOrderList'><i className="ordered list icon"></i></Item>
				<Item id='toolUnorderedList'><i className="unordered list icon"></i></Item>
				<Item id='toolCode'><i className="code icon"></i></Item>
				<Item id='toolHr'><i className="ellipsis horizontal icon"></i></Item>
	 		</div>
	 	)
	}

}

class Item extends React.Component {
	render(){
		return(
			<a id={this.props.id} className="item">{this.props.children}</a>
		)

	}
}


export default ToolBar;
