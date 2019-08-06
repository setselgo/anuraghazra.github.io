import React from "react";
import styled from 'styled-components';
import Link from 'gatsby-link';
import { Row, Col } from 'react-grid-system';

import Tags from 'src/components/Blog/Tags';
import useRandomBlogPost from 'src/hooks/useRandomBlogPost';

const BlogLayoutWrapper = styled.section`
  ${p => p.theme.spacing.sectionTopBottom};

  & article:first-of-type {
    margin-top: 15px;
  }
`
const BlogLayout = ({ children, sharerSection }) => {
  const { randomSlug, randomTitle } = useRandomBlogPost();

  return (
    <BlogLayoutWrapper>
      <Row>
        <Col sm={12} md={8}>
          {children}
        </Col>
        <Col sm={12} md={4}>
          <aside style={{ position: 'sticky', top: 100 }}>
            <div>
              <h4>Random post</h4>
              <Link to={randomSlug}>{randomTitle}</Link>
              <br /><br />
            </div>
            <div>
              <h4>Tags</h4>
              <Tags />
              <br/>
            </div>
            {sharerSection && sharerSection}
          </aside>
        </Col>
      </Row>
    </BlogLayoutWrapper>
  )
}

export default BlogLayout
