package com.mycompany.loanapp;

import java.util.Scanner;

public class LoanAPP {

    public static void main(String[] args) {

        try {
            System.out.println("LOAN APP CALCULATOR");
            System.out.println("----------------------------------------------------------------------");
            Scanner scanner = new Scanner(System.in);

            System.out.print("Enter Loan Amount (NGN): ");
            double loanAmount = scanner.nextDouble();

            if (loanAmount <= 0) {
                System.out.println("ERROR: Loan Amount must be greater than zero. ");
            } else {
                double monthlyRate = 1.5;

                System.out.print("Enter Loan Duration (in months): ");
                int totalMonths = scanner.nextInt();
                System.out.println("----------------------------------------------------------------------");

                if (totalMonths <= 0) {
                    System.out.println("ERROR: Loan Duration must be greater than zero. ");
                } else {
                    // Both inputs are valid, so run the calculations
                    System.out.println("LOAN BREAKDOWN");
                    System.out.println("----------------------------------------------------------------------");

                    System.out.printf("%-8s | %-16s | %-17s | %-18s%n",
                            "Month", "Monthly Payment", " Monthly Interest", " Monthly Repayment");
                    System.out.println("----------------------------------------------------------------------");

                    double currentBalance = loanAmount;
                    double MonthlyRepayment = loanAmount / totalMonths;
                    double rateFraction = monthlyRate / 100.0;

                    double totalMonthlyRepayment = 0;
                    double totalInterestPaid = 0;
                    double totalOverallPaid = 0;

                    for (int month = 1; month <= totalMonths; month++) {
                        double interestAmount = currentBalance * rateFraction;
                        double totalMonthlyPayment = MonthlyRepayment + interestAmount;

                        totalMonthlyRepayment += MonthlyRepayment;
                        totalInterestPaid += interestAmount;
                        totalOverallPaid += totalMonthlyPayment;

                        System.out.printf("%-8d | NGN%-15.2f | NGN%-16.2f | NGN%-17.2f%n",
                                month, MonthlyRepayment, interestAmount, totalMonthlyPayment);

                        currentBalance -= MonthlyRepayment;
                    }
                    
                    System.out.println("----------------------------------------------------------------------");
                    System.out.println("LOAN SUMMARY");
                    System.out.println("----------------------------------------------------------------------");
                    System.out.printf("Monthly Repayment is equal to: ........... NGN%,.2f%n", totalMonthlyRepayment);
                    System.out.printf(" Total Monthly interest amount is equal to: .... NGN%,.2f%n", totalInterestPaid);
                    System.out.printf("Total  Repayment is equal to: .. NGN%,.2f%n", totalOverallPaid);
                }
            }

            scanner.close();

        } catch (Exception e) {
            System.out.println("ERROR! ENTER THE APPROPRIATE VALUE");
        }
    }
}