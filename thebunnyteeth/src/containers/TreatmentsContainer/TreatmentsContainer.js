import React, { Component } from 'react';
import { connect } from 'react-redux';
import TreatmentsComponent from 'components/TreatmentsComponent/TreatmentsComponent';

class TreatmentsContainer extends Component {

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
                <TreatmentsComponent
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


export default connect(mapStateToProps, mapDispatchToProps)(TreatmentsContainer);