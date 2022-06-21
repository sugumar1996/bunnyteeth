import React, { Component } from 'react';
import { connect } from 'react-redux';
import DentalImplantsComponent from 'components/DentalImplantsComponent/DentalImplantsComponent';

class BridgesContainer extends Component {

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
                <DentalImplantsComponent
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


export default connect(mapStateToProps, mapDispatchToProps)(BridgesContainer);