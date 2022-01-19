const count = document.getElementById('count');
const gift = document.getElementById('gift');
function gen(){
    var html = '<p></p>';
    const gifts = parseInt(count.value);
    for(let i=0;i<gifts;i++)
    {
        html += '<img src="gift.png" id="image">'
    }
    count.value = '';
    gen_gift.innerHTML = html;
}   