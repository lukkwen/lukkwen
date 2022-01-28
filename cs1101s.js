//fns abstraction -> blackbox , without knowing the return 






/* Q1 
function biggie_size(combo) {
    return combo + 4;
} */

/* Q2
function unbiggie_size(combo) {
    return combo - 4;
}

/* Q3 
function is_biggie_size(combo) {    
    return combo >= 5;
} */

/* Q4 
function combo_price(combo) {
    return is_biggie_size(combo) ? unbiggie_size(combo)  * (1.17) + 0.50 : combo * (1.17); 
} */

//use function abs to full use, is_biggie is useful and unbiggie is useful here
//if above requirements change q4 can change accordingly without tedious coding

/* Q5 
function empty_order() {
    return 0;
} */


// Q6 
/*function add_to_order(r,c) {
    return 10*r + c;
}



add_to_order(1,2); */
//123 + (7 * ((math_floor(math_log10(123)))));

/* import {stack_frac,heart,show} from "rune";

function stackn_A(n,rune) {
    return n===1
            ? heart 
            : stack_frac(1/n,
                        rune,  
                        stackn_A(n-1,rune));
}

show(stackn_A(3,heart));*/

function sum(term, a, next, b) {
    return a > b    
           ? 0
           : term(a) + sum(term, next(a), next, b);}
           
         

function my_sum(n) {
    return n === 1
            ? 2
            : (n * n + 1) + my_sum(n-1);
}

my_sum(5);

sum(y => y * (y + 1) ,1, x => x + 1, 5);





