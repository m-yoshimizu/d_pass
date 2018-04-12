/*
 *文字の置換
 */
 //配列の設定
 var str_q = new String();
 var str_exca_a = new String();
 var str_miss_a = new String();
 //変数
 var i = 0;
 var key1start = null;
 var key2start = null;
 var key3start = null;
 var keyend = null;
 //keywordをhtmlタブ化するための準備
 key1start ="<span id=\"keyword1\">";
 key2start ="<span id=\"keyword2\">";
 key3start ="<span id=\"keyword3\">";
 key4start ="<span id=\"keyword4\">";
 keyend ="</span>";

//keyword設定部：オブジェクトkey1start+"変換したい言葉：変換結果"+keyend,（重要：コンマで終わる）
var keyword = {
    徐行:key1start + "徐行【すぐに停止できる速度:何kmとかはない】" + keyend,
    車両横断禁止:key2start + "車両横断禁止（しゃりょうおうだんきんし）" + keyend,
    緊急自動車:key3start +"緊急自動車（きんきゅうじどうしゃ：パトカー、救急車、消防車など）"+ keyend,
    歩行者用道路:key3start +"歩行者用道路（ほこうしゃようどうろ：歩行者の安全確保やスポーツや道路の全部を歩行者だけで利用することを目的とする道路）" + keyend,//一行を超える時は、改行を入れずそのまま続ける。改行するとエラーになります。
    追い抜き:key1start + "追い抜き（進行中の車両が他車両の前に【ハンドルを切らずに】出ること）" + keyend,
    追い越し:key1start + "追い越し（進行中の車両が他車両の前に【ハンドルを操作して】出ること）" + keyend,
    路側帯:key2start + "路側帯（ろそくたい：歩道がない場所で、道路の端にある白線の帯状道路)" + keyend,
    駐停車禁止:key1start + "駐停車禁止（ちゅうていしゃきんし：駐車も停車もできない場所。全10箇所)" + keyend,
    見通しのきかない:key2start + "見通しのきかない（前方が十分に見えない）" + keyend,
    制動距離:key2start + "制動距離（ブレーキが効き始めてから車が停止するまでにかかった距離）" + keyend,
    空走距離:key2start + "空走距離（運転者が危険を感じてブレーキをかけ、ブレーキが効き始めるまでにかかった距離）" + keyend,
    車両通行帯:key2start + "車両通行帯（しゃりょうつうこうたい：白線や黄線で区切られた車線。片側の道幅が6mの道路では設けられている。）" + keyend,
    横断歩道:key2start + "横断歩道（おうだんほどう：歩行者が保護される道路。横断歩道を渡る人がいるかどうかわからない場合は徐行しなければならない。）" + keyend,
    合図:key1start + "合図（車両は右・左折、転回、徐行、停止、進路変更時には、手・ウインカー又はランプで合図し、完全に終了するまで継続する。）" + keyend,
    軌道敷内:key1start + "軌道敷内（きどうしきない：道路上に、路面電車が走る線路内のこと）" + keyend,
    横断禁止:key2start + "横断禁止（おうだんきんし：道路から右折してそのまま道路外に出ること)" + keyend,
    転回禁止:key2start + "転回禁止（てんかいきんし：Uターン禁止のこと)" + keyend,
    安全地帯:key2start + "安全地帯（あんぜんちたい：路面電車ではプラットフォームや白と黄色の太線で囲まれた場所)" + keyend,
    必ず:key4start +"必ず（!!）" + keyend,
    直ちに:key4start +"直ちに（!!）" + keyend,
    いかなる:key4start +"いかなる（!!）" + keyend,
    限り:key4start +"限り（!!）" + keyend,
    であっても:key4start +"であっても（!!）" + keyend,
};

