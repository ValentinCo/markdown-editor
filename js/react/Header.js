import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			filesActive : false,
			helpActive : false,
		}
	}
	
	onToogle(menu){

		this.setState({
			[menu+'Active'] : this.state[menu+'Active'] ? false : true
		})

		for(var key in this.state){
			if(key !== [menu+'Active']){
    			this.state[key] = false;
    		}
		}	

	}

	itemCloseToogle(){

		for(var key in this.state){
    		this.state[key] = false;
		}	

		this.setState({
			state: this.state
		})

	}

	render(){
		const files = this.state.filesActive ? 'menu transition visible' : 'menu transition hide';
		const help = this.state.helpActive ? 'menu transition visible' : 'menu transition hide';
		const itemCloseToogle = this.itemCloseToogle.bind(this);
		return(
			<header>
				<Menu onToogle={this.onToogle.bind(this, 'files')}  className={files} title='Files' onClick={itemCloseToogle}>
					<Item id='newFile'>New file </Item>
					<Item id='open' description='ctrl + 0'> Open </Item>
					<Item id='saveAs' description='ctrl + s'> Save </Item>
					<Item id='save' description='ctrl + alt + s'> Save As </Item>
				</Menu>
				<Menu onToogle={this.onToogle.bind(this, 'help')}  className={help} title='Help' onClick={itemCloseToogle}>
					<Item> Info </Item>
					<Item> ? </Item>
				</Menu>
			</header>
		)
	}
}


class Menu extends React.Component{
	render(){
		const {title, onToogle, className, children, onClick} = this.props;
		return(
			<div className='ui dropdown'>
				<div className='text white' onClick={onToogle}>
					{title}
					 <i className="dropdown icon"></i>
				</div>
				<div onClick={onClick} className={className}>
					{children}
				</div>
			</div>
		)
	}

}


class Item extends React.Component{
	render(){
		const {children, description, id} = this.props
 		return( 
 			<div id={id} className='item'>
 				<span className="description">{description}</span>
 			 	{children} 
 			 </div>

 		)
	}
}

export default App;