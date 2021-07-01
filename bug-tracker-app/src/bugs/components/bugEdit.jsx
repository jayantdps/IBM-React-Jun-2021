import { useState } from 'react';

const BugEdit = ({addNew}) => {
    const [newBugName, setNewBugName] = useState('');
    return (
        <section>
            <label htmlFor="">Bug Name:</label>
            <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
            {/*
                    <label htmlFor="">Project :</label>
                    <select name="" id="">
                        <option value="">Project-1</option>
                        <option value="">Project-2</option>
                        <option value="">Project-3</option>
                    </select> 
                */}
            <input type="button" value="Add New" onClick={() => addNew(newBugName)} />
        </section>
    )
}

export default BugEdit;