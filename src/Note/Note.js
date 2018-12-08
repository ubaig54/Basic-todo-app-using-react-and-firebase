import React, { Component } from 'react';
import './Note.css';
import * as firebase from 'firebase';
import propTypes from 'prop-types';

class Note extends Component {
  constructor(props) {
    super(props);
    this.noteContent = props.noteContent;
    this.noteId = props.noteId;
    this.removeNoteHandler.bind(this);
  }

  componentDidMount() {
    firebase.database().ref('/notes').on('child_removed', (s) => {
      console.log(s.val(), s.key);
    })
  }

  removeNoteHandler(id) {
    this.props.removeNote(id);
    // document.getElementById("close").parentNode.remove();
  }

  render() {
    return (
      <div className="Note">
        <span id="close" className="removeNote" onClick={() => { this.removeNoteHandler(this.noteId) }}>&times;</span>
        <div className="noteContent">{this.noteContent}</div>
      </div>
    );
  }
}

Note.propTypes = {
  noteContent: propTypes.string
}

export default Note;
