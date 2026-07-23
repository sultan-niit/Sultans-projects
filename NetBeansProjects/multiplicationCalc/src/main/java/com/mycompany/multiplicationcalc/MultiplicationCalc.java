

package com.mycompany.multiplicationcalc;


public class MultiplicationCalc {

    public static void main(String[] args) {
        try{
         System.out.println("Simple Multiplication");
        int count, number, length;
        number = 2;
        length = 12;
        count = 1;
        while (count <= length)
        {
            System.out.println(number + "X"+ count +" = " + (number * count));
            count++;
        }
        }catch(Exception e){}
       
    }
}
