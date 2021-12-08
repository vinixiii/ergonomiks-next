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
            'H4sIAAAAAAAEAB2Wt86GjLGE7-VvsUSGF0suyDlnOnLOGevc-_nkfpqZ3dl9_vuPlb7DnBb__PufwJysodE6DdgxSZ5SEKcK8X02Upxl0MUktWBanf4NjUxbys-g2HLqCF0jJP1os8opC038-dU1GbuwJHq8sMcv2x6Q0GjI3dzIz53uezVe7KCKK7jcL953RVUcCiXNA6i-yaqa7ROME4cn7XiRlaC74Lb4LUQjuGM_yInImg7tEisSTWKLJ0YqCQAlOKyCl6no-L6zEHXWSOaVCvPzGw9uEHfSXuJ7KrTKPGNOgcZz69vJ3dr07vDS9oXbRH3QaKl3q9nAfDj-ka14st9JMCifBiDa3DcSj2p1VeIDDJeDS1hvBlEeVT4RKACOFTO7qlbCurvQgi76oyIkpSlRONm7GL_RFoMO9p1OsIqGBH_3Ovhnf9YMj2gjIlRc2cEUw7ntjn2cy8G_aBCmrotngd6xXzkeuUZ1alDOZ1SsSlT1J9ZQCyL7Ps_65lALTbytZ1ZKkHGWluevnhSEO1SGsoQ_si2qeaZn1aARXb1_mOjWESop2CFNUd-cCs8QQn3vhtdTbQMtQiZKZa75ux_8vvApveIJulEuV3CkwoLp2q7ZmPhSbO0XQCJoRolgRTPCzcO0qEFy7-0W5h3vv31VORNFs2jvd2jH7Z2D2HZR6hCCTYAGjPWe2D2DPuRuJuy19b1L-r5vPr4mUCE9ewhcV-QP-jRlbBkhA57cLu1bN44grahnWfQpUmUpSZbw1nTLd85Q697IsxwGxcJ2lX0ew3zfavw80cQkJ_cAjfheD-7eTccSR-O5RorQbRsAzGCGuRLYC3V4BT0Jpdn5z0C-CgBIj3Xut41sq5sASKToTwBVTQi4frNv-Upq5i-07WFP0rT8rvIRagA47aOWdYWKJ0czaYIkmWT8513YxA1zlGqJqdd7p9UzdDv1r4WT8-G8_E5c4GI_Nh-iXSLxPcpEnBLavTcY2jA1qvulYQLDtNZKqAOzAshe0XQtfaqgBChEAft8hOB10HSYbY-GxRS7n8ghcWAf0Ss2zCAj-FRXpWD3YxPAGVZG1vmsF-X5nRlmS4gRBeJSwR8yCMTjrgf5Oucrb2UkZNq1eNuIfbBbeBg9YpvWfFRff5o31VrBP0IxlhTEeiAuzG8pq224kOoiHmZujoR_15qAvDEFR2MsLHWlVYICVN6JAEahVM1AC8FZHSLYgm2RvkmL45y-EvuGX4F5UaYBZ-izGYahKmbjs8Rj5XqzGcttMXZWIfMFHy-lEzTePMV58cE0zA-hXU7PpbWOBjeXKpz9e6r0jYheQDVWKVjqAKu1aiNlWn16hHoAGmbfSw2GWNJYB9PWhYH2J4d2XZjaKV4XQooEgP4E8UbPqSRhjiPhczNAHdxw6smTXMt3OPg4mM8ZuCFgK82AS--dpdWMFtxcEOaanQeG07dMQL3LHXrfOee6Cyjyh8qZPdx0MrxQnPzppK3ThI9vUNde5J6bwk4PMbqmmLIuL9vkZkKOL46nsqjdmsS63bQfaD-p50kVN6eCzdHeKfTXC7u_WTOj13pvaFWZxQWgXxcI84-olwDKAPN0jQ1xl8vw9bMT6fOsZvTDELRG9r37sefrHbwQzprTF2Dl-5Dse6DX-bZzYW0v5_tvtX_cpyPOdMgvSSURamCBIJGuvPoeUTZnNAk7Tra0uJ8IHlQL3X5_93MZNmGUxR4VpA7F2o6fsrBBF_mZT6o_wdSr5jCacq5pSTllcCJ07ebtbqpLi0jqt58g2cWCm3g8Q6JJKJMxy4Bn_cSpPaU-Kj7kYBdMsM_b-zwZ2T8x-InOq4OHFZfglR7EFhXltt-uHrTRyYu0IGN-cxF5lGbaT9hLBxsrsn9Pd6WEj1j0FPWUfW2dq5cxbWZn6uY8lVGzCKn-arUzRNiP4j5OlvOkekPZCAfdBp21LeVopdDm8kRpXnvvfqXNhVwGI3ZABr9jIAeyfx2mTVgc6UMdYBM6UH6T66UW7siRDdtKczJkgV6k3T7j0KLpArEv1ixtLyZj3r-rM5EPm5mvOpdqwI8RPi8NyYpRFaqoalJcPpKIQ6jE44FlD8cyL6ZHvAW9wjqX8CTWp5t7IBeis-7b8U2TabldK5IxfcRWe-y86PaWQvbKzs1tNTjPnxEUUEbH2woz7TQeBnD3942Z--q602HLy8w3VHAeyuhr8Lx5sA0Hv-K3YlqDim8Sy_akHXoCa6JR_8FxcEKH9cmJ3ItHZWdkc_STVyrul_yqnseSv1UIvNHpqR2i5sKi2hmOu-mMteS73V7e4jFmNgnAhqsXQm09hphmOaCWOSGiXJ2O7zTbeM-1PxVCul_LENcbxAvyPkUPsw9vJUomA0LNZnX-CdLL66ImHoYORtE-BLcR6HN5bfrNgKU25oXrIPDEgdeVchQRqme25Z6k_ZLIhDil3ucuLOQpBiJ_G0tf42m-8tzLdiDNN0IawAo5N4BM3B7_959__vUPu73LMavl-4de1dEUT7qFwgCHRH6YI24m9uZwLvqDs3jQp2dLTP9NhC17n-czeOoSWtiqHrFq4A-4EasWGDqE66Q4lVdzbF5LlqEEF308pI_ePRvGiVbXK7zZiaVp_UpIyXsIZvwsUxaKPqasSt_rqGy7vozD1qdMKly5SfZ3oz3GwDo8psbTLY6Ojn3qEbX3-ig9W88u1z5wk_NXnnCDEMuZdiFCBVT41glrVM7KBcB-HTKo9_71QrTT_5EIMmCNXYALFU514eJqKOvACgDzREl-ZUAwHtSVFLv4JU6cqKc_bMPYnOJVJ1NPfDe-2HZ6hJXr0Gb8PxL1bHnyBVcoBZXBvxEEkUUW5uv-z_9ifpem3OTgL-V6a2AHNdpOt41rcTS3f87F_p_KbespPc6t_JOpGqHG0wf9DTdIUTrOOH9EeINQEPTey2DayCi9c-nR2L6w4Dx7A-OS7WzkVHUnPqaReHwcugEbX_mNXkIFAqaUvy_oVibz4o8BtyHxcXiffeZ0WYOztzruOfwXTLTlNm1rPOP-jAyHP0qgL7G7GF1tkVbgiEkbj1R51gou5ilCQEIDuCJvwydKbL8iCcewgMBZXEu3zqe2h6Uf6jj1iT6shlFNDT_8jUtuoS_PO9vByL7h34-ZCB7fH_MPpj0gjyFkKJdZUIST-pxKkXSZrEgfSQsWbLIYeZolZwRhkd1yYa-3OYCEDkpaZgZAzF2c-SWjJM1pCFHi-FO8u_RixwmhcKb_Yv6__wd1nq7zbgwAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOmZhbHNlfX0=',
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
