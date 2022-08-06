import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

export const Footer = () => {
    return(
    <div class="footer">
        {/* <span class="left">UBC BIONICS</span>
        <span class="right">CONTACT US</span> */}
        <div class="footer-content">
        <ul class = "socials">
            <li><a href="https://www.instagram.com/ubcbionicsteam/?hl=en"><i class="fab fa-instagram-square"></i></a></li>
            <li><a href="https://www.facebook.com/ubcbionicsteampage"><i class="fab fa-facebook-square"></i></a></li>
            <li><a href="https://twitter.com/ubcbionicsteam"><i class="fab fa-twitter-square"></i></a></li>
            <li><a href="https://www.linkedin.com/company/ubcbionicsteam/mycompany/"><i class="fab fa-linkedin"></i></a></li>
        </ul>
        <p>© Copyright 2022 UBC Bionics. All Rights Reserved.</p>
    {/* </div> */}
       
      </div>
    </div>
    );
}

