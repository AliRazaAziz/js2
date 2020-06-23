//Chapter 21-25
//Task 1
    //var firstName = prompt("Enter first name");
    //var lastName = prompt("Enter last name");
    //var fullName = firstName + lastName ;
    //alert("Hello" + " " + fullName);
//Task 2
    //var phone = prompt("Enter Favourite Mobile");
    //var n = phone.length;
    //document.write("My favorite phone is :" + " " + phone + " <br>" +
    //                "Length of string :" + " " + n)
//Task 3
    //var str = "Pakistani";
    //var n = str.indexOf("n");
    //document.write("String : Pakistani" + " <br>" +
    //                "index of 'n' :" + " " + n)
//Task 4
    //var str = "Hello World";
    //var n = str.lastIndexOf("l");
    //document.write("String : Hello World" + " <br>" +
    //                "Last index of 'l' :" + " " + n)
//Task 5
    //var str = "Pakistani";
    //var n = str.charAt(3);
    //document.write("String : Pakistani" + " <br>" +
    //                "Charater at index 3 :" + " " + n)
//Task 6
    //var firstName = prompt("Enter first name");
    //var lastName = prompt("Enter last name");
    //var fullName = firstName.concat(lastName) ;
    //alert("Hello" + " " + fullName);   
//Task 7
    //var city = "Hyderabad";
    //var rep = city.replace("Hyder", "Islam" )
    //document.write(rep);
//Task 8
    //var message = "Ali and Sami are best friends. They play cricket and football together.";
    //var rep = message.replace(/and/g, "&" )
    //document.write(rep);
//Task 9
    //var str = "472";
    //var int = parseInt(str);
    //document.write("Value : " + " " + str + "<br>" +
    //               "Type : string" + "<br>" +
    //               "Value : " + " " + int + "<br>" +
    //               "Type : number" );
//Task 10
    //var input = prompt("Enter Input");
    //var cap = input.toUpperCase()
    //document.write(cap)    
//Task 11
    //var input = prompt("Enter Input");
    //var til = input.toLocaleLowerCase()
    //document.write(til)  
//Task 12
    //var num = 35.36;
    //var str = (num*100).toString()
    //alert(str)
//Task 13
    //var user = prompt("Enter username")
    //function CheckPassword(user) 
    //{ 
    //var passw=  /^[A-Za-z]\w/;
    //if(user.value.match(passw)) 
    //{ 
    //alert('Correct, try another...')
    //return true;
    //}
   // else
   // { 
   // alert('Wrong...!')
   // return false;
   // }
    //}
    
//Task 14
    //var search_str = prompt("Search")
    //var str = ["cake","apple pie","cookie","chips","patties"]
    
    //function case_insensitive_search(str, search_str)
    //{
    //var result= str.search(new RegExp(search_str, "i"));

    //if (result>0)
    //return 'Matched';
    //else
    //return 'Not Matched';  
   //}

    //console.log(case_insensitive_search(str, search_str));
//Task 15
    
    //function CheckPassword(inputtxt,passw) 
    //{ 
    //var inputtxt = prompt("Enter Password")    
    //var passw=  /^[A-Za-z]\w{0-9}$/;
    //if(inputtxt.value.match(passw)) 
    //{ 
    //alert('Correct, try another...')
    //return true;
    //}
    //else
    //{ 
    //alert('Wrong...!')
    //return false;
    //}
    //}
    
    //CheckPassword();

//Task 16
    //var university = "University of Karachi";
    //var arr = university.split("")
    //document.write(arr);    
//Task 17
    //var inp = "Pakistan";
    //var n = inp.lastIndexOf("n");
    //document.write("User Input : Pakistan" + " <br>" +
    //                "Last charater of input :" + " " + n)
//Task 18
    //function gfg() { 
    //        var r = "the quick brown fox jumps over the lazy dog "; 
    //         
    //          alert(r.match(/the/g)).length; 
    // 
    //    } 
    //gfg()    
//Chapter 26-30
//Task 1
    //var inp = prompt("Enter a positive integer");

    //document.write("number : " + " " + inp + "<br>" +
    //               "round off value : " + Math.round(inp) + "<br>" +
    //               "floor value : " + " " + Math.floor(inp) + "<br>" +
    //               "ceil value : " + " " + Math.ceil(inp)   );
