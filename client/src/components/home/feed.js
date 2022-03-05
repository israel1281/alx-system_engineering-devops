import React from "react"
import "./feed.css"
import Status from "./Status"
import Posts from "./Posts"
import CreateIcon from "@material-ui/icons/Create"
import FlipMove from "react-flip-move"
import { useSelector } from "react-redux"
import LoadIcon from "../../images/loading.gif"

function Feed() {
const { homePosts } = useSelector(state => state)

return (
<div className="feed">
<div className="feed_inputContainer">
<div className="feed_input">
<Status />
<CreateIcon />
</div>
</div>
<hr/>


{
homePosts.loading
? <img src={LoadIcon} alt="loading" className="post_img" />
: (homePosts.result === 0 && homePosts.posts.length === 0)
? <h2 className="post_error_text">No Post</h2>
: <Posts />
}
</div>
)
}

export default Feed
