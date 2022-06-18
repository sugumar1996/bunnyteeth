import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeComponent from 'components/HomeComponents/HomeComponent';

class HomeContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }
    componentDidMount() {
       
    }
    
    render() {
        return (
            <>
                <HomeComponent
                    {...this.props}
                />
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);