//Task 2
    //var inp = prompt("Enter a negative integer");

    //document.write("number : " + " " + inp + "<br>" +
    //               "round off value : " + Math.round(inp) + "<br>" +
    //               "floor value : " + " " + Math.floor(inp) + "<br>" +
    //               "ceil value : " + " " + Math.ceil(inp)   );
//Task 3
    //var inp = prompt("Enter to find absolut value");
    //document.write("tThe absolute value of " + inp + " " + "is " + Math.abs(inp));
//Task 4
    //document.write("Random Dice value : " + (Math.floor(Math.random() * 6)+1) );
//Task 5 
    //if ((Math.floor(Math.random() * 2)+1) === 2) {
    //    document.write("Random coin value : " + " Heads" );    
    //} else {
    //    document.write("Random coin value : " + " Tails" );
    //}
    
//Task 6
    //document.write("Random number between 1 and 100 : " + (Math.floor(Math.random() * 100)+1) );
//Task 7
    //var inp = prompt("Enter your weight");
    //document.write("The weight of User is " + inp + " kilograms");
//Task 8
    //var sec = (Math.floor(Math.random() * 10)+1);
    //var inp = prompt("Enter secret number");
    //if (inp == sec) {
    //    document.write("Congratulations!")
    //}


//Chapter 31-34
//Task 1
    //var d = new Date();
    //document.write(d);
//Task 2
    //var d = new Date();
    //var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    //document.write(months[ d.getMonth()]);
//Task 3
    //var d = new Date();
    //var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    //document.write( "Today is " + days[d.getDay()]);
//Task 4
    //var d = new Date();
    //var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //var msg = days[d.getDay()];
    //if (msg === "Sunday" ) {
    //    document.write(" It's Funday");    
    //}else if(msg === "Saturday"){
    //    document.write(" It's Funday");
    //}        
//Task 5
    //var d = new Date();
    //var date = d.getDate()
    //if (date < 16) {
    //    document.write("First fifteen days of the month");
    //} else {
    //    document.write("Last days of the month");    
    //}    
//Task 6
    //var d = new Date();
    //var t = d.getTime();
    //var m = (t/60)/60;
    //document.write("Current Date : " + d + "<br>" +
    //                "Elapsed milliseconds since January 1, 1970 : " + t + "<br>" +
    //                "Elapsed minutes since January 1, 1970 : " + m);
//Task 7
    //var d = new Date();
    //var hour = d.getHours()
    //if (hour < 11) {
    //    document.write("It's AM");
    //} else {
    //    document.write("It's PM");    
    //}   
//Task 8
    //var d = new Date("Dec 31 2020");
    //document.write("Later date : " + d);
//Task 9
    //var date1 = new Date("06/18/2015"); 
    //var date2 = new Date(); 
       
    //var Difference_In_Time = date2.getTime() - date1.getTime();  
    //var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
 
    //document.write( Math.round( Difference_In_Days) + " Days have passed since 1st Ramadan 2015"); 
//Task 10
    //var date1 = new Date("01/01/2015"); 
    //var date2 = new Date("12/05/2015"); 
    
    //var Difference_In_Time = date2.getTime() - date1.getTime();
    //document.write( " On refernce date " + date2 + ",  " + Math.round(Difference_In_Time) + " seconds have passed since beginning of 2015" )  
//Task 11
    //var date1 = new Date(); 
    //var date2 = new Date();
    //date2.setHours(21)
    //document.write("Current Date : " + date1 + "<br>" +
    //                "1 Hour ago, it was " + date2); 
//Task 12
    //var d = new Date();
    //var d2 = new Date(d.setFullYear(d.getFullYear() - 100));
    //document.write("Current Date : " + d + "<br>" +
    //                "100 Years ago, it was " + d2); 
//Task 13
    //var age = prompt("Enter your age");
    //var ageInMillis = age * 365 * 24 * 60 * 60*1000;
    //var dateOfBirth = new Date(new Date().getTime() - ageInMillis);
    //var a = dateOfBirth.getFullYear();
    //alert(a)
//Task 14
    //var d = new Date();
    //var name = "ABC Customer";
    //var month = d.getMonth();
    //var unit = 410;
    //var chg = 16;
    //var due = unit*chg;
    //var late = 350;
    //var gross = due+late ;    
    //document.write("K-Electric Bill" + "<br>" + "<br>" +
    //                "Customer Name : " + name + "<br>" +
    //                "Month : " + month + "<br>" +
    //               "Numbers of units : " + unit + "<br>" +
    //                "Charges per unit : " + chg + "<br>" + "<br>" +
    //                "Net Amount Payable(within Due Date) : " + due + "<br>" +
    //                "Late payment surcharge : " + late + "<br>" +
    //                "Net Amount Payable(within Due Date) : " + gross);

