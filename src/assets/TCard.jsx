import React from 'react'

const TCard = (props) => {
    return (
        <>
            <div className="col-md-4 col-12 mx-auto">
                <div className="card mx-2" style={{ backgroundImage: props.mode === "light" ? `linear-gradient(#169af1,aqua)` : "linear-gradient(90deg, #000000 0%, #04619f 74%)" }}>
                    <img src={props.imgSrc} className="card-img-top" alt={props.imgSrc} width="300" height="300"/>
                    <div className="card-body">
                        <h5 className={props.mode === "light" ? "card-title font-weight-bold" : "card-title font-weight-bold text-white"}>{props.nameOfPerson}</h5>
                        <p className={props.mode === "light" ? "card-text" : "card-text  text-white"}>
                            {props.position}
                        </p>
                        <a href={props.linkedIn} className="btn btn-primary" target="_yogesh">
                            Check Profile
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TCard
