import PropTypes from 'prop-types';
import React from 'react';

import Head from 'next/head';
import withAuth from '../lib/withAuth';


const propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
};

const defaultProps = {
  user: null,
};


class Index extends React.Component{
  render(){
    const { user } = this.props;

    return(

        <div style={{ padding: '10px 45px' }}>
        <Head>
        <title>Dashboard</title>
        <meta name="description" content="This is a description of the Index page" />
        </Head>
        <p>List of purchased books</p>
        <p>Email:{user.email}</p>
        </div>


    )
  }
}


Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

export default withAuth(Index);
