import './styles/App.scss';
import Landing from './pages/Landing.jsx';
import Header from './components/layout/Header.jsx';
import Home from './components/layout/Home.jsx';
import Footer from './components/layout/Footer.jsx';
import CardPreviewSite from './components/cardPreview/CardPreviewSite.jsx';
import Display from './pages/Display.jsx';
import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';

const getInitialData = () => {
  const stored = localStorage.getItem("formData");
  return stored
    ? JSON.parse(stored)
    : {
        projectName: '',
        slogan: '',
        repo: '',
        demo: '',
        technologies: '',
        description: '',
        authorName: '',
        job: '',
        authorPhoto: '',
        projectPhoto: '',
      };
};

function App() {
  
  const [data, setData] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(data));
  }, [data]);
  //
  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setData({ ...data, [name]: value });
  };

  const handleImageProject = (image) => {
    setData({ ...data, projectPhoto: image });
  };

  const handleImageAuthor = (image) => {
    setData({ ...data, authorPhoto: image });
  };

const [formKey, setFormKey] = useState(0); 

const handleResetForm = () => {
  const emptyData = {
    projectName: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    description: '',
    authorName: '',
    job: '',
    authorPhoto: '',
    projectPhoto: '',
  };
  
  setData(emptyData);
  localStorage.removeItem("formData");
  setFormKey(prev => prev + 1); 
};
const [response, setResponse] = useState(null);

const saveProject = (data) => {
const newdata  = {
  authorName: data.authorName,
  job: data.job,
  authorPhoto: data.authorPhoto,
  projectName: data.projectName,
  slogan: data.slogan,
  repo: data.repo,
  demo: data.demo,
  technologies: data.technologies,
  description: data.description,
  projectPhoto: data.projectPhoto,
};
  fetch('http://localhost:3000/subir-proyecto',
    {
      method: 'POST',
      body: JSON.stringify(newdata),
      headers: {'Content-Type': 'application/json'}
    })
      .then(response => response.json())
      .then(dataResponse => {
        //Mirar que devuelve esa petición y que podemos hacer con ella
        console.log(dataResponse);
        console.log(dataResponse.success  ? 'Proyecto guardado correctamente' : 'Error al guardar el proyecto');
        setResponse(dataResponse);
      });
 
 console.log(newdata);
   };



  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Landing />} />
     <Route path="/app" element={
      <Home 
      key={formKey}
      data={data}
      handleInputChange={handleInputChange}
      handleImageProject={handleImageProject}
      handleImageAuthor={handleImageAuthor}
      handleResetForm={handleResetForm}
      />
      } />
      <Route path="/cardPreviewSite" element={<CardPreviewSite data={data} response={response} saveProject={saveProject} />} />
      <Route path="/display" element={<Display />} />
      <Route path="/landing" element={<Landing />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
