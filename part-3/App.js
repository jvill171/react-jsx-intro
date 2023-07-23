const App = () =>{
    return (
        <div>
            <Person name="Not-A-Bot" age="20" hobbies={['Java', 'Internet Browsing', 'Learning how to trump humanity']}/>
            <Person name="Joel" age="14" hobbies={['Minecraft', 'Youtube', 'Roblox']}/>
            <Person name="Human Guy" age="200" hobbies={['Destroying planets', 'Probing', 'Cows']}/>
            <Person name="Johnson" age="50"/>
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById("root"));