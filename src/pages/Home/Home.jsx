  import { useState, useEffect } from 'react';
  import { Link } from 'react-router-dom';
  import filterIcon from '../../assets/img/filterIcon.png';
  import {
    PageContainer,
    HeaderContainer,
    Title,
    HeaderControls,
    SearchContainer,
    SearchWrapper,
    SearchInput,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCellContent,
    AddPatientButton,
  } from './HomeStyles';
  import { ButtonIcon } from '../../components/StyledButton';

  const Home = () => {
    const [patients, setPatients] = useState([]);
  
    useEffect(() => {
      const storedPatients = localStorage.getItem('patients');
  
      if (storedPatients) {
        const validPatients = JSON.parse(storedPatients)
          .filter((patient) => patient.type === 'basicInformation' && patient.cpf)
          .map((basicInfo) => {
            const contactInfo = JSON.parse(storedPatients).find(
              (contact) => contact.type === 'contact' && contact.cpf === basicInfo.cpf
            );
  
            console.log('Basic Information:', basicInfo);
            console.log('Contact Information:', contactInfo);
  
            return {
              patientName: basicInfo.patientName || 'Sem nome',
              cpf: basicInfo.cpf,
              birthDate: basicInfo.birthDate || 'Sem data de nascimento',
              email: contactInfo ? contactInfo.email : 'Sem email',
              cidade: contactInfo ? contactInfo.cidade : 'Sem cidade',
            };
          });
  
        console.log('Valid Patients:', validPatients);
  
        setPatients(validPatients);
      }
    }, []);

    return (
      <PageContainer>
        <HeaderContainer>
          <Title>Listagem de pacientes</Title>
          <HeaderControls>
            <SearchContainer>
              <SearchWrapper>
                <SearchInput type="text" placeholder="Pesquisar" />
              </SearchWrapper>
            </SearchContainer>
            <Link to="/RegisteredPatients">
              <AddPatientButton>
                <ButtonIcon>+</ButtonIcon> Adicionar Paciente
              </AddPatientButton>
            </Link>
          </HeaderControls>
        </HeaderContainer>
        {patients.length > 0 && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableCellContent>
                  <img src={filterIcon} alt="Filter Icon" style={{ marginRight: '5px' }} />
                  Nome
                </TableCellContent>
                <TableCellContent>
                  <img src={filterIcon} alt="Filter Icon" style={{ marginRight: '5px' }} />
                  CPF
                </TableCellContent>
                <TableCellContent>
                  <img src={filterIcon} alt="Filter Icon" style={{ marginRight: '5px' }} />
                  Data de Nascimento
                </TableCellContent>
                <TableCellContent>
                  <img src={filterIcon} alt="Filter Icon" style={{ marginRight: '5px' }} />
                  Email
                </TableCellContent>
                <TableCellContent>
                  <img src={filterIcon} alt="Filter Icon" style={{ marginRight: '5px' }} />
                  Cidade
                </TableCellContent>
                <TableCellContent>Ações</TableCellContent>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient, index) => (
                <TableRow key={index}>
                  <TableCellContent>{patient.patientName || 'Sem nome'}</TableCellContent>
                  <TableCellContent>{patient.cpf || 'Sem CPF'}</TableCellContent>
                  <TableCellContent>{patient.birthDate || 'Sem data de nascimento'}</TableCellContent>
                  <TableCellContent>{patient.email || 'Sem email'}</TableCellContent>
                  <TableCellContent>{patient.cidade || 'Sem cidade'}</TableCellContent>
                  <TableCellContent>
                    <button>...</button>
                  </TableCellContent>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </PageContainer>
    );
  };

  export default Home;
