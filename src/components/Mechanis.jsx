import MechanisItem from "./MechanisItem";

export default function Mechanis() {
    return (
        <>
            <div>
                <section className="feature section pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 ml-auto align-self-center">
                                <div className="feature-content">

                                    <h1>Mechanism Competition </h1>
                                    <h2>Online Competition</h2>

                                    <div className="row">

                                        <div className="col-md-6">

                                            <MechanisItem 
                                                color = "b-red"
                                                title = "01"
                                                text = "The whole team participating will conduct the judging using zoom media."
                                            />

                                        </div>

                                        <div className="col-md-6 ">

                                            <MechanisItem 
                                                color = "b-blue"
                                                title = "02"
                                                text = "Presentation in English, presentation material (Power Point) made using English is good and right."
                                            />

                                        </div>

                                        <div className="col-md-6">

                                            <MechanisItem 
                                                color = "b-yellow"
                                                title = "03"
                                                text = "Each team will get 15 minutes which is divided into: 8 minutes of presentation and 7 minutes of Q&A session with the judges."
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <MechanisItem 
                                                color = "b-green"
                                                title = "04"
                                                text = "When making presentations, participants are expected to bring their products."
                                            />

                                        </div>

                                    </div>

                                    
                                    
                                    
                                </div>
                                
                            </div>
                            
                            <div className="col-lg-6 mr-auto justify-content-center">

                                {/* <div className="image-content" data-aos="fade-left"> */}
                                    
                                    <img className="img-fluid" src="images/vektor/mechanis3.png" alt="ipad" />
                                
                                {/* </div> */}

                            </div>

                        </div>
                    </div>
                </section>

                <section className="feature section pt-0">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 mr-auto justify-content-center">

                                {/* <div className="image-content" data-aos="fade-left"> */}
                                    <img className="img-fluid" src="images/vektor/mechanis2.png" alt="ipad" />
                                {/* </div> */}

                            </div>

                            <div className="col-lg-6 ml-auto align-self-center">
                                <div className="feature-content">

                                    <h1>Mechanism Competition </h1>
                                    <h2>Offline Competition</h2>


                                    <MechanisItem 
                                        color = "b-red"
                                        text = "Each team is required to bring an
                                        A0 size poster, decorating the
                                        booth/table provided by the
                                        committee. (the decor should not
                                        be excessive/outside the project
                                        theme)"
                                    />



                                    
                                    
                                </div>
                                
                            </div>
                            

                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}