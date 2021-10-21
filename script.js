const header= document.createElement("div");
header.className="header";
header.innerHTML=`<h2 class="heading">Calculator</h2>`
document.body.append(header);

const container= document.createElement("div");
container.className="container";
container.innerHTML=`<div class="display"><input class="display_text"  name="data" type="text"></input></div>`;
document.body.append(container);

const buttons_ctn= document.createElement("div");
buttons_ctn.className="button_ctn";
buttons_ctn.innerHTML=`<input class="btn" type="button" value="1" onclick = "key_press(1)"></input>
                        <input class="btn" type="button" value="2" onclick = "key_press(2)"></input>
                        <input class="btn" type="button" value="3" onclick = "key_press(3)"></input>
                        <input class="btn" type="button" value="4" onclick = "key_press(4)"></input>
                        <input class="btn" type="button" value="5" onclick = "key_press(5)"></input>
                        <input class="btn" type="button" value="6" onclick = "key_press(6)"></input>
                        <input class="btn" type="button" value="7" onclick = "key_press(7)"></input>
                        <input class="btn" type="button" value="8" onclick = "key_press(8)"></input>
                        <input class="btn" type="button" value="9" onclick = "key_press(9)"></input>
                        <input class="btn" type="button" value="0" onclick = "key_press(0)"></input>
                        <input class="btn" type="button" value="+" onclick = "key_press('+')"></input>
                        <input class="btn" type="button" value="-" onclick = "key_press('-')"></input>
                        <input class="btn" type="button" value="*" onclick = "key_press('*')"></input>
                        <input class="btn" type="button" value="/" onclick = "key_press('/')"></input>
                        <input class="btn" type="button" value="=" onclick = "result()"></input>`
container.appendChild(buttons_ctn);

const clear_btn_ctn= document.createElement("div");
clear_btn_ctn.className="clear_button_ctn";
clear_btn_ctn.innerHTML=`<button class="clearbtn"  onclick ="window.clear()" >Clear</button>`
container.appendChild(clear_btn_ctn);

var text_area=document.getElementsByClassName("display_text");
console.log('1')
function key_press(key)
{
    text_area.data.value += key;
    
}
var symbols=['+','-','*','/'];
 function result(){
    var expression = text_area.data.value;
    expression=expression.split('');
    console.log(expression);
    // for(i=0;i<expression.length;i=i+2)
    // {
    //     data.push(expression[i]);
    // }
    var last_character=expression.at(-1);
        if(symbols.includes(last_character)){
            alert('please complete the expression (Note:-expression must complete with a number)');
        }
        else{
            var ans = eval(text_area.data.value);
            console.log(ans);
            text_area.data.value=ans;
        }
    
 }
function clear(e){
    document.getElementsByClassName("display_text").data.value="";
    console.log(e);
}
// var text_area=document.getElementsByClassName("display_text");
// console.log(text_area.data.value);