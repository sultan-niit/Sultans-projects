package com.mycompany.agecalcc;

import java.time.LocalDate;
import java.util.Scanner;
import java.time.temporal.ChronoUnit;

public class AgeCALCC {

    public static void main(String[] args) {
        try {
            Scanner input = new Scanner(System.in);

            LocalDate today = LocalDate.now();
            int currentYear = today.getYear();

            System.out.println("--- AGE CALCULATOR ---");
            System.out.println("Today's Date: " + today);
            System.out.println();

            System.out.println("Enter your birth year  ");
            int birthYear = input.nextInt();

            if (birthYear > currentYear || birthYear < 1900) {
                System.out.println("Error: Please enter a valid birth year!");
            } else {

                System.out.println("Enter your birth month  ");
                int birthMonth = input.nextInt();

                if (birthMonth < 1 || birthMonth > 12) {
                    System.out.println("Error: Month must be between 1 and 12!");
                } else {

                    System.out.println("Enter your birth day  ");
                    int birthDay = input.nextInt();

                    if (birthDay < 1 || birthDay > 31) {
                        System.out.println("Error: Day must be between 1 and 31!");
                    } else {

                        LocalDate birthDate = LocalDate.of(birthYear, birthMonth, birthDay);

                        if (birthDate.isAfter(today)) {
                            System.out.println("Error: Birth date cannot be in the future!");
                        } else {

                            long calcYear = ChronoUnit.YEARS.between(birthDate, today);

                            LocalDate sameDayThisYear = birthDate.plusYears(calcYear);
                            long calcMonth = ChronoUnit.MONTHS.between(sameDayThisYear, today);

                            LocalDate sameDayThisMonth = sameDayThisYear.plusMonths(calcMonth);
                            long calcDay = ChronoUnit.DAYS.between(sameDayThisMonth, today);

                            System.out.println();
                            System.out.println("You are " + calcYear + " years, " + calcMonth + " months, and " + calcDay + " days old!");

                        }
                    }
                }

            }
        } catch (Exception e) {
        }
    }
}
