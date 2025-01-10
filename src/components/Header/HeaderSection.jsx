import SearchButton from '../Search Box/SearchButton'
import DisplayMode from '../DisplayMode/DisplayMode'
import './Header.css'
import { useContext } from 'react'
import themeContext from '../Context/themeContext'
export default function HeaderSection({displayTheme, setDisplayTheme, }){
    const useThemeContext=useContext(themeContext)
    return(
        <>
            <div className='header-section d-flex align-items-center row'>
                <div className="app-name-section col-8 px-3">
                    <div className="app-name">Reddit-ON</div>
                </div>
                <div className="search-mode d-flex justify-content-end align-items-center col-4 px-3">
                    <div className="header-search d-inline-block px-3">
                        <SearchButton {...{displyTheme:useThemeContext.displayTheme}}></SearchButton>
                    </div>
                    <div className="header-disply-mode d-inline-block px-3">
                        <DisplayMode {...{displayTheme:useThemeContext.displayTheme, setDisplayTheme:useThemeContext.setDisplayTheme}}></DisplayMode>
                    </div>
                </div>
            </div>
        </>
    )
}