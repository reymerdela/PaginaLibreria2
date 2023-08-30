import Image from "next/image"
import {default as cart } from "../public/images/bag.svg";
import {default as user} from "../public/images/person.svg";
import style from './navButtons.module.css'
import Link from "next/link"

const NavButtons = () => {
  return (
    <div className={style.navButtons}>
      <div>
        <Image src={user} height={25}  alt="user" />
      </div>
      <Link href={"/cart"}>
        <Image src={cart} height={25}  alt="cart" />
      </Link>   
    </div>
  )
}
export default NavButtons
