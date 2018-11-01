import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './Book/Book';

class App extends Component {

    state = {
        books: [
            {name: 'Java 8. Full guide', year: 2016, author: 'Герберт Шилдт'},
            {name: 'Angular 2', year: 2017, author: 'Google'},
            {name: 'Венские каникулы', year: 1978, author: 'Владимир Высоцкий'}
        ],
        isBooksShow: true
    };

    changeHeaderTitle(newTitle) {
        this.setState({
            pageTitle: 'Мои книги (' + newTitle + ')'
        });
    };

    inputHandler = (event) => {
        this.setState({
            pageTitle: 'Мои книги (' + event.target.value + ')'
        });
    };

    showBooksHandler = () => {
        this.setState({
            isBooksShow: !this.state.isBooksShow
        })
    };

    changeBookNameHandler = (name, index) => {
        const book = this.state.books[index];
        book.name = name;
        const books = [...this.state.books];
        books[index] = book;
        this.setState({
            books: books
        })
    };

    deleteHandler = (index) => {
        const books = [...this.state.books];
        const _index = index;
        this.setState({
            books: books.filter(function(value, index){
                return index !== _index;
            })
        })
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div style={{
                        display: 'flex'}}>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1>{this.props.title}</h1>
                    </div>

                    <div className="controlPanel">
                        <input type='test' onChange={this.inputHandler} />
                        <button onClick={this.changeHeaderTitle.bind(this, 'Changed')}>
                            Change title
                        </button>
                        <button onClick={this.showBooksHandler}>Show books</button>
                    </div>
                </header>
                <main className="App-main">
                    <div style={{display: 'flex'}}>
                        { this.state.isBooksShow ?
                            this.state.books.map((book, index) => {
                                return (
                                    <Book key={index}
                                          name={book.name}
                                          year={book.year}
                                          onChangeTitle={this.changeHeaderTitle.bind(this, book.name)}
                                          onChangeName={(event) => this.changeBookNameHandler(event.target.value, index)}
                                          onDelete={() => this.deleteHandler(index)}>
                                        <p>{book.author}</p>
                                    </Book>
                                )
                            }) : null }
                    </div>

                    {/*onChangeTitle={this.changeHeaderTitle.bind(this, books[0].name)}>*/}

                    {/*// так передавать не рекомендуется. Будет тормозить на больших проектах*/}
                    {/*onChangeTitle={() => this.changeHeaderTitle(books[1].name)}>*/}
                </main>
            </div>
        );

        // return React.createElement(
        //     'div',
        //     null,
        //     React.createElement(
        //         'h1',
        //         {
        //             className: 'App'
        //         },
        //         'Hello world!!'
        //     )
        // )
    }
}

export default App;
