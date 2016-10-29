import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			active : false
		};

		
	}

	updateDropDown(menu){
		if(!this.state.active){

			$(menu).addClass('transition visible');
			this.state.active = !this.state.active;
			
		}else{

			$(menu).removeClass('transition visible');
			this.state.active = !this.state.active;
		}

	}

	render(){
		return(
			<div>
			<MenuFile onClick={this.updateDropDown.bind(this,'#menuFiles')}/>
			</div>
		)
	}
	
}



class MenuTitle extends React.Component{
	render(){
		return(
			<div className="text">{this.props.children}</div>
		)
	}	
}

class IconeMenu extends React.Component{
	render(){
		return(
			<i className="dropdown icon"></i>
		)
	}
}


class MenuFile extends React.Component{
	render(){
		return(
			<div onClick={this.props.onClick} className='ui dropdown'>
				<MenuTitle>Files</MenuTitle>		
				<IconeMenu/>
				<MenuFileContent id='menuFiles' >New Files</MenuFileContent>
			</div>
		)
	}
}


class MenuFileContent extends React.Component{
	render(){
		return(
			<div id={this.props.id} className='menu'>
				<div className="item">New Files</div>
	 			<div className="item">
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


export default App;