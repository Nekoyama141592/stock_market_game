// 実行コマンド: node 03_balance_by_card.js
// その都度カードで判断するパターン
const playGame = () => {
    let stock = 600;
    let stockCount = 5;
    let cash = 5000;
    const cards = [60,30,0,-30,-60]
    for (let i = 0; i < 10; i++) {
        const random = Math.floor(Math.random() * 5);
        const card = cards[random]
        stock += card
        if (card < 0 && cash > stock) {
            // カードが0より小さい、かつ現金に余裕があれば1株買う
            cash -= stock;
            stockCount++;
        } else if (card > 0 && stockCount > 0) {
            // カードが0より大きい、かつ1株以上あれば1株売る
            cash += stock;
            stockCount--;
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
    console.log(average); // 結果: 8003.975
}
main();