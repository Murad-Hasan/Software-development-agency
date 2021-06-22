import React from 'react';
import { Link} from 'react-router-dom';
import { BsFillGrid3X3GapFill, BsPlusCircleFill, BsPeopleCircle,BsBagFill,BsListCheck,BsChatSquareQuoteFill,BsPersonPlusFill} from "react-icons/bs";

const Sidebar = ({active, match}) => {
   
    return (
        <div className="sidebar">
        <Link className="sidebar__logo" to="/">Softonic Solution</Link>
        <nav className="sidebar__nav">
            {/* client */}
            <Link
                className={`sidebar__link ${active === 'profile' ? 'active' : ''}`}
                to={`${match.path}/profile`}>
                <span><BsPeopleCircle/> <strong className='m-2'>Profile</strong></span>
            </Link>
            <Link
                className={`sidebar__link ${active === 'orders' ? 'active' : ''}`}
                to={`${match.path}/orders`}>
                <span><BsBagFill/> <strong className='m-2'>Orders</strong></span>
            </Link>
            <Link
                className={`sidebar__link ${active === 'review' ? 'active' : ''}`}
                to={`${match.path}/review`}>
                <span><BsChatSquareQuoteFill/> <strong className='m-2'>Give Review</strong></span>
            </Link>
            {/* admin */}
            <Link
                className={`sidebar__link ${active === 'orderList' ? 'active' : ''}`}
                to={`${match.path}/orderList`}>
                <span><BsFillGrid3X3GapFill/> <strong className='m-2'>Manage Order</strong></span>
            </Link>
            <Link
                className={`sidebar__link ${active === 'addService' ? 'active' : ''}`}
                to={`${match.path}/addService`}>
                <span><BsPlusCircleFill/><strong className='m-2'>Add Service</strong></span>
            </Link>
            <Link
                className={`sidebar__link ${active === 'addAdmin' ? 'active' : ''}`}
                to={`${match.path}/addAdmin`}>
                <span><BsPersonPlusFill/><strong className='m-2'>Make Admin</strong></span>
            </Link>
            <Link
                className={`sidebar__link ${active === 'manageService' ? 'active' : ''}`}
                to={`${match.path}/manageService`}>
                <span><BsListCheck/><strong className='m-2'>Manage Service</strong></span>
            </Link>
        </nav>
    </div>
    );
};

export default Sidebar;