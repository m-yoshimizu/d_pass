/*
 * 問題の表示等を行うjsファイル
 */
var i = 0;
var judge ,rand, length;

window.addEventListener("load", function() {
    show_question(0);
}, false);

function end_study() {
    document.getElementById('que').innerHTML = "問題は終了しました!!";
    document.getElementById('text1').innerHTML  = "終了";
    document.getElementById('text2').innerHTML  = "終了";
    document.getElementById('last').innerHTML = "疲れるので休憩を取りましょう!!";
    document.radiobutton.elements[0].disabled = true;
    document.radiobutton.elements[1].disabled = true;
    document.radiobutton.elements[2].disabled = true;
    document.radiobutton.elements[3].disabled = true;
    i = 0;
}

function show_question(i) {
    keyword_replace(i);
    document.getElementById('que').innerHTML = q[i]; //test_1.jsの配列をそのまま取り込む
    //問題の配置をランダムにする。
    rand = Math.floor(Math.random() * 9);
    judge = rand % 2;
    //console.log("rand:"+rand);
    //console.log("judge:"+judge);
    if (judge == 0) {
        document.getElementById('text1').innerHTML = exac_a[i]; //同上
        document.getElementById('text2').innerHTML = miss_a[i]; //同上
    } else if (judge == 1) {
        document.getElementById('text1').innerHTML = miss_a[i]; //同上
        document.getElementById('text2').innerHTML = exac_a[i]; //同上
        //document.querySelector('label[for="choice1"]').innerHTML="選択肢B";
    }
}

function button_click() {
    document.getElementById('answer').innerHTML = "";
    //document.forms.(参照するフォームのid).(ラジオボタンに付けたid名).checked
    var radio1 = document.forms.radiobutton.choice1.checked;
    var radio2 = document.forms.radiobutton.choice2.checked;

    if ((judge == 0) && ( radio1 )) {
        document.getElementById('answer').innerHTML = "前問の答え：正解でした";
        console.log("judge1=0,radio1:on");
    } else if ((judge == 1) && ( radio1 )) {
        document.getElementById('answer').innerHTML = "前問の答え：間違いでした";
        console.log("judge=1,radio1:on");
    } else if ((judge == 0) && (radio2 ) ) {
        document.getElementById('answer').innerHTML = "前問の答え：間違いでした";
        console.log("judge1=0,radio2:on");
    } else if((judge  == 1) && (radio2 )){
        document.getElementById('answer').innerHTML = "前問の答え：正解でした";
        console.log("judge1=1,radio2:on");
    }else{
      console.log('default');
    }
    i++;

        if  (i == q.length) {
            setTimeout("end_study()",500);
        }else{
            show_question(i);
        }
}
