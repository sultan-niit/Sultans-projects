

package com.mycompany.pricecalc;
import java.util.Scanner;

public class PriceCalc {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("THIS IS A PROGRAM TO CALCULATE THE PRICE OF FIFTY MANGOES");
        
        int quantity = 50;
        
        System.out.println("enter price");
        double price = input.nextDouble();
        
        double total = price * quantity; 
        System.out.println("THE AMOUNT FOR THE PRICE OF fifty MANGOES IS " + total);
        
    }
}
