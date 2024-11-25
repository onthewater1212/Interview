gsap.registerPlugin(ScrollTrigger);//GSAPにScrollTriggerプラグインを登録

let bgImg = document.querySelector(".bgImg");

// this is for pinning the .bgImg
ScrollTrigger.create({//.bgImgをスクロールに応じて固定（ピン留め）する設定
  trigger: bgImg,//アニメーションを開始するトリガーとなる要素を指定
  pin: true,//スクロール中、画像をその位置に固定
  pinSpacing: false,//固定中に余計なスペースを作らない設定。画像がピン留めされても他の要素が下にずれることを防ぎます。
  start: "center center",//背景画像の中央がビューポートの中央に来たときにピン留めを開始
  // pin until the bottom of the .s6 section hits the bottom of the .bgImg
  end: () => "+=" + (document.querySelector(".s6").getBoundingClientRect().bottom - bgImg.getBoundingClientRect().bottom)
});//.s6（セクション6）の要素の下端が、背景画像の下端と重なるまでピン留め

// then we find each section and the corresponding image and set up a ScrollTriggered animation of it yPercent
[".s4",".s5",".s6"].forEach(s => {//s4,s5,s6でも同じようにする
  let section = document.querySelector(s),
      image = document.querySelector(s + "Img");
  gsap.set(image, {y: 0, yPercent: 100});//画像を垂直方向に初期位置から100%下にオフセット
  gsap.to(image, {
    yPercent: 0,//オフセット位置から元の位置（100% → 0%）に移動
    ease: "none",//緩急のないアニメーション
    scrollTrigger: {//スクロールイベントに基づくアニメーション
      trigger: section,
      start: () => "top 50%+=" + (bgImg.offsetHeight / 2) + "px",
      end: "+=" + bgImg.offsetHeight,
      scrub: true
    }
  });
});