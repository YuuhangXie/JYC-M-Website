<template>
  <div data-v-817f25cc="" class="detail">
    <div data-v-817f25cc="" class="detail-top">
      <div data-v-e5fd4df0="" class="nav nav-fixed"
           style="background-color: rgb(0, 112, 255); color: rgb(255, 255, 255);">
        <div data-v-e5fd4df0="" class="nav__left" @click="handleClick"><i data-v-e5fd4df0="" class="iconfont icon-left"></i> <!----></div>
        <div data-v-e5fd4df0="" class="nav__title">{{productDetail.title}}</div>
        <div data-v-e5fd4df0="" class="nav__right"><!----></div>
      </div>
      <div class="detail-top__top">
        <div class="rate">
          <div class="rate-num"><span>{{rate}}%</span> <!----></div>
          <p class="rate-txt"><span>预期利率(年化)</span> <i class="iconfont icon-question" style="padding-left: 2px;"></i>
          </p></div>
        <div class="date van-row">
          <div class="van-col van-col--8">
            <div style="font-weight: bold;">{{productDetail.dueTime}}个月</div>
            <p>期限</p></div>
          <div class="van-col van-col--8">
            <div style="font-weight: bold;">{{count}}.00</div>
            <p>剩余可投(元)</p></div>
          <div class="van-col van-col--8">
            <div class="huankuan"><i class="iconfont icon-question"></i> <span
                    style="padding-left: 2px; font-weight: bold;">{{productDetail.allocationType}}</span></div>
            <p>还款方式</p></div>
        </div>
        <div class="progressbar">
          <div class="progressbar-progress" :style="{width: productDetail.payProgress + '%'}"></div>
          <span class="progressbar-num" style="right: 88%;">{{productDetail.payProgress}}%</span></div>
      </div>
      <div class="detail-top__content">
        <div id="tip" class="tip ignore">
          <ul class="moveclass" style="transform: translate(-50%, -306px);">
            <li>绍兴市冯**投资5,000.00元</li>
            <li>绍兴市冯**投资5,000.00元</li>
            <li>蚌埠市朱**投资5,000.00元</li>
            <li>嘉兴市王**投资10,000.00元</li>
            <li>湖州市王**投资5,000.00元</li>
            <li>湖州市王**投资5,000.00元</li>
            <li>杭州市余**投资10,000.00元</li>
            <li>杭州市余**投资10,000.00元</li>
            <li>杭州市孔**投资12,000.00元</li>
            <li>杭州市章**投资8,000.00元</li>
          </ul>
        </div>
        <div class="limit">
          <ul>
            <li><span>起投金额</span> <span>{{addAmount}}.00元</span></li>
            <li><span>募集金额</span> <span>{{totalAmount}}.00元</span></li>
            <li><span>募集期限</span> <span>2019.09.15-2019.09.16</span></li> <!---->
            <li><span>安全等级</span>
              <span class="riskstar">
              <i class="iconfont icon-xing star" v-for="(n, index) in productDetail.riskRating" :key="index"></i>
              </span></li> <!---->
            <!----> <!----></ul>
        </div>
        <div class="advice"><i class="iconfont icon-gantanhao"></i> <span
                style="padding-left: 8px;">投资建议：建议安逸型及以上投资人配置</span></div>
      </div>
    </div>
    <div data-v-817f25cc="" class="detail-step">
      <ul data-v-817f25cc="">
        <li data-v-817f25cc=""><img data-v-817f25cc=""
                                    src="data:image/png;base64,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">
          <div data-v-817f25cc="">开始起息</div>
          <p data-v-817f25cc="" class="date">2019.09.17</p></li>
        <li data-v-817f25cc=""><img data-v-817f25cc=""
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAAGyxPnNAAAAAXNSR0IArs4c6QAABwpJREFUWAnVWVtsFVUUXdMWEawQtNIKhiiIRkWjvIygiUaDUiEKKTXxx4RETUz8Eb801FLED6N8GIJRI5EPTLy3UAxYkWgkKvhIIRrxGSTGQGmhangI8ijjWnNm33ncue1tKRoP6T0z++yzzppz9msGoETzJN9xyPevqY40akZ4XjDQc8L3TVy3GTjjY0mFCdRL2DUvkEwrmiGxoILh4CfnP4Wcvy4SZFwVwdRsRrMXZ2KTAiZXvm+31uf9hdK2P+T9szYErn40uolf5aIZmln/CZ+cSKbiHkJK801U3H/1B1A/PmPv4qqxLUPNJhwLxrScEa7e4PtV+eje5HEQkNtz7fszlBJPm5xSxl3O72rbF6F2Hecu8KGTM1NbZfzUj9roNtvDBn9sz1x0J2cm7/T0FThTWqnlBzeh8QpUJ8wujiOlpuuc5MUbgYTiY7vcQFxJkvcO6Dfvt8TJT26Pntzkevrg7Cu4sQfnIWbMQnBt2yGgYULS0AvHaUgzP+Q+hmDFKHn/Y/gYh2GoxwLvF0MuVrQR7i+37iPeTjFRovewHIu8poQsvEmC5vwRlB9fcQPw+MQs9WLZ2M3QMbdygUYbjUBpQwSrLRfMAKynVahdjEaP1qGW879tmzU4wJOh64deG/i+GciUOy4N4Mv+kRHJe4cbAmdunMUfHl5MFOFdxdhkFhhJ3ZWByXTDCFpQqbuQl7QGt6e0QClURTscKCrwzakFXp8KCGw1jSYNVEDkxaQP4B/2MTmS9eHH92wrdgUzZOsDg2YYEmCSW97PjRqGhr33puTR0kVXgQt9QfEiOrDnBREnCWpTcr4ylfy3mnEBD08Abh7NRz8J7GT8feZ7PuYpLuyhmfa5zKad1z6bqZZkiOFJLi2x+m5U4W4s9A5mjReDKh/5WF9fB6yZXmwRAvn0d2DBjgCumx5EzWRLgvKgaLgNpeJacirw2l7g2e8C6UiCn7DxyPhpDjr5cgEFoDix464A6rgBqndM3Wkf7Svrxielr0PGha0wpgfaZ6dVy78PI1utcpxmGWj1zEvKB8nSZJRjjRUEdYKyWJKBD6Yphu76080Mo1yQJehamC+PGWgT4NoZwNQxxTMraJPT5YIDaQZ4f5GFOhTtaad82tqR0ywmyaI3VYzYeH+A0hNoh4KENdoqttwO1DKqp4HLARROBXN2k6KOgaqfzn1KA/cHyOK60KpUBBzOudKjIE0BS65DKbWHGl/cwR/VAkGnX7rozDFoznIAmUzPKZdWpFqq6Uno/4GHRgGFBVLrrfDuvKzUtNLysKBoYMDeIC3zKMYmVDYwLSg9DKRNZLJj6leFEgBqbsRUd6rEWtHLrfCytkIq1oKyfjvvMlJKEtRmKCv6aB59AfwXroc3jXGhbjjw9WHg7d9Y0OwLFFX6X64yx6ZZnw1qo23+JJxGC2+ZA1gyeujgYpsItNJUsvq+QbNmxGVu0QcomsYFx3HBcbzWn1onZZ2UdfJ6J/3h3XgNG2gM4Kd8okoOHpZw4aeJr7IA2vI5Y2mFNcD4kdx2llLaevlWN8NJ19/AfuaZbT3A1oNhqaCJ4JuYh5eo+HLWkTiV5G/fRJ2BNXGKbMFTbmhmrXeuOULG2MxyTz0J67mW0UtarGhKUnR32UQdwXcIsWgUd23N1MH5btaCaZncd/Eu+EdcYZYn4YeyCBcTda/grQoIuUEGlzSZcu5FuPHLIIZIvRCYbG6SaOjuOtr+YokBDHVfz/gUmkSi7I0iad5fzqNuVvH4X5HUQ2ttcRCXoDoOd8LtqAsze+TFP82Bl37nCXWHvHv+R2DVHuAtZtP7+E5lTSn52q1hlBiGqxXW3I66AAxF93+DpF7wlHVF8k2G/ThJkRUHcQmIh9yqwqdQloBS0PlsIvgKyYlIfzVJjEvAzRH1mAu53bUM1lntr15g7mfADFZW+sxT6Z41SzVTNhCCBlDgIm5s5kw7dfMNk3lWu6gSWHkTsH6/qyv1ASBdW2bNsyPWe7x2UO/yfVV2cYwYl4CbI6qigE0VR6mmOvXXua5W3drdN+EEQR7cQAja+uuMS8gtOkR+5KHSFL0ClfNdpoOlqgrDY2eAheOBV28BVtCLzQblJOXunpGzPvYOvZu1AI0tXjy6D288JFQrlpWbz+OE5STnQlCECkWpCpcqTLKvCNGOSsu9PtMvUTuQD3yaOhQt9sGAxsX4GSt2k0RttTCVqiDZMhte/H8lTGUo+5+PMZZuLxQmidRp62QT1ag+nXpYqwqqgqXYcgbgwX71tMXSvXZwKV8uz7KE5L8813qEu3giraf70kTj2u4j0mqKgkSnXPzoROA2JohyM5nS4uesP98gufauAng3GTwRf+MqjKQuyiManySn68WTfPoHKZ4SHyrjejeJtaESq8xJypjz/1L5B5tJOVPDCCcyAAAAAElFTkSuQmCC">
          <div data-v-817f25cc="">项目到期</div>
          <p data-v-817f25cc="" class="date">2020.09.16</p></li>
        <li data-v-817f25cc=""><img data-v-817f25cc=""
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAAGyxPnNAAAAAXNSR0IArs4c6QAAB8ZJREFUWAnVWWuIlUUYfr7Tmuu2mbZu6gZmmRsVXb2UmpfuWVqUlyAkKYiggiC1H0F/KvphFyiiiKAorGB3NVK7WJmlqd3LxEili4Gr5WXNtnVN2+l5Zs7sN993vm/3nG7QwDkz8877PvOcubzzzhwgJ0WS7zpgjC2wbPip7xdFBawyVRJu2g/cuwmwCpQVsAcnUo7T+wP3n64SE2VWYTehnMR9DyJUXG82j0OfntOrpkEw/oPFZmikyu9dwJGF2NYWJRi0LBYCTeYjb6pc9bi5yRyMK770ihlQv9R0hVaqg3KvYvMpqxyrbe0xu9BI7c6g2cwLG1p/M+b69aVGHIx51mDVzmQjSXf/fgGpPUGFCt+kaagueVKxohq73bg37lplUUlipLiFP9QrF1hYuHt60i6s2TbqaA4X+IZwHocu91KbL6i6bUQskLWU+3Bt7ZgWy6UTDVtmzOeXxMKs0rnvAIUfD+BAVmMo69aZuDIelvAXq6y20Ag1S5KrSUqSeaVgS1D0uumLdqy1jbWYgCuj7jWaVPTmylvMdHThJZZqQ3Gx3I4CbsDMKLExvF4StMlcyoa3NnDEju/nVfLz7Ryyszh6TJdhdvS214xBuTy2Xg4MPNI3lZ+3/Q6MXEH92c5ruM2u9cYJDwE1+XJMWUnOKlw9sisuNztLWpuTx9eVmkppJEczBPdgcnThSvPWFod4VRzwhiHVXhznw98A2g+7+uT3Y7lK6mjJOGDSoKTc4hCvwBl8ecn2ZKNqXcnlVqKQ1WxxiOcmarkZiA7steNSYu4EYtdbO2pwLKZFbfHsy7bJHLi6AdXPjspBzhDf/BmwtBWdnPnuRZgE9UbNZjwPqbU8j8w9jYguOg44jSfR11wN7/4MPLiFrYatEXfSrGidN/tX82ym6rLJNPN7Zk7vLfy5s3LaMsQC42Z4YFO+K1KbdIodl4AkmTabtjP6Y8CqSSV6mYILVwMb92Mfx3VgqOC2qSRNZvvcYeUDykSdy0a2qvvkQJvN/OE1aHjkTC8uP5eNbHnIzvdW7ucXHYoX/vYHcNQRvlZers0Re6kWM2NcXdLwrg1Ao1xZThLAjtTxYzGIJZMCvfszj5+dtH76XGAMhz4LWICLxtL1de8fZ2sxiOVA6UZPrEmCqvYiDdPAHvCKwaX6RQy7CuLZL9WzwKOLjHsCTJtWpQWqr94NXLe+tGXOx05WS6sfppa2e0kmqJxv6ObEMqx747y8ip5m0ZPfYk4YoLxPpjNSTAXsUw2X249X+prLiaEoe5FqEXdDLb/3757G75xUDtNBy6077M+12l7QF6v7xO6vJmtLDItFEMfOhTCdO6cB9tJQAfphHlZDltOgFtU+9HFLSnHQERirxg5u0XKTdC1gAWM8oGzjdToj+gRVOGXY68DCzb3DSke6suGJ/GlokT05TeYDKk04h9eHeY3A2cc4ky9/AR7ZAnyxz9bXcgwvCMF8ORvUtzaZq1i8lSM/2ooMxOhpgr3mVbLynkGzLLxMk9uBi7lyruBnOMUN7LyB5Trme5i3UtbK8g/8vMmYYGU47h6m3Lx8oi4UWEjgCRacIcE5xyCaSod1God8SF9gMEOyOgaAexhZ/tQJ7DzIUIHT8MZPnIZfSF2hgksKKe6uJGTwhkX7VLbENOIwllJ6Sk0VzB0nIbr95MoPmhBVcaS8xBPfwXQctsQ3c1Fejesirqr8lE20xYzmGbOGZtWM1vAEzxq5pX86aTve8aWN7gTdyX04Mb2LfJ9Jos6prGbj2Il1QPO4yp2LB64kl0OaRd+9Zo+1+piOaVJ6PcdEXSDNScHAxSQ4mafJf52Cw6aNm2+EAnLPwTk9HSYd2M4VY2O9PJLnvcvFuiL/ZuVB8/KHNgNTeY/9tXjfSeupXxtrkoflI17F5IhGeIr1fvediuiMotP0CmG+ZgqgqEIXKsVCeVfB0EZl3eZ0aj66FbiTm/HoqrRGXFf/4kFJP36Ll00Rr94juXG2nMA46rOLvbjnXE9XN9FNr6DbOZbu6BUuFb2fpZMIPvWde9h4bgyQFXulbXx91EpgWwdrBTRyg23Vb7MnxCiOVLlJz2kKBj1hjXBIOCSoaLMSgp6D+Fiijh+JdmGoGgfTYfeWFAPe+El8pw7199LJp+/Yh7ibfXwoXcWIL3Bk03fuEMeXu/kU+WlEeU8FNvAE6S2pg7xgVPfz+mI4WEmsmddnwMfyK6Devie1raMP+15ropckQn/wK/0JHxrSbb4u23KSeIgPU1uRn91desuawSXQouvPsvH5UB/Q2E79oWwd7jGbnCsp1ant46b+AvbTU5q+Dlgvonx/4UZaLF25AZf4aMnCgin15H2+F1aW+5vA35n6mR8C7+2y/T7E0O9uzyD+8RJGWCCl0XQNelurNF1yHHApP38lqT/1a0mSR0hSePGIenS+++MguLfRMPcE4GHe30uVvPLfz7Vu538FPL/NYrWiL+8L10SKZRMpn4OeTnlTYww5QKfFIrqVcp5QE+g9VPTUOofDsVHeJuKVy2A2R/HtPJN8ot5Cf2gcsk8BMyWqr4a5cwSia+h9088G3iQr17vFqzuAx76F2dXZPUkt6INbcG3kbjdZhkVZ70TTxu61ey7Fl/PTHTSk1TLq7ZSt4E5+nju56HEztP7voj8BunuKJIHvpXMAAAAASUVORK5CYII=">
          <div data-v-817f25cc="">还本付息</div>
          <p data-v-817f25cc="" class="date">2020.09.17</p></li>
      </ul>
    </div>
    <div data-v-817f25cc="" class="detail-information">
      <div data-v-f11b3eb2="" class="van-tabs van-tabs--line">
        <div data-v-f11b3eb2="" class="van-tabs__wrap van-tabs__wrap--content-top van-hairline--top-bottom">
          <div data-v-f11b3eb2="" class="van-tabs__nav van-tabs__nav--line">
            <div data-v-f11b3eb2="" class="van-tabs__nav-bar"
                 style="width: 76px; transform: translate(9px, 0px); transition-duration: 0.2s;"></div>
            <div data-v-f11b3eb2="" class="van-tab van-tab--active"><span data-v-f11b3eb2=""
                                                                          class="van-ellipsis">产品介绍</span></div>
            <div data-v-f11b3eb2="" class="van-tab"><span data-v-f11b3eb2="" class="van-ellipsis">债权明细</span></div>
            <div data-v-f11b3eb2="" class="van-tab"><span data-v-f11b3eb2="" class="van-ellipsis">认购记录</span></div>
            <div data-v-f11b3eb2="" class="van-tab"><span data-v-f11b3eb2="" class="van-ellipsis">回款计划</span></div>
          </div>
        </div>
        <div data-v-f11b3eb2="" class="van-tabs__content">
          <div class="van-tab__pane van-tab__pane--select" data-v-f11b3eb2="">
            <div data-v-7b9830b1="" class="detail-introduce">
              <table data-v-7b9830b1="">
                <tbody data-v-7b9830b1="">
                <tr data-v-7b9830b1="">
                  <td data-v-7b9830b1="" width="82">产品类型</td>
                  <td data-v-7b9830b1="">{{productDetail.categoryType}}</td>
                </tr>
                <tr data-v-7b9830b1="">
                  <td data-v-7b9830b1="">还款来源</td>
                  <td data-v-7b9830b1="">{{productDetail.repaySource}}</td>
                </tr>
                <tr data-v-7b9830b1="">
                  <td data-v-7b9830b1="">资金用途</td>
                  <td data-v-7b9830b1="">{{productDetail.fundUse}}</td>
                </tr>
                <tr data-v-7b9830b1="">
                  <td data-v-7b9830b1="" style="vertical-align: top;">详细介绍</td>
                  <td data-v-7b9830b1="" style="line-height: 20px; padding: 12px 15px 12px 0px;">
                    {{productDetail.introduction}}
                  </td>
                </tr>
                <tr data-v-7b9830b1="">
                  <td data-v-7b9830b1="" style="vertical-align: top;">增信披露</td>
                  <td data-v-7b9830b1="" style="line-height: 20px; padding: 12px 15px 12px 0px;">
                    <p data-v-7b9830b1="" v-for="(item, index) in productDetail.disclosureList" :key="index">
                      {{item.remark}}
                    </p>
                  </td>
                </tr>
                <tr data-v-7b9830b1="">
                  <td data-v-7b9830b1="">转让说明</td>
                  <td data-v-7b9830b1="">锁定期3个月后可申请转让</td>
                </tr>
                <tr data-v-7b9830b1="">
                  <td data-v-7b9830b1="">费用说明</td>
                  <td data-v-7b9830b1="">认购费用0.0% 转让费用0.0%</td>
                </tr>
                <tr data-v-7b9830b1="">
                  <td data-v-7b9830b1="">无忧计划</td>
                  <td data-v-7b9830b1=""><span data-v-7b9830b1="">该产品已加入</span> <a data-v-7b9830b1=""
                                                                                   href="/product/plan" class=""
                                                                                   style="color: rgb(0, 170, 255);">《无忧计划》</a>
                    <span data-v-7b9830b1="">风险保障机制</span></td>
                </tr>
                <tr data-v-7b9830b1="">
                  <td data-v-7b9830b1="">合同模板</td>
                  <td data-v-7b9830b1=""><a data-v-7b9830b1=""
                                            href="https://www.jyc99.com/transaction/static/download/借款协议.pdf"
                                            style="color: rgb(0, 170, 255);">《借款协议》</a></td>
                </tr>
                <tr data-v-7b9830b1="">
                  <td data-v-7b9830b1="">风险提示</td>
                  <td data-v-7b9830b1=""><span data-v-7b9830b1="">投资有风险 参与需谨慎</span> <i data-v-7b9830b1=""
                                                                                        class="iconfont icon-youjian"></i>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="van-tab__pane" data-v-f11b3eb2="">
            <div data-v-58534fc5="" class="detail-zhaiquan">
              <div data-v-58534fc5="" class="detail-zhaiquan__wrapper"><h2 data-v-58534fc5="">借款人信息</h2>
                <table data-v-58534fc5="">
                  <thead data-v-58534fc5="">
                  <tr data-v-58534fc5="">
                    <td data-v-58534fc5="">融资主体</td>
                    <td data-v-58534fc5="">证件号码</td>
                    <td data-v-58534fc5="">融资金额</td>
                    <td data-v-58534fc5="">详情</td>
                  </tr>
                  </thead>
                  <tbody data-v-58534fc5="">
                  <tr data-v-58534fc5="">
                    <td data-v-58534fc5="">李**</td>
                    <td data-v-58534fc5="">3***6</td>
                    <td data-v-58534fc5="">100,000.00</td>
                    <td data-v-58534fc5=""><a data-v-58534fc5="" style="color: rgb(0, 170, 255);">查看</a></td>
                  </tr>
                  <tr data-v-58534fc5="">
                    <td data-v-58534fc5="">王**</td>
                    <td data-v-58534fc5="">3***8</td>
                    <td data-v-58534fc5="">200,000.00</td>
                    <td data-v-58534fc5=""><a data-v-58534fc5="" style="color: rgb(0, 170, 255);">查看</a></td>
                  </tr>
                  <tr data-v-58534fc5="">
                    <td data-v-58534fc5="">周**</td>
                    <td data-v-58534fc5="">3***X</td>
                    <td data-v-58534fc5="">200,000.00</td>
                    <td data-v-58534fc5=""><a data-v-58534fc5="" style="color: rgb(0, 170, 255);">查看</a></td>
                  </tr>
                  <tr data-v-58534fc5="" style="display: none;">
                    <td data-v-58534fc5="">王**</td>
                    <td data-v-58534fc5="">3***X</td>
                    <td data-v-58534fc5="">200,000.00</td>
                    <td data-v-58534fc5=""><a data-v-58534fc5="" style="color: rgb(0, 170, 255);">查看</a></td>
                  </tr>
                  <tr data-v-58534fc5="" style="display: none;">
                    <td data-v-58534fc5="">孙**</td>
                    <td data-v-58534fc5="">3***6</td>
                    <td data-v-58534fc5="">200,000.00</td>
                    <td data-v-58534fc5=""><a data-v-58534fc5="" style="color: rgb(0, 170, 255);">查看</a></td>
                  </tr>
                  <tr data-v-58534fc5="" style="display: none;">
                    <td data-v-58534fc5="">孟**</td>
                    <td data-v-58534fc5="">3***9</td>
                    <td data-v-58534fc5="">200,000.00</td>
                    <td data-v-58534fc5=""><a data-v-58534fc5="" style="color: rgb(0, 170, 255);">查看</a></td>
                  </tr>
                  <tr data-v-58534fc5="" style="display: none;">
                    <td data-v-58534fc5="">蔺**</td>
                    <td data-v-58534fc5="">3***6</td>
                    <td data-v-58534fc5="">200,000.00</td>
                    <td data-v-58534fc5=""><a data-v-58534fc5="" style="color: rgb(0, 170, 255);">查看</a></td>
                  </tr>
                  <tr data-v-58534fc5="" style="display: none;">
                    <td data-v-58534fc5="">王**</td>
                    <td data-v-58534fc5="">3***5</td>
                    <td data-v-58534fc5="">200,000.00</td>
                    <td data-v-58534fc5=""><a data-v-58534fc5="" style="color: rgb(0, 170, 255);">查看</a></td>
                  </tr>
                  </tbody>
                </table>
                <div data-v-58534fc5="" class="more">加载更多</div>
              </div>
              <div data-v-58534fc5="" class="detail-zhaiquan__wrapper"><h2 data-v-58534fc5=""
                                                                           style="padding-bottom: 6px;">风控文件</h2>
                <ul data-v-58534fc5="" class="wind">
                  <li data-v-58534fc5="" class="wind-item">
                    <svg data-v-58534fc5="" aria-hidden="true" class="icon">
                      <use data-v-58534fc5="" xlink:href="#icon-xuanzhong"></use>
                    </svg>
                    <span data-v-58534fc5="" style="padding-left: 10px;">借款申请书</span></li>
                  <li data-v-58534fc5="" class="wind-item">
                    <svg data-v-58534fc5="" aria-hidden="true" class="icon">
                      <use data-v-58534fc5="" xlink:href="#icon-xuanzhong"></use>
                    </svg>
                    <span data-v-58534fc5="" style="padding-left: 10px;">征信查询授权书</span></li>
                  <li data-v-58534fc5="" class="wind-item">
                    <svg data-v-58534fc5="" aria-hidden="true" class="icon">
                      <use data-v-58534fc5="" xlink:href="#icon-xuanzhong"></use>
                    </svg>
                    <span data-v-58534fc5="" style="padding-left: 10px;">借款人身份证复印件</span></li>
                  <li data-v-58534fc5="" class="wind-item">
                    <svg data-v-58534fc5="" aria-hidden="true" class="icon">
                      <use data-v-58534fc5="" xlink:href="#icon-xuanzhong"></use>
                    </svg>
                    <span data-v-58534fc5="" style="padding-left: 10px;">产权调查</span></li>
                  <li data-v-58534fc5="" class="wind-item">
                    <svg data-v-58534fc5="" aria-hidden="true" class="icon">
                      <use data-v-58534fc5="" xlink:href="#icon-xuanzhong"></use>
                    </svg>
                    <span data-v-58534fc5="" style="padding-left: 10px;">房产证/土地证复印件</span></li>
                  <li data-v-58534fc5="" class="wind-item">
                    <svg data-v-58534fc5="" aria-hidden="true" class="icon">
                      <use data-v-58534fc5="" xlink:href="#icon-xuanzhong"></use>
                    </svg>
                    <span data-v-58534fc5="" style="padding-left: 10px;">银行流水</span></li>
                  <li data-v-58534fc5="" class="wind-item">
                    <svg data-v-58534fc5="" aria-hidden="true" class="icon">
                      <use data-v-58534fc5="" xlink:href="#icon-xuanzhong"></use>
                    </svg>
                    <span data-v-58534fc5="" style="padding-left: 10px;">征信报告</span></li>
                  <li data-v-58534fc5="" class="wind-item">
                    <svg data-v-58534fc5="" aria-hidden="true" class="icon">
                      <use data-v-58534fc5="" xlink:href="#icon-xuanzhong"></use>
                    </svg>
                    <span data-v-58534fc5="" style="padding-left: 10px;">附加联系人表格</span></li>
                  <li data-v-58534fc5="" class="wind-item">
                    <svg data-v-58534fc5="" aria-hidden="true" class="icon">
                      <use data-v-58534fc5="" xlink:href="#icon-xuanzhong"></use>
                    </svg>
                    <span data-v-58534fc5="" style="padding-left: 10px;">其他资料</span></li>
                  <li data-v-58534fc5="" class="wind-item">
                    <svg data-v-58534fc5="" aria-hidden="true" class="icon">
                      <use data-v-58534fc5="" xlink:href="#icon-xuanzhong"></use>
                    </svg>
                    <span data-v-58534fc5="" style="padding-left: 10px;">居间服务协议</span></li>
                  <li data-v-58534fc5="" class="wind-item">
                    <svg data-v-58534fc5="" aria-hidden="true" class="icon">
                      <use data-v-58534fc5="" xlink:href="#icon-xuanzhong"></use>
                    </svg>
                    <span data-v-58534fc5="" style="padding-left: 10px;">房屋照片</span></li>
                  <li data-v-58534fc5="" class="wind-item">
                    <svg data-v-58534fc5="" aria-hidden="true" class="icon">
                      <use data-v-58534fc5="" xlink:href="#icon-xuanzhong"></use>
                    </svg>
                    <span data-v-58534fc5="" style="padding-left: 10px;">结婚证</span></li>
                  <li data-v-58534fc5="" class="wind-item">
                    <svg data-v-58534fc5="" aria-hidden="true" class="icon">
                      <use data-v-58534fc5="" xlink:href="#icon-xuanzhong"></use>
                    </svg>
                    <span data-v-58534fc5="" style="padding-left: 10px;">户口本</span></li>
                </ul>
              </div>
              <div data-v-58534fc5="" class="detail-zhaiquan__wrapper" style="padding-bottom: 12px;"><h2
                      data-v-58534fc5="">相关证照</h2>
                <ul data-v-58534fc5="" class="card">
                  <li data-v-58534fc5=""><img data-v-58534fc5=""
                                              src="https://static2.jyc99.com/UpLoadFile/FileImage/201909101937337983797.PNG">
                    <p data-v-58534fc5="">不动产权证</p></li>
                  <li data-v-58534fc5=""><img data-v-58534fc5=""
                                              src="https://static2.jyc99.com/UpLoadFile/FileImage/201909101937340952622.PNG">
                    <p data-v-58534fc5="">受理单</p></li>
                  <li data-v-58534fc5=""><img data-v-58534fc5=""
                                              src="https://static2.jyc99.com/UpLoadFile/FileImage/201909121806341733496.PNG">
                    <p data-v-58534fc5="">不动产权证</p></li>
                  <li data-v-58534fc5=""><img data-v-58534fc5=""
                                              src="https://static2.jyc99.com/UpLoadFile/FileImage/201909121806344857995.PNG">
                    <p data-v-58534fc5="">受理单</p></li>
                  <li data-v-58534fc5=""><img data-v-58534fc5=""
                                              src="https://static2.jyc99.com/UpLoadFile/FileImage/201909121813351889486.PNG">
                    <p data-v-58534fc5="">不动产权证</p></li>
                  <li data-v-58534fc5=""><img data-v-58534fc5=""
                                              src="https://static2.jyc99.com/UpLoadFile/FileImage/201909121813354389951.PNG">
                    <p data-v-58534fc5="">受理单</p></li>
                  <li data-v-58534fc5=""><img data-v-58534fc5=""
                                              src="https://static2.jyc99.com/UpLoadFile/FileImage/201909121826332358137.PNG">
                    <p data-v-58534fc5="">不动产权证</p></li>
                  <li data-v-58534fc5=""><img data-v-58534fc5=""
                                              src="https://static2.jyc99.com/UpLoadFile/FileImage/201909121826335795312.PNG">
                    <p data-v-58534fc5="">受理单</p></li>
                  <li data-v-58534fc5=""><img data-v-58534fc5=""
                                              src="https://static2.jyc99.com/UpLoadFile/FileImage/201909111845140795949.PNG">
                    <p data-v-58534fc5="">不动产权证</p></li>
                  <li data-v-58534fc5=""><img data-v-58534fc5=""
                                              src="https://static2.jyc99.com/UpLoadFile/FileImage/201909111845143764563.PNG">
                    <p data-v-58534fc5="">受理单</p></li>
                </ul>
              </div>
              <div data-v-58534fc5="" class="detail-zhaiquan__black" style="display: none;"><img data-v-58534fc5=""
                                                                                                 src=""></div>
            </div>
          </div>
          <div class="van-tab__pane" data-v-f11b3eb2="">
            <div data-v-62fa6d53="" class="detail-table">
              <div data-v-62fa6d53="" class="detail-table__placeholder"><img data-v-62fa6d53=""
                                                                             src="/static/img/detailtable_no.dafea24.png">
                <p data-v-62fa6d53="">暂无认购记录</p></div>
            </div>
          </div>
          <div class="van-tab__pane" data-v-f11b3eb2="">
            <div data-v-62fa6d53="" class="detail-table">
              <table data-v-62fa6d53="">
                <thead data-v-62fa6d53="">
                <tr data-v-62fa6d53="">
                  <td data-v-62fa6d53="">还款时间</td>
                  <td data-v-62fa6d53="">还款金额</td>
                  <td data-v-62fa6d53="">备注</td>
                </tr>
                </thead>
                <tbody data-v-62fa6d53=""><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                <!---->
                <tr data-v-62fa6d53="">
                  <td data-v-62fa6d53="">2019-10-17</td>
                  <td data-v-62fa6d53="">10,500.00</td>
                  <td data-v-62fa6d53=""></td>
                </tr>
                <tr data-v-62fa6d53="">
                  <td data-v-62fa6d53="">2019-11-18</td>
                  <td data-v-62fa6d53="">10,500.00</td>
                  <td data-v-62fa6d53="">非工作日顺延</td>
                </tr>
                <tr data-v-62fa6d53="">
                  <td data-v-62fa6d53="">2019-12-17</td>
                  <td data-v-62fa6d53="">10,500.00</td>
                  <td data-v-62fa6d53=""></td>
                </tr>
                <tr data-v-62fa6d53="">
                  <td data-v-62fa6d53="">2020-01-17</td>
                  <td data-v-62fa6d53="">10,500.00</td>
                  <td data-v-62fa6d53=""></td>
                </tr>
                <tr data-v-62fa6d53="">
                  <td data-v-62fa6d53="">2020-02-17</td>
                  <td data-v-62fa6d53="">10,500.00</td>
                  <td data-v-62fa6d53=""></td>
                </tr>
                <tr data-v-62fa6d53="">
                  <td data-v-62fa6d53="">2020-03-17</td>
                  <td data-v-62fa6d53="">10,500.00</td>
                  <td data-v-62fa6d53=""></td>
                </tr>
                <tr data-v-62fa6d53="">
                  <td data-v-62fa6d53="">2020-04-17</td>
                  <td data-v-62fa6d53="">10,500.00</td>
                  <td data-v-62fa6d53=""></td>
                </tr>
                <tr data-v-62fa6d53="">
                  <td data-v-62fa6d53="">2020-05-18</td>
                  <td data-v-62fa6d53="">10,500.00</td>
                  <td data-v-62fa6d53="">非工作日顺延</td>
                </tr>
                <tr data-v-62fa6d53="">
                  <td data-v-62fa6d53="">2020-06-17</td>
                  <td data-v-62fa6d53="">10,500.00</td>
                  <td data-v-62fa6d53=""></td>
                </tr>
                <tr data-v-62fa6d53="">
                  <td data-v-62fa6d53="">2020-07-17</td>
                  <td data-v-62fa6d53="">10,500.00</td>
                  <td data-v-62fa6d53=""></td>
                </tr>
                <tr data-v-62fa6d53="">
                  <td data-v-62fa6d53="">2020-08-17</td>
                  <td data-v-62fa6d53="">10,500.00</td>
                  <td data-v-62fa6d53=""></td>
                </tr>
                <tr data-v-62fa6d53="">
                  <td data-v-62fa6d53="">2020-09-17</td>
                  <td data-v-62fa6d53="">1,510,500.00</td>
                  <td data-v-62fa6d53=""></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-information__safe"><img
              src="data:image/png;base64,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">
        <span style="padding-left: 4px;">银行存管 资金安全有保障</span></div>
    </div>
    <div data-v-817f25cc="" class="detail-bottom"><i data-v-817f25cc="" class="iconfont icon-jisuanqi1"></i> <a
            data-v-817f25cc="" class="detail-bottom__invest">立即投资</a></div>
    <div data-v-817f25cc="" class="calculator" style="display: none;">
      <div class="calculator-black"></div>
      <div class="calculator-content"><h2>收益计算器</h2> <i class="iconfont icon-guanbi"></i>
        <div class="calculator-content__income"><h3>0.00</h3>
          <p>预期收益(元)</p></div>
        <ul class="calculator-content__infor">
          <li><span>投资金额</span> <span class="amount" style="color: rgb(153, 153, 153);">请输入投资金额</span></li>
          <li class="rate-duetime">
            <div class="rate"><span>8.40</span> <span>%</span></div>
            <div class="duetime"><span>12</span> <span>个月</span> <i class="iconfont icon-youjian"></i></div>
          </li>
          <li class="type"><span>分配方式</span> <span>按月付息</span> <i class="iconfont icon-youjian"></i></li>
        </ul>
        <p class="calculator-content__tip">注：预期收益不代表实际收益，实际收益以回款计划为准。</p></div>
      <div class="van-number-keyboard van-number-keyboard--default" style="z-index: 100; display: none;">
        <div class="van-hairline--top van-number-keyboard__title"><span></span><span class="van-number-keyboard__close">完成</span>
        </div>
        <div class="van-number-keyboard__body"><i class="van-hairline van-key">1</i><i
                class="van-hairline van-key">2</i><i class="van-hairline van-key">3</i><i
                class="van-hairline van-key">4</i><i class="van-hairline van-key">5</i><i
                class="van-hairline van-key">6</i><i class="van-hairline van-key">7</i><i
                class="van-hairline van-key">8</i><i class="van-hairline van-key">9</i><i
                class="van-hairline van-key van-key van-key--gray"></i><i class="van-hairline van-key">0</i><i
                class="van-hairline van-key van-key van-key--gray van-key van-key--delete">delete</i></div><!----></div>
      <div class="van-number-keyboard van-number-keyboard--default" style="z-index: 100; display: none;">
        <div class="van-hairline--top van-number-keyboard__title"><span></span><span class="van-number-keyboard__close">完成</span>
        </div>
        <div class="van-number-keyboard__body"><i class="van-hairline van-key">1</i><i
                class="van-hairline van-key">2</i><i class="van-hairline van-key">3</i><i
                class="van-hairline van-key">4</i><i class="van-hairline van-key">5</i><i
                class="van-hairline van-key">6</i><i class="van-hairline van-key">7</i><i
                class="van-hairline van-key">8</i><i class="van-hairline van-key">9</i><i
                class="van-hairline van-key van-key van-key--gray">.</i><i class="van-hairline van-key">0</i><i
                class="van-hairline van-key van-key van-key--gray van-key van-key--delete">delete</i></div><!----></div>
      <div class="van-number-keyboard van-number-keyboard--default" style="z-index: 100; display: none;">
        <div class="van-hairline--top van-number-keyboard__title"><span></span><span class="van-number-keyboard__close">完成</span>
        </div>
        <div class="van-number-keyboard__body"><i class="van-hairline van-key">1</i><i
                class="van-hairline van-key">2</i><i class="van-hairline van-key">3</i><i
                class="van-hairline van-key">4</i><i class="van-hairline van-key">5</i><i
                class="van-hairline van-key">6</i><i class="van-hairline van-key">7</i><i
                class="van-hairline van-key">8</i><i class="van-hairline van-key">9</i><i
                class="van-hairline van-key van-key van-key--gray"></i><i class="van-hairline van-key">0</i><i
                class="van-hairline van-key van-key van-key--gray van-key van-key--delete">delete</i></div><!----></div>
      <div class="calculator-picker van-picker" style="display: none;">
        <div class="van-hairline--top-bottom van-picker__toolbar">
          <div class="van-picker__cancel">取消</div><!---->
          <div class="van-picker__confirm">确认</div>
        </div><!---->
        <div class="van-picker__columns" style="height: 220px;">
          <div class="van-picker-column" style="height: 220px;">
            <ul style="transition: all 0ms ease 0s; transform: translate3d(0px, 88px, 0px); line-height: 44px;">
              <li class="van-ellipsis van-picker-column__item van-picker-column__item--selected" style="height: 44px;">
                按月付息
              </li>
              <li class="van-ellipsis van-picker-column__item" style="height: 44px;">按季分配</li>
              <li class="van-ellipsis van-picker-column__item" style="height: 44px;">按年分配</li>
              <li class="van-ellipsis van-picker-column__item" style="height: 44px;">到期分配</li>
              <li class="van-ellipsis van-picker-column__item" style="height: 44px;">按月等额本息</li>
              <li class="van-ellipsis van-picker-column__item" style="height: 44px;">按月等本等息</li>
              <li class="van-ellipsis van-picker-column__item" style="height: 44px;">到期还款</li>
              <li class="van-ellipsis van-picker-column__item" style="height: 44px;">次月按月付息</li>
            </ul>
          </div>
          <div class="van-hairline--top-bottom van-picker__frame" style="height: 44px;"></div>
        </div>
      </div>
      <div class="calculator-picker van-picker" style="display: none;">
        <div class="van-hairline--top-bottom van-picker__toolbar">
          <div class="van-picker__cancel">取消</div><!---->
          <div class="van-picker__confirm">确认</div>
        </div><!---->
        <div class="van-picker__columns" style="height: 220px;">
          <div class="van-picker-column" style="height: 220px;">
            <ul style="transition: all 0ms ease 0s; transform: translate3d(0px, 88px, 0px); line-height: 44px;">
              <li class="van-ellipsis van-picker-column__item van-picker-column__item--selected" style="height: 44px;">
                个月
              </li>
            </ul>
          </div>
          <div class="van-hairline--top-bottom van-picker__frame" style="height: 44px;"></div>
        </div>
      </div>
    </div>
    <div data-v-29017346="" data-v-817f25cc="" class="layerblack" style="display: none;">
      <div data-v-29017346="" class="layer"><i data-v-29017346="" class="iconfont icon-guanbi"></i>
        <h1 data-v-29017346="">开通个人存管账户</h1>
        <p data-v-29017346="">为了在合规要求下，提升大额支付的体验，请开通个人用户资金管理账户</p>
        <div data-v-29017346="" class="layer-button">立即开通</div>
      </div>
    </div>
    <div data-v-6930f310="" data-v-817f25cc="" class="layerblack" style="display: none;">
      <div data-v-6930f310="" class="layer">
        <div data-v-817f25cc="" data-v-6930f310="" class="isrisk"><h2 data-v-817f25cc="" data-v-6930f310=""
                                                                      style="padding: 40px 0px 30px;">
          您当前尚未开启授权，无法进行投资</h2></div>
        <div data-v-6930f310="" class="layer-btngroup"><span data-v-6930f310="" class="btn-right"></span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import api from 'utils/api'
  import numeral from 'numeral'
  import _ from 'lodash'

  export default {
    async beforeCreate() {
      this.cssLink = [
        'https://at.alicdn.com/t/font_619816_h21akp7816w.css',
        'https://unpkg.com/vant@2.2.1/lib/index.css',
        'https://m.jyc99.com/static/css/app.2902c85724382f8fb845d1b2e32b91f0.css'
      ]
      this.cssLink.forEach(item => {
        let css = document.createElement('link')
        css.rel = 'stylesheet'
        css.href = item
        document.querySelector("head").appendChild(css)
      })

      let data = await api.get({ url: '/api/product/productDetail?productId=' + this.$route.params.id })
      this.productDetail = data.productDetail
      this.productOrders = data.productOrders
    },

    mounted() {
      window.addEventListener('scroll', this.handleScroll, true);
    },

    data() {
      return {
        productDetail: {},
        productOrders: {}
      }
    },

    computed: {
      count() {
        return numeral(this.productDetail.remainAmount).format(0, 0)
      },

      rate() {
        return Number(this.productDetail.rate).toFixed(2)
      },

      addAmount() {
        return numeral(this.productDetail.addAmount).format(0, 0)
      },

      totalAmount() {
        return numeral(this.productDetail.totalAmount).format(0, 0)
      }
    },

    methods: {
      handleClick() {
        this.$router.go(-1)
      },

      handleScroll: _.throttle(function(e) {
        if(e.srcElement.scrollTop > 200) {
          document.querySelector('.nav-fixed').style.backgroundColor = '#fff'
          document.querySelector('.nav-fixed').style.color = 'rgb(51, 51, 51)'
        }else {
          document.querySelector('.nav-fixed').style.backgroundColor = 'rgb(0, 112, 255)'
          document.querySelector('.nav-fixed').style.color = '#fff'
        }
      }, 100)
    },

    beforeDestroy() {
      this.cssLink.forEach(item => {
        document.querySelector(`link[href="${item}"]`).remove()
      })
      window.removeEventListener('scroll', this.handleScroll, true);
    }
  }
</script>

<style>

  .detail {
    width: 100%;
    height: 6.67rem !important;
    overflow-y: auto;
  }
</style>