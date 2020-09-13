import React,{Component} from 'react';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import Transfer from './TransferComponent';
import  Header from './HeaderComponent';
import HomePage from './Homecomponent';
import Contact from  './ContactusComponent';
import Footer from './FooterComponent';
import View from './viewComponent';
import PersonDetail from './personDetailComponent';
import { connect } from 'react-redux';
import {postTransfer,fetchDetail,fetchTransfer} from '../Redux/ActionCreator'
const mapStateToProps = state => {
  return {
    detail: state.detail,
    transfer:state.transfer
  }
}
const mapDispatchToProps = dispatch => ({
  
  postTransfer: (Fromname, Toname, Amount) => dispatch(postTransfer(Fromname, Toname, Amount)),
  fetchDetail: () => { dispatch(fetchDetail())},
  fetchTransfer: () => { dispatch(fetchTransfer())}
});
class Main extends Component {
  componentDidMount() {
    this.props.fetchDetail();
    this.props.fetchTransfer();
  }
   
    render()
    { 
        const DetailwithId = ({match}) => {
        
            return(
                <PersonDetail detail={this.props.detail.detail.filter((detail) => detail._id === match.params.detailId)[0]}
                postTransfer={this.props.postTransfer}/>
            );
          };
          const transferdetail= () => {
      
        
            return(
              <Transfer transfer={this.props.transfer.transfer}/>
            );
          };
          
          return(

            <div>
                <Header />
                <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/view' component={()=><View detail={this.props.detail.detail}/>} />
                <Route  path='/view/:detailId' component={DetailwithId}/>
                <Route  path='/transfer' component={transferdetail}/>
                <Route exact path='/contactus' component={Contact}/>} />
                 
                <Redirect to="/home" />
            </Switch>  
               <Footer/>
            </div>
          );
    
    
        }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));