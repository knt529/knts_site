import menu_app from "../../../../img/menu_app.jpg"
import menu_app2 from "../../../../img/menu_app2.png"

import weather_app from "../../../../img/weather_app.jpg"
import weather_app2 from "../../../../img/weather_app2.jpg"
import "../../../styles/block/Wark.css"

import {Scroll} from "../atoms/ScrollReveal"
import WarkContent from "./WarkContent"

function Wark() {
  return(
    <div>
       <div id="warks"></div>
          <div className="warks">
            <Scroll>
              <h1 className="title">Warks</h1>
            </Scroll>
            <Scroll>
            <div className="warks_page">
              <WarkContent
               url = " https://knt529.github.io/menu_app_v2/"
               img1 = {menu_app}
               img2 = {menu_app2}
               title = "献立メモアプリ(https://knt529.github.io/menu_app_v2/)"
               detail = {<div> 
                 <p>選択した日付から1週間分の献立を保存しておくことが可能なメモアプリになります。</p>
                <p>母親がノートに献立を書き留めているのを参考に作成しました。</p>
                <p>制作期間 3週間</p>
                <p>HTML/CSS JavaScript React Firebase Material UI</p>
                <p>Firebaseを用いてデータベース、ユーザー認証機能を実装。</p>
                <p>ログイン画面がございますので、お手数ですがログインしていただく際は<br/>メールアドレス：aiueo@mail.com<br/>パスワード：aiueo111<br/>でよろしくお願いいたします。なお、新規にユーザー登録をしていただいてログインすることも可能です。</p>
                <p>改善点は多くありますが、評価の参考にしていただければ幸いです。</p>
               </div>}
              />

              <WarkContent
               url = "https://knt529.github.io/weather_app/"
               img1 = {weather_app}
               img2 = {weather_app2}
               title = "天気予報アプリ(https://knt529.github.io/weather_app/)"
               detail = {<div> 
                 <p>現在地の情報を取得し、天気や気温、湿度、風速、気圧を調べることができる天気予報アプリになります。</p>
                <p>APIの使用方法を学習するために作成しました。</p>
                <p>制作期間 2週間</p>
                <p>HTML/CSS JavaScript React OpenWeatherMapAPI</p>
                <p>OpenWeatherMapのAPIを用いて現在の天気データを取得して表示しています。
                </p>
                <p>Weather iconsを使用し、天気によってアイコンが変わる仕様にしました。</p>
               </div>}
              />
              </div>
            </Scroll>
      </div>
    </div>
  )
}

export default Wark;