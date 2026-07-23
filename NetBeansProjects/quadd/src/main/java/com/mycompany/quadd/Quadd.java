

package com.mycompany.quadd;

import java.util.Scanner;


public class Quadd {

    public static void main(String[] args) {
         try{
         Scanner input = new Scanner(System.in);
        System.out.println("A PROGRAM TO CALCULATE QUADRATIC EQUATIONS");

        System.out.println("ENTER FIRST NUMBER:");
        double a = input.nextDouble();

        System.out.println("ENTER SECOND NUMBER:");
        double b = input.nextDouble();

        System.out.println("ENTER THIRD NUMBER:");
        double c = input.nextDouble();

        double discriminant = (b * b) - (4 * a * c);

        double rootpart = Math.sqrt(discriminant);

        double root1 = (-b + rootpart) / (2 * a);
        double root2 = (-b - rootpart) / (2 * a);

        System.out.println("The roots are:");
        System.out.println("Root 1: " + root1);
        System.out.println("Root 2: " + root2);
         }catch(Exception e){}
    }
}
