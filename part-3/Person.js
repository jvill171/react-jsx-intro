const Person = ({name, age, hobbies=[]}) =>{

    return <div className="personDiv">
        <p>Learn some information about this person</p>
        <h3>{age > 18 ? `Please go vote!` : `You must be 18`}</h3>
        <p><b>Name:</b> {name}</p>
        <p><b>Age:</b> {age}</p>
        <p><b>Hobbies:</b> {hobbies.length === 0 ? "None" :
            <ul>
                { hobbies.map(h =>( <li>{h}</li>)) }
            </ul>
            }
        </p>
    </div>
}