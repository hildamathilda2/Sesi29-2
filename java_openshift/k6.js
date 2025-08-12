import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'http://haproxy-jo-hildamathilda7-dev.apps.rm1.0a51.p1.openshiftapps.com'; // Replace with your actual HAProxy service DNS

export let options = {
  stages: [
    { duration: '1m', target: 20 },   // ramp-up to 50 VUs
    { duration: '2m', target: 60 },  // hold at 100 VUs
    { duration: '1m', target: 0 },    // ramp-down
  ],
};

export default function () {
  const res = http.get(`${BASE_URL}/status/200`);
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}