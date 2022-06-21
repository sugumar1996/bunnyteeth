import React, { Component } from 'react';
import { connect } from 'react-redux';
import DentalImplantsComponent from 'components/DentalImplantsComponent/DentalImplantsComponent';
import WisdowToothComponent from 'components/WisdowToothComponent/WisdowToothComponent';

class WisdowToothContainer extends Component {

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
                <WisdowToothComponent
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


export default connect(mapStateToProps, mapDispatchToProps)(WisdowToothContainer);