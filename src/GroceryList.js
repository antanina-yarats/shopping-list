import { Component } from 'react';
import tomatoes from './tomatoes.jpg';
import mark from './mark.jpg';

export class GroceryList extends Component{
    state = {
        userInput: "",
        groceryList: []
    }


    onChangeEvent(e){
        this.setState({userInput: e});
        
    }

    addItem(item){

        if(item === ""){
            alert('Please enter item')
        }

        else{
            let listArrow = this.state.groceryList;
            listArrow.push(item);
            this.setState({userInput: "", groceryList: listArrow});
        }
       
    }

    crossedWord(event){
      const li = event.target;
      li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList:listArray});
    }

    onSubmitForm(e){
        e.preventDefault();
    }



    render(){
        return ( 
            <div className="wrapper">
        
            <div className="green">
            <form onSubmit={this.onSubmitForm}>

               <div className="pictureBox">
                <img className="tomato" src={tomatoes} alt="tomatoes" width="200px" />
                </div>

               <div className="center">
                <h1>GROCERY LIST</h1>
               </div>



               <div className="center">
                <input type="text" placeholder="What do you want to buy?" value={this.state.userInput}
                onChange={(e) => this.onChangeEvent(e.target.value)}/>
               </div>

               <div className="center">
                <button className="add btn" onClick={()=> this.addItem(this.state.userInput)}>ADD ITEM</button>
               </div>

               <div className="center">
                <button className="delete btn" onClick={()=> this.deleteItem()}>DELETE ITEMS</button>
               </div>
               
               
               <ul>
                {this.state.groceryList.map((item, index) => (
                  <li onClick={this.crossedWord} key="index">
                    <img className="tick" src={mark} alt="tick" width="20px"/>{item}
                    </li>
                )
                )}
                
        
               </ul>
               

               </form>   
            </div>

        
            </div>
        )
    }
}