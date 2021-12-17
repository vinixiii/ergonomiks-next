import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

import { PowerBiWrapper } from './styles/PowerBiWrapper';

export default function SensorsDashboard() {
  return (
    <PowerBiWrapper>
      <PowerBIEmbed
        embedConfig={{
          type: 'dashboard', // Supported types: report, dashboard, tile, visual and qna
          id: 'd8b1879b-dc1b-4148-9eb6-101c2c697a87',
          embedUrl:
            'https://app.powerbi.com/dashboardEmbed?dashboardId=d8b1879b-dc1b-4148-9eb6-101c2c697a87&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOmZhbHNlfX0%3d',
          accessToken:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjEwNTFjNGItM2I5NC00MWFiLTk0NDEtZTczYTcyMzQyZmRkLyIsImlhdCI6MTYzOTEzOTUxNywibmJmIjoxNjM5MTM5NTE3LCJleHAiOjE2MzkxNDQzODksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFWVDVtMEtYMkd4SzJYbFR5UGNuRENFZ3RydG9HNVdzcmg0dk9CeEV1b1VLb3RCbFdyTjV3SUw1NFNzeHZRTmRIIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiU0lMVkEiLCJnaXZlbl9uYW1lIjoiTUFURVVTIiwiaW5fY29ycCI6InRydWUiLCJpcGFkZHIiOiIxODkuMTkuMjE5LjI0NyIsIm5hbWUiOiJNQVRFVVMgUk9EUklHVUVTIFNJTFZBIiwib2lkIjoiNWVmMDg3OWItZTA3My00NWFiLWFjNDMtOGY3ZjA4NGI4OWYxIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTI2MTQ5Njg1NjUtMzYwMDY5MTUyNi04NDQ0MzkyNzMtMTE1ODA3OSIsInB1aWQiOiIxMDAzM0ZGRkEyOUIwOUEwIiwicmgiOiIwLkFUUUFTeHdGc1pRN3EwR1VRZWM2Y2pRdjNROEJISWRoWHJGUGc2eVlZUXAta1JBMEFFVS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJOUFcyZ0c1RDZXVXJUTlM3NURGbGFOVmdMcFlIcGJUa0I0WGN5ejlGLW1NIiwidGlkIjoiYjEwNTFjNGItM2I5NC00MWFiLTk0NDEtZTczYTcyMzQyZmRkIiwidW5pcXVlX25hbWUiOiJtYXRldXMuc2lsdmE0NUBwb3J0YWxzZXNpc3Aub3JnLmJyIiwidXBuIjoibWF0ZXVzLnNpbHZhNDVAcG9ydGFsc2VzaXNwLm9yZy5iciIsInV0aSI6IkJQZFN4TDA4MTBtYjZWUkFscWw4QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.VDa6FfbvZeR119eFUkb4TgLQzGBtcWK45_Ram8cTp9B1WsNty5xPf0hcGZV0_eJYPXaxqd4EPeniyxHxzcHWD3vYqvzGMWfVPmfPW4-oWzdIlNs5SK-yI-yiFMrFn45End-gx7Ej3Hrws0yn_FUms3K6W7HCuU2QeNuyE8oPylIRJQVBn6UCAbR31JsJnRj-46D-OYNsscD2GkN8If7c_Y7GCHLVVQf36EBb3FwIDifHbR9nIcKcvdYgfT9M_dHg5AHMtAEYACmSUTRFy-HKgHECQ0l58cl1N9dLjRq3a3vke7tCOWVbx2P9V-j-5H1h_ODN3Az_WQQWPFfjLiv2Qw',
          tokenType: models.TokenType.Aad,
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
