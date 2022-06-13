import React, { useState } from 'react';
import Header from './components/Header'
import AddNote from './components/AddNotes';
import { Note } from './models/note.models'
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import NotesList from './components/NotesList';
import CreateNotes from './components/CreateNotes';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date()).toString(),
    nombre: "Electricidad",
    descripcion: "Lorem ipsum, dolor sit amet consetetur elit",
    categoria: "hogar",
    color: "#ddffff"
  },{
    id: (new Date()).toString(),
    nombre: "Auxilio Mecanico",
    descripcion: "Lorem ipsum, dolor sit amet consetetur elit",
    categoria: "autos",
    color: "#ddffff"
  },{
    id: (new Date()).toString(),
    nombre: "Chofer reemplazo",
    descripcion: "Lorem ipsum, dolor sit amet consetetur elit",
    categoria: "autos",
    color: "#ddffff"
  },{
    id: (new Date()).toString(),
    nombre: "Medico a domicilio",
    descripcion: "Lorem ipsum, dolor sit amet consetetur elit",
    categoria: "salud",
    color: "#ddffff"
  },{
    id: (new Date()).toString(),
    nombre: "Ambulacion",
    descripcion: "Lorem ipsum, dolor sit amet consetetur elit",
    categoria: "salud",
    color: "#ddffff"
  },{
    id: (new Date()).toString(),
    nombre: "Gasfitero",
    descripcion: "Lorem ipsum, dolor sit amet consetetur elit",
    categoria: "hogar",
    color: "#ddffff"
  }

]);

  const [oriNotes, setOriNotes] = useState<Note[]>(notes);
  const [isTodos,setIsTodos] =  useState<boolean>(true);
  const [isEditar,setIsEditar] =  useState<boolean>(false);
  const [editNotes, setEditNotes] = useState<Note>();
  return (
    <>
      <Header setNotes={setNotes} oriNotes={oriNotes} setIsTodos={setIsTodos}/>
      <Container className='mt-5'>
        <Row>
          {isTodos?
            <Col xs={12} sm={3} className='mt-2'>
            <CreateNotes setEditNotes={setEditNotes} isEditar={isEditar} setIsEditar={setIsEditar} editNotes={editNotes} notes={notes} setNotes={setNotes} setOriNotes={setOriNotes}/>
          </Col>:''
          }
          
          <Col xs={12} sm={9} className='mt-2'>
            <NotesList setEditNotes={setEditNotes} setIsEditar={setIsEditar} isTodos={isTodos} notes={notes} oriNotes={oriNotes} setNotes={setNotes} setOriNotes={setOriNotes}/>
          </Col>
        </Row>
      </Container>


      <AddNote />
    </>
  );
}

export default App;
