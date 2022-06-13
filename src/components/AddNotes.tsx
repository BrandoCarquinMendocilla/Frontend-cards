import React,  { Component } from 'react'; 
import Swal from 'sweetalert2'

interface IAddNoteProps {
    
}
const cardInfo={
    title:"",
    text:"",
    categoria:""
}


// const renderCard = (card, index)=>{
//     return (
//         <Card style={{width:"18rem"}} key={index}>
//             <CardBody>
//                 <CardTitle>{card.title}</CardTitle>
//                 <CardText>{card.text}</CardText>
//             </CardBody>

//         </Card>
//     );


// }


const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    Swal.fire('Servicio no ingresado')
};
const buttonExcute = (event: React.MouseEvent<HTMLButtonElement>) => {

    prompt("dato"+cardInfo.text)

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Servicio guardado con exito',
        showConfirmButton: false,
        timer: 1500
    })
};




const AddNote: React.FunctionComponent<IAddNoteProps> = (props) => {
    return (
        <div>
            
        </div>
    );
};

export default AddNote;
