const App = () =>{
    return (
        <div>
            <FirstComponent/>
            <NamedCOmponenent name="Juan"/>
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById("root"));