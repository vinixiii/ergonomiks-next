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
            'H4sIAAAAAAAEACWWxQ7sWBIF_-VtqyUztdQLQ5mZ7Z2ZmT2af58a9T43N87NPPGfP2by9FOS__n7T38-vViM5GZDfqyed2SNRCC-xBdnduhQBwkOxXDd5flgztNJsGMTFBZ9THakAQ-60_GrtkQnmPpYftcKXgkXtj6wGlOH0sXcgsoq4-GKnmXMocO-zIp003fq5xu_HMetTHZ-u3Lohvw-NXjSFlBmUkfUDHgyFHdR8Naqpo5GgGkAV04mqyMAN4pH7krMZWRGcZOUlhUh72DmpBNW93nFTC1Z7KTk3qbBA8wSQefctBMZHK5ttaVYqQT2DJdizk0d1IWB7vnGIwiPvbGsPWU0OShZoQsf3gmwBlSDgn5EKiueHoZM6zCUM1cEkqQsxalVdukL14kzGudCVwnTPc3mBXaHfAgXT80BFEHZZJELduZtaKQmlvXuPI3yi_eaBnOXQTWUcBHd-yj4WVRxs8CgGaDSl2XbDyNJAWOXtJ3PdbAMdlXy2sUWM7rPvp_WXxME6n0WRcsuagTRGFM0sSIEzw3trkO1mG0_twr3U8YqCGhBBtUKba2oZZ0G-zxXveDQ1INCsCOXWYl7YNtqGfSu8PxhIZKT8qYYcrgDJUlLC-79Wp549NRSmBTe25iZpJKjB9g5Ie4dqAZ-lJYbNiNnglI9MphFjrakEGcO7E1OtexL0Bzjk3C4cnF4BN2ay0T-UgixMyQGOCgLXnapqlhJHBms9Ht2RWFzid1QkSzkwhyNJs4jLWgkw6k0axEfqK4GTM2lbx9tbcJ8njH7ON1kHyaMSeKC4FJTsJmNNzuBOpXuQeDNh7GTOchX-Cb77Xwj5xdZCehWuhj-gkWzJ4gxnUy-IriGzpxgEoAxJtK5fySYy2ukkWyZbM0Cx-Y97zLz2M2ByydzXhITRUQgr8d-6Weixbxs06cA2pktq-igsYhbVzwBGBoT9mOCJ646-ZdVEnfW4GKD-PwLwTnHUeMkQTTNweQ7BqJn6DJaWRNefZyGRxvpQbcW1u5NuHHf1fEW5Sf6ntjPZ7N4piPtpr3BJR6VZ4jDzdcMnImcjwR72GR2SQuBInA0TPeytF9VBco-fmReBWPsl7lwQHsYLmZ0rmd-lLxFLyWF6_15m3Al2dIH9xDRiVpKnfHKhqI7slstIowE5snEyvcpKVywmhuYAY6-hpAz2iRx3nWefS1ElTCdNRToTIsWoIaxK_vRaqlFP7xs0UPqZfMOocTmExV188KHwo0UdiLiVIEsO9jKq93dak_K696D5wKk8zyljT9QCfVRj4_ZARPdtiSw1HmBFbBb0uGLxkfFx8e2jUuGEiHE-42p0cbnp6m7aP6B_i7yZccpSzsSYcy4AzXGOgW9SRd75sfjj1KxIiF6-3AnZnBtY1_yNmA0BK2dEC2xurLSvGt8UidM1f1al-w0-A45LlLOYPRFRPIyxkepugzeMeTQ58oQvKJtz0rRPW0clofDCTdr7fusW_naFYUl2g1_2G7_HNangZxycOSF4FlyXLCRtqmqhrcyFs56tmxRjpEJF3uQjYX4EqVuOqnhBInZfMvw6HuMCHIg6zAhWvNTrO3U2tmq3jVAIl0RSmk4X4g1QkF3Es3lPTix7ge2PoousG0YWkwuPRNVo2Ba_t1DZBMEGnb6SGoP3XItCRlyxbPxyaJ6ORzTmRgYLmNytErHFCYAKVCRSQ1AqK3Q58NoJ2bQ20mCaoXjZzrkEzM1O3j7lmoH7MBvESjr5MdSoGvT4vyuuFM6FAu4TWacDugc0W9CGTf66C2uzOglPzlZ8BP55iSm7Gq--ctaqR3UZcLSxgY5naO8-H19kuXlN8X01XAeuxQLipZBivncAqWwyPDucALWFRfJ4H50YcEUA0O_qJWLntJ4in6QQQjsFj976W-FV5ma3o1eb80WrAqIXL8z-vj-TQ6tQrSjFabluLHIa03CkZKWHuSNedkj25oW9iZ2jOFZk9ZgQJmlmWb6h8pnrP-kK3OHvhbIdQzaCCm9s-e1NySAy92VmQWWr5v562TgW9Mn1SfVeFd4Gv350ms_9_1hbtW94E1DNkmjw0_IWDjcU6ul7kw4QRlsFWUEOuSM8gyum6MIfW8wFOsk9InH2aLdwF5wMlWxteHpMlEezvJtQEaCBkQak3FYqZ9AVC59JGoXljLkq5Qzd--DSZdbdzt2CilVNTcuDXQ4qzsBZdSM3ezXLmD9t188gs3pOBtZzTX95p67BqcbOh0T8BYZR1gf4vO4L3N400uoDA5Bl3LPqZL68HQiEnMfBNUojnbv0PedYgvw3t8GnestmpCnBRCgjl9Hl_pEQGUat6pvVgsDUTVrg1qbiMfRZjaM-whx5S1VheQRZHRFRIU-WFfknliROxiddoImbYhsnsAFwf6eKE5fOdnqsosUxR3GBpmip4cb9jU3lpueZddgOcgeAkonEW6n3XcB5wntwr7lD32GU3oOM0VZyoQfTiSGdVWPv9oEihNRVx_7LKZ6ILyXhFWl_PpWScrx95UMVXt7XBecX9tVnZrQ__zz568_7PrM-6QUz0_TVg6lOr1HSoyoUtcLP1XY8KzSrG1ezyM_oX29Y9FtbkQ0tVZzUEfPf-5JvzdmzvgykBspEoSbrqKChk12LoqfYMjB62FV0DujDeBx5gT065ZPK-EkB5HOCS9OCaQc_dGEb1e5i8pclRWkMWz73sOlGCCODM1A04vQtFGmbwHFrAPTBwkI-UFSOSKT99jRFqY3dTUSl0gYIT4gubdL-a8-MensfMGACwB2rPZjXbKQXbMyuUKLZmv7GcYRIziyJsOoHblIppg8WrqaMTMZ73M_zSYkAwC-yVeS3PNMm73zwDHbIpBRRQ82SJBiOxbn9IJbd_WKrJK4ybENE2tgJSFz91TrX8zPXBer5P8o3-5Z2jaNTV-ATOlp_JY8gPwbhtNUY7Ifa_Ebk3J_596lu8y0y6fMXj77yDSZa7bO6w6v45dEpB0beoaVrUyDT_qOiXbHHB_YiOMCupI2dbyh7cmuGi6DkvOn3y4mbnuzZqm5RC80WCCepGDnlTlI7CwuyDgafDIewiz-zzyN80qCoblUrsedYVKX1_ZX2Ewq4XVtYlNxqrVthm-PkQV8sIgJv_85a2qA7RcpHZXcTfFnqQGHLDzOYc2-7H3CWl-cKhYhLPEcWo-PD3WQcHmWPKUh4V2_DBI4KaWetL2PgyKNxY3vxZ9IqX7tOCfmrY7rl7PTCrtnZT-txq4lincouFBpy0GpJ8TMcKRw5pvLjH7zHwz_dq9gQI5E7xX4_zD--z9zpal9mgwAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOmZhbHNlfX0=',
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
