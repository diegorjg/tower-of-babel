var a = 5;
// La variable `b` no ha de poder ser reasignada.
const b  = process.argv[2];
 // La variable `c` ha de estar disponible sólo en este bloque.
 if (a === 5) {
     let c = 4;
     console.log(c);
// La variable `c` ha de estar disponible sólo en este bloque. 

     let b = 8;
     console.log(b);
    } 
    console.log(a); // 5  
    console.log(b);

    try {  
        // Intenta reasignar el valor de `c`  
        c = 1000;  
      } catch (e) {  
        // Has de obtener el siguiente error: `c is not defined`  
        console.log(e);  
      }  