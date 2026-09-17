let d=JSON.parse(localStorage.getItem('bf_ops')||'[]');
ops.innerText=d.length;
prod.innerText=d.filter(x=>x.type==='تولید').length;
sales.innerText=d.filter(x=>x.type==='فروش').length;
