import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Header extends React.Component{
	constructor(){
		super();
		this.state = {
			active : false,
		};

		
	}

	updateDropDown(menu){

		$(menu).addClass('transition visible');
		$(menu).removeClass('lala');
		$('.lala').removeClass('transition visible')
		$(menu).addClass('lala');
		
	}

	close(){

		$('.lala').removeClass('transition visible')
	}

	

	render(){
		return(
			<div>
			<MenuFile onMouseOut={this.close} onMouseOver={this.updateDropDown.bind(this, '#menuFiles')}/>
			<MenuHelp onMouseOut={this.close} onMouseOver={this.updateDropDown.bind(this, '#menuHelp')}/>
			</div>
		)
	}
	
}



class MenuTitle extends React.Component{
	render(){
		return(
			<div className="text white">{this.props.children}</div>
		)
	}	
}

class IconeMenu extends React.Component{
	render(){
		return(
			<i className="dropdown icon white"></i>
		)
	}
}


class MenuFile extends React.Component{
	render(){
		return(
			<div onMouseOut={this.props.onMouseOut} onMouseOver={this.props.onMouseOver} className='ui dropdown'>
				<MenuTitle>Files</MenuTitle>		
				<IconeMenu/>
				<MenuFileContent  id='menuFiles'></MenuFileContent>
			</div>
		)
	}
}


class MenuFileContent extends Header{
	constructor(){
		super();
		this.state = {id:'tralala'}
	}
	onClick(){
		this.close();
	}
	render(){
		return(
			<div id={this.props.id} className='menu lala'>
				<div className="item">New Files</div>
	 			<div onClick={this.onClick.bind(this)} className="item">
	 				<span className="description">ctrl + o</span>
	 				Open...
	 			</div>
	 			<div className="item">
	 				<span className="description">ctrl + s</span>
	 				Save as...
	 			</div>
			</div>
		)
	}
}

class MenuHelp extends React.Component{
	render(){
		return(
			<div onMouseOut={this.props.onMouseOut} onMouseOver={this.props.onMouseOver} className='ui dropdown'>
				<MenuTitle>Help</MenuTitle>		
				<IconeMenu/>
				<MenuHelpContent id='menuHelp' ></MenuHelpContent>
			</div>
		)
	}
}

class MenuHelpContent extends React.Component{
	render(){
		return(
			<div id={this.props.id} className='menu lala'>
				<div className="item">Info ?</div>
	 			<div className="item">Learn Markdown</div>
			</div>
		)
	}
}

export default Header;