console.log("Hello World");

/* create a a table */
document.getElementById("send").addEventListener("click", function() {
    let caption = document.getElementById("caption").value;
    let rows = parseInt(document.getElementById("rows").value);
    let cols = parseInt(document.getElementById("cols").value);
    
    /*console.log(caption);*/
    //console.log(rows);
    //console.log(cols);
   

    createTables(rows, cols, caption);

    document.getElementById("createListPlaceholder").style.display = "block";
    cols.value = "";
    rows.value = "";
    caption.value = "";
});

/* document.getElementById("createListPlaceholder").style.display = "block"; */

function createTables(rows, cols, caption){
    let pTag = "<table>" + "<caption>" + caption + "</caption>";
    
        for(var i = 0; i < rows; i++){ //table rows
            pTag += "<tr>";

            for(var j = 0; j < cols; j++){
                pTag += "<th>" + "</th>";
            }

            for(var k = 0; k < cols; k++){
                pTag += "<td>" + "</td>";
            }
            pTag += "</tr>";
            
        }
        pTag += "</table>";

        console.log(pTag)
        
    
    
}