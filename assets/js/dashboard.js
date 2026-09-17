fetch('data/database.json')
.then(r=>r.json())
.then(db=>{
document.getElementById('production').innerText=db.production.length;
document.getElementById('sales').innerText=db.sales.length;
document.getElementById('customers').innerText=db.customers.length;
document.getElementById('alerts').innerText=db.alerts.length;
});