//Chapter 35-38    
//Task 1
    //var d = date(Date)  
    //function date(Date) {
    //      return new Date()
    //  }
    //document.write(d) 
//Task 2
    //var a =prompt("Enter first name")
    //var b =prompt("Enter last name")
    //function c(a,b) {
    //
    //}
    //document.write("Hello " + a + " " + b);
//Task 3
    //var a =prompt("Enter number")
    //var b =prompt("Enter number")
    //function c(a,b) {
    //    return a*b
    //}
    //document.write(c(a,b));
//Task 4
    //var a = prompt("Enter number");
    //var b = prompt("Enter operator");
    //var c = prompt("Enter number");
    //function calc(a,b,c) {
    //   if (b === "+"){
    //        return a+++b
    //    } else if (b === "-") {
    //        return a-b
    //    } else if (b === "/"){
    //        return a/b
    //    } else {
    //        
    //}
    //alert(calc(a,b,c))

//Task 5
    //var a = prompt("Enter number");
    //function calc(a) {
    //    return a*a
    //}
    //alert(calc(a)) 
//Task 6
    //function factorial(x) 
    //{ 

    //if (x === 0)
    //{
    //    return 1;
    //}
    //return x * factorial(x-1);
    //        
    //}
    //alert(factorial(5));
//Task 7
    //var a = prompt("Enter starting number")
    //var b = prompt("Enter ending number")
    //function count(a,b) {
    //        for (i = a; i <= b; i++) {
    //            console.count(a,b)
    //    }
    //}
    //document.write(count(a,b))
    
//Task 8
    
    //var per =prompt("enter perpendicular")
    //var base = prompt("enter base")
    //var base1 = base*base
    //var per1 = per*per
    //var hyp = calcHypotenuse(base1,per1)
    //function calcHypotenuse(base1,per1) {
    //        return base1*per1
    //}
    //document.write(hyp)
//Task 9
    //function A(width,height) {
    //    return width*height
    //}
    //alert(A(50,20))
//Task 10
    //function check_Palindrome(str_entry){
    //    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    //    var ccount = 0;
    //    if(cstr==="") {
    //        alert("Nothing found!");
    //        return false;
    //    }
    //    if ((cstr.length) % 2 === 0) {
    //        ccount = (cstr.length) / 2;
    //    } else {
    //        if (cstr.length === 1) {
    //            alert("Entry is a palindrome.");
    //            return true;
    //        } else {
    //            ccount = (cstr.length - 1) / 2;
    //        }
    //    }
    //    for (var x = 0; x < ccount; x++) {
    //        if (cstr[x] != cstr.slice(-1-x)[0]) {
    //            alert("Entry is not a palindrome.");
    //           return false;
    //       }
    //    }
    //    alert("The entry is a palindrome.");
    //    return true;
    //}
    //   check_Palindrome('madam');
//Task 11
    //var str = prompt("Enter String")
    //function capitalize_Words(str)
    //{
    //return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    //}
    //alert(capitalize_Words(str));
//Task 12
    //function find_longest_word(str)
    //{
    //var array1 = str.match(/\w[a-z]{0,}/gi);
    //var result = array1[0];

    //for(var x = 1 ; x < array1.length ; x++)
    //{
    //    if(result.length < array1[x].length)
    //    {
    //    result = array1[x];
    //    } 
    //}
    //return result;
    //}
    //alert(find_longest_word('Web Development Tutorial'));
//Task 13
    //function char_count(str, letter) 
    //{
    //var letter_Count = 0;
    //for (var position = 0; position < str.length; position++) 
    //{
    //    if (str.charAt(position) == letter) 
    //    {
    //    letter_Count += 1;
    //    }
    //}
    //return letter_Count;
    //}

    //alert(char_count('w3resource.com', 'o'));
//Task 14
    //var rad = 5
    //function calcCircumference(rad) {
    //   return 2*Math.PI*rad
    //}
    //document.write("The Circumference of Circle is " + calcCircumference(rad,pi))
    //function calcArea(rad,pi) {
    //    return Math.PI*rad*rad
   // }
    //document.write("The Area of Circle is " + calcArea(rad,pi));  
   