import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <div className="container-footer">
          <div className="row-footer">
            <div className="col-footer">
              <h4> Kia ora from New Zealand! </h4>
              <ul className="list-unstyled-footer">
                <li> Do you want to know more about us? </li>
                <li>
                  {' '}
                  Te whai hua ki nga tangata o Aotearoa ma te tuku pakihi pai{' '}
                </li>
                <li> Let's make a difference </li>
              </ul>
            </div>
            <hr /> <hr />
            <div className="col-footer">
              <h4> Terms and Conditions </h4>
              <ul className="list-unstyled-footer">
                <li> Nifty is a safe and trustworthy e-commerce market app </li>
                <li>
                  {' '}
                  Ko Nifty he taupānga maakete e-tauhokohoko haumaru me te pono
                </li>
                <li>
                  {' '}
                  We can take appropriate actions to help protect Nifty at any
                  time{' '}
                </li>
              </ul>
            </div>
            <hr /> <hr />
            <div className="col-footer">
              <h4> Important </h4>
              <ul className="list-unstyled-footer">
                <li> Business sustainability is our priority </li>
                <li> Ko te oranga tonutanga o te pakihi te kaupapa matua</li>
                <li> Let's keep New Zealand safe </li>
              </ul>
            </div>
          </div>
        </div>
       
         </div>

         <hr /> <hr />
      <div className="row-footer">
          <p className="col-sm-footer">
            Nifty - &copy; - {new Date().getFullYear()} |Terms
            Of Service | Privacy
          </p>
        </div>
    </footer>
  );
}
