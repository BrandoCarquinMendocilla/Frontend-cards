import * as React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Note } from '../models/note.models';

interface ICreateNotesProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>,
    setOriNotes: React.Dispatch<React.SetStateAction<Note[]>>,
    isEditar: boolean,
    editNotes: Note | undefined,
    setEditNotes:React.Dispatch<React.SetStateAction<Note| undefined>>,
    setIsEditar:React.Dispatch<React.SetStateAction<boolean>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({ notes, setNotes, setOriNotes, isEditar, editNotes,setEditNotes,setIsEditar }) => {
    const [error, setError] = React.useState<string>("");
    const nombreRef = React.useRef<HTMLInputElement | null>(null);
    const descripcionRef = React.useRef<HTMLTextAreaElement | null>(null);
    const categoriaRef = React.useRef<HTMLSelectElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);
    if (editNotes) {
        (nombreRef.current as HTMLInputElement).value = editNotes.nombre;
        (descripcionRef.current as HTMLTextAreaElement).value = editNotes.descripcion;
        (categoriaRef.current as HTMLSelectElement).value = editNotes.categoria;
        (colorRef.current as HTMLInputElement).value = editNotes.color;
    }

    const limpiarText = (): void => {
        (nombreRef.current as HTMLInputElement).value = "";
        (descripcionRef.current as HTMLTextAreaElement).value = "";
        (categoriaRef.current as HTMLSelectElement).value = "";
        (colorRef.current as HTMLInputElement).value = "";
    }

    const editar = (): void => {
        if (editNotes) {


            if (nombreRef.current?.value === "" || descripcionRef.current?.value === "" ||
                categoriaRef.current?.value === "" || colorRef.current?.value === "") {
                return setError("All fields are mandatory");
            }
            let notas: Note[]=[];

            notes.forEach(n => {
                if (n.nombre == editNotes.nombre) {
                    n.nombre = (nombreRef.current as HTMLInputElement).value
                    n.descripcion = (descripcionRef.current as HTMLTextAreaElement).value
                    n.categoria = (categoriaRef.current as HTMLSelectElement).value
                    n.color = (colorRef.current as HTMLInputElement).value
                }
                notas.push(n);
            })

            setError("");
            setNotes(notas)
            setOriNotes(notas)
            setEditNotes(undefined)
            setIsEditar(false)
            limpiarText();


        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (nombreRef.current?.value === "" || descripcionRef.current?.value === "" ||
            categoriaRef.current?.value === "" || colorRef.current?.value === "") {
            return setError("All fields are mandatory");
        }

        setError("");
        setNotes([...notes, {
            id: (new Date().toString()),
            nombre: (nombreRef.current as HTMLInputElement).value,
            descripcion: (descripcionRef.current as HTMLTextAreaElement).value,
            categoria: (categoriaRef.current as HTMLSelectElement).value,
            color: (colorRef.current as HTMLInputElement).value,
        }])
        setOriNotes([...notes, {
            id: (new Date().toString()),
            nombre: (nombreRef.current as HTMLInputElement).value,
            descripcion: (descripcionRef.current as HTMLTextAreaElement).value,
            categoria: (categoriaRef.current as HTMLSelectElement).value,
            color: (colorRef.current as HTMLInputElement).value,
        }])

        limpiarText();


    }



    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Servicios</Card.Title>

                    <Form className='mt-3 mb-3' onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className='mb-3' controlId='formBasicTitle'>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type='text' ref={nombreRef} placeholder='Ingrese nombre' />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicText'>
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control placeholder='Ingrese descripcion' ref={descripcionRef} as='textarea' rows={3} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label htmlFor='colorInput'>Categoria</Form.Label>
                            <Form.Select ref={categoriaRef} aria-label="Default select example">
                                <option value="">Seleccione una categoria</option>
                                <option value="autos">Autos</option>
                                <option value="salud">Salud</option>
                                <option value="hogar">Hogar</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label htmlFor='colorInput'>Selecciona un color</Form.Label>
                            <Form.Control ref={colorRef} type='color' id='colorInput' defaultValue='#dfdfdf' title='Choose your color' />
                        </Form.Group>
                        {isEditar ?
                            <Button onClick={() => editar()} variant='primary'>Editar</Button> : <Button type='submit' variant='primary'>Agregar</Button>
                        }
                        <Button className='m-3' variant='danger'>Cancelar</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default CreateNotes;

