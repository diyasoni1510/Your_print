let modal = document.getElementById("modal")
let modal_item = document.getElementById("modal-item");
let modal_item_img = modal_item.getElementsByClassName("item-img")
let modal_item_title = modal_item.getElementsByClassName("title")
let buyItemTitle = document.getElementById("buyItemTitle")

console.log(modal_item_img[0].getElementsByTagName("img")[0])
let modalImgTag = modal_item_img[0].getElementsByTagName("img")[0];
let modalpTag = modal_item_title[0].getElementsByTagName("p")[0];


const showmodal = (data)=>{
    console.log("showmodal is clicked")
    // if(modal.style.display="none"){
    modal.style.display="block"
    let item  = document.getElementById(data)
    let item_img = item.getElementsByClassName("item-img")
    let imgTag = item_img[0].getElementsByTagName("img")[0];
    let item_title = item.getElementsByClassName("title")
    let pTag = item_title[0].getElementsByTagName("p")[0];
    let srcofImg = imgTag.getAttribute("src")
    modalImgTag.setAttribute("src",srcofImg)
    modalpTag.innerHTML=pTag.innerHTML;
    buyItemTitle.innerHTML=pTag.innerHTML;;
    modal_item.style.display="flex"
    // }
}

const hidemodal = ()=>{
    modal.style.display="none"
}


let afterBuyMsg = document.getElementById("afterBuyMsg")
const afterBuy = ()=>{
    modal_item.style.display="none";
    afterBuyMsg.style.display="flex"
    setTimeout(()=>{
        afterBuyMsg.style.display="none"
        modal.style.display="none"
    },1000)
}
