import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import history from '../../history'


function Items(props) {

    const back = e => {
        e.preventDefault()
        history.push("/login")
    }

    const renderItems = () =>(
        <div class="itmes-container">
            {props.simpleReducer.items.map(item=>renderItem(item))}
        </div>
    )

    const renderItem = item=>(
        <div class="itmes-container-item">
            <div>
                {item.address}
            </div>
        </div>
    )

    return (
        <div className="items">
            <button
                onClick={back}
            >
                Back
            </button>
            {renderItems()}
        </div>
    );
}

const mapStateToProps = state => ({
    simpleReducer: state.simpleReducer,
})

export default connect(mapStateToProps, null)(Items);

