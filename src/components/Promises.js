import {Button, Row, Col} from "react-bootstrap"

const Promises = () => {

    const posts = [
        {
            id:1,
            title: "The first post",
            text: "this is the first of the posts",
            link: "post1"
        },
        { 
            id:2,
            title: "The second post",
            text: "this is the second of the posts",
            link: "post2"
        },
        {  
            id:3,
            title: "The third post",
            text: "this is the third and final post in the list",
            link: "post3" 
        }]

    return(
        <div>
            <h2>Promises</h2>
            <hr />
            <Row>
            {posts.map((post,index)=>(<Col key={index} md><h4>{post.title}</h4><p>{post.text}</p>
            <Button variant="primary" href={post.link}>View Post</Button>
            <hr />
            </Col>))}
            </Row>
            
        </div>
    )
}

export default Promises