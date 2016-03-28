import React from 'react';

import './NoteEditor.less';

const NotesEditor = React.createClass({
    getInitialState() {
        return {
            title : '',
            text  : '',
            color : '#ffffff'
        };
    },
    handleTextChange(event) {
        this.setState({text : event.target.value});
    },
    handleTitleChange (event) {
        this.setState({title : event.target.value});
    },
    handleNoteAdd() {
        const newNote = {
            title : this.state.title,
            text  : this.state.text,
            color : this.state.color
        };

        this.props.onNoteAdd(newNote);
        this.setState({text : '', title : '', color : '#ffffff'});
    },
    render() {
        return (
            <div className="NoteEditor">
                <input
                    type="text"
                    className='NoteEditor__title'
                    placeholder='Enter title'
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <textarea
                    placeholder='Enter note text'
                    rows={5}
                    className='NoteEditor__text'
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <div className="NoteEdtor__footer">
                    <button
                        className="NoteEditor__button"
                        disabled={!this.state.next}
                        onClick={this.handleNoteAdd}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
});

export default NotesEditor;
