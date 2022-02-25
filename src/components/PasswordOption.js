import { AiFillPlusCircle } from 'react-icons/ai';
function PasswordOption(props) {
    return (
        <div className='password-option'>
            <AiFillPlusCircle></AiFillPlusCircle>
            <p>{props.textName}</p>
            <input type={'range'} className="password-option-range">

            </input>
        </div>
    );
}

export default PasswordOption;