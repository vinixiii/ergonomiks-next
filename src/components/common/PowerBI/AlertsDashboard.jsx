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
          id: '00f4a51f-ace5-4b68-b336-a16ce615e54e',
          embedUrl:
            'https://app.powerbi.com/reportEmbed?reportId=00f4a51f-ace5-4b68-b336-a16ce615e54e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19',
          accessToken:
            'H4sIAAAAAAAEAB2TxQ7shgJD_-VuUylMlboIM3N2yUyYGar372_UvWVbR_a_f-zs6afs--fvPzWwHtQUNAhvIFJ_ly58Var62W4YTc4i6Lbe5eTFHJxrb5xkEs8IomAzG88OX8VPbaDRumJKWF3TZpzZQU8WBMe83R_0u-sI2VP8cQl7FvkzTgOaf0AalZIsIBgNkxNzG4hEnrN42KKr65F5_Z60LkO0lMCwmmetds6hVmEvWJ2PEwy1fqIfNlpQyFUAVsFmwPG6J1k4PFdZeRmTQW_fU9FpSs-OcgmhG4X8DlidftDTGXrT1WyNgqpF3EFEu6i-dheA450cV6mNanY0cbtvGbmbbOp4Rk-n2pVV0SKXSizu-A4OVTx6CASR6wIqWXerKymOpJ46pZS9Aq6PBFVTYpZdHgRp6gvoZygvdtKLSU0wByYozqpwYlfgW3Tg0UfhuMfIEhfJAfzy7yXHQEpPSR35PpMmsAtTDmro63LnN8XrCYRFfE_TJUBOSsI2zZUFxnkQXgwuqkIWKt1Je6k0n80Pb32Y6NwtbytNTXkQq_JbnvK9hKQ6C-wD6WSu_SZGMSlAbVWufT18J2n7qbXouHo7cI7UvK-FXuXMnC5HqWUhjemn1_jZKvXkGwu9GPdZxzxb-uN56F6mlNuygPD5fjtVa0R9C98XmM_W0ZYXccB0o7Lu8J6376ET1-0wCUZ8dy5avJXRjkZzyA2k7Oz8FC79vPhcQ9yZRZnkAhYEbsiQfBbiIKOoyMXLfh1H4TKJJHGKZGUqNrqLjS-9PQYdvG8tRfkigLObxDb4XltxkkLD0cXnvhFfntclSiVxeK8w5AtyvnJ7R72qChcjl9pSkRPsO9m6B0AVIoZA8AWlnebNaPvnz19_uPWZ90krnt91WOxIy8yVn_Xk5oG3YcRJvBdcoBqFrxh9teKTQLIaR9s-imqPfSOzEKksG_fPl2emlwAm3Vj6Ky777FeLEDA8BHbqmsN9Nm7pbRbqu9gNxhghm9P6zmoFM7RTGio3vYnwKKctLx85DIEYHdYxGKcuQZ9uvTpbYDy0faqMgPbtVySSRNzQ2yim2sj3fIpxd6Po4BR2JkteY3O7pjabxSpl7PRBOHPqxPe2R8e0MuELXDXr7IH05HETaIzrr4ICE7eosMQ4XXDhqw3N4jW4cuYAsPaJ4-WO27JRL8EuZA8mkGonP_6x5PorgrFWGgEJXSmhfKr8EnsFbXDXKBMFdfpNS23mn_8wP3NdrEr4o1wxRJx5lLyA_FAiqEM75gNd_6m8phqz_ViLn8zCOsPJGhi4L4M7KeH1Ys29Md9icbgcJIkxheLONqBWmm_LFRJdq3ajMA-wNaPzrlyaax-3RzBzZV6y8lI4wUvLtH8zFixOaODkK-jNTrSrIaibZuCfUedtLpqgs9XvKed91pqGbmwkFOD6HtZeLAwGh9YAraUjytDn1z0n6TNJznqa27Iv1ysmHlfDElbGT_hgGOj9bsTUhYe0gtRvJJe_lsSEbSw5oBPMclYMtPT2RTRdLgfvOlM4XhkSpHYCazG85_Jb1QwgGFgBp-FL58WAcCBKFJ-tG_2LTH0z82TGrCHLV1FOcwYLs-gxxMQjKrqOlTGnthkduKlwsN6raNXZ-WH-3_8BILgYFi4GAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOmZhbHNlfX0=',
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
