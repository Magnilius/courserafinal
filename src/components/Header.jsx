import ReserveATableButton from "./ReserveATableButton";
const Header = () => {

    return(<>
        <div className="OneTwoGrid coloredRow">
            <div className="Centered">
                <h1 className="YellowText">Little Lemon</h1>
                <h2 className="YellowText">Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditions recipes served with a modern twist</p>
                <ReserveATableButton></ReserveATableButton>
            </div>
            <div>
                <img src="http://jordanbr.pythonanywhere.com/static/restaurant/img/head_chef.jpg" className="ImgSizeOne" alt='chef'/>
            </div>
        </div>
    </>)
}

export default Header;