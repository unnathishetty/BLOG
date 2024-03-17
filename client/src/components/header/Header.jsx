import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React and Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="headerImg" />
    </div>
  )
}
