import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Testimonials = (props) => {
  const events = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-testimonials">
      <SEO title="Testimonials" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Upcoming Events</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {events.map(edge => (
            <div
              key={edge.node.frontmatter.path}
              className="col-12 col-md-6 mb-1"
            >
              <div className="testimonial">
                <div className="testimonials-meta">
                  <h2 className="testimonials-title">
                    {edge.node.frontmatter.title}
                  </h2>
                  <p className="testimonials-name">
                    When? 
{' '}
{edge.node.frontmatter.date}
{' '}
at
{" "}
                    {edge.node.frontmatter.time}
                    <br />
                    Where? 
{' '}
{edge.node.frontmatter.location}
                  </p>
                  <br />
                  <p className="testimonials-name">
                    Conducted by: 
{' '}
{edge.node.frontmatter.name}
                  </p>
                  {/* <p className='testimonials-jobtitle'>
                    {edge.node.frontmatter.jobtitle}
                  </p> */}
                </div>
                <div
                  className="testimonials-content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
              <div className="rsvp">
                {edge.node.frontmatter.rsvp && (
                  <div className="call-box-bottom">
                    {/* <Link
                      className="button button-primary mt-2"
                      to={edge.node.frontmatter.rsvp}
                    > */}
                    <a
                      className="button button-primary mt-2"
                      href={edge.node.frontmatter.rsvp}

                    >
                      RSVP NOW!
                    </a>
                    {/* </Link> */}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TestimonialsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/events/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            name
            date
            time
            location
            rsvp
          }
        }
      }
    }
  }
`;

export default Testimonials;
