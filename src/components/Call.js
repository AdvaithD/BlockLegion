import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const Call = props => (
  <div className="call">
    {/* <div className='call-box-top'>
      <div className='call-phone'>
        <strong>Phone: </strong>
        {props.data.site.siteMetadata.contact.phone}
      </div>
      <div className='call-email'>
        <strong>Email: </strong>
        <a href={`mailto:${props.data.site.siteMetadata.contact.email}`}>
          {props.data.site.siteMetadata.contact.email}
        </a>
      </div>
    </div> */}
    <div className="call-box-bottom">
      <Link className="button button-primary mt-2" to="/events">
        UPCOMING EVENTS
      </Link>
    </div>

    {props.button && (
      <div className="call-box-bottom">
      <Link className="button button-primary mt-2" to="/events">
      <a href="https://discord.gg/3YFTR5K" style={{ color: '#fff', textDecoration: 'none' }}>JOIN OUR DISCORD SERVER!</a>
      </Link>

      </div>
    )}
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Call button={props.button} data={data} />}
  />
);
