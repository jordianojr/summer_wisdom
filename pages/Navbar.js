import React from 'react';
import { Nav } from 'react-bootstrap';

export default function MyNavbar() {
    return (
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link style={{color: "white", fontFamily: 'sans-serif'}} href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{color: "white", fontFamily: 'sans-serif'}} href="/NoteKeeper">Notekeeping with React</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{color: "white", fontFamily: 'sans-serif'}} href="/LyricsGen">Lyrics Generator with Axios API</Nav.Link>
            </Nav.Item>

        </Nav>
    );
};

{/* <Navbar.Brand href="#home">My App</Navbar.Brand> */}

// function TabsExample() {
//   return ( "'McLaren', cursive"
//     <Nav variant="tabs" defaultActiveKey="/home">
//       <Nav.Item>
//         <Nav.Link href="/home">Active</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="link-1">Option 2</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="disabled" disabled>
//           Disabled
//         </Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// }
