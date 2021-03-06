function header() {
  return (
    <header id="header">
      <div class="header_top">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="contactinfo">
                <ul class="nav nav-pills">
                  <li>
                    <a href="#">
                      <i class="fa fa-phone"></i> 092 6648514
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-envelope"></i> suwijak1691@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="social-icons pull-right">
                <ul class="nav navbar-nav">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100004643081496">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      ]
      <div class="header-middle">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="logo pull-left">
                <a href="/">
                  <img src="/images/home/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="shop-menu pull-right">
                <ul class="nav navbar-nav">
                  <li>
                    <a href="#">
                      <i class="fa fa-user"></i> Account
                    </a>
                  </li>
                  <li>
                    <a href="/cart">
                      <i class="fa fa-shopping-cart"></i> Cart
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      <i class="fa fa-lock"></i> Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <div class="container">
          <div class="row">
            <div class="col-sm-9">
              <div class="mainmenu pull-left">
                <ul class="nav navbar-nav collapse navbar-collapse">
                  <li>
                    <a href="/" class="active">
                      Home
                    </a>
                  </li>
                  {/* <li class="dropdown">
                    <a href="#">
                      Admin<i class="fa fa-angle-down"></i>
                    </a>
                    <ul role="menu" class="sub-menu">
                      <li>
                        <a href="/shop">Admin Page</a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default header;