//変換部
function keyword_replace(i) {
  //問題文のkeyword自動変換
    var str_q = q[i];
    str_q = str_q.replace(/徐行/, keyword.徐行);
    str_q = str_q.replace(/車両横断禁止/, keyword.車両横断禁止);
    str_q = str_q.replace(/緊急自動車/, keyword.緊急自動車);
    str_q = str_q.replace(/歩行者用道路/, keyword.歩行者用道路);
    str_q = str_q.replace(/追い抜き/, keyword.追い抜き);
    str_q = str_q.replace(/追い越し/, keyword.追い越し);
    str_q = str_q.replace(/路側帯/, keyword.路側帯);
    str_q = str_q.replace(/必ず/, keyword.必ず);
    str_q = str_q.replace(/直ちに/, keyword.直ちに);
    str_q = str_q.replace(/駐停車禁止/, keyword.駐停車禁止);
    str_q = str_q.replace(/見通しのきかない/, keyword.見通しのきかない);
    str_q = str_q.replace(/制動距離/, keyword.制動距離);
    str_q = str_q.replace(/空走距離/, keyword.空走距離);
    str_q = str_q.replace(/車両通行帯/, keyword.車両通行帯);
    str_q = str_q.replace(/横断歩道/, keyword.横断歩道);
    str_q = str_q.replace(/軌道敷内/, keyword.軌道敷内);
    str_q = str_q.replace(/横断禁止/, keyword.横断禁止);
    str_q = str_q.replace(/転回禁止/, keyword.転回禁止);
    str_q = str_q.replace(/安全地帯/, keyword.安全地帯);
    str_q = str_q.replace(/いかなる/, keyword.いかなる);
    str_q = str_q.replace(/限り/, keyword.限り);
    str_q = str_q.replace(/であっても/, keyword.であっても);
    str_q = str_q.replace(/合図/, keyword.合図);
    q[i] = str_q;

//正解文のkeyword自動変換
    var str_exac_a = exac_a[i];
    str_exac_a = str_exac_a.replace(/徐行/g, keyword.徐行);
    str_exac_a = str_exac_a.replace(/車両横断禁止/g, keyword.車両横断禁止);
    str_exac_a = str_exac_a.replace(/緊急自動車/g, keyword.緊急自動車);
    str_exac_a = str_exac_a.replace(/歩行者用道路/g, keyword.歩行者用道路);
    str_exac_a = str_exac_a.replace(/追い抜き/g, keyword.追い抜き);
    str_exac_a = str_exac_a.replace(/追い越し/g, keyword.追い越し);
    str_exac_a = str_exac_a.replace(/路側帯/g, keyword.路側帯);
    str_exac_a = str_exac_a.replace(/必ず/g, keyword.必ず);
    str_exac_a = str_exac_a.replace(/直ちに/g, keyword.直ちに);
    str_exac_a = str_exac_a.replace(/駐停車禁止/g, keyword.駐停車禁止);
    str_exac_a = str_exac_a.replace(/見通しのきかない/g, keyword.見通しのきかない);
    str_exac_a = str_exac_a.replace(/制動距離/g, keyword.制動距離);
    str_exac_a = str_exac_a.replace(/空走距離/g, keyword.空走距離);
    str_exac_a = str_exac_a.replace(/車両通行帯/g, keyword.車両通行帯);
    str_exac_a = str_exac_a.replace(/横断歩道/g, keyword.横断歩道);
    str_exac_a = str_exac_a.replace(/軌道敷内/g, keyword.軌道敷内);
    str_exac_a = str_exac_a.replace(/横断禁止/g, keyword.横断禁止);
    str_exac_a = str_exac_a.replace(/転回禁止/g, keyword.転回禁止);
    str_exac_a = str_exac_a.replace(/安全地帯/g, keyword.安全地帯);
    str_exac_a = str_exac_a.replace(/いかなる/g, keyword.いかなる);
    str_exac_a = str_exac_a.replace(/限り/g, keyword.限り);
    str_exac_a = str_exac_a.replace(/であっても/g, keyword.であっても);
    str_exac_a = str_exac_a.replace(/合図/g, keyword.合図);
    exac_a[i] =str_exac_a ;

  //間違文のkeyword自動変換
    var str_miss_a = miss_a[i];
    str_miss_a = str_miss_a.replace(/徐行/g, keyword.徐行);
    str_miss_a = str_miss_a.replace(/車両横断禁止/g, keyword.車両横断禁止);
    str_miss_a = str_miss_a.replace(/緊急自動車/g, keyword.緊急自動車);
    str_miss_a = str_miss_a.replace(/歩行者用道路/g, keyword.歩行者用道路);
    str_miss_a = str_miss_a.replace(/追い抜き/g, keyword.追い抜き);
    str_miss_a = str_miss_a.replace(/追い越し/g, keyword.追い越し);
    str_miss_a = str_miss_a.replace(/路側帯/g, keyword.路側帯);
    str_miss_a = str_miss_a.replace(/必ず/g, keyword.必ず);
    str_miss_a = str_miss_a.replace(/直ちに/g, keyword.直ちに);
    str_miss_a = str_miss_a.replace(/駐停車禁止/g, keyword.駐停車禁止);
    str_miss_a = str_miss_a.replace(/見通しのきかない/g, keyword.見通しのきかない);
    str_miss_a = str_miss_a.replace(/制動距離/g, keyword.制動距離);
    str_miss_a = str_miss_a.replace(/空走距離/g, keyword.空走距離);
    str_miss_a = str_miss_a.replace(/車両通行帯/g, keyword.車両通行帯);
    str_miss_a = str_miss_a.replace(/横断歩道/g, keyword.横断歩道);
    str_miss_a = str_miss_a.replace(/軌道敷内/g, keyword.軌道敷内);
    str_miss_a = str_miss_a.replace(/横断禁止/g, keyword.横断禁止);
    str_miss_a = str_miss_a.replace(/転回禁止/g, keyword.転回禁止);
    str_miss_a = str_miss_a.replace(/安全地帯/g, keyword.安全地帯);
    str_miss_a = str_miss_a.replace(/いかなる/g, keyword.いかなる);
    str_miss_a = str_miss_a.replace(/限り/g, keyword.限り);
    str_miss_a = str_miss_a.replace(/であっても/g, keyword.であっても);
    str_miss_a = str_miss_a.replace(/合図/g, keyword.合図);
    miss_a[i] = str_miss_a;
}
