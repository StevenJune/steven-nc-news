import {Link} from 'react-router-dom';

const Nav = () => {
    return (
      <nav>
        <p><Link to='/'>Home</Link></p>
        <p></p>
        <p><Link to='/Users'>List Of Users</Link></p>
        <p></p>
        <p><Link to='/Topics'>List Of Topics</Link></p>
        <p></p>
        <p><Link to='/AllArticles'>List Of Articles</Link></p>
      </nav> 
    )
}

export default Nav;
