import React from "react";

function footer() {
  return (
    <>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-sm-5">
                <div class="companyinfo">
                  <h2>
                    <span>suwi</span>-shopper
                  </h2>
                </div>
              </div>
              <div class="col-sm-5">
                <div class="companyinfo">
                  <h2>Prepared by</h2>
                  <p>Suwijak Pitsupan</p>
                  <p>61113858</p>
                  <p>Software Engineering</p>
                </div>
              </div>
              <div class="col-sm-2">
                <div class="video-gallery text-center">
                  <a href="#" />
                  <div class="iframe-img">
                    <img src="images/home/logo.png" alt="" />
                  </div>
                  <h2>Create by</h2>
                  <p>Suwijak Pitsupan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <script src="js/jquery.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/jquery.scrollUp.min.js"></script>
      <script src="js/price-range.js"></script>
      <script src="js/jquery.prettyPhoto.js"></script>
      <script src="js/main.js"></script>
    </>
  );
}

export default footer;
