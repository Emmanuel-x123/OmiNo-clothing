import { Link } from "react-router-dom";
import styled from 'styled-components';

export const NavigationContainer = styled.div`
   height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
      display: flex;
     align-items: center;
    justify-content: center;
     padding: 0 25px;
`

export const Logo = styled.img`
      height: 50px; // default height
     max-height: 100%; // never exceed container
   width: auto; // maintain aspect ratio
`

export const NavLinksContainer = styled.div`
      width: 50%;
     height: 100%;
     display: flex;
     align-items: center;
     justify-content: flex-end;
`

export const NavLink = styled(Link)`
        padding: 10px 15px;
       cursor: pointer;
`
    


// .navigation {
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center; 
//   margin-bottom: 25px;

//   .logo-container {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 0 25px;
//   }

//   .logo {
//     height: 50px; // default height
//     max-height: 100%; // never exceed container
//     width: auto; // maintain aspect ratio
//   }

//   .nav-links-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;

//     .nav-link {
//       padding: 10px 15px;
//       cursor: pointer;
//     }
//   }
// }

// /* Responsive adjustments */
// @media (max-width: 768px) {
//   .navigation {
//     height: 60px;
//     margin-bottom: 15px;

//     .logo {
//       height: 40px; // smaller on tablets/mobiles
//     }

//     .nav-links-container {
//       width: auto; // allow links to shrink naturally
//     }
//   }
// }

// @media (max-width: 480px) {
//   .navigation {
//     height: 50px;
//     margin-bottom: 10px;

//     .logo {
//       height: 35px; // small on phones
//     }

//     .nav-links-container {
//       .nav-link {
//         padding: 8px 10px;
//       }
//     }
//   }
// }
