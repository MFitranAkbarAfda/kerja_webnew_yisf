import { ReactDOM } from 'react-dom';
import "./css/Price.css";

const myList = [
    '1). Shipping Medals', 
    '2). 1 medal / team and certificate for each person in the team'
]

export default function PriceItems(props) {

    const classCard = "card " + props.card;
    const Ctitle = "card-title " + props.ctitle;
    const Listcard = "list-grup list-grup-flush list-price " + props.list;

    const listItems = myList.map((myList) => {
        return <li className='list-group-item'>{myList}</li>
    })

    return (
        <>
            <div className={classCard}>
                <div className="card-body ">
                    <h1 className={Ctitle}>{props.title}</h1>
                    <h2 className="card-subtitle mb-2">{props.price}</h2>

                    <div className="decription">
                        <h5>Team</h5>
                        <h6>Facilities :</h6>
                        <ul className={Listcard}> 

                            {listItems}

                        </ul>
                        <a href={props.link}>
                            <button className="btn btn-primary btn-price">Registration</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}