
package com.mycompany.high3;

import java.util.Scanner;


public class High3 {

    public static void main(String[] args) {
        try{
         double firstNumber, secondNumber, thirdNumber;
        Scanner input = new Scanner(System.in);

        System.out.println("--- HIGHEST OF THREE NUMBERS ---");
        System.out.println("--------------------------------------");

        System.out.println("--- ENTER FIRST NUMBER ---");
        firstNumber = input.nextDouble();

        System.out.println("--- ENTER SECOND NUMBER ---");
        secondNumber = input.nextDouble();
        
        System.out.println("--- ENTER THIRD NUMBER ---");
        thirdNumber = input.nextDouble();

        if ((firstNumber > secondNumber) && (firstNumber > thirdNumber)) {
            System.out.println(firstNumber + " IS THE HIGHEST NUMBER");
        } else if ((secondNumber > firstNumber)&& (secondNumber > thirdNumber)) {
            System.out.println(secondNumber + " IS THE HIGHERST NUMBER");
        }else if ((thirdNumber > firstNumber)&& (thirdNumber > secondNumber)) {
            System.out.println(thirdNumber + "IS THE HIGHEST NUMBER");
        } else {
            System.out.println("ALL NUMBERS ARE EQUAL");
            
        }
        }catch(Exception e){}
    }
}
