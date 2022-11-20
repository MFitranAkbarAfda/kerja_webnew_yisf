import DocumentItems from "../components/DocumentItems";
import "../components/css/Document.css"

function DocumentWritter() {
    return(
        <>
            <div className="mt-5">
                
                <section className="feature section pt-0">
                    <div className="container">
                        <div className="col-md-12">
                            <h1 className="text-center title">Documents Required</h1>
                        </div>

                        
                        <div className="row">

                            <DocumentItems />

                        </div>  

                    </div>
                </section>

            </div>

        </>
    )
}

export default DocumentWritter;