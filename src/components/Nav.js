import Link from "next/link";
import { useSmoomsContext } from "../utils/SmoomsState";

export default function Nav() {

    const [_, dispatch] = useSmoomsContext();

    const clearTags = () => {
        dispatch({ type: "clearTags" });
    }


    return (
        <nav className="navContainer">
            <div className="navLeft">
                <button className="sideBarItems" onClick={() => clearTags()} >Clear Tags</button>
            </div>

            <div className="navRight">
                <Link href="/">
                    <span className="navItems">Home</span>
                </Link>
                <Link href="/profile">
                    <span className="navItems">Profile</span>
                </Link>
            </div>
        </nav>
    )
}   