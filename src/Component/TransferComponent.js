import React from 'react';
import {Jumbotron, Button} from 'reactstrap';

import {Card,CardBody,Table} from 'reactstrap'




function RenderComments({comments})
{
  
  if(comments!=null)

    // return(
      
    //   <h4>Transfer</h4>
      
    //   {comments.map((comment)=>{
    //     return(
         
    //       <Card key={comment._id}>
            
    //         <CardBody> 
            
    //           <Table striped bordered hover>
    //             <tbody>
              
    //               <tr>
    //             {/* <td>{(detail.id)}</td>  */}
    //                 <td>{comment.fromname}</td>
    //                 <td>{comment.toname}</td>
    //                 <td>{comment.amount}</td>
                
    //               </tr>
              
    //           </tbody>
    //          </Table>
     
    //          </CardBody> 
              
             
        
    //       </Card>
    //     );}
    //     )}
    //   );
    return(
      <div>
      <h4>Transfer</h4>
      <ul className="list-unstyled">

      {comments.map((comment)=>{
        return(
          <Card key={comment._id}>
              <CardBody> 
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                    <td>{comment.fromname}</td>
                    <td>{comment.toname}</td>
                    <td>{comment.amount}</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>  
          </Card>

        );
      }

    
      )}
      
      </ul>
    </div>
    );
   

  else
    return(
        <div></div>
    );

}



const  Transfer = (props) => {

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
      <div className="container">
        <div className="row">
          
        </div>
        <div className="row">
          <div  className="col-12 col-md-5 m-1">
           
          </div>
          <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.transfer}/>
     
          </div>
        </div>
    </div>
</React.Fragment>
);
}


export default Transfer;
