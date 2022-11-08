  ++示例
let a = 0;
let b =0;

console.log(a++ && 30);		// "++"放後面會最後才執行；該行結果是0
console.log("a =", a);

console.log(++b && 30);		// "++"放前面會先執行；該行結果是30
console.log("b =", b);
