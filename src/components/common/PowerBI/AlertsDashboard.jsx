import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

import { PowerBiWrapper } from './styles/PowerBiWrapper';

export default function AlertsDashboard() {
  return (
    <PowerBiWrapper>
      <PowerBIEmbed
        embedConfig={{
          type: 'report', // Supported types: report, dashboard, tile, visual and qna
          id: '5b62ada3-4362-4190-bc63-862c40c49113',
          embedUrl:
            'https://app.powerbi.com/reportEmbed?reportId=5b62ada3-4362-4190-bc63-862c40c49113&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19',
          accessToken:
            'H4sIAAAAAAAEAB2Ut660ZgBE3-W2WCLzgSUX5LzkJXTEJSw5Y_ndffX3U4zO0cy_P3Z6f8e0-Pn7x0WvY_rOocsQdurstRbbC1dwFufxvWWzC6M9Sq5ps6xZ4keo4G5TxxsBNwMNXu5NyN1P-pZU_NvF9vejaFyIR7KRlaQ2UlEAjekCJaOo8mAyZWmXh-6d18am1GHBeCDCvOKtPAYvU27-GLfsDpp9Q1Wr0Ro2gD2B1u-FY-AAJ5qnLcKda7Y1-4t1fVrQ5BgJV8YHq1RVm97tztWm1Vjb8BHplZboy1HKy_zx6gmbmAoxfDj5fnL-fuPvDAlEOg8VF5jbYq2aHqmG6lhsYogTqXOJ6WwADUWhpEXRUdu7YfQaGqgvEAooTRR81jXIUDfBIzBTtOiV4xZ5So3c9yss8A9r4sC0rbtxTMJsZ17mJ53xkNZytaokJHHOxbfB2O5TuUc2FFHfC-2CBw8Xb55-t5ALDfV10E10hx4J-uRu2I93rk2eJJq4iZjHPB4e0ddLvZ7nUuCS6AzzSy6veROtw9_3WCPXcitX3rihM4Ysdb5kSQk-E2pj1miw4lccQkvNzLhmzROt5zdixVnjjpwJCsWQk5GQu_pMhv4NFyBFiRm-maNGz1exns47IEh5lV-ZUUu8IwMCw8b5jf5KnoFD010pFrA1OF_Hw1-2K_Vcrje2r3Yx4SaXt1GW59MSpOVfRIj8UJyk3oCcpgPn4iSVdgpPr-vMhKtP6ri8ApO44rQQG8Qa7FoPAetY-2VqddspNhYvB7ziINvTWvRY4dAI2dl7m2pzbK0geONJqPccGk1Zm9N4m75aLHhRz3oVyM0UDHaobhQvjvz5hr5FPH0hPWUXN7a1Bfpgclz88eZvWSNwERH__Pz1wy_3tI16ef9Op8CLe35xlSvPijdCxFTYdcmUxnZF9nxaWYspcefc1ex1zUdUBDE9z-l9JvGu2gql-HSwpPqzrtvOo3ohNGN7hI6VtFmZ2AeA72lR4GBYLqvmJWu_xiBFLRvGYDhtffwiLijSYIMYYp-Ha5A6k0DuXCs25YlJBLB7qyl2KJlwIWFqfwmEpuztmF56eGZ5RuHe2DSCzKYNHrXxyW2cshzJ0CU39al63OX8bMDmr-Y9qBhP49bwNV4Lsq2Q0kVqeChB8pMChwhy_Gg3tuemsutQRHyn-fPeC_n6WobTR6KQ9G59AUqSl4Voto3h1yQMWfwVrcW0fkMXLkQ75lgrBK-F-mzsP38w31NdLur7l3KzuuWIh0UN8qEyYazdMLQ4_6S85jOk276Uv7EYoVImYFG3zt0JRvdKywvpdw4psinTF3kAQ-eYraWLTZPp9JQsK5ov7GVo9qzg14VDbtD9_hE3fZqWOjDOHIKX9QDtoOUcHwZdzs4FXg-dCfXMajRXffpxs-BooshPW7K_lRJyHAe03FpCYq_evJ8tHRubnzP6XMwBiRb5Y1W-Nh92n8tfPc68uY-U9uoJk3IRj8KkJmQ7AA_U2tv4h-yuzbDgKQXRYY5j5GPEHqP3vX-mcQ5A9z5trppAAdRprnBatov5xc8luE0558yM4B_jGhXKXzdFoJT2lkUSSCXh_lrDjZnPrtFjth7P5CJTEDdaHj88CTajaBR9kVxfmdj9R8Z__wNd-d_eLgYAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOmZhbHNlfX0=',
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
