import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'http://java-openshift-jenkins-hildamathilda7-dev.apps.rm1.0a51.p1.openshiftapps.com'; // Ganti dengan Route kamu

export let options = {
  stages: [
    { duration: '3m', target: 100 },  // 10 users selama 1 menit
  ],
};

export default function () {
  http.get(BASE_URL);
  sleep(1);
}