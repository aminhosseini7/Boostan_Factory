function save(){
let d=JSON.parse(localStorage.getItem('bf_ops')||'[]');
d.push({user:user.value,type:type.value,amount:amount.value,date:new Date().toLocaleString('fa')});
localStorage.setItem('bf_ops',JSON.stringify(d));
msg.innerText='ثبت شد';
}
