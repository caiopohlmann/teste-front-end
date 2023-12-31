import { useState } from 'react';
import { Row, Container, Title } from './ContactStyles';
import { Input } from '../../pages/BasicInformation/BasicInformationStyles';
import { StyledButton } from '../../components/StyledButton';
import { Link, useLocation } from 'react-router-dom';

const Contact = () => {
  const { state } = useLocation();
  const cpf = state?.cpf; // Correção na desestruturação de state
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [email, setEmail] = useState('');
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);

  const formatCep = (value) => {
    const numericValue = value.replace(/\D/g, '');
    const limitedValue = numericValue.slice(0, 8);
    return limitedValue.replace(/^(\d{5})(\d{3})$/, '$1-$2');
  };  

  const handleCepChange = (e) => {
    const value = e.target.value;
    const formattedCep = formatCep(value);
    setCep(formattedCep);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setIsSaveButtonDisabled(true);

      fetch(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (data.localidade && data.uf) {
            setCidade(data.localidade);
            setUf(data.uf);
            setIsSaveButtonDisabled(false);
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar CEP:', error);
        });
    }
  };

  const shouldEnableSaveButton = () => {
    return cep && cidade && uf && email;
  };

  const handleSave = () => {
    const basicInformationData = JSON.parse(localStorage.getItem('patients'))?.find(
      (patient) => patient.type === 'basicInformation' && patient.cpf === cpf
    );
  
    if (basicInformationData) {
      basicInformationData.email = email;
      basicInformationData.cidade = cidade;
  
      const updatedPatients = JSON.parse(localStorage.getItem('patients'))?.map((patient) =>
        patient.cpf === cpf ? basicInformationData : patient
      ) || [];
  
      localStorage.setItem('patients', JSON.stringify(updatedPatients));
    }
  };

  return (
    <Container>
      <Row>
        <div>
          <Title>CEP:</Title>
          <Input type="text" value={cep} onChange={handleCepChange} onKeyPress={handleKeyPress} />
        </div>
        <div>
          <Title>Cidade</Title>
          <Input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
        </div>
        <div>
          <Title>UF</Title>
          <Input type="text" value={uf} onChange={(e) => setUf(e.target.value)} />
        </div>
      </Row>
      <Row>
        <div>
          <Title>Endereço</Title>
          <Input type="text" />
        </div>
        <div>
          <Title>Número</Title>
          <Input type="text" />
        </div>
        <div>
          <Title>Bairro</Title>
          <Input type="text" />
        </div>
      </Row>
      <Row>
        <div>
          <Title>E-mail</Title>
          <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <Title>Complemento</Title>
          <Input type="text" />
        </div>
      </Row>
      <Link to="/">
        <StyledButton onClick={handleSave} disabled={!shouldEnableSaveButton || isSaveButtonDisabled}>
          Salvar
        </StyledButton>
      </Link>
    </Container>
  );
};

export default Contact;