const getTextElement = document.getElementById('text');

document.getElementById('bold').addEventListener('click',function(){
    if(getTextElement.style.fontWeight == 'bold'){
        getTextElement.style.fontWeight = 'normal'
    }else{
        getTextElement.style.fontWeight = 'bold';
    }
})
document.getElementById('italic').addEventListener('click',function(){
    if(getTextElement.style.fontStyle == 'italic'){
        getTextElement.style.fontStyle = 'normal'
    }else{
        getTextElement.style.fontStyle = 'italic';
    }
})
document.getElementById('underline').addEventListener('click',function(){
    if(getTextElement.style.textDecoration == 'underline'){
        getTextElement.style.textDecoration = 'none'
    }else{
        getTextElement.style.textDecoration = 'underline';
    }
})
document.getElementById('left-aline').addEventListener('click',function(){
    if(getTextElement.style.textAlign == 'left'){
        getTextElement.style.textAlign = 'normal'
    }else{
        getTextElement.style.textAlign = 'left';
    }
})
document.getElementById('center-aline').addEventListener('click',function(){
    if(getTextElement.style.textAlign == 'center'){
        getTextElement.style.textAlign = 'left'
    }else{
        getTextElement.style.textAlign = 'center';
    }
})
document.getElementById('right-aline').addEventListener('click',function(){
    if(getTextElement.style.textAlign == 'right'){
        getTextElement.style.textAlign = 'left'
    }else{
        getTextElement.style.textAlign = 'right';
    }
})
document.getElementById('justify').addEventListener('click',function(){
    if(getTextElement.style.textAlign == 'justify'){
        getTextElement.style.textAlign = 'normal'
    }else{
        getTextElement.style.textAlign = 'justify';
    }
})

const textSizeInputFiled = document.getElementById('text-size')
textSizeInputFiled.addEventListener('change',function(event){
    let textSize = parseFloat(textSizeInputFiled.value);
    getTextElement.style.fontSize = textSize + 'px';
    console.log( getTextElement.value);
})

const color = document.getElementById('text-color').addEventListener('change',function(e){
    getTextElement.style.color = e.target.value;
})