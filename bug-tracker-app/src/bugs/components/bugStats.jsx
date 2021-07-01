const BugStats = ({list}) => {
    const closedCount = list.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
    return(
        <section className="stats">
            <span className="closed">{closedCount}</span>
            <span> / </span>
            <span>{list.length}</span>
        </section>
    )
}
export default BugStats;