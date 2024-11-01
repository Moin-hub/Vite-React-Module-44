import { useState } from "react";
import Link from "../Link/Link";
import { LuMenuSquare } from 'react-icons/lu';
import { CgCloseO } from 'react-icons/cg';

const NavBar = () => {
    const [open,setOpen]= useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" }
      ];
      

    return (
        <nav className="bg-yellow-200 p-6 shadow-lg rounded-xl mb-2">
                <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>

                    {
                        open === true ? <CgCloseO></CgCloseO> : <LuMenuSquare></LuMenuSquare>
                    }

                {/* <LuMenuSquare className="text-xl"></LuMenuSquare> */}
                </div>


            <ul className={`md:flex absolute md:static rounded-xl duration-1000
                ${open ? 'top-16 left-20' : '-top-72'}
                bg-yellow-200 bg-transparent px-6 shadow-2xl`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;