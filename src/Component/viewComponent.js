import React from 'react';
import { Card, CardBody,
 Table,Jumbotron,Button } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderviewItem ({detail}) {
    return (
        <Card>
            
               <CardBody> 
               
               <Table striped bordered hover>
             <tbody>
             
                    <tr>
                {/* <td>{(detail.id)}</td>  */}
                 <td>{detail.name}</td>
                 <td>{detail.email}</td>
                 <td>{detail.phone}</td>
                <td>{detail.credit}</td>
                <td><Link to={`/view/${detail._id}`}  ><Button > view </Button></Link> </td>
                 </tr>
               
                </tbody>
                </Table>
        
                </CardBody> 
                 
                
           
        </Card>
    );
}





const View =(props) =>{
    const view = props.detail.map((detail) => {
        return (
           
                <div    key={detail.id}>
                    <RenderviewItem detail={detail}  />
                </div>
             
       
        );
    });

    
        return(
            <React.Fragment>
                 <Jumbotron fluid>
            <h1>Hello, world!</h1>
            <p>
                 This is a simple hero unit, a simple jumbotron-style component for calling
                 extra attention to featured content or information.
            </p>
            <p>
                <Button variant="light">Learn more</Button>
            </p> 
       </Jumbotron>
            <div  >
            <Card>
            
               <CardBody> 
               
                    <Table striped bordered hover>
             
             
                    <thead>
                     <tr>
                 {/* <th>id</th>  */}
                    <th> Name</th>
                    <th>email</th>

                    <th>phone number</th>
                     <th>credit</th>
                     <th>visit</th>


                    </tr>
                </thead>
               
           
            </Table>
                </CardBody> 
                 
                
           
        </Card>
        </div>
        
        
         {view}
           
           </React.Fragment>     
           
        );


} 






export default View;