import {Link} from "react-router-dom";

const Nav = () => {
    const logo = <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/526-lemon.svg/1200px-526-lemon.svg.png" alt="littleLemonRestaurant" />   

    const menuItems = [
        {
            id: 0,
            name: 'Home',
            link: '/',
        },
        {
            id: 1,
            name: 'About',
            link: '/about',
        },
        {
            id: 2,
            name: 'Menu',
            link: '/menu',
        },
        {
            id: 3,
            name: 'Reservation',
            link: '/reservation',
        },
        {
            id: 4,
            name: 'Order Online',
            link: '/order',
        },
        {
            id: 5,
            name: 'Login',
            link: '/login',
        },
    ]
    
    return(<>
        <nav>
            <Link to={'/'}>{logo}</Link>
            <ul>
                {menuItems.map(item => <li><Link to={item.link} key={item.id}>{item.name}</Link></li>)}
            </ul>
        </nav>
    </>)
}

export default Nav