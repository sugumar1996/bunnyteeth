import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrthodonticComponent from 'components/OrthodonticComponent/OrthodonticComponent';

class OrthodonticContainer extends Component {

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
                <OrthodonticComponent
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


export default connect(mapStateToProps, mapDispatchToProps)(OrthodonticContainer);