import "./HeaderStyle.css";
import {Link} from "react-router-dom";
function Header(){
return(
    <>	
    {/* <a href="https://front.codes/" class="logo" target="_blank"> */}
		{/* <img src="https://assets.codepen.io/1462889/fcy.png" alt=""/> */}
	  {/* </a> */}

  	<input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label for="menu-icon"></label>
  	<nav class="nav"> 		
  		<ul class="pt-5">
  			<li><a><Link to="./" href="./">Home</Link></a></li>
  			<li><Link to="./Faculties">Show Buses</Link></li>
  			<li><Link to="./Faculty/add">Add Bus</Link></li>
  			
  		</ul>
  	</nav>


    </>
)
}

export default Header;