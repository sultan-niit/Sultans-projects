
package com.mycompany.multiplicationfor2;
import java.util.Scanner;

public class Multiplicationfor2 {

    public static void main(String[] args) {
        try {
        System.out.println("Simple Multiplication Table");
        Scanner input = new Scanner(System.in);
        int count, number, length;
        
        System.out.println("Enter the number you want to calculate");
        number = input.nextInt();
        
        System.out.println("Enter the lenght you want to calculate to");
        length = input.nextInt();
        for(count = 1; count <= length; count++){
            System.out.println(number + " X "+ count + " = " + number * count);
        }
        } catch (Exception e){
        }
    }
}
