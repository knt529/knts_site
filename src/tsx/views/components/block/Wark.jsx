import menu_app from "../../../../img/menu_app.jpg"
import menu_app2 from "../../../../img/menu_app2.png"

import "../../../styles/block/Wark.css"

function Wark() {
  return(
    <div className="warks" id="warks">
      <h1 className="title">Warks</h1>
      <div className="warkContent">
      <section>
       <div className="menu_app_page">
          <a href=" https://knt529.github.io/menu_app_v2/" target="_blank" rel="noopener noreferrer"><img className="menu_app" src={menu_app}></img></a>
          <a href=" https://knt529.github.io/menu_app_v2/" target="_blank" rel="noopener noreferrer"><img className="menu_app2" src={menu_app2}></img></a>
          <div className="overview">
            <h4>【概要】</h4>
            <p className="wark-title">献立メモアプリ</p>
            <p>選択した日付から1週間分の献立を保存しておくことが可能なメモアプリになります。</p>
            <p>母親がノートに1週間分の献立を書き留めているのを参考に作成しました。</p>
            <p>制作期間 3週間</p>
            <p>HTML/CSS JavaScript React Firebase Material UI</p>
            <p>Firebaseを用いてデータベース、ユーザー認証機能を実装。</p>
            <p>ログイン画面がございますので、お手数ですがログインの際は<br/>メールアドレス：aiueo@mail.com<br/>パスワード：aiueo111<br/>でよろしくお願いいたします。なお、新規にユーザー登録をしていただいてログインすることも可能です。</p>
            <p>改善点は多くありますが、評価の参考にしていただければ幸いです。</p>
          </div>
       </div>
      </section>
      </div>
</div>
  )
}

export default Wark;