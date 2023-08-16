import './header.css'

function Headerli({link}) {
  return (  <li className='nav__list--li'>
                <a href="#">{link}</a>
            </li>
  )
}

export default Headerli;
