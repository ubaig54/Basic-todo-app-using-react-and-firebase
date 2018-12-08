import React, { Component } from 'react';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
// import {config} from './index'
import { initializeFb } from './index'
// import firebase from 'firebase/app'
// import 'firebase/database'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    // this.app = initializeFb;
    this.database = initializeFb.database().ref().child('notes');

    this.state = {
      notes: [],
    }
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  // componentDidMount() {
  //   let { notes } = this.state;
   
  //   this.database.on('child_changed', snap => {
  //     console.log('....', snap.key);
  //     notes.map((note, index) => {
  //       if (note.id === snap.key){
  //         notes.splice(index, 1, {...note, noteContent: text });
  //         this.setState({notes:notes });
  //       }
  //     })
  //   })
  // }

  update = (text, key) => {
    this.database.child(key).set({noteContent: text})
   
  }
  componentWillMount() {
    const previousNotes = this.state.notes;

    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      })

      this.setState({
        notes: previousNotes,
      })
    })
    let { notes } = this.state;
    this.database.on('child_removed', snap => {
      console.log('....', snap.key);
      notes.map((note, index) => {
        if (note.id === snap.key)
          notes.splice(index, 1);
      })

      this.setState({notes:notes })
      // for(var i = 0; i < previousNotes; i++){
      //   if(previousNotes[i].id === snap.key){
      //     previousNotes.splice(i, 1);
      //   }
      // }
    })

    this.setState({
      notes: previousNotes,
    })
  }

  addNote(note) {
    this.database.push().set({
      noteContent: note,
    })
    document.getElementById('inp').focus();
  }

  removeNote(noteId) {
    this.database.child(noteId).remove();
  }

  render() {
    return (
      <div className="App">
        <div className="heading">
          <h1>Things to do..</h1>
        </div>
        <div className="notesForm">
          <NoteForm addNote={this.addNote} />
        </div>
        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={note.noteContent} noteId={note.id} key={note.id} removeNote={this.removeNote} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default App;
