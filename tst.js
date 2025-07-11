function tst (n,m) {
    for( n;n<m;n++){
        //console.log(n) ;
    }   
}  

//tst(3,5);


let person ={
    firstname:"gio",
    marks: [34,23,12,43],
    MinMark (){ let m=person.marks[0]
        for(n of person.marks){ 
          console.log("m aris", m,"n aris", n) ;
          if (m>n){m=n} 
        }      return m      // console.log(m)
    }

}

          console.log(person.MinMark())             // person.MinMark ()
