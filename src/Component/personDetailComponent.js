import React,{Component} from 'react';
import { Card, CardBody,
    Table,Jumbotron,Button ,Collapse,CardHeader,CardTitle,Input,Form,FormGroup,Label,Col}  from 'reactstrap';

 



class PersonDetail extends Component{

    constructor(props){
        super(props);
        this.state = {
            open:false,
            value:"gopi",
            amount:""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handlechange=this.handlechange.bind(this);
        this.handlesubmit=this.handlesubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
       

        this.setState({
          amount: value
        });
    }
    handleClick() {
        this.setState({ open:!this.state.open });
       
      }
    handlesubmit(event){
        alert(this.state.value+this.state.amount)
        this.props.postTransfer( this.props.detail.name,this.state.value,this.state.amount)
        event.preventDefault();
        this.setState({
            value:"gopi",
            amount:""
        });
        
    }  


      handlechange(event){
         
        this.setState({ value: event.target.value });
       
      }
    renderviewItem(detail) {
        
        return (
            <Card>
                 <CardBody> 
                   <Table striped bordered hover>
                        <tbody>
                            <tr>
                     
                                        <td>{detail.name}</td>
                                        <td>{detail.email}</td>
                                        <td>{detail.phone}</td>
                                        <td>{detail.credit}</td>
                                        <td>   
                                            <Button  onClick={() => this.handleClick()} >
                                            transfer credit 
                                            </Button>
                                            
                                        </td>
                  
          
    
                            </tr>
                        </tbody>     
                    </Table>

                    
                </CardBody> 
            </Card>
             
        );
    }
    



render(){
    return(
        <>
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
   
       
            {this.renderviewItem(this.props.detail) }
        
            <Collapse isOpen={this.state.open}>
         <div id="container">
          
                
                <Card>
                        <CardHeader>
                          <CardTitle>
                           Transfer Credit
                           </CardTitle>     
                         </CardHeader>   
                    <CardBody>
                    <dl className="">
                    <div className="row">
                                        <dt className="col-6">From :</dt>
                                        <dd className="col-4">{this.props.detail.name}</dd>
                         </div>               
                                        
<Form onSubmit={this.handlesubmit}>
                                           
<Label htmlFor="Transfer to" md={2}>Transfer to:</Label>

    <select value={this.state.value} onChange={this.handlechange}>
        <option value="gopi">gopi</option>
        <option value="ram">Ram</option>
        <option value="shyam">Shyam</option>
        <option value="mohan">Mohan</option>
        <option value="sohan">sohan</option>
        <option value="rakesh">rakesh</option>
        <option value="suresh">suresh</option>
    </select>


<FormGroup row>       
<Label htmlFor="Amount" md={2}>Amount:</Label>
<Col md={5}>
<Input type="text" id="amount" name="amount"
    placeholder="Amount"
    value={this.state.amount}
    onChange={this.handleInputChange} />
     </Col>
</FormGroup>
<div class="col-12 offset-sm-3"> <Button type="submit" color="primary" variant="primary" onSubmit={this.handlesubmit}>Transfer</Button></div>        

</Form> 


                                        
                                         
                                              
                                         

                                               
                                        
                        </dl>
                        
                     </CardBody>
                     </Card>
 
           
        </div>
        </Collapse>
        </>

    );
}
}
export default PersonDetail;