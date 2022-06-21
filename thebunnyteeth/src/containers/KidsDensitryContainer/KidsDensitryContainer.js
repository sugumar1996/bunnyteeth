import React, { Component } from 'react';
import { connect } from 'react-redux';
import KidsDentistryComponent from 'components/KidsDentistryComponent/KidsDentistryComponent';

class KidsDensitryContainer extends Component {

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
                <KidsDentistryComponent
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


export default connect(mapStateToProps, mapDispatchToProps)(KidsDensitryContainer);