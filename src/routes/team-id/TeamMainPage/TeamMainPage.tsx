import React from 'react';
import IconsSvg from 'assets/img/icons.svg';
import UiSvg from 'assets/img/ui.svg';
import AccountsList from 'components/team/AccountsList';

const TeamMainPage: React.FC = () => {
  return (
    <main>
      <div>
        <div className="icon">
          <svg>
            <use xlinkHref={`${UiSvg}#chat`} />
          </svg>
        </div>
        <div className="icon">
          <svg>
            <use xlinkHref={`${UiSvg}#team`} />
          </svg>
        </div>
        <div className="icon">
          <svg>
            <use xlinkHref={`${UiSvg}#email`} />
          </svg>
        </div>

        <AccountsList />

        <div>
          <div className="icon">
            <svg>
              <use xlinkHref={`${UiSvg}#diamond`} />
            </svg>
          </div>
          <div className="icon">
            <svg>
              <use xlinkHref={`${UiSvg}#google-play`} />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="icon">
            <svg>
              <use xlinkHref={`${UiSvg}#prev`} />
            </svg>
          </div>
          <div className="icon">
            <svg>
              <use xlinkHref={`${UiSvg}#next`} />
            </svg>
          </div>

          <div className="icon">
            <svg>
              <use xlinkHref={`${UiSvg}#prev`} />
            </svg>
          </div>
          <div className="icon">
            <svg>
              <use xlinkHref={`${IconsSvg}#car1`} />
            </svg>
          </div>
          <div className="icon">
            <svg>
              <use xlinkHref={`${UiSvg}#next`} />
            </svg>
          </div>
          <div className="icon">
            <svg>
              <use xlinkHref={`${UiSvg}#minus`} />
            </svg>
          </div>
          <div className="icon">
            <svg>
              <use xlinkHref={`${UiSvg}#plus`} />
            </svg>
          </div>
        </div>
        <table>
          <tbody>
            <tr>
              <td colSpan={5}>
                <a href="/#" className="icon">
                  <svg>
                    <use xlinkHref={`${UiSvg}#prev`} />
                  </svg>
                </a>
                <div className="icon">
                  <svg>
                    <use xlinkHref={`${UiSvg}#next`} />
                  </svg>
                </div>
                <a href="/#" className="icon">
                  <svg>
                    <use xlinkHref={`${UiSvg}#calendar`} />
                  </svg>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#/" className="icon">
                  <svg>
                    <use xlinkHref={`${IconsSvg}#food1`} />
                  </svg>
                </a>
              </td>
              <td>
                <div>
                  <div className="icon">
                    <svg>
                      <use xlinkHref={`${UiSvg}#next`} />
                    </svg>
                  </div>
                </div>
              </td>
              <td />
              <td />
              <td>
                <div className="icon">
                  <svg>
                    <use xlinkHref={`${UiSvg}#qr-code`} />
                  </svg>
                </div>
                <a href="/#" className="icon">
                  <svg>
                    <use xlinkHref={`${UiSvg}#camera`} />
                  </svg>
                </a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#/" className="icon">
                  <svg>
                    <use xlinkHref={`${IconsSvg}#food1`} />
                  </svg>
                </a>
              </td>
              <td>
                <div className="icon">
                  <svg>
                    <use xlinkHref={`${UiSvg}#next`} />
                  </svg>
                </div>
              </td>
              <td />
              <td />
              <td />
            </tr>

            <tr>
              <td>
                <a href="#/" className="icon">
                  <svg>
                    <use xlinkHref={`${IconsSvg}#car1`} />
                  </svg>
                </a>
              </td>
              <td>
                <div className="icon">
                  <svg>
                    <use xlinkHref={`${UiSvg}#next`} />
                  </svg>
                </div>
              </td>
              <td />
              <td />
              <td>
                <div className="icon">
                  <svg>
                    <use xlinkHref={`${UiSvg}#qr-code`} />
                  </svg>
                </div>
                <a href="/#" className="icon">
                  <svg>
                    <use xlinkHref={`${UiSvg}#camera`} />
                  </svg>
                </a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#/" className="icon">
                  <svg>
                    <use xlinkHref={`${IconsSvg}#work1`} />
                  </svg>
                </a>
              </td>
              <td />
              <td />
              <td />
              <td />
            </tr>

            <tr>
              <td>
                <a href="#/" className="icon">
                  <svg>
                    <use xlinkHref={`${IconsSvg}#car1`} />
                  </svg>
                </a>
              </td>
              <td>
                <div className="icon">
                  <svg>
                    <use xlinkHref={`${UiSvg}#next`} />
                  </svg>
                </div>
              </td>
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default TeamMainPage;
