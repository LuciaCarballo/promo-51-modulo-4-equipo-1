import FormSection from '../form/FormSection.jsx';
import CardPreview from '../cardPreview/CardPreviewForm.jsx';
import Hero from './Hero.jsx';


function Landing ({data, handleInputChange, handleImageProject, handleImageAuthor, handleResetForm}) {


    return (
        <>
        <Hero/>
         <main className="main">
                <FormSection
                data={data}
                handleInputChange={handleInputChange}
                handleImageProject={handleImageProject}
                handleImageAuthor={handleImageAuthor}
                handleResetForm={handleResetForm}
              />
                <CardPreview data={data} />
              </main>
           
        </>
    )
}

export default Landing;