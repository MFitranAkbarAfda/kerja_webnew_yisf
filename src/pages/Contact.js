import "../components/css/Contact.css";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <>
            <div className="container">
                <div className="col-md-12 mt-5 contact">
                    <h1 className="text-center">Contact</h1>


                    <div className="card mt-5 contact">
                        <div className="row">

                            <div className="col-md-6">
                                <img src="images/vektor/mechanis3.png" className="img-fluid"></img>
                            </div>

                            <div className="col-md-6">

                                <div className="mt-5">

                                        <div className="row">
                                            <div className="col-md-4">
                                                <h3>Call</h3>
                                            </div>

                                            <div className="col-md-6">
                                                <p>0817 - 7091 - 4129</p>
                                            </div>
                                        </div>

                                </div>

                                <div className="mt-5">

                                    <div className="row">
                                        <div className="col-md-4">
                                            <h3>Address</h3>
                                        </div>

                                        <div className="col-md-6">
                                            <p>Jalan Kemang
                                                NO. 63 RT. 03/RW. 06
                                                Kel. Pasir Putih, Sawangan Depok, Jawa Barat 16519, Indonesia.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div className="mt-5">

                                    <div className="row">
                                        <div className="col-md-4">
                                            <h3>Email</h3>
                                        </div>

                                        <div className="col-md-6">
                                            <p>youngscientist.iysa@gmail.com</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        
                        </div>
                    </div>

                </div>
                
            </div>

        <Footer />
        </>
    )
}