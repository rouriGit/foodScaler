const yinFoods = [
    { name: 'キュウリ', value: -2 },
    { name: 'スイカ', value: -2 },
    { name: 'レタス', value: -2 },
    { name: 'トマト', value: -2 },
    { name: 'メロン', value: -2 },
    { name: 'セロリ', value: -2 },
    { name: '梨', value: -2 },
    { name: 'ナス', value: -2 },
    { name: 'バナナ', value: -2 },
    { name: 'きのこ', value: -2 },
    { name: 'はちみつ', value: -2 },
    { name: 'コーヒー', value: -2 },
    { name: 'ほうれん草', value: -1 },
    { name: '豆腐', value: -1 },
    { name: '緑茶', value: -1 },
    { name: '柿', value: -1 },
    { name: 'イチゴ', value: -1 },
    { name: 'そば', value: -1 },
    { name: 'さといも', value: -1 },
    { name: 'いも類', value: -1 },
    { name: 'こんにゃく', value: -1 }
];

const neutralFoods = [
    // Add neutral foods if needed
];

const yangFoods = [
    { name: 'チェリー', value: 1 },
    { name: 'アプリコット', value: 1 },
    { name: '桃', value: 1 },
    { name: '玉ねぎ', value: 1 },
    { name: 'かぼちゃ', value: 1 },
    { name: 'いか・たこ', value: 1 },
    { name: 'カボチャ', value: 1 },
    { name: 'ドライフルーツ', value: 1 },
    { name: '鶏肉', value: 1 },
    { name: '紅茶', value: 1 },
    { name: '黒砂糖', value: 1 },
    { name: 'シナモン', value: 2 },
    { name: 'にんじん', value: 2 },
    { name: 'サケ', value: 2 },
    { name: '梅干し', value: 2 },
    { name: 'みそ・しょうゆ', value: 2 },
    { name: 'ごぼう', value: 2 },
    { name: '胡椒', value: 2 },
    { name: 'チーズ', value: 2 },
    { name: '羊肉', value: 2 },
    { name: 'しょうが', value: 2 },
    { name: '唐辛子', value: 2 }
];

let totalValue = 0;

const createButton = (food) => {
    const button = document.createElement('button');
    button.textContent = food.name;
    button.addEventListener('click', () => {
        totalValue += food.value;
        document.getElementById('result').textContent = `陰陽の合計値: ${totalValue}`;
    });
    return button;
};

const yinContainer = document.getElementById('yin');
const neutralContainer = document.getElementById('neutral');
const yangContainer = document.getElementById('yang');

yinFoods.forEach(food => yinContainer.appendChild(createButton(food)));
neutralFoods.forEach(food => neutralContainer.appendChild(createButton(food)));
yangFoods.forEach(food => yangContainer.appendChild(createButton(food)));

// リセットボタンの追加
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    totalValue = 0;
    document.getElementById('result').textContent = `陰陽の合計値: ${totalValue}`;
});
