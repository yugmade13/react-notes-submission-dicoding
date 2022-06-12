import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            charLength: 0,
            maxLength: 20
        }

        this.handleInputTitle = this.handleInputTitle.bind(this);
        this.handleInputBody = this.handleInputBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputTitle(event) {
        const max = this.state.maxLength;
        const inputTitle = event.target.value.slice(0, max);
        const inputTitleLength = inputTitle.length;

        this.setState((prev) => {
            return {
                ...prev,
                title: inputTitle,
                charLength: inputTitleLength
            }
        });
    }

    handleInputBody(event) {
        this.setState({ body: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();

        const submitValue = {
            id: +new Date(),
            title: this.state.title,
            body: this.state.body,
            createdAt: new Date().toISOString(),
            archived: false
        }

        if (submitValue.title || submitValue.body === '') {
            alert('Lengkapi Caatatn Anda');
        } else {
            this.props.addSubmitValue(submitValue);
            this.setState({ title: '', body: '', charLength: 0 });
        }
    }

    render() {

        return (
            <section className='section-intro'>
                <div className="character">
                    <img src="./assets/logo.png" alt="logo" />
                    <span>{this.state.charLength}/{this.state.maxLength}</span>
                </div>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input onChange={this.handleInputTitle} value={this.state.title} className='title' type="text" placeholder='Title' />
                    </div>
                    <div className="form-group">
                        <textarea onChange={this.handleInputBody} value={this.state.body} className='body' placeholder='Tell your story...' />
                    </div>
                    <button type='submit'>Save</button>
                </form>
            </section>
        );
    }
}

export default Form;