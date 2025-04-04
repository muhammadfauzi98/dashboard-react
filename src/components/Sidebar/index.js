import { Button } from '@mui/material';
import { RiDashboardFill, RiPagesFill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlinePayment, MdOutlineAccountTree, MdEmail } from "react-icons/md";
import { AiFillNotification, AiOutlineSetting } from "react-icons/ai";


const Sidebar = () => {
    return (
        <>
        <div className="sidebar">
            <ul>
                <li>
                    <link to="/">
                        <Button className='w-100'>
                        <span className='icon'><RiDashboardFill /></span>
                            Dashboard
                        </Button>
                    </link>
                </li>
                <li>
                    <Button className='w-100'>
                    <span className='icon'><MdOutlineAccountTree /></span>
                        Management
                    <span className='arrow'><FaAngleRight /></span>
                </Button>
                    <ul className='submenu'>
                        <li>
                            <link to="/">Management Customer</link>
                        </li>
                    </ul>
                </li>
                <li><Button className='w-100'>
                    <span className='icon'><MdOutlinePayment /></span>
                       Payment
                    <span className='arrow'><FaAngleRight /></span>
                </Button></li>
                <li><Button className='w-100'>
                    <span className='icon'><AiFillNotification /></span>
                        Notification
                    <span className='arrow'><FaAngleRight /></span>
                </Button></li>
                <li><Button className='w-100'>
                    <span className='icon'><FaRegMessage /></span>
                       Message
                    <span className='arrow'><FaAngleRight /></span>
                </Button></li>
                <li><Button className='w-100'>
                    <span className='icon'><MdEmail /></span>
                        Email
                    <span className='arrow'><FaAngleRight /></span>
                </Button></li>
                <li><Button className='w-100'>
                    <span className='icon'><RiPagesFill /></span>
                       Page
                    <span className='arrow'><FaAngleRight /></span>
                </Button></li>
                <li><Button className='w-100'>
                    <span className='icon'><AiOutlineSetting /></span>
                       Settings
                    <span className='arrow'><FaAngleRight /></span>
                </Button></li>
                <li><Button className='w-100'>
                    <span className='icon'><AiFillNotification /></span>
                        Notification
                    <span className='arrow'><FaAngleRight /></span>
                </Button></li>
                <li><Button className='w-100'>
                    <span className='icon'><FaRegMessage /></span>
                       Message
                    <span className='arrow'><FaAngleRight /></span>
                </Button></li>
                <li><Button className='w-100'>
                    <span className='icon'><AiOutlineSetting /></span>
                       Settings
                    <span className='arrow'><FaAngleRight /></span>
                </Button></li>
                <li><Button className='w-100'>
                    <span className='icon'><RiDashboardFill /></span>
                        Dashboard
                </Button></li>
                <li><Button className='w-100'>
                    <span className='icon'><MdOutlineAccountTree /></span>
                        Management
                    <span className='arrow'><FaAngleRight /></span>
                </Button></li>
                <li><Button className='w-100'>
                    <span className='icon'><MdOutlinePayment /></span>
                       Payment
                    <span className='arrow'><FaAngleRight /></span>
                </Button></li>
                <li><Button className='w-100'>
                    <span className='icon'><AiFillNotification /></span>
                        Notification
                    <span className='arrow'><FaAngleRight /></span>
                </Button></li>
                <li><Button className='w-100'>
                    <span className='icon'><FaRegMessage /></span>
                       Message
                    <span className='arrow'><FaAngleRight /></span>
                </Button></li>
                <li><Button className='w-100'>
                    <span className='icon'><AiOutlineSetting /></span>
                       Settings
                    <span className='arrow'><FaAngleRight /></span>
                </Button></li>
            </ul>
        </div>
        </>
    );
}

export default Sidebar;