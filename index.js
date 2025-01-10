let ip=["html","css","JAVASCRIPT","react","ANGULAR"];
let op=[];

for(i=0;i<ip.length;i++){
    if( ip[i]===ip[i].toLowerCase()){
    op.push(ip[i].toUpperCase());
    }
    else{
        op.push(ip[i].toLowerCase())
    }
}
console.log(`Input is ["html","css","JAVASCRIPT","react","ANGULAR"]`);
console.log("Output is", op)