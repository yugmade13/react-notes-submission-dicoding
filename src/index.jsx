import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import { getInitialData } from './utils/index'

import './style/style.scss'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            initialData: getInitialData(),
            query: []
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmitValue = this.handleSubmitValue.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleArchive = this.handleArchive.bind(this);
    }

    handleSearch(event) {
        const query = event.target.value.toLowerCase();
        this.setState({ query: query })
    }

    handleSubmitValue(data) {
        this.setState((prev) => {
            return {
                initialData: [
                    ...prev.initialData,
                    data
                ]
            }
        });
    }

    handleDelete(data) {
        const deleteItem = this.state.initialData.filter((item) => item.id !== data.id);
        this.setState({ initialData: deleteItem });
    }

    handleArchive(data) {
        if(data.archived) {
            data.archived = false;
        } else {
            data.archived = true;
        } 

        this.setState([...this.state.initialData, data]);
    }

    render() {

        const filterDataQuery = this.state.initialData.filter((item) => {
            if (this.state.query === '') {
                return item;
            } else {
                return item.title.toLowerCase().includes(this.state.query);
            }
        })

        return (
            <React.Fragment>
                <Header handleSearch={this.handleSearch} />
                <Form addSubmitValue={this.handleSubmitValue} />
                <div className="container">
                    <List
                        archived={this.handleArchive}
                        delete={this.handleDelete}
                        isArchived={false}
                        data={filterDataQuery.reverse()}
                    />
                    <List
                        archived={this.handleArchive}
                        delete={this.handleDelete}
                        isArchived={true}
                        data={filterDataQuery}
                    />
                </div>
            </React.Fragment>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);