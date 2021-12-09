import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

import { PowerBiWrapper } from './styles/PowerBiWrapper';

export default function PowerBIComponent() {
  return (
    <PowerBiWrapper>
      <PowerBIEmbed
        embedConfig={{
          type: 'report', // Supported types: report, dashboard, tile, visual and qna
          id: '92d54bb6-0fc0-4e48-b9da-bcb3e0ed6ebc',
          embedUrl:
            'https://app.powerbi.com/reportEmbed?reportId=92d54bb6-0fc0-4e48-b9da-bcb3e0ed6ebc&groupId=691739fb-1931-4cfe-813c-5edfbb333b41&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19',
          accessToken:
            'H4sIAAAAAAAEAC2WxQ70WA5G3-XfZqQwjdSLMHNSgV0YK8ytefcpqXt_F9efj-3z9x87fYYpLf7894-IZouqp1Yj2_oZwy0EC4PZkeqjCN0zF7sYf-OEaK31Rgu0MuZTuvK2FfrzPvzHoTcp6x4Or7kMb9D8bVCq68WE3bDHhWe6zhXc_J7LtysnntF4POOGU77HZVrsI01PuJghlauq3R4sjpqF2IwYiT1YwA4wfsa7bhiGNaPBo_NQBnb0wf-yAWzBUUVeVB1lqVGI-L5MsHa6RDYoi_XZIfVAXs4zvyUVS5Gy5w4trRrZ4A4bG8o0NEiJ9A8ZaBxH2dZ3FqFsmIrqY3VzCz2Ain9NLLDAWy2yo2DE21l8UBB7C6XdLwgNVaIv-4xQrSWnZMHHJ9oiLByVK6cocVxXmsqlhje3l9f1EQPRu_MRKOOE7FA_o5csFm2GyC8rwhxDT9Rez75eGGV8bEWDPnlDDgR6HOAFxnlFMjO0F0J8Mk4AJN45QZrRFSJzgPNa48BekwdfSvbNXY-cJ_iT8tEGxpUVDDSNsrfPeXZV0P5D5NrkJQUpMwmpkZG7jLj6IHcCgU-GW7D3K9PDdUS_4LFlyH6HJQz0VD69eQ3pK6KtCGENX1GODq3OojH47r3EmDZua60pUotg2jkoIjflZXoE5uen_pVdt8dX5vovTFpVUzz9hU30fPFSbNuSv9mgZoQhP76wuk2JhWGiMnyW0ukFsOr3pAiSQUTf-RbDErjrz_LyiA_FjCyb3XODZlg0uX4sMSnMnNZSYRw83VS2_OzB9I7WiSOfsY01DwAOBCaTXcb2JBc2eZiFFbE3PMehD75_4pZR-XuCn91MT3yw8jR1KZ9XZIn9lZSJKmP88GmzmQPuoJqvz9Hzrp3alYL7Bt-OBAlKmsjiYxSCBf4h68V1LokuGcdGbVSWCrLX6ult399M5ASPNaCSDnxePljIJ8ZW6XujzhbR6kVUx31X7W29GlJXp5VdGSvmZJEWlOtKKN168DGS85PfNzK_O0YP5rX2pFYK3HgZK2y4WV4sHLHBfC6o4_AfktLl7cEJQZAWjjXKCX0HmzORhiQa6qBWwKuRX_zDln3ovMChp16UfXqG064jVjmCtIc2TOIPFZ6l62bGen-4Vqvjb6tD13ufzt3mFMamLcdzDcvHoIWLPFbPYQlepnxn_NWtI-htYPZ8qw39AobsIT5u71YuhZBfHjk3vH6yYwc9fCwqs566QwzoHM_Oi-46KNZ-VgakywqGUYRrOGoqR1ZT5t13t_ixXioBGshvSv86OV6dW0E-yY1wskJtVMH1FG1YyUaV2Sg3lwlg3n4ebkUTajxrG90mQzVviXj3aDebUXXOiJmOj-R-Na0mMo_9PuBW3dPNkMZm_iACktCHB8iV16sCp3OoEQSmMiJmZTW4mWnD6KpAHyrELAzsdlW70W1dZEUxOZf_ygkvoMJBhBhXJpIhZ4Bsqo-XrGLZPOLiVIQO9BQQW80E3Ta9KPFi-aG8zXbO7WXngC6BJhte7oIzrK9vhKgPNMqnSFGJsT1VrWCwaRiCNlUR8hz1419fRYyORr2ayaoeMoUDgflBzk9aVJ0K8GnW0ADKBWnBojnWIQeAtjVb1fCNnNoBaXbfooGY-DPXzAQcdhlI8MaXEUxqbcSBzcuHpLvFU1jlyIhsN0nMynpv46j0wRpIrDfN2Qmli6-_4kAwoY7PL8cwyJTY-bM9MlJvFxMW-gbzVZvHsBfxTJYPdHCZvXM7rQcRP1CSJpuxdVcZkKxckYp329EDJIujUg9HTzzl3C890mwuZNkFte5JyLVPlq3UMLfXIvLsh4TJ-oklaX9LCRlS8yZ4M4VZQ5XDF9Hq36e-OUbfJIriYV652D3DbsqB8vW6tp6yASsMwErmVZERTp4hZOWZ7Y2Nk4yfUz269IGFOcY2pPmL8bSGL4gT1QjURY-fMhaKNWqbouB3v7Na9CU1b_5UaPHWW-XoRUMdEuO3hOxIg31N7Ak2nM8WFKZM9c41RsYNN-g4J39X42la2WYrR3e125zzz7mDaD2b3ncPGhMZchoWF1XoWppsADBQ5OkyDgSzgcwolUSEdSz8BkGLI4GEUXEyk-jbyA_ar1ilVT3ZSGgyanCcM7k12SZ-UFU3AIgUYhpmLq9ZH4un_Y7XkkCaBAVBXE3Qm5lDeuDF6I-pipVLCxqXWDxb8tXwqyUsUZ5MilMTy8Kjmh0NNA60mVAwhfpRVoNHRekl81jHJ_1Bn0wVaaRTbNNwlwLkBjetpHPOqVvgh8JUGft8In8cMffZdnD0ke6KiC_i6rE4FeWOwjeRkKaHeonXvcCTaemXe21mYjqDQ7fj0mgqSdGUt-hJa2ZVsWrYrOMONKCdd5ZEGRGcmfawBrHN17PDYKrq9lQRlBqyTgSGAXxk_bkAIy2tSub0iKpevysfnJVc6oqP6C1nXDQ_Qgad-LtJDTJKelC7lBGUTik6K0IrN8VDc8VzJ5xy_Z4LJc8-pILhbJy7X8oMoAjNenTTYQE6XHUFU3K9nL_--vOfP9z6zPuklc9P0xp-G89m71qYpnEzcKQCqn476R1fPzI652dCfYEk-exaP6a3lel98Dv1jUgJmY0RlbQVprWTEMmHlaABcu5uC5phYsXLXl6DynUiqnhuda4vE4ITfuB3H_A-YcwkLFWAWrhvegN2Van13oQQCZaG483ul8tZORXT8-8IaqfNcWXErZgLSaHEwecGmAu4fPG6gdPGHOsSTSPGCq9KGD1zSrWVAsYqRLJWsPpiQKJfmwrWOxO7__nSc5Tf7MWan97cFt1rvsxGQl2rTkx3KIfI_ddx3j4jJv2BbWf1Ign21mkTvH7wWwJK8m5GyYUc_KaSu4qk6fMxHlxO1t9QjVXQ9fB2_BvzMzflqnx-KXvxNLEfYVmckzf727qcVEr_eeW19Zjux1r-nmXkKv-gstPLUuxqgdZt-7ALwWp-Ng-hmiMk_1tz87mn0IIoCH6Lyyk2hYMdUhyUl1cP-yx3qf9Jtf0EZprMOFDz9O_SWjEC2ESWHAlFJ64lEFxkSEYq7zWKS9Q5O7tEgvg83e2df8YieAUkZzuhL-1fQq_g7ikojq6YHz0KXM7PODTz9PJnIV5bx5GOUaMgNq_da2oWkWLitqX9N7xbg9WM7impkmcR4aO8DDvFkf5EXsJIaHMQz_WahR1drBDz2h7NvEzTPGHn5NGYFFLr4KaFjEPsbQ0s4CSf7zh5uQ94mjJaDV8fI6E3LOlCMrip6GOwvfr6baWR4AtHioVWOPHFr1_M__s_1EuSK5oMAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOmZhbHNlfX0=',
          tokenType: models.TokenType.Embed,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
            background: models.BackgroundType.Transparent,
          },
        }}
        eventHandlers={
          new Map([
            [
              'loaded',
              function () {
                console.log('Report loaded');
              },
            ],
            [
              'rendered',
              function () {
                console.log('Report rendered');
              },
            ],
            [
              'error',
              function (event) {
                console.log(event.detail);
              },
            ],
          ])
        }
        cssClassName={'embed-container'}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
    </PowerBiWrapper>
  );
}
