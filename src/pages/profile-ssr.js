import React from 'react';

import Layout from '../components/sitewide/Layout';
import withAuth from '../components/auth/with-auth';

const Profile = ({ user }) => (
  <Layout user={user}>
    <h1>Profile</h1>

    <div>
      <h3>Profile (server rendered)</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  </Layout>
);

export default withAuth(Profile);