import { useState } from 'react';
import { Row, Container, ProfilePicture, Title } from './BasicInformationStyles';
import profileIcon from '../../assets/img/profileIcon.png';
import { StyledButton } from '../../components/StyledButton';
import { Link } from 'react-router-dom';
import { saveDataToLocalStorage } from '../../utils/localStorageUtils';

const BasicInformation = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [cpf, setCpf] = useState('');
  const [patientData, setPatientData] = useState({
    // Inicialize os campos conforme necessário
    profileImage: null,
    patientName: '',
    nickname: '',
    nationality: '',
    birthDate: '',
    cpf: '',
    rg: '',
    gender: '',
    maritalStatus: '',
    additionalNotes: '',
  });

  const handleImageClick = () => {
    document.getElementById('imageInput').click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setPatientData((prevData) => ({ ...prevData, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPatientData((prevData) => ({ ...prevData, profileImage: null }));
  };

  const handleCpfChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = value.substring(0, 11);

    if (value.length > 3) {
      value = `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6, 9)}-${value.substring(9)}`;
    }

    setCpf(value);
    setPatientData((prevData) => ({ ...prevData, cpf: value }));
  };

  // Função para salvar os dados no localStorage
  const handleSave = () => {
    saveDataToLocalStorage(patientData, 'basicInformation');
  };

  return (
    <Container>
      <Row>
        <div>
          <ProfilePicture
            onClick={handleImageClick}
            hasSelectedImage={selectedImage !== null}
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Foto de Perfil"
                className="selectedImageStyle"
              />
            ) : (
              <img
                src={profileIcon}
                alt="Foto de Perfil Padrão"
                className="defaultImageStyle"
              />
            )}
          </ProfilePicture>
          {selectedImage && <button onClick={handleRemoveImage}>Remover</button>}
        </div>
      </Row>
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <Row>
        <div>
          <Title>Paciente</Title>
          <input
            type="text"
            onChange={(e) => setPatientData((prevData) => ({ ...prevData, patientName: e.target.value }))}
          />
        </div>
        <div>
          <Title>Apelido</Title>
          <input
            type="text"
            onChange={(e) => setPatientData((prevData) => ({ ...prevData, nickname: e.target.value }))}
          />
        </div>
        <div>
          <Title>Nacionalidade</Title>
          <input
            type="text"
            onChange={(e) => setPatientData((prevData) => ({ ...prevData, nationality: e.target.value }))}
          />
        </div>
      </Row>
      <Row>
        <div>
          <Title>Data de Nascimento</Title>
          <input
            type="date"
            onChange={(e) => setPatientData((prevData) => ({ ...prevData, birthDate: e.target.value }))}
          />
        </div>
        <div>
          <Title>CPF</Title>
          <input
            type="text"
            value={cpf}
            onChange={handleCpfChange}
          />
        </div>
        <div>
          <Title>RG</Title>
          <input
            type="text"
            onChange={(e) => setPatientData((prevData) => ({ ...prevData, rg: e.target.value }))}
          />
        </div>
      </Row>
      <Row>
        <div>
          <Title>Gênero</Title>
          <select
            onChange={(e) => setPatientData((prevData) => ({ ...prevData, gender: e.target.value }))}
          >
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Prefiro não dizer</option>
          </select>
        </div>
        <div>
          <Title>Estado Civil</Title>
          <select
            onChange={(e) => setPatientData((prevData) => ({ ...prevData, maritalStatus: e.target.value }))}
          >
            <option value="solteiro">Solteiro(a)</option>
            <option value="casado">Casado(a)</option>
            <option value="divorciado">Divorciado(a)</option>
            <option value="viuvo">Viúvo(a)</option>
          </select>
        </div>
      </Row>
      <Row>
        <div>
          <Title>Observações Adicionais</Title>
          <textarea
            rows="4"
            cols="50"
            onChange={(e) => setPatientData((prevData) => ({ ...prevData, additionalNotes: e.target.value }))}
          />
        </div>
      </Row>
      <Link to={{ pathname: "/Contact", state: { cpf } }}>
        <StyledButton onClick={handleSave}>
          Próximo
        </StyledButton>
      </Link>
    </Container>
  );
};

export default BasicInformation;
