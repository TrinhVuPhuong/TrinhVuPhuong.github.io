function getAllUrlParams(url) {
    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {

        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0];

        // split our query string into its component parts
        var arr = queryString.split('&');

        for (var i = 0; i < arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split('=');

            // set parameter name and value (use 'true' if empty)
            var paramName = a[0];
            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

            // (optional) keep case consistent
            paramName = paramName.toLowerCase();
            if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

            // if the paramName ends with square brackets, e.g. colors[] or colors[2]
            if (paramName.match(/\[(\d+)?\]$/)) {

                // create key if it doesn't exist
                var key = paramName.replace(/\[(\d+)?\]/, '');
                if (!obj[key]) obj[key] = [];

                // if it's an indexed array e.g. colors[2]
                if (paramName.match(/\[\d+\]$/)) {
                    // get the index value and add the entry at the appropriate position
                    var index = /\[(\d+)\]/.exec(paramName)[1];
                    obj[key][index] = paramValue;
                } else {
                    // otherwise add the value to the end of the array
                    obj[key].push(paramValue);
                }
            } else {
                // we're dealing with a string
                if (!obj[paramName]) {
                    // if it doesn't exist, create property
                    obj[paramName] = paramValue;
                } else if (obj[paramName] && typeof obj[paramName] === 'string'){
                    // if property does exist and it's a string, convert it to an array
                    obj[paramName] = [obj[paramName]];
                    obj[paramName].push(paramValue);
                } else {
                    // otherwise add the property
                    obj[paramName].push(paramValue);
                }
            }
        }
    }

    return obj;
}
function titleCase(str) {
    var convertToArray = str.toLowerCase().split(' ');
    var result = convertToArray.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    
    return result.join(' ');
  }

const output = document.querySelector('body');
var obj = getAllUrlParams();
function maker() {

    

    console.log(obj);
    
    var p = document.createElement('p');
    p.setAttribute("class", "title");
    p.textContent = "MSHD: "+  obj['mshd'].toUpperCase();

    output.append(p);

    const myArray = obj['ngay'].split("%20");

    console.log(myArray);
    
    var date = "";
    date += myArray[0] + " " + myArray[1];

    

    p = document.createElement('p');
    p.setAttribute("class", "title");
    p.textContent = "Ngày: " + date;
    output.append(p);


    p = document.createElement('p');
    p.setAttribute("class", "title");
    p.textContent = "Khách hàng: " + titleCase(decodeURIComponent(obj['khachhang']));
    output.append(p);


    var table, tr, td,div;
    table = document.createElement('table');
    if (obj["tienken"] != "0" ) {

   
     div = document.createElement('div');
    div.setAttribute("class", "line2");
    output.append(div);




     table = document.createElement('table');

         tr = document.createElement('tr');

             td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Số ký";
            tr.append(td);

            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  obj['soky']+ " kg"
            tr.append(td);

        table.append(tr);



        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Bì";
            tr.append(td);

            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  obj['bi']+ " kg"
            tr.append(td);

        table.append(tr);


        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Phế";
            tr.append(td);

            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  obj['phe']+ " kg"
            tr.append(td);

        table.append(tr);


        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Non";
            tr.append(td);

            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  obj['non']+ " kg"
            tr.append(td);

        table.append(tr); 

        
        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Số ký TT";
            tr.append(td);

            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  obj['sokytt']+ " kg"
            tr.append(td);

        table.append(tr);
        
        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Giá kén";
            tr.append(td);

            var x = obj['giaken'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);

        
        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("colspan", "2");
                div = document.createElement("div");
                div.setAttribute("class","lineTB")
                td.append(div);
            tr.append(td);

        table.append(tr);


        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title2");
            td.textContent="Tiền kén";
            tr.append(td);

            x = obj['tienken'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);
    }

        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("colspan", "2");
                div = document.createElement("div");
                div.setAttribute("class","lineTB")
                td.append(div);
            tr.append(td);

        table.append(tr);

        if (obj["tongno" != "0"]) {

       


        /////////Tổng nợ////////////////
        
        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Số lượng";
            tr.append(td);

            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  obj['soluong']+ " Hộp"
            tr.append(td);

        table.append(tr);


        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Tiền giống";
            tr.append(td);

            x = obj['tiengiong'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);


        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Giống đã trả";
            tr.append(td);

            x = obj['giongdatra'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);


        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Tiền nợ cũ";
            tr.append(td);

            x = obj['tiennocu'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);


        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Tiền đối ứng";
            tr.append(td);

            x = obj['tiendoiung'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);


        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("colspan", "2");
                div = document.createElement("div");
                div.setAttribute("class","lineTB")
                td.append(div);
            tr.append(td);

        table.append(tr);


        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title2");
            td.textContent="Tổng nợ";
            tr.append(td);

            x = obj['tongno'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);
   

        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("colspan", "2");
                div = document.createElement("div");
                div.setAttribute("class","lineTB")
                td.append(div);
            tr.append(td);

        table.append(tr);
    }

        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Tiền cộng thêm";
            tr.append(td);

            x = obj['tiencongthem'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);   


        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title3");
            td.textContent="Thành Tiền";
            tr.append(td);

            x = obj['thanhtien'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);    


        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Tiền nợ lại";
            tr.append(td);

            x = obj['nocon'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);

    table.append(tr);

        
    output.append(table);

    p=document.createElement('p');
    p.setAttribute("class","footer");
    p.textContent="Duy Phương cảm ơn quý khách!";
    output.append(p);
    
 
}
maker();


window.print();
if(obj['thietbi']=='computer'){
    window.addEventListener('afterprint', function() {
    window.close();
});
}
