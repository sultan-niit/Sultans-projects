

package com.mycompany.multiplicationdo;


public class MultiplicationDo {

    public static void main(String[] args) {
        try{
        System.out.println("Simple Multiplication");
        int count, number, length;
        number = 2;
        length = 12;
        count = 1;
        do { 
            System.out.println(number + " X "+ count + " = " + number * count);
            count++;
        }while (count <= length);
        } catch(Exception e){}
    }
}
