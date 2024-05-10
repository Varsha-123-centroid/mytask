import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
        <div class="nav-container">
<div class="bar bar--sm visible-xs">
<div class="container">
<div class="row">
<div class="col-xs-3 col-sm-2">
<a href="index.php">
<img class="img-fluid" alt="logo" src="templates/bs_wtk/images/taskmantra_img/taskmantra_logo.png" />
</a>
</div>
<div class="col-xs-9 col-sm-10 text-right">
<a href="javascript:void(0);" class="hamburger-toggle" data-toggle-class="#menu1;hidden-xs">
<i class="icon icon--sm stack-interface stack-menu"></i>
</a>
</div>
</div>

</div>

</div>

<nav id="menu1" class="bar bar--sm bar-1 hidden-xs hiddem-sm bar--absolute">
<div class="container">
<div class="row">
<div class="col-md-1 col-sm-2 hidden-xs">
<div class="bar__module">
<a href="index.php">
<img class="img-fluid" alt="logo" src="templates/bs_wtk/images/taskmantra_img/taskmantra_logo.png" />
</a>
</div>

</div>
<div class="col-md-11 col-sm-12 text-right text-left-xs text-left-sm headermenu">
    <div class="bar__module">
    <ul class="menu-horizontal text-left">
    <li><li><Link to="/">HOME</Link></li></li>
    <li><li><Link to="/why_us">WHY US</Link></li></li>
    <li><li><Link to="/about_us">ABOUT US</Link></li></li>
    <li><li><Link to="/how_works">HOW IT WORKS</Link></li></li>
    <li><a href="https://feed.taskmantra.com/shop/" target="_blank" class="topmenu_link" style={{color:"blue"}}>Brand Store</a></li>
    <li><a href="https://taskmantra.freshdesk.com/" target="_blank" class="topmenu_link" style={{color:"blue"}}>Support</a></li>
    <li><li><Link to="/register">REGISTER</Link></li></li>
    <li><li><Link to="/login">LOGIN</Link></li></li>
    </ul>
    </div>


</div>
</div>

</div>

</nav>

</div>
    </div>
  )
}

export default Header