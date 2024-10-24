// 実行コマンド: node 04_buy_only.js
// 現金に余裕があれば常に買うパターン
const playGame = () => {
    let stock = 600;
    let stockCount = 5;
    let cash = 5000;
    const cards = [60,30,0,-30,-60]
    for (let i = 0; i < 10; i++) {
        const random = Math.floor(Math.random() * 5);
        const card = cards[random]
        stock += card
        if (cash > stock) {
            cash -= stock;
            stockCount++;
        }
    }
    const result = cash + (stock * stockCount);
    return result;
}
const main = () => {
    const results = []
    for (let i = 0; i < 10000; i++) {
        const result = playGame();
        results.push(result)
    }
    const average = results.reduce((sum, value) => sum + value, 0) / results.length;
    console.log(average); // 結果: 7994.999
}
main();