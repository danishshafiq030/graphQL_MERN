import React from 'react';

import AddClientModal from '../AddClientModal';
import AddProjectModal from '../AddProjectModal';
import Projects from '../Projects';
import Clients from '../Clients';

export default function Home() {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <Clients />
    </>
  );
}
