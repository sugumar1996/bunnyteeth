import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClearAlignersComponent from 'components/ClearAlignersComponent/ClearAlignersComponent';

class ClearAligenersContainer extends Component {

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
                <ClearAlignersComponent
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


export default connect(mapStateToProps, mapDispatchToProps)(ClearAligenersContainer);