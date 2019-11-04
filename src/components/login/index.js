import React from 'react';
import { connect } from 'react-redux';
import { simpleAction, fetchItemsAction} from '../../actions/simpleAction';
import history from '../../history'
import './index.css';


class Login extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.simpleReducer.isSuccess && !this.props.simpleReducer.isSuccess)
        history.push("/items")
    }

    submit = e => {
        e.preventDefault();
        this.props.fetchItemsAction()
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={()=>{}}>
                    <h3>Email</h3>
                    <input
                        disabled={this.props.simpleReducer.isLoading}
                        autoFocus
                        type="email"
                    />
                    <h3>Password</h3>
                    <input
                        disabled={this.props.simpleReducer.isLoading}
                        type="password"
                    />
                    <button
                        disabled={this.props.simpleReducer.isLoading}
                        onClick={this.submit}
                    >
                    Login
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    simpleReducer: state.simpleReducer,
  })
  
  const mapDispatchToProps = dispatch => ({
    simpleAction: (...args) => dispatch(simpleAction(...args)),
    fetchItemsAction: (...args) => dispatch(fetchItemsAction(...args)),
  })

export default connect(mapStateToProps, mapDispatchToProps)(Login);
