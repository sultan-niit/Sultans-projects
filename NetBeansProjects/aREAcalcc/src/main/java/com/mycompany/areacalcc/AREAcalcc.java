
package com.mycompany.areacalcc;

import java.util.Scanner;
public class AREAcalcc {

    public static void main(String[] args) {
         try{
         System.out.println("THIS IS A PROGRAM TO CALCULATE THE AREA OF A CIRCLE");
     Scanner input = new Scanner(System.in);
        

        System.out.print("Enter the radius to find Area: ");
        double radius = input.nextDouble();
        double square = radius * radius;

        double area = 3.142 * square;

        System.out.printf("The Area of the circle is: %.2f%n", area);;
         }catch(Exception e){}
    }
}
