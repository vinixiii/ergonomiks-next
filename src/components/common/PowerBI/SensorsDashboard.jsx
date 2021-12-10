import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

import { PowerBiWrapper } from './styles/PowerBiWrapper';

export default function SensorsDashboard() {
  return (
    <PowerBiWrapper>
      <PowerBIEmbed
        embedConfig={{
          type: 'report', // Supported types: report, dashboard, tile, visual and qna
          id: '595fece0-8694-410f-8e1d-d5203046601d',
          embedUrl:
            'https://app.powerbi.com/reportEmbed?reportId=595fece0-8694-410f-8e1d-d5203046601d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19',
          accessToken:
            'H4sIAAAAAAAEAB2Ut66EVgBE_-W1WCItyZILcs4LLHRkLkvOYPnf_ez-NHM0M3__OOndjWnx8-ePon1oqslf87ugC_bekVIxiAC42Ib3N7mlrp0IygXbB5Tzx7y-fVrwEVqXspRinyRY-Lq9C3Rktm_Oiy91B9fA8g1CEnZyt3ENvtx6p3E7eTp7CcnAMUN1dOrMgNomU6tjYDe3sm969d1ugAwjPQYTbmDCjRq8NisSBpXMv9IGYOTIxvJuEpRet5W7yr6p0VjzESuJyCsau4nuz-jqJCLECuteixNGgDaPuxjHddcUJA1kUl9epT2kOQfBtO88XUdN3DuGoXf4Ku67DF3Cvm4f7kvMVBiGZPwMfF7pRkByOyxTgMplTpW5xm1tEYa2yFqjwKDqa6QydUmWycdRn2pc0OMnuc8yamv5cRtMq41aEVCxXkiY3lgAyMXLJNCzRT5tQmVkbqZtmiZEwRdbESUzFmtNc3qwY9SnxEWNvn8QTk-MJY5zMePKB-5EBc3HJYGwRSGETA0RUdI5XU_NDNZAhKGRGXsX19_aWjccZHQ85PcotN_vcIl4XCEevCMlFT49tPKUKP1yZVNvJVQe1RRdFZIQUEOt3rsnEjKMzbQbcO922viuQttFKqbk5fnTnY6s0er2ibaU0TaLpq4iSHuIjNUo9NxgXC0GrVDIaMKQCcV984wgMpJqeOFcuuRyvijKKOBmF7MbT3aqeA8lR7sYdkIYzasOyltEDC9jOYqq1lDN9wGd3D3aUsog3A3exNIBkCZdAeJqbiO3d02H_eG9f1NjSU6TtQCZSb4En29naeneAXolZspX3kXHAm4RI75p1ezdRyBZihp2IKKp8Vh9jt0jIHqeA9Z2JRM34KzInxCMf_388cMv97SNenn_Tkdje4lFsuM5h7KbrjaJY7EJQDZ5WcY9piZ-4EGK4DcNVdtklc039754vh95HgOXqLU1Rg4ZETY4-QaquT9-RE3HbR8Fq9F2ulb0MuHyLWuBr26aus98qD6T7tA6Hn2dFsWVZi0kk84_zBDx4nemHLwIujF3xzCTQ2IVnZwK34Vs-01QYp1rxzescsQpaVRvM3mtRpk3UmyzJ5usnyuLTTf3It-AI3UjsRQ73xTEwa5RV5UVyniHLaaJdRgMd5DU1xtFXytXGkJRaMau3OGxVST9_M6DQEYDgd72yrXQueRl21iWH1uPnnmfgZyITu7zzljpJIA0yXjIIcW0rWrpg8MXrP7rf8331JSLGv5aBmwPVyBTWPQ3o2mBrzwwyfk_5YN6SLd9KX-xwT6yza1FFVcHOChforWFkjkh4l5vrCz5NDEjq6bK1BQzhpQsc6adGesnDm6s9sNeZxdcaloZsxyLx4C-2OXk9yMLE4idGVw2cFsJP_iJsNkOObRNtyPQt2mRi-H3HVWG9itk9Hm-sM-kdwr-xcFvhZirTOAd6rcJtMsxZrGUaf8lPtO-AEaVQhNfGU2lI6UCJPx4IA6efEtDL2TrqIMc8XBigVH9UVFY72PIDvssYF-1JAQzQwjjUdCMZdpMa7WQLclWeyZk14xqufS_C2neJILcxeo71xJrgbx-XswcKoC2-JfQh5TtKxZVEyNL1daZ_h5pr1a24mFRL3DvljUpwXb_0_zPv_i5ba0uBgAA.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOmZhbHNlfX0=',
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
