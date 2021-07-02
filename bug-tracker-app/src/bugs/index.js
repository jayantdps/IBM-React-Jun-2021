import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BugStats from './components/bugStats'
import BugEdit from './components/bugEdit';
import BugSort from './components/bugSort';
import BugList from './components/bugList';
import bugActionCreators from './actions';

const Bugs = ({list, addNew, toggle, remove, removeClosed}) => { 
    return(
        <>
            <h3>Bugs</h3>
            <BugStats list={list} />
            <BugEdit addNew={addNew}/>
            <BugSort/>
            <BugList {...{list, toggle, remove, removeClosed}} />
        </>
    )
}

function mapStateToProps(storeState){
    const bugs = storeState.bugsState;
    return { list : bugs }
}

function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
/* 
    The "Bugs" component is called 'container/smart' components coz they interface with the redux infrastructure 
    The BugStats, BugEdit, BugSort, BugList, BugItem are called as 'presentation/dumb" components
*/