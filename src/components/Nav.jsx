import {Link} from 'react-router-dom';

const Nav = () => {
    return (
      <nav>
        <a><Link to='/'>Home</Link></a>
        <p></p>
        <a><Link to='/Users'>List Of Users</Link></a>
        <p></p>
        <p><Link to='/Topics'>List Of Topics</Link></p>
        <p></p>
        <p><Link to='/AllArticles'>List Of Articles</Link></p>
      </nav> 
    )
}

export default Nav;
