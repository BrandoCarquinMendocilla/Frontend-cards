import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import {Note} from '../models/note.models'

interface INotesProps {
    note:Note,
    handleDelete: (id:string) => void,
    isTodos:boolean,
    setIsEditar:React.Dispatch<React.SetStateAction<boolean>>,
    setEditNotes:React.Dispatch<React.SetStateAction<Note| undefined>>
}

const 
Notes: React.FunctionComponent<INotesProps> = ({note,handleDelete, isTodos,setIsEditar,setEditNotes}) => {

  const setEdit = ()=>{
    setIsEditar(true);
    setEditNotes(note)
  }

  return(
    <div className='mb-3'>
      <Card style={{backgroundColor: note.color}}>
        <Card.Body>
          <Card.Title>{note.nombre}</Card.Title>
          <Card.Text>{note.descripcion}</Card.Text>
          
        </Card.Body>
        <Card.Footer>
          <Button  variant='danger' onClick={() => handleDelete(note.id) }>Eliminar</Button>
          {isTodos?
            <Button className='m-3' variant='success' onClick={()=> setEdit()}>Editar</Button>:""
          }
        </Card.Footer>
      </Card>
    </div>
  ) ;
};

export default Notes;
