

package com.mycompany.averagecalcc1;

import java.util.Scanner;


public class AverageCalcc1 {

    public static void main(String[] args) {
       try{
       Scanner input = new Scanner(System.in);
        System.out.println("THIS IS A PROGRAM TO CALCULATE THE AVERAGE OF TWO NUMBERS");
        
         System.out.println("enter first number");
        double num1 = input.nextDouble();
        
         System.out.println("enter first number");
         double num2 = input.nextDouble();
         
         double sum = num1 + num2;
          System.out.println("the sum of two nubers is" + sum);
         
         double average = sum / 2;
         System.out.println("the average is: " + average);
       }catch(Exception e){}
    }
}
