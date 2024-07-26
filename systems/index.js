function displayRandomMessage() {
    // ランダムメッセージの配列
    const messages = [
        "趣味でマイクラプラグインを作っています！",
        "ようこそ！",
        "🍎",
        "Welcome",
        "KotinやJavaでマイクラプラグイン作っています!",
        "#プラグイン勉強日記",
        "Ringoame196",
        "・ω・",
        "Minecraft",
        "マイクラプラグインをたまに作っている人"
    ];
    // ランダムなインデックスを取得
    const randomIndex = Math.floor(Math.random() * messages.length);
    // ランダムメッセージを取得
    const randomMessage = messages[randomIndex];
    // メッセージを表示する要素を取得
    const messageElement = document.getElementById("lore");
    // メッセージを表示
    messageElement.textContent = randomMessage;
}

// ページが読み込まれた時に関数を実行
window.onload = displayRandomMessage;
