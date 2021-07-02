import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import projectActionCreators from "./actions";

const Projects = ({projectsList, load, addNew}) => {
    const projectItems = projectsList.map(project => (
        <li key={project.id}>
            <span>{project.name}</span>
            {/* <div>{project.desc}</div> */}
        </li>
    ));
    return (
        <>
            <h3>Projects</h3>
            <hr/>
            {/* <input type="button" value="Load Projects" onClick={load}/> */}
            <ol>
                {projectItems}
            </ol>
        </>
    )
};

function mapStateToProps(storeState){
    const  projects = storeState.projectsState;
    return { projectsList : projects };
}

function mapDispatchToProps(dispatch){
    const projectActionDispatchers = bindActionCreators(projectActionCreators, dispatch);
    return projectActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);