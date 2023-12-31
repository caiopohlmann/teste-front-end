// RegisteredPatients.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import BasicInformation from '../BasicInformation/BasicInformation';
import Contact from '../Contact/Contact';
import * as Styles from './RegisteredPatientsStyles';

const RegisteredPatients = () => {
  const [activeTab, setActiveTab] = useState('basicInformation');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <Styles.Container>
      <Styles.ButtonContainer>
        <Link to="/">
          <Styles.BackButton>Voltar</Styles.BackButton>
        </Link>
        <Styles.TabButton
          onClick={() => handleTabChange('basicInformation')}
          active={activeTab === 'basicInformation'}
        >
          Informações Básicas
        </Styles.TabButton>
        <Styles.TabButton
          onClick={() => handleTabChange('contact')}
          active={activeTab === 'contact'}
        >
          Contato
        </Styles.TabButton>
      </Styles.ButtonContainer>
      {activeTab === 'basicInformation' && <BasicInformation />}
      {activeTab === 'contact' && <Contact />}
    </Styles.Container>
  );
};

export default RegisteredPatients;
