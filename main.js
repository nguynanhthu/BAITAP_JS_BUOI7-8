var numberList =[];
var numberList1 =[];
document.getElementById("btnThemSo").onclick = function(){
    // var numberList =[];
    var number = document.getElementById("nhapSoNguyen").value*1;
    numberList.push(number);
    console.log(numberList);
};
document.getElementById("btnThemSoThuc").onclick = function(){
    // var numberList =[];
    var number1 = parseFloat(document.getElementById("nhapSoThuc").value);
    numberList1.push(number1);
    console.log(numberList1);
};

//Câu 1
document.getElementById("tongSoDuong").onclick = function(){
    var tong = 0;
    for (var i=0; i<numberList.length; i++){
        if (numberList[i] > 0) {
            tong += numberList[i];
        }
    }
    console.log(tong);
    document.getElementById("xuatKetQua").innerHTML ="Tổng số dương trong mảng là: " + tong;
}

//Câu 2
document.getElementById("demSoDuong").onclick = function(){
    var count = 0;
    for (var i=0; i<numberList.length; i++){
        if (numberList[i]>0) {
            count++
        }
    }
    console.log(count);
    document.getElementById("xuatKetQua").innerHTML= "Có " + count + "số dương trong mảng";
}

//Câu 3
document.getElementById("soNhoNhat").onclick = function(){
    var minInNumbers = Math.min.apply(Math, numberList);
    console.log(minInNumbers);
    document.getElementById("xuatKetQua").innerHTML ="Số nhỏ nhất trong mảng là: " + minInNumbers;
}

//câu 4
document.getElementById("soDuongNhoNhat").onclick = function(){
    var SDNN=0;
    for (var i=0; i<numberList.length; i++){
        if (numberList[i] > 0) {
            SDNN += Math.min.apply(Math, numberList[i]);
        }
    }
    console.log(SDNN);
    document.getElementById("xuatKetQua").innerHTML ="Số dương nhỏ nhất trong mảng là: " + SDNN;

}

//Câu 5
function check_odd_even(n){
    var kq;
    kq = (n%2)==0 ? 0 :1;
    return kq;
}
function find_last_even(numberList){
    for (var i = numberList.length; i >=0; i--){
        if (check_odd_even(numberList[i])==0) return numberList[i];
    }
};
document.getElementById("soChanCuoiCung").onclick = function(){
    console.log(find_last_even(numberList));
    document.getElementById("xuatKetQua").innerHTML = "Số chẵn cuối cùng trong mảng là: " + find_last_even(numberList);
}

//Câu 7
document.getElementById("btnSapXep").onclick = function(){
    // var sapXep=0;
    var sapXep = numberList.sort();
    console.log(sapXep);
    document.getElementById("xuatKetQua").innerHTML = "Thứ tự tăng dần của mảng là: " + sapXep;
}

//Câu 8
function SNT(a){
    if (a<2)
      return 0;
   for (var i=2; i<a; i++)
      if (a%i==0)
         return 0;
   return 1;
}
function SNTDauTien(numberList){
    for(var i=0; i<numberList.length; i++)
      if(SNT(numberList[i])==1)
         return numberList[i];
   return -1;
}
document.getElementById("SNT").onclick = function(){
    console.log(SNTDauTien(numberList));
    document.getElementById("xuatKetQua").innerHTML = SNTDauTien(numberList);
}

//Câu 9
document.getElementById("timSoNguyen").onclick = function(){
    var numberList2 = numberList.length + numberList1.length;
    console.log(numberList2);
    var soNguyen=numberList2*1-numberList1.length;
    console.log(soNguyen);
    document.getElementById("xuatKetQua").innerHTML = "Có " + soNguyen + " số nguyên trong mảng";
}

//Câu 10
document.getElementById("btnSoSanh").onclick = function(){
    var kq="";
    var soAm=0;
    var soDuong=0;
    for (var i=0; i<numberList.length; i++){
        if (numberList[i]>0) {
            soDuong++
        }
    }

    for (var i=0; i<numberList.length; i++){
        if (numberList[i]<0) {
            soAm++
        }
    }

    if (soDuong < soAm) {
        kq += "Số âm nhiều hơn số dương";
    } else {
        kq += "Số dương nhiều hơn sô âm";
    }
    document.getElementById("xuatKetQua").innerHTML = kq;
}