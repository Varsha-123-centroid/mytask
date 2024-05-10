import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div>
        <footer class="text-center-xs space--xs bg--dark ">
<div class="container">
<div class="row">
<div class="col-sm-7">
<span class="type--fine-print" style={{color:"white"}}>Task Mantra Pvt. Ltd © {currentYear}
<span class="update-year" style={{color:"white"}}></span> | All rights are reserved [Beta Version]</span>
</div>
<div class="col-sm-5 text-right text-center-xs">
<ul class="social-list list-inline list--hover">
<li>
<a href="https://youtube.com/@taskmantra669" style={{backgroundColor:"white",padding:"5px"}}>
<i class="socicon socicon-youtube  icon icon--xs"></i>
</a>
</li>
<li>
<a href="https://twitter.com/MantraTask" style={{backgroundColor:"white",padding:"5px"}}>
<i class="socicon socicon-twitter icon icon--xs"></i>
</a>
</li>
<li>
<a href="https://www.facebook.com/taskmantra" style={{backgroundColor:"white",padding:"5px"}}>
<i class="socicon socicon-facebook icon icon--xs"></i>
</a>
</li>
<li>
<a href="https://www.instagram.com/taskmantra" style={{backgroundColor:"white",padding:"5px"}}>
<i class="socicon socicon-instagram icon icon--xs"></i>
</a>
</li>
</ul>
</div>
</div>

<div class="row">
<div class="col-sm-10">
<a class="type--fine-print" href="tt.com/contact.php" style={{color:"white"}}>Contact Us</a>
<a class="type--fine-print" href="tt.com/privacypolicy.php" style={{color:"white"}}>Privacy Policy</a>
<a class="type--fine-print" href="tt.com/termsandcondition.php" style={{color:"white"}}>Terms & Conditions</a>
<a class="type--fine-print" href="tt.com/return_refund.php" style={{color:"white"}}>Return & Refund </a>
<a class="type--fine-print" href="tt.com/shipping_policy.php" style={{color:"white"}}>Shipping Policy</a>
<a class="type--fine-print" href="tt.com/DOC-20231026-WA0031.pdf" style={{color:"white"}} target="_blank">Registration Certificate</a>
<a class="type--fine-print" href="tt.com/DOC-20240410-WA0050.pdf" style={{color:"white"}} target="_blank">Certificate of Incorporation</a>
{/* <!--<a class="type--fine-print" href="status.php" style={{color:"white"}}>Status</a>
<a class="type--fine-print" href="versionlog.php" style={{color:"white"}}>Version Logs</a>--> */}
</div>
<div class="col-sm-2 text-right text-center-xs">
<a class="type--fine-print" href="/cdn-cgi/l/email-protection#4e272028210e3a2f3d25232f203a3c2f602d2123" style={{color:"white"}}><span class="__cf_email__" data-cfemail="264f484049665247554d4b47485254470845494b">[email&#160;protected]</span></a>
</div>
</div>

</div>

</footer>
    </div>
  )
}

export default Footer