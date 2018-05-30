import ToDo from '../components/ToDo';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ lastId: state.lastId });

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);