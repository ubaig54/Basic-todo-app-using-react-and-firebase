import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteContent: '',
    }
    this.userInputHandler = this.userInputHandler.bind(this);
    this.writeNote = this.writeNote.bind(this);
  }
  userInputHandler(e) {
    this.setState({
      newNoteContent: e.target.value,
    })
  }
  writeNote() {
    if(this.state.newNoteContent !== ""){
      this.props.addNote(this.state.newNoteContent);
    }else{
      alert("Field should not be empty")
    }
    this.setState({
      newNoteContent: '',
    })
  }
  render() {
    return (
      <div className="NoteForm">
        <div className="NoteFormContainer">
          <input id="inp" type="text" placeholder="Type here.." value={this.state.newNoteContent} onChange={this.userInputHandler}></input>
          <button onClick={this.writeNote}>Add</button>
        </div>
      </div>
    );
  }
}

export default NoteForm;
