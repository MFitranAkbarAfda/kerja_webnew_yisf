import "./css/Document.css";

export default function DocumentItems() {
    return (
        <>
            <div className="col-md-6">
                <div className="card c-doc">
                    <h1>Online Competition</h1>

                    <div className="description">
                        <h3>1.Extended Abstract (see attachment)</h3>

                        <h4>Format Extended Abstract</h4>
                        <ul className="list-doc">
                            <li className="item-doc">Research Background, problem formulation and research objectives</li>
                            <li className="item-doc">Materials and methods used</li>
                            <li className="item-doc">Disscusion</li>
                            <li className="item-doc">Conclusions and suggestions</li>
                        </ul>

                        <p>Extended abstract is maximized 10 pages outside of the bibliography/reference used to support the research</p>

                        <h4>PROVISIONS Extended Abstract</h4>
                        <ul className="list-doc">
                            <li className="item-doc">Abstract made in English</li>
                            <li className="item-doc">Font : Arial (12), Line Space : 1, Margin : 4,3,3,3 (left, right, top, bottom), Justify, A4 paper size</li>
                            <li className="item-doc">Extended abstract in PDF and Ms format . Word</li>
                        </ul>

                        <h3>2. Power Point</h3>

                        <ul className="list-doc">
                            <li className="item-doc">Presentation are able to be delivered in English, as well as the presentation material (in powerpoint format).</li>
                            <li className="item-doc">Each team has 7 minutes to Present their work and 8 minutes to feedback by the judges. Each team has 15 minutes in front of the jury.</li>
                            <li className="item-doc">Disscusion</li>
                            <li className="item-doc">Each team must bring the product during the presentation.</li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card c-doc">
                    <h1>Offline Competition</h1>

                    <div className="description">
                        <h3>1.Extended Abstract (see attachment)</h3>

                        <h4>Format Extended Abstract</h4>
                        <ul className="list-doc">
                            <li className="item-doc">Research Background, problem formulation and research objectives</li>
                            <li className="item-doc">Materials and methods used</li>
                            <li className="item-doc">Disscusion</li>
                            <li className="item-doc">Conclusions and suggestions</li>
                        </ul>

                        <p>Extended abstract is maximized 10 pages outside of the bibliography/reference used to support the research</p>

                        <h4>PROVISIONS Extended Abstract</h4>
                        <ul className="list-doc">
                            <li className="item-doc">Abstract made in English</li>
                            <li className="item-doc">Font : Arial (12), Line Space : 1, Margin : 4,3,3,3 (left, right, top, bottom), Justify, A4 paper size</li>
                            <li className="item-doc">Extended abstract in PDF and Ms format . Word</li>
                        </ul>

                        <h3>2. Poster</h3>

                        <ul className="list-doc">
                            <li className="item-doc">Poster describes the method used.</li>
                            <li className="item-doc">Posters are made in A0 size.</li>
                            <li className="item-doc">Format and Design can be adapted to the research conducted.</li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}