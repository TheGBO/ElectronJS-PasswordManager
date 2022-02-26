function PasswordElement(props) {
    function generateColor(){
        return "#"+((1<<16)*Math.random()|0).toString(16);
    }
    return (
        <div className="password-element">
            <span className="pe-child pc-pass" style={{backgroundColor:generateColor()}}>
                {props.password}
            </span>
            <span className="pe-child pc-usr">
                {props.username}
            </span>
        </div>
    );
}

export default PasswordElement;