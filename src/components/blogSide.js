import React from 'react'

const BlogSider=()=>{
    return(
        <div className="blog-side">
            <ul>
            <li><input type="text"/><button>Search</button></li>
            </ul>
            <ul>
                <h4>RECENT POSTS</h4>
                <li>Blog Post Title</li>
                <li>Video Post</li>
                <li>EVERY THING RESPONSIVE</li>
            </ul>
            <ul>
                <h4>RECENT COMMENTS</h4>
                <li>Rodica on Red Socks</li>
                <li>Rodica on Leather jacket</li>
                <li>Rodica on Infuse Tshirt</li>
                <li>Rodica on Custom Tee</li>
            </ul>
            <ul>
                <h4>ARCHIVES</h4>
                <li>March 2020</li>
            </ul>
            <ul>
                <h4>CATEGORIES</h4>
                <li>Uncategorized</li>
            </ul>
        </div>
    )
}

export default BlogSider