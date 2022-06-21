import React, { Component } from 'react';
import { connect } from 'react-redux';
import SmileMakeOverComponent from 'components/SmileMakeOverComponent/SmileMakeOverComponent';

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
                <SmileMakeOverComponent
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