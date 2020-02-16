import React from 'react';
import PageHeader from 'components/page/PageHeader';

const CurrentTeam: React.FC = ({ children }) => (
  <>
    <PageHeader />

    {children}
  </>
);

export default CurrentTeam;
