/**
 * 
 */
import { bindChild } from './utils/index';

// 技术分析
export function fenxi(vId: string):void {
  const options = {
    "interval": "1h",
    "width": 425,
    "height": 450,
    "autosize": true, // 自动大小-根据父布局自适应
    "isTransparent": false,
    "symbol": "NASDAQ:AAPL",
    "showIntervalTabs": true,
    "locale": "zh_CN",
    "colorTheme": "light"
  };
  bindChild(vId, options, 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js');
}

// 市场预览
export function marketProview(vId: string):void {
  const options = {
    "colorTheme": "light",
    "dateRange": "12M",
    "showChart": true,
    "locale": "zh_CN",
    "largeChartUrl": "",
    "isTransparent": false,
    "showSymbolLogo": true,
    "width": "400",
    "height": "660",
    "plotLineColorGrowing": "rgba(33, 150, 243, 1)",
    "plotLineColorFalling": "rgba(33, 150, 243, 1)",
    "gridLineColor": "rgba(240, 243, 250, 1)",
    "scaleFontColor": "rgba(120, 123, 134, 1)",
    "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
    "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
    "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
    "tabs": [
      {
        "title": "指数",
        "symbols": [
          {
            "s": "FOREXCOM:SPXUSD",
            "d": "标普500"
          },
          {
            "s": "FOREXCOM:NSXUSD",
            "d": "纳斯达克"
          },
          {
            "s": "FOREXCOM:DJI",
            "d": "道琼斯"
          },
          {
            "s": "SSE:000001",
            "d": "上证指数"
          },
          {
            "s": "SZSE:399106",
            "d": "深证综指"
          },
          {
            "s": "HSI:HSI",
            "d": "恒生指数"
          },
          {
            "s": "SSE:000002",
            "d": "A股指数"
          },
          {
            "s": "SSE:000006",
            "d": "地产指数"
          }
        ],
        "originalTitle": "Indices"
      },
      {
        "title": "农产品",
        "symbols": [
          {
            "s": "CBOT:ZC1!",
            "d": "玉米"
          },
          {
            "s": "CBOT:ZS1!",
            "d": "大豆"
          },
          {
            "s": "CBOT:ZW1!",
            "d": "小麦"
          },
          {
            "s": "CBOT:ZR1!",
            "d": "大米"
          },
          {
            "s": "CME:HE1!",
            "d": "生猪"
          },
          {
            "s": "CME:LE1!",
            "d": "活牛"
          },
          {
            "s": "CBOT:ZM1!",
            "d": "豆粕"
          }
        ],
        "originalTitle": "Bonds"
      },
      {
        "title": "工业品",
        "symbols": [
          {
            "s": "CME:GE1!",
            "d": "铜"
          },
          {
            "s": "NYMEX:CL1!",
            "d": "原油"
          },
          {
            "s": "COMEX:SI1!",
            "d": "白银"
          },
          {
            "s": "NYMEX:NG1!",
            "d": "天然气"
          }
        ],
        "originalTitle": "Forex"
      },
      {
        "title": "数字币",
        "symbols": [
          {
            "s": "COINBASE:BTCUSD",
            "d": "比特币"
          },
          {
            "s": "COINBASE:ETHUSD",
            "d": "以太坊"
          },
          {
            "s": "COINBASE:LTCUSD",
            "d": "莱特币"
          },
          {
            "s": "COINBASE:BCHUSD",
            "d": "比特现金"
          },
          {
            "s": "COINBASE:EOSUSD",
            "d": "柚子"
          },
          {
            "s": "COINBASE:LINKUSD",
            "d": "link"
          }
        ]
      }
    ]
  }
  bindChild(vId, options, 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js')
}

// 市场数据
export function marketData(vId: string):void {
  const options = {
    "width": "100%",
    "height": "100%",
    // "autosize": true,
    "symbolsGroups": [
      {
        "name": "指数",
        "originalName": "Indices",
        "symbols": [
          {
            "name": "FOREXCOM:SPXUSD",
            "displayName": "S&P 500"
          },
          {
            "name": "FOREXCOM:NSXUSD",
            "displayName": "Nasdaq 100"
          },
          {
            "name": "FOREXCOM:DJI",
            "displayName": "Dow 30"
          },
          {
            "name": "INDEX:NKY",
            "displayName": "Nikkei 225"
          },
          {
            "name": "INDEX:DEU30",
            "displayName": "DAX Index"
          },
          {
            "name": "FOREXCOM:UKXGBP",
            "displayName": "FTSE 100"
          }
        ]
      },
      {
        "name": "商品",
        "originalName": "Commodities",
        "symbols": [
          {
            "name": "CME_MINI:ES1!",
            "displayName": "S&P 500"
          },
          {
            "name": "CME:6E1!",
            "displayName": "Euro"
          },
          {
            "name": "COMEX:GC1!",
            "displayName": "Gold"
          },
          {
            "name": "NYMEX:CL1!",
            "displayName": "Crude Oil"
          },
          {
            "name": "NYMEX:NG1!",
            "displayName": "Natural Gas"
          },
          {
            "name": "CBOT:ZC1!",
            "displayName": "Corn"
          }
        ]
      },
      {
        "name": "债券",
        "originalName": "Bonds",
        "symbols": [
          {
            "name": "CME:GE1!",
            "displayName": "Eurodollar"
          },
          {
            "name": "CBOT:ZB1!",
            "displayName": "T-Bond"
          },
          {
            "name": "CBOT:UB1!",
            "displayName": "Ultra T-Bond"
          },
          {
            "name": "EUREX:FGBL1!",
            "displayName": "Euro Bund"
          },
          {
            "name": "EUREX:FBTP1!",
            "displayName": "Euro BTP"
          },
          {
            "name": "EUREX:FGBM1!",
            "displayName": "Euro BOBL"
          }
        ]
      },
      {
        "name": "外汇",
        "originalName": "Forex",
        "symbols": [
          {
            "name": "FX:EURUSD"
          },
          {
            "name": "FX:GBPUSD"
          },
          {
            "name": "FX:USDJPY"
          },
          {
            "name": "FX:USDCHF"
          },
          {
            "name": "FX:AUDUSD"
          },
          {
            "name": "FX:USDCAD"
          }
        ]
      }
    ],
    "showSymbolLogo": true,
    "colorTheme": "light",
    "isTransparent": false,
    "locale": "zh_CN"
  }
  bindChild(vId, options, 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js')
}

// 行情报价 横条
export function baojiao(vId: string):void {
  const options = {
    "symbols": [
      {
        "proName": "FOREXCOM:SPXUSD",
        "title": "标普500"
      },
      {
        "proName": "FOREXCOM:NSXUSD",
        "title": "纳斯达克100"
      },
      {
        "proName": "FX_IDC:EURUSD",
        "title": "EUR/USD"
      },
      {
        "proName": "BITSTAMP:BTCUSD",
        "title": "BTC/USD"
      },
      {
        "proName": "BITSTAMP:ETHUSD",
        "title": "ETH/USD"
      }
    ],
    "colorTheme": "light",
    "isTransparent": false,
    "showSymbolLogo": true,
    "locale": "zh_CN"
  }
  bindChild(vId, options, 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js')
}

// 
export function paoma(vId: string):void {
  const options = {
    "symbols": [
      {
        "proName": "FOREXCOM:SPXUSD",
        "title": "标普500"
      },
      {
        "proName": "FOREXCOM:NSXUSD",
        "title": "纳斯达克100"
      },
      {
        "proName": "FX_IDC:EURUSD",
        "title": "EUR/USD"
      },
      {
        "proName": "BITSTAMP:BTCUSD",
        "title": "BTC/USD"
      },
      {
        "proName": "BITSTAMP:ETHUSD",
        "title": "ETH/USD"
      }
    ],
    "showSymbolLogo": true,
    "colorTheme": "light",
    "isTransparent": false,
    "displayMode": "adaptive",
    "locale": "zh_CN"
  }
  bindChild(vId, options, 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js')
}

// 单品报价
export function oneView(vId: string):void {
  const options = {
    "symbol": "FX:EURUSD",
    "width": 350,
    "colorTheme": "light",
    "isTransparent": false,
    "locale": "zh_CN"
  }
  bindChild(vId, options, 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js')
}
// mini
export function miniView(vId: string):void {
  const options = {
    "symbol": "FX:EURUSD",
    "width": 350,
    "height": 220,
    "locale": "zh_CN",
    "dateRange": "12M",
    "colorTheme": "light",
    "trendLineColor": "#37a6ef",
    "underLineColor": "#E3F2FD",
    "isTransparent": false,
    "autosize": false,
    "largeChartUrl": ""
  }
  bindChild(vId, options, 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js')
}

export function filterView(vId: string):void {
  const options = {
    "width": 1100,
    "height": 512,
    "defaultColumn": "overview",
    "defaultScreen": "most_capitalized",
    "market": "america",
    "showToolbar": true,
    "colorTheme": "light",
    "locale": "zh_CN"
  }
  bindChild(vId, options, 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js')
}

export function coinView(vId: string):void {
  const options = {
    "width": 1000,
    "height": 490,
    "defaultColumn": "overview",
    "screener_type": "crypto_mkt",
    "displayCurrency": "USD",
    "colorTheme": "light",
    "locale": "zh_CN"
  }
  bindChild(vId, options, 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js')
}

export function caiwu(vId: string):void {
  const options = {
    "symbol": "NASDAQ:AAPL",
    "colorTheme": "light",
    "isTransparent": false,
    "largeChartUrl": "",
    "displayMode": "regular",
    "width": 480,
    "height": 830,
    "locale": "zh_CN"
  }
  bindChild(vId, options, 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js')
}