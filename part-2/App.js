const App = () =>{
    return (
        <div>
            <Tweet
                name="Bob"
                username={"thebuilder2"}
                message="If anyone can fix it, we can. We can build it!"
                date="7/20/2023"
            />
            <Tweet
                name="Joseph"
                username={"cooldude95"}
                message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, nulla sed iure aliquam quam hic repudiandae pariatur mollitia minus libero harum velit atque illo fuga excepturi repellat temporibus dolore? Modi?"
                date="7/22/2023"
            />
            <Tweet
                name="Elon"
                username={"elonmusk"}
                message="I just bought Twitter!"
                date="10/27/2022"
            />
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById("root"));