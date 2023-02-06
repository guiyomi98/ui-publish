// Function
// - naming: verb
// function is object in JS

/**
 * 테스트 콘솔 메세지
 * @param msg {String} message
 */
function test(msg) { 
    console.log(`
    　　　(/ΩΩ/)
    　　 / •• /
    　　(＿ノ |  캐시 삭제 해보실래요?
    　　　 |　|
    　　　 |　|
    　　 __|　|＿
    　　/ヘ　　/ )
    　　Lニニコ/
    　　 |￣￣￣|
    　　 |　　　|――≦彡
    　　 |　∩　|
    　　 |　||　|
    　　 |　||　|
    　　 |二||二|
    `)
}

/**
 * 선택자 여러개 일때 사용하면 되겠당..
 * @param args {Array} 선택자
 */
function printAll(...args) {
    // const idx =  args.length
    // for (let i = 0; i < idx; i++) {
    //     console.log(`${args[i]} testing...`)
    // }
    // for (const arg of args) {
    //     console.log(`${arg} testing...`)
    // }
    args.forEach((arg) => console.log(`${arg} testing...`));
}

test()