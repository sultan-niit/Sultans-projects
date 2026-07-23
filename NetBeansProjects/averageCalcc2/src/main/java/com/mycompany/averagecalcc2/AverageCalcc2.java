

package com.mycompany.averagecalcc2;

import java.util.Scanner;


public class AverageCalcc2 {

    public static void main(String[] args) {
        try{
         Scanner input = new Scanner(System.in);
     System.out.println("THIS IS A PROGRAM TO CALCULATE THE AVERAGE OF FIVE NUMBERS");
     
     System.out.println("enter first number");
        double num1 = input.nextDouble();
        
         System.out.println("enter second number");
         double num2 = input.nextDouble();
         
         System.out.println("enter third number");
         double num3 = input.nextDouble();
         
         System.out.println("enter fourth number");
         double num4 = input.nextDouble();
         
         System.out.println("enter fifth number");
         double num5 = input.nextDouble();
         
         double sum = num1 + num2 + num3 + num4 + num5;
         System.out.println("the sum of five nubers is" + sum);
         
         double average = sum / 5;
         System.out.println("the average is: " + average);
        }catch(Exception e){}
    }
}
