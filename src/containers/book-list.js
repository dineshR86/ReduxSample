import React,{Component} from 'react';
import {connect} from 'react-redux';


class BookList extends Component{

    renderList(){
        return this.props.books.map((book,index)=>{
            return <li key={index} className="list-group-item">{book.title}</li>
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

export default connect(mapStateToProps)(BookList);