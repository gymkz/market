/**
 * 
 */

// eslint-disable-next-line
import { bindChild } from './utils/index';

export function currencyView(vId: string): void {
  const options = {
    "symbol": "FX:EURUSD",
    "width": "300",
    "height": "180",
    "locale": "zh_CN",
    "dateRange": "1M",
    "colorTheme": "light",
    "trendLineColor": "#37a6ef",
    "underLineColor": "#E3F2FD",
    "isTransparent": false,
    "autosize": false,
    "largeChartUrl": ""
  };
  bindChild(vId,options, 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js')
}

export function waihuiWidget(vId: string): void {
  // 外汇浮动热图
  // <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js" async></script>
  // 汇换表
  // <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js" async></script>
  const waihui = {
    "width": '100%',
    "height": '100%',
    "currencies": [
      "EUR",
      "USD",
      "JPY",
      "GBP",
      "CHF",
      "AUD",
      "CAD",
      "NZD",
      "CNY"
    ],
    "isTransparent": false,
    "colorTheme": "light",
    "locale": "zh_CN"
  }
  bindChild(vId, waihui, 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js')
}