import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import "./PostListing.css";

const Post = styled.article`
  border-bottom: 1px solid rgba(214, 209, 230, 0.5);
  padding-bottom: 1.25rem;
`;

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <Post>
            <div className="blog-card">
              <div className="meta">
                <div className="photo" />
                <ul className="details">
                  <li className="author">
                    <a href="#">{post.timeToRead}</a>
                  </li>
                  <li className="date">{post.date}</li>
                  <li className="tags">
                    <ul />
                  </li>
                </ul>
              </div>
              <div className="description">
                <Link to={post.path}>
                  <h1>{post.title}</h1>
                </Link>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <a className="read-more" href={post.path}>
                  Read More
                </a>
              </div>
            </div>
          </Post>
        ))}
      </div>
    );
  }
}

export default PostListing;
