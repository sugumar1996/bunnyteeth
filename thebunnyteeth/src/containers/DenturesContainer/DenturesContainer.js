import React, { Component } from 'react';
import { connect } from 'react-redux';
import DentalImplantsComponent from 'components/DentalImplantsComponent/DentalImplantsComponent';
import DenturesComponent from 'components/DenturesComponent/DenturesComponent';

class DenturesContainer extends Component {

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
                <DenturesComponent
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


export default connect(mapStateToProps, mapDispatchToProps)(DenturesContainer);