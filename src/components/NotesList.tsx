import * as React from 'react';
import Notes from './Notes'
import { Note } from '../models/note.models'
import { Col, Container, Row } from 'react-bootstrap';


interface INotesListProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>,
    oriNotes: Note[],
    setOriNotes:React.Dispatch<React.SetStateAction<Note[]>>,
    isTodos:boolean,
    setIsEditar:React.Dispatch<React.SetStateAction<boolean>>,
    setEditNotes:React.Dispatch<React.SetStateAction<Note| undefined>>
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes,oriNotes,setOriNotes,isTodos,setIsEditar,setEditNotes }) => {

    const handleDelete = (id: string) => {
        setNotes(notes.filter(note => note.id !== id));
        setOriNotes(oriNotes.filter(note => note.id !== id));
    }

    const renderNotes = () => {
        return notes.map(note => {
            return (
                <>
                <Col sm={4} xs={12}>
                    <Notes setEditNotes={setEditNotes} setIsEditar={setIsEditar} isTodos={isTodos} key={note.id} note={note} handleDelete={handleDelete}/>
                </Col>
                </>
                ) 
        })
    }

    return (
        <>
            <h2 className='m-3'>Nuestras notas creadas</h2>
            <Container>
                <Row>
                    {renderNotes()}
                </Row>
            </Container>
        </>
    );
};

export default NotesList;
