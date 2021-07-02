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

export default Projects;