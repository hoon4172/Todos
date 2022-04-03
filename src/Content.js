import { Component } from "react";
import TodoList from "./TodoList.js";

export default class Content extends Component {
    constructor(props) {
		super(props);

		this.state = {
			itemNum: 0,
			items: []
		}
	}

    addItem() {
        const inputText = document.querySelector("#inputText");
        if(inputText.value){
            const tempArr = [...this.state.items];
            tempArr.push(<li>{inputText.value}</li>);
            this.setState({
                items: tempArr
            })
            inputText.value="";
        }
    }
    
	render() {
		return (
			<div>
				<input autocomplete="off" id="inputText" type="text" placeholder="입력"></input>
				<input type="button" value="↩"
					onClick={() => {this.addItem()}}></input>
                <TodoList items ={this.state.items}/>
			</div>
		);
	}
}