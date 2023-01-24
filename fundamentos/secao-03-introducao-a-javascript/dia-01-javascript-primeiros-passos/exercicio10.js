const valorProduto = 20;
const valorVenda = 69;

if (valorProduto >= 0 && valorVenda
>= 0) {
const totalvalorProduto = valorProduto * 1.2;
const totalProfit = (valorVenda - totalvalorProduto) * 1000;
console.log(totalProfit);
} else {
console.log("Error, os valores não podem ser negativos");
};