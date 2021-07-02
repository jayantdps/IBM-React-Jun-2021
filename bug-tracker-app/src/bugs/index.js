import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BugStats from './components/bugStats'
import BugEdit from './components/bugEdit';
import BugSort from './components/bugSort';
import BugList from './components/bugList';
import bugActionCreators from './actions';

const Bugs = ({list, addNew, toggle, remove, removeClosed, projects, load}) => { 
    return(
        <>
            <h3>Bugs</h3>
            <input type="button" value="LOAD BUGS" onClick={load} />
            <BugStats list={list} />
            <BugEdit addNew={addNew} projects={projects}/>
            <BugSort/>
            <BugList {...{list, toggle, remove, removeClosed}} />
        </>
    )
};

function mapStateToProps(storeState){
    const bugs = storeState.bugsState,
        projects = storeState.projectsState;
    return { list : bugs, projects : projects }
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