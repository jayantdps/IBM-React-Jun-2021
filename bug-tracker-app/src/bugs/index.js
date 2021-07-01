import BugStats from './components/bugStats'
import BugEdit from './components/bugEdit';
import BugSort from './components/bugSort';
import BugList from './components/bugList';

const Bugs = ({list, addNew, toggle, remove, removeClosed}) => { 
    return(
        <>
            <h1>Bug Tracker</h1>
            <hr/>
            <h3>Bugs</h3>
            <BugStats list={list} />
            <BugEdit addNew={addNew}/>
            <BugSort/>
            <BugList {...{list, toggle, remove, removeClosed}} />
        </>
    )
}
export default Bugs;