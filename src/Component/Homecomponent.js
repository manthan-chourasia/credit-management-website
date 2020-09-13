import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle,Jumbotron, Button} from 'reactstrap';
import CardHeader from 'reactstrap/lib/CardHeader';
import {Link} from 'react-router-dom';
class Homepage extends Component{
    

    render(){
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
            <div className="row row-header align-items-start">
            
            <div className="col-12 col-sm-6 col-md-6">
                <Card border="dark" style={{ width: '' }}>
                    <CardHeader> credit management</CardHeader>
                    <CardBody>
                        <CardImg variant="top" width="80%" height=" 80%" src='assets/images/credit.jpg' alt="credit" />
                    </CardBody>
                    <CardBody>
                        <CardTitle>Manage your credit Here</CardTitle>
                        <CardText>
                                 With supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Link to='/view' > <Button variant="primary">View all user</Button></Link>
                    </CardBody>
                </Card>
             </div>
            
            <div className="col-12 col-sm-6 col-md-6"> 
                <Card border="primary" bg='success' style={{ width: ''}}>
                    <CardHeader> credit management</CardHeader>
                    <CardBody>
                        <CardImg variant="top" width="80%" height=" 80%" src='assets/images/credit3.jpg' alt="credit" />
                    </CardBody>
                    <CardBody> 
                        <CardTitle>Manage your credit Here</CardTitle>
                        <CardText>
                            With supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Link to='/transfer' > <Button variant="primary">All transaction</Button></Link>
                    </CardBody>
                 </Card>
           </div>
            </div>
            </div>
            </React.Fragment>
        );
    }


}
export default Homepage;