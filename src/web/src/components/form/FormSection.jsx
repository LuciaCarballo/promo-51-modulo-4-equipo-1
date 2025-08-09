import Form from './Form.jsx';


function FormSection({ data, handleInputChange, handleImageProject, handleImageAuthor, handleResetForm }) {
  return (
    <section className="formSection">

      <div className="formSection__content">
        <Form
          data={data}
          handleInputChange={handleInputChange}
          handleImageProject={handleImageProject}
          handleImageAuthor={handleImageAuthor}
          handleResetForm={handleResetForm}
          
        />
      </div>
    </section>
  );
}


export default FormSection;