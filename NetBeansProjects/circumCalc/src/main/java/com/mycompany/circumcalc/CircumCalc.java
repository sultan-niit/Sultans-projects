package com.mycompany.circumcalc;

import java.util.Scanner;

public class CircumCalc {

    public static void main(String[] args) {
        System.out.println("THIS IS A PROGRAM TO CALCULATE THE CIRCUMFERENCE OF A CIRCLE");
        Scanner input = new Scanner(System.in);

        
        System.out.println("Enter the radius to find Circumference: ");
        double radius = input.nextDouble();

        double circumference = 2 * 3.142 * radius;

        System.out.printf("The Circumference of the circle is: %.2f%n", circumference);
    }
}
