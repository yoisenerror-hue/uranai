function uranai() {
    const results = [
        "大吉",
        "中吉",
        "小吉",
        "凶"
    ];

    const r = Math.floor(Math.random() * results.length);

    document.getElementById("result").textContent = results[r];
}