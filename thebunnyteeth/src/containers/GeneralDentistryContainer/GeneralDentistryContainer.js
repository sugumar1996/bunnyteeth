import React, { Component } from 'react';
import { connect } from 'react-redux';
import TreatmentsComponent from 'components/TreatmentsComponent/TreatmentsComponent';
import GeneralDentistryComponent from 'components/GeneralDentistryComponent/GeneralDentistryComponent';

class GeneralDentistryContainer extends Component {

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
                <GeneralDentistryComponent
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


export default connect(mapStateToProps, mapDispatchToProps)(GeneralDentistryContainer);