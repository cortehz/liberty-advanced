import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";
import MainHeader from "../components/MainHeader/MainHeader";
import Avatar from "../components/Avatar/Avatar";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    const { nextTitle, nextSlug, prevSlug, prevTitle } = postNode.fields;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <MainHeader />
          <div className="blog-parent">
            <h1 style={{ alignSelf: "center", marginBottom: "0px" }}>
              {post.title}
            </h1>
            <div style={{ alignSelf: "flex-start", marginTop: "5px" }}>
              <Avatar modifierClasses="c-avatar--as-author" />
            </div>
            <h5
              id="name"
              style={{
                alignSelf: "flex-start",
                fontSize: "10px !important",
                marginBottom: "0",
                marginTop: "3px"
              }}
            >
              <span style={{ fontStyle: "italic" }}>by</span> {config.userName}
            </h5>
            <h4 style={{ alignSelf: "flex-start" }}>{post.date}</h4>
            <span style={{ alignSelf: "flex-start" }} className="dash" />
            <img
              src={post.cover}
              alt="blog post"
              style={{ marginTop: "20px", maxWidth: "100%" }}
            />
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="next-articles">
              <div>
                <p>PREVIOUS ARTICLE:</p>
                <Link to={prevSlug}>{prevTitle}</Link>
              </div>
              <div>
                <p>NEXT ARTICLE:</p>
                <Link to={nextSlug}>{nextTitle}</Link>
              </div>
            </div>
            <div className="post-meta">
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
            <UserInfo config={config} />
            <Disqus postNode={postNode} />
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;
