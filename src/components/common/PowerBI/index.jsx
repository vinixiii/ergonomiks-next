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
            'H4sIAAAAAAAEACWUNQ7sCAIF7_JTr2SmlSYwtZnbmJmZ2aO9-7Zm8qcXlFT19x8refopyf_890_p3VvIkHprVgexUkHuTDO1uZIuoXG-YAMMBOvm67XAEfBpe5ZuYKNp90N-4nXkYYCiKyilN5BWhs7n0N5ozhKfsE-0a43cgp4yUyYJs0A2djvgXe5w3uXzoMd5x0ZORgq-2g1tNUwhDzl0xINdcFNtvNO1E48Tw1ZXNTGlEooPwiEGyqRIPdNlnA-phnuEKi0X3HcpFasnUUy2dgEZxDV4UI5s1lUXzuz37V468N1Zv_mmpGXgYa1w3p6F1ntN-9i_wTWY_gk33HLP7thXmmAhcIjSvDlE4DkEFnHz1ExMPYgGD-nQlzLt8mygmnb3uMMmxczW8pxkJJz3Q9_BVbu6tgMmJZWrq3VGH-hZWCGAsp5K2hMn0CULrlDSQ_YCcDmnbbujrNBnVnnrxymbAdQpo3XMhK5k1Ul1DOwhD8RewVQ58dBwo3QyFT2B4JlVQIYRTFU6cosCckDQnTGHKwtta3zdBBF2ktrErk7ibrJu1p6gKpEcDeqU6IE_t-UVaFIouPYKFJ7AdvjyL0P0dZIAqGu-SpUSvkqgjuDKQMFgjVnuOVFOGvcRLmd0v5af-r0-LYuUmmBxah8CUiC7M2UzFfr5_HjdKDGXt0HN1en-mHFlL3dJEkM9q57vObVFzxqc2BEVdiecBZdiHwV75IvbYzLVUUzhAHjYvdQwi4hETZwddwX6ufVH26SuywPGQieIvlvay1kxn7hERaOFutJN7cRH-SrPsenL8NnS5IMge5LwlucA29k2iNjCz5eTLp1_QPIsIJtBSBThoMOCQwWt9umEIWqhZeieosZW3tu_t6j7689__nDrM--TWjw_ddgVPlaV2Bu1sR6RLvzY3U2AYN1VzLong4gQDE9dEWgiweQwIiOwacQaBlKDZ8mAGgTkkfItemW3NJJ1g2KHV50gAnMF4fobMFw2Q_PLBCmWhqc3-uSzH_6kPC5oaiQ0YbRb1SaxMlRTgrdeUbRvCjDpluvSM4fddrJeZCg0AMsCb4lavEkwwuKNJt5nStM28CY7TilaDJSb5ppQZspbzDqQ11P8Yloq341yhYMwIhDyPhT068szv08bv387LIJYXXNDwG3j68ppR-1DL03qAHkQrObNW2qVir9QXpGljukw0FoeisxZmw3h410tZ_JsZn_bJL4EXXE8hiPp7jrye3Ptv_7B_Mx1scr-j_J8fqFeUsxFWOcqdKQc_5Dcvyu3qcZkP9biN4sXIaQLqJnwBvmMTu5YZfOMhD-VCOtJlXBjn7Bg4EWZGsGoFkkBsgEIBNh9CYfj0QGYNUWf0Gq9qaB7YiJKnMQgJh8WKfYw2arHENpM9Fux0eT-pLqMmKnqdVeplGF_eNcbm82VHcTdg-tRD43eui8QMuts_BpDVZFElnsfm6WoVR3VRWGKA40gnaLFrl3bA-cquIy23qRA6omzhW2XfH46rUVae2z5LckJAb8vag-C4iKfyMI3KIibNG30ImiaDL_GDfwdYSYp2-RLHZdJdZOXWPbWKOum4yhVmizMc6sKkYZp-vkvaKVZlfs4oblT6BnBPV79i5dMF-aXbb52Gcwr88P8v_8DdXmlIi4GAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOmZhbHNlfX0=',
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
