window.onload = function Function1() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    
    // Check whether AM or PM
    var newformat = hours >= 12 ? 'PM' : 'AM';
    
    // Find current hour in AM-PM Format
    hours = hours % 12;
    
    // To display "0" as "12"
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var ankan = hours + ':' + minutes + ' ' + newformat
    
    document.getElementById("time").innerHTML = ankan;
    setInterval(Function1, 1000);
}

