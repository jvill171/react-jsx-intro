const Tweet = ({username, name, date, message}) => {
    return (
        <div className="aTweet">
            <p>
                <b className='twtName'>{name} </b>
                <a href='#'  className='twtUsername'><i>@{username}</i></a>
            </p>
            <p>{message}</p>
            <p>
                <b>Tweeted on:</b>
                <a href='#'>{date}</a>
            </p>
        </div>
    )
}

