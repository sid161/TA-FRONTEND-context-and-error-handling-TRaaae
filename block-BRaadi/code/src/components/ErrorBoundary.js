import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasError:false,
            error:null,
            errorInfo:null
        }
    }

    componentDidCatch(error,errorInfo){
        this.setState({
            hasError:true,
            error,errorInfo
        })
    }
    render(){
        
            
             if (this.state.hasError) {
      return <h2>Ooops Error Occured</h2>;
    }
    return this.props.children;
  }
           
        
    
}

export default ErrorBoundary