//!img

import TwitterImg from '../../assets/Logos/twitter.png';
import InstagramImg from '../../assets/Logos/instagram.png';
import FacebookImg from '../../assets/Logos/facebook.png';


export const Footer = () => {
    return (
        <footer>
            <h3 id="nombreCreadores">@Code_Dragon</h3>

            <figure id='logosRedes'>
                <img src={TwitterImg} alt="" />
                <img src={InstagramImg} alt="" />
                <img src={FacebookImg} alt="" />
            </figure>
        </footer>
    );
};
