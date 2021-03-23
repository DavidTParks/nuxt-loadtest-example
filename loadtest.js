import http from 'k6/http'
import { check, group } from 'k6'
import { Trend } from 'k6/metrics'

let PingTrend = new Trend('Get ping', true)

export let options = {
  vus: 40,
  duration: '15s',
}

const baseUrl = `https://nuxt-loadtest-example.vercel.app/api`
const endpoints = {
  ping: `${baseUrl}/ping`,
}

export default function () {
  group('ping', function () {
    // Get feed
    let getPingRes = http.get(endpoints.ping)
    check(getPingRes, { 'status was 200 (ping)': (r) => r.status == 200 })
    PingTrend.add(getPingRes.timings.duration)
  })
}