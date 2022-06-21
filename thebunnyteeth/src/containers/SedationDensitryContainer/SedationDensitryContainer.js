import React, { Component } from 'react';
import { connect } from 'react-redux';
import DentalImplantsComponent from 'components/DentalImplantsComponent/DentalImplantsComponent';
import SedationDentistryComponent from 'components/SedationDentistryComponent/SedationDentistryComponent';

class SedationDensitryContainer extends Component {

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
                <SedationDentistryComponent
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


export default connect(mapStateToProps, mapDispatchToProps)(SedationDensitryContainer);