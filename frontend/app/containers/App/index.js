import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => state.toJS();

export default connect(mapStateToProps)(App);
