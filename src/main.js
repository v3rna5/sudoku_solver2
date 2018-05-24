import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {solving} from './../src/function.js';


// // var table = [];
// // for (var i = 0; i <81 ; i++){

// //     if(valuetable[i].value != "" ){
// //     table.push(parseInt(valuetable[i].value));
// //     }
// //     if(valuetable[i].value == "" ){
// //         table.push(0);
// // }
// }

// solving();

window.setTimeout(function() {
    solving();
 }, 3000);