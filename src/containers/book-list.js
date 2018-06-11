import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreater, bindActionCreators} from 'redux';

class BookList extends Component{

    renderList(){
        return this.props.books.map((book,index)=>{
            return <li 
            key={index}
            onClick={()=> this.props.selectBook(book)} 
            className="list-group-item">
            {book.title}
            </li>
        })
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    //Whatever si returned will show up as props inside of booklist
    return {
        books:state.books
    };
}

//Anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch){
    //Whenever selectbook is called, the result should be passed to all our reducers.
    return bindActionCreators({selectBook:selectBook},dispatch);
}

//Promote booklist from a component to a container - it needs to know 
//about this new dispatch method, selectBook. Make it availbale as prop
export default connect(mapStateToProps,mapDispatchToProps)(BookList);