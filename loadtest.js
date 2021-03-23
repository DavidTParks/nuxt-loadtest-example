  
import http from 'k6/http'
import { check, sleep, group } from 'k6'
import { Trend, Rate } from 'k6/metrics'

let PingTrend = new Trend('Get ping', true)

export let options = {
  vus: 40,
  duration: '15s',
}

const SLEEP_DURATION = 0.1

// const baseUrl = 'https://'
const baseUrl = `https://nuxt-loadtest-example.vercel.app/api`
const endpoints = {
  ping: `${baseUrl}/hello`,
}

export default function () {
  group('ping', function () {
    // Get feed
    let getPingRes = http.get(endpoints.ping)
    check(getPingRes, { 'status was 200 (ping)': (r) => r.status == 200 })
    PingTrend.add(getPingRes.timings.duration)

    sleep(SLEEP_DURATION)
  })
}