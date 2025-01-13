import './DisplayMode.css'
//import Dropdown from 'react-bootstrap/Dropdown';

export default function DisplayMode({displayTheme, setDisplayTheme}){
    return(
        <>
            <div className="dropdown themeDiv">
                <img className="themeIcon dropdown-toggle p-2 " type="button" data-bs-toggle="dropdown" aria-expanded="false" src={displayTheme ? 'icons8-dark-mode-50.png' : 'icons8-daylight.svg'} alt="" />

                <ul className={`dropdown-menu '}`}>
                    <li><a className="dropdown-item" onClick={()=>{
                        setDisplayTheme(false)
                        }}>Light Mode</a></li>
                    <li><a className="dropdown-item" onClick={()=>{
                        setDisplayTheme(true)
                        }}>Dark Mode</a></li>
                    <li><a className="dropdown-item" onClick={()=>{
                        setDisplayTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)
                        }}>System Default</a></li>
                </ul>
            </div>

        </>
    )
}