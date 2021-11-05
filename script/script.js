const body = document.querySelector("body");
for (let i = 0; i < 5; i++) {
    const h1 = document.createElement('h1');
    h1.innerText = `Rad ${i + 1}`;
    document.body.appendChild(h1);
    h1.style.textAlign = 'center';
    const size = 20 + (10 * i);
    h1.style.fontSize = `${size}px`;
    h1.style.color = ('#00a6ff')
    const allH1 = document.querySelectorAll('h1')
    for (let i = 0; i < allH1.length; i++) {
        let hue = (800 / allH1.length) + i * i;

        console.log('hue: ', hue);
        allH1[i].style.backgroundColor = `hsl(${hue}, 100%,50%)`;
    }
}

const wrapper = document.createElement('div');
body.appendChild(wrapper);
wrapper.style.display = 'flex';
wrapper.style.border = "1px solid  black";
wrapper.style.height = "15rem";
wrapper.style.justifyContent = 'space-around';
const ul1 = document.createElement('ul');
ul1.style.backgroundColor='#8583eb';
ul1.style.width='50px';
ul1.style.padding='0px 0px 0px';

for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    ul1.appendChild(li);
    li.innerText = i;
    if(i% 2==1){
        li.style.backgroundColor='white';
    }
    else if ( li.innerText==4){
        li.style.backgroundColor='none';
    }
    else if(i% 2== 0){
        li.style.backgroundColor='black';
        li.style.color='white';
    }
    wrapper.appendChild(ul1);
    ul1.style.listStyle = 'none';
}

const ul2 = document.createElement('ul');
ul2.style.backgroundColor='#8583eb';
ul2.style.width='50px';
ul2.style.padding='0px 0px 0px';
for (let i = 9; i > -1; i--) {

    const li = document.createElement('li');
    ul2.appendChild(li);
    
    li.innerText = i;
    wrapper.appendChild(ul2);
    if(i% 2==1){
        li.style.backgroundColor='white';
    }
    else if ( li.innerText==8){
        li.style.backgroundColor='none';
    }
    else if(i% 2== 0){
        li.style.backgroundColor='black';
        li.style.color='white';
    }
    ul2.style.listStyle = 'none';
}
const ul3 = document.createElement('ul');
ul3.style.backgroundColor='#8583eb';
ul3.style.width='50px';
ul3.style.padding='0px 0px 0px';
let numbers = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
for (let i = 0; i < numbers.length; i++) {
    const li = document.createElement('li');
    ul3.appendChild(li);
    li.innerText = numbers[i];
    wrapper.appendChild(ul3);
    ul3.style.listStyle = 'none';
    
     if ( li.innerText=="fyra"){
        li.style.backgroundColor='none';
    }
     else if(i% 2==1){
        li.style.backgroundColor='white';
    }
    else if(i% 2== 0){
        li.style.backgroundColor='black';
        li.style.color='white';
    }
}
ul1.style.border = '10px solid #8583eb';
ul2.style.border = '10px solid #8583eb';
ul3.style.border = '10px solid #8583eb';
ul1.style.textAlign='left';
ul2.style.textAlign='center';
ul3.style.textAlign='right';