import React from 'react';
import { useTranslation } from 'react-i18next';
import UiSvg from 'assets/img/ui.svg';
import { WithAccountsProps } from 'components/team/withAccounts';

interface Props extends WithAccountsProps {}

const AccountsList: React.FC<Props> = ({ accountsList }) => {
  const { t } = useTranslation('team');

  return (
    <table>
      <tbody>
        <tr>
          <td colSpan={3}>
            <span className="icon">
              <svg>
                <use xlinkHref={`${UiSvg}#plus`} />
              </svg>
            </span>
            <> {t('accounts.btnAddAccount')}</>
          </td>
        </tr>

        {accountsList.map(({ id, name }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>42</td>
            <td>
              <a href="/#" className="icon">
                <svg>
                  <use xlinkHref={`${UiSvg}#plus`} />
                </svg>
              </a>
              <a href="/#" className="icon">
                <svg>
                  <use xlinkHref={`${UiSvg}#minus`} />
                </svg>
              </a>
              <a href="/#" className="icon">
                <svg>
                  <use xlinkHref={`${UiSvg}#transaction`} />
                </svg>
              </a>
            </td>
          </tr>
        ))}

        <tr>
          <td>
            <a href="/#" className="icon">
              <svg>
                <use xlinkHref={`${UiSvg}#up`} />
              </svg>
            </a>
          </td>
          <td />
          <td>
            <a href="/#" className="icon">
              <svg>
                <use xlinkHref={`${UiSvg}#plus`} />
              </svg>
            </a>
            <a href="/#" className="icon">
              <svg>
                <use xlinkHref={`${UiSvg}#minus`} />
              </svg>
            </a>
            <a href="/#" className="icon">
              <svg>
                <use xlinkHref={`${UiSvg}#transaction`} />
              </svg>
            </a>
          </td>
        </tr>
        <tr>
          <td colSpan={3}>
            <table>
              <tbody>
                <tr>
                  <td />
                  <td>
                    <a href="/#" className="icon">
                      <svg>
                        <use xlinkHref={`${UiSvg}#download`} />
                      </svg>
                    </a>
                    <a href="/#" className="icon">
                      <svg>
                        <use xlinkHref={`${UiSvg}#sync`} />
                      </svg>
                    </a>
                  </td>
                  <td />
                  <td>
                    <a href="/#" className="icon">
                      <svg>
                        <use xlinkHref={`${UiSvg}#plus`} />
                      </svg>
                    </a>
                    <a href="/#" className="icon">
                      <svg>
                        <use xlinkHref={`${UiSvg}#minus`} />
                      </svg>
                    </a>
                    <a href="/#" className="icon">
                      <svg>
                        <use xlinkHref={`${UiSvg}#transaction`} />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a href="/#" className="icon">
                      <svg>
                        <use xlinkHref={`${UiSvg}#download`} />
                      </svg>
                    </a>
                    <a href="/#" className="icon">
                      <svg>
                        <use xlinkHref={`${UiSvg}#sync`} />
                      </svg>
                    </a>
                  </td>
                  <td />
                  <td>
                    <a href="/#" className="icon">
                      <svg>
                        <use xlinkHref={`${UiSvg}#plus`} />
                      </svg>
                    </a>
                    <a href="/#" className="icon">
                      <svg>
                        <use xlinkHref={`${UiSvg}#minus`} />
                      </svg>
                    </a>
                    <a href="/#" className="icon">
                      <svg>
                        <use xlinkHref={`${UiSvg}#transaction`} />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td />
                  <td />
                  <td>
                    <a href="/#" className="icon">
                      <svg>
                        <use xlinkHref={`${UiSvg}#plus`} />
                      </svg>
                    </a>
                    <a href="/#" className="icon">
                      <svg>
                        <use xlinkHref={`${UiSvg}#minus`} />
                      </svg>
                    </a>
                    <a href="/#" className="icon">
                      <svg>
                        <use xlinkHref={`${UiSvg}#transaction`} />
                      </svg>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <a href="/#" className="icon">
              <svg>
                <use xlinkHref={`${UiSvg}#down`} />
              </svg>
            </a>
          </td>
          <td />
          <td>
            <a href="/#" className="icon">
              <svg>
                <use xlinkHref={`${UiSvg}#plus`} />
              </svg>
            </a>
            <a href="/#" className="icon">
              <svg>
                <use xlinkHref={`${UiSvg}#minus`} />
              </svg>
            </a>
            <a href="/#" className="icon">
              <svg>
                <use xlinkHref={`${UiSvg}#transaction`} />
              </svg>
            </a>
          </td>
        </tr>
        <tr>
          <td />
          <td />
          <td>
            <a href="/#" className="icon">
              <svg>
                <use xlinkHref={`${UiSvg}#plus`} />
              </svg>
            </a>
            <a href="/#" className="icon">
              <svg>
                <use xlinkHref={`${UiSvg}#minus`} />
              </svg>
            </a>
            <a href="/#" className="icon">
              <svg>
                <use xlinkHref={`${UiSvg}#transaction`} />
              </svg>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AccountsList;
