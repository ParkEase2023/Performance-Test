import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 2000,
  duration: '60s',
  
};
export default function () {
  http.get('http://103.99.11.91/parking/getallparking');
  sleep(1);
}