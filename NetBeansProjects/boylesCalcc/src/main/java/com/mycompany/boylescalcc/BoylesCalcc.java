

package com.mycompany.boylescalcc;

import java.util.Scanner;


public class BoylesCalcc {

    public static void main(String[] args) {
        try{
         Scanner scanner = new Scanner(System.in);
        
        System.out.println("--- Boyle's Law Solver (Pressure1 * volume1 = pressure2 * volume2) ---");
        System.out.println("What value do you want to find?");
        System.out.println("1 = Initial Pressure (Pressure1)");
        System.out.println("2 = Initial Volume (volume1)");
        System.out.println("3 = Final Pressure (pressure2)");
        System.out.println("4 = Final Volume (volume2)");
        System.out.println("Enter choice (1-4): ");
        int choice = scanner.nextInt();
        
        System.out.println("--- Enter Known Values ---");
        
        if (choice == 1) {
            
            System.out.println("Enter Final Pressure (pressure2): ");
            double pressure2 = scanner.nextDouble();
            System.out.println("Enter Final Volume (volume2): ");
            double volume2 = scanner.nextDouble();
            System.out.println("Enter Initial Volume (volume1): ");
            double volume1 = scanner.nextDouble();
            
            double result = (pressure2 * volume2) / volume1;
            System.out.println("Initial Pressure (Pressure1) = " + result);
            
        } else if (choice == 2) {
           
            System.out.println("Enter Final Volume (volume2): ");
            double volume2 = scanner.nextDouble();
            System.out.println("Enter Final Pressure (pressure2): ");
            double pressure2 = scanner.nextDouble();
            System.out.println("Enter Initial Pressure (Pressure1): ");
            double pressure1 = scanner.nextDouble();
            
            double result = (pressure2 * volume2) / pressure1;
            System.out.println("Initial Volume (volume1) = " + result);
            
        } else if (choice == 3) {
            
            System.out.println("Enter Initial Pressure (Pressure1): ");
            double pressure1 = scanner.nextDouble();
            System.out.println("Enter Initial Volume (volume1): ");
            double volume1 = scanner.nextDouble();
            System.out.println("Enter Final Volume (volume2): ");
            double volume2 = scanner.nextDouble();
            
            double result = (pressure1 * volume1) / volume2;
            System.out.println("Final Pressure (pressure2) = " + result);
            
        } else if (choice == 4) {
            
            System.out.print("Enter Initial Pressure (Pressure1): ");
            double pressure1 = scanner.nextDouble();
            System.out.println("Enter Initial Volume (volume1): ");
            double volume1 = scanner.nextDouble();
            System.out.println("Enter Final Pressure (pressure2): ");
            double pressure2 = scanner.nextDouble();
            
            double result = (pressure1 * volume1) / pressure2;
            System.out.println("Final Volume (volume2) = " + result);
            
        } else {
            System.out.println("Invalid option! select an opton from 1 to 4.");
        }
        
        }catch(Exception e){}
    }
}
