function Usercard (props) {

    return (
        <div className="usercard-container">
            <div className="upper-div">
                <div className="image-div">
                <img src={props.image}/>
                </div>
                <div className="name-div">
                    <h2>{props.name}</h2>
                </div>
                <div className="age-div">
                    <p>Age: {props.age}</p>
                </div>
                <div className="jobtitle-div">
                    <p>{props.jobtitle}</p>
                </div>
            </div>

            <div className="lower-div">
                <div className="description-div">
                    <p>{props.description}</p>
                </div>
                <div className="email-div">
                    {props.email}
                </div>
            </div>
        </div>
    )
}

export default Usercard