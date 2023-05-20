var btn = document.querySelector('.btn');
var btn2 = document.querySelector('.btn2');
var pengunomics = document.querySelector('.pengunomics');
var navBtn = document.querySelector('.navBtn');
var navBtn2 = document.querySelector('.navBtn2');
var navBtn3 = document.querySelector('.navBtn3');

btn.addEventListener("click", () => {
    window.open("https://trade.dexscreener.com/uniswap?host=https%3A%2F%2Ftrade.dexscreener.com&pair[chainId]=ethereum&pair[dexId]=uniswap&pair[pairAddress]=0xd76d3BC1E2d5954dE690cD9987Cc073458EC0E0d&pair[baseToken][address]=0x26b17fC034b82A20563dbB02EC9E78B1D65d7a58&pair[baseToken][name]=Pengu&pair[baseToken][symbol]=PENGU&pair[quoteToken][address]=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2&pair[quoteToken][name]=Wrapped%20Ether&pair[quoteToken][symbol]=WETH&isInverted=false&colorMode=light", "_blank");
})

btn2.addEventListener("click", () => {
    window.open("https://trade.dexscreener.com/uniswap?host=https%3A%2F%2Ftrade.dexscreener.com&pair[chainId]=ethereum&pair[dexId]=uniswap&pair[pairAddress]=0xd76d3BC1E2d5954dE690cD9987Cc073458EC0E0d&pair[baseToken][address]=0x26b17fC034b82A20563dbB02EC9E78B1D65d7a58&pair[baseToken][name]=Pengu&pair[baseToken][symbol]=PENGU&pair[quoteToken][address]=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2&pair[quoteToken][name]=Wrapped%20Ether&pair[quoteToken][symbol]=WETH&isInverted=false&colorMode=light", "_blank");
})

navBtn.addEventListener("click", () => {
    window.scrollTo(0,0);
})

navBtn2.addEventListener("click", () => {
    window.scrollTo(0,1250);
})

navBtn3.addEventListener("click", () => {
    window.scrollTo(0,2250);
})