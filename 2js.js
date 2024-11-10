function Test() {
    var xVar = "1"; // Глобальная область видимости
    let xLet = "2"; // Глобальная область видимости
    const xConst = "3"; // Глобальная область видимости

    {
        console.log(xVar); // Видно
        console.log(xLet); // Видно
        console.log(xConst); // Видно

        var yVar = "3"; // Локальная область видимости
        let yLet = "2"; // Локальная область видимости
        const yConst = "1"; // Локальная область видимости
    }

    console.log(yVar); // Видно
     //console.log(yLet); // Ошибка: yLet is not defined
     //console.log(yConst); // Ошибка: yConst is not defined

    console.log(xVar); // Видно
    console.log(xLet); // Видно
    console.log(xConst); // Видно
}

Test();