import {useNavigate} from 'react-router-dom';
 
 const ReserveATableButton = () => {
    const navigation = useNavigate();

    return <button className="LemonButtonPrimary" onClick={() => navigation('/reservation')}>Reserve a table</button>
 }

export default ReserveATableButton


 
 