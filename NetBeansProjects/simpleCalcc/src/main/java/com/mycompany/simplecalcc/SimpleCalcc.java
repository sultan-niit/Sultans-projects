

package com.mycompany.simplecalcc;

import java.util.Scanner;


public class SimpleCalcc {

    public static void main(String[] args) {
        try{
         System.out.println("THIS IS A PROGRAM TO PERFORM BASIC ARITHMETIC ");
        Scanner input = new Scanner(System.in);
        System.out.println("Enter your first number");
        double firstNumber = input.nextDouble();
        System.out.println("What operation do you want to perform?");
        System.out.println("Press 1 for  addition");
        System.out.println("Press 2 for subtraction");
        System.out.println("Press 3 for multiplication");
        System.out.println("press 4 for division");
        System.out.println("Enter choice (1-4): ");
        int choice = input.nextInt();

        if ((choice < 1) || (choice > 4)) {
            System.out.println("Error, invalid option select an opton from 1 to 4.");
        } else {

            System.out.println("Enter your second number");
            double secondNumber = input.nextDouble();

            if (choice == 1) {
                double result = firstNumber + secondNumber;
                System.out.println("The result = " + result);
            } else if (choice == 2) {
                double result = firstNumber - secondNumber;
                System.out.println("The result = " + result);
            } else if (choice == 3) {
                double result = firstNumber * secondNumber;
                System.out.println("The result = " + result);
            } else if (choice == 4) {
                if (secondNumber == 0) {
                    System.out.println("error!!! cannot divide by zero");
                } else {
                    double result = firstNumber / secondNumber;
                    System.out.println("The result is " + result);
                }

            }

        }

        }catch(Exception e){}
    }
}
