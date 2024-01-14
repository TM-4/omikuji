"use strict";

const resalts = [
    '大吉',
    '大吉',
    '大吉',
    '中吉',
    '小吉',
    '大凶',
]; //'大吉'の数を増やすと確率が上がる

const draw = () => {
    const key = (Math.floor(Math.random() * resalts.length));
    //Math.random()0~1の間のランダムな値をとる　Math.floor 小数点切り捨て //(Math.floor(Math.random() * 4)) 0以上4未満の値を出せる
    const fortune = document.getElementById('fortune');
    fortune.textContent = resalts[key];

    console.log(key);
};