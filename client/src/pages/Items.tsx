import React from "react";
import { Link } from "react-router-dom";
import Wallpaper1 from "../assets/images/wallpapers/wallpaper1.jpg";
import Wallpaper2 from "../assets/images/wallpapers/wallpaper2.jpg";
import Wallpaper3 from "../assets/images/wallpapers/wallpaper3.jpg";
import Wallpaper4 from "../assets/images/wallpapers/wallpaper4.jpg";
import Wallpaper5 from "../assets/images/wallpapers/wallpaper5.jpg";
import Wallpaper6 from "../assets/images/wallpapers/wallpaper6.jpg";
import Wallpaper7 from "../assets/images/wallpapers/wallpaper7.jpg";
import Wallpaper8 from "../assets/images/wallpapers/wallpaper8.jpg";
import Wallpaper9 from "../assets/images/wallpapers/wallpaper9.jpg";
import Wallpaper10 from "../assets/images/wallpapers/wallpaper10.jpg";

export default function Items() {
  return (
    <>
      <h1 className="items__title">Checkout all available items</h1>
      <ul className="hex-grid">
        <li className="hex">
          <Link className="hex__inner" to="#">
            <img className="hex__image" src={Wallpaper1} alt="" />
            <h5 className="hex__title">Frames</h5>
            <p className="hex__text">
              The frames of war. Machines of power. All with different
              abilities.
            </p>
          </Link>
        </li>
        <li className="hex">
          <Link className="hex__inner" to="/weapons">
            <img className="hex__image" src={Wallpaper2} alt="" />
            <h5 className="hex__title">Weapons</h5>
            <p className="hex__text">
              The Tenno's arsenal is massive. See what weapons the can wield.
            </p>
          </Link>
        </li>
        <li className="hex">
          <Link className="hex__inner" to="#">
            <img className="hex__image" src={Wallpaper3} alt="" />
            <h5 className="hex__title">Mods</h5>
            <p className="hex__text">
              Upgrade your warframe, weapon or companion to make them even more
              powerfull.
            </p>
          </Link>
        </li>
        <li className="hex">
          <Link className="hex__inner" to="#">
            <img className="hex__image" src={Wallpaper4} alt="" />
            <h5 className="hex__title">Arcanes</h5>
            <p className="hex__text">
              Upgrade your warframe with powerfull arcanes. But can you defeat
              the Hydrolyst to get them?
            </p>
          </Link>
        </li>
        <li className="hex">
          <Link className="hex__inner" to="#">
            <img className="hex__image" src={Wallpaper5} alt="" />
            <h5 className="hex__title">Archwing</h5>
            <p className="hex__text">
              When a threat looms in outerspace. Archwing and its weapons will
              provide all the firepower to wreak havoc.
            </p>
          </Link>
        </li>
        <li className="hex">
          <Link className="hex__inner" to="#">
            <img className="hex__image" src={Wallpaper6} alt="" />
            <h5 className="hex__title">Resources</h5>
            <p className="hex__text">
              All things must be built. But they require certain elements from
              different worlds.
            </p>
          </Link>
        </li>
        <li className="hex">
          <Link className="hex__inner" to="#">
            <img className="hex__image" src={Wallpaper7} alt="" />
            <h5 className="hex__title">Drop Tables</h5>
            <p className="hex__text">
              In need of anything more powerfull to improve your strength? Check
              out how and where.
            </p>
          </Link>
        </li>
        <li className="hex">
          <Link className="hex__inner" to="#">
            <img className="hex__image" src={Wallpaper8} alt="" />
            <h5 className="hex__title">Relics</h5>
            <p className="hex__text">
              These hold the power to the ancient orokin arsenal of the tenno.
              Primes.
            </p>
          </Link>
        </li>
        <li className="hex">
          <Link className="hex__inner" to="#">
            <img className="hex__image" src={Wallpaper9} alt="" />
            <h5 className="hex__title">Appearence</h5>
            <p className="hex__text">
              We all know fashionframe is the endgame. See how you can customize
              to look like a chomp.
            </p>
          </Link>
        </li>
        <li className="hex">
          <Link className="hex__inner" to="#">
            <img className="hex__image" src={Wallpaper10} alt="" />
            <h5 className="hex__title">Misc</h5>
            <p className="hex__text">
              Checkout all other items that haven't been mentioned before.
            </p>
          </Link>
        </li>
      </ul>
    </>
  );
}
