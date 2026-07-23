package com.mycompany.multipurposeecalc;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.Scanner;

public class MultiPurposeeCalc {

    public static void main(String[] args) {
        try {
            System.out.println("MULTI-PURPOSE  CALCULATOR");
            System.out.println("----------------------------------------------------------------------");
            System.out.println("THIS IS A PROGRAM TO perform basic arithmetic operations");
            Scanner scanner = new Scanner(System.in);
            System.out.println("What operation do you want to perform?");
            System.out.println("Press 1  for Boyles law calculator");
            System.out.println("Press 2  for simple calculator");
            System.out.println("Press 3  for circumference calculaor");
            System.out.println("Press 4  for area calculator");
            System.out.println("Press 5  for quadratic calculator");
            System.out.println("Press 6  for age calculator");
            System.out.println("Press 7  for loan app calculator");
            System.out.println("Press 8  for SIMPLE FOR LOOP CALCULATOR(1)");
            System.out.println("Press 9  for SIMPLE WHILE LOOP CALCULATOR(1)");
            System.out.println("Press 10 for SIMPLE FOR LOOP CALCULATOR(2)");
            System.out.println("Press 11 for SIMPLE DO WHILE LOOP CALCULATOR");
            System.out.println("Press 12 for SIMPLE WHILE LOOP CALCULATOR(2)");
            System.out.println("Enter choice (1-12): ");
            int option = scanner.nextInt();
            if ((option < 1) || (option > 12)) {
                System.out.println("Error, invalid option select an opton from 1 to 4.");
            } else {
                if (option == 1) {
                    try {
                        System.out.println("BOYLE'S LAW CALCULATOR");
                        System.out.println("----------------------------------------------------------------------");
                        System.out.println("--- Boyle's Law Solver (Pressure1 * volume1 = pressure2 * volume2) ---");
                        System.out.println("What value do you want to find?");
                        System.out.println("1 = Initial Pressure (Pressure1)");
                        System.out.println("2 = Initial Volume (volume1)");
                        System.out.println("3 = Final Pressure (pressure2)");
                        System.out.println("4 = Final Volume (volume2)");
                        System.out.println("Enter choice (1-4): ");
                        int choice = scanner.nextInt();
                        if ((option < 1) || (option > 4)) {
                            System.out.println("Error, invalid option select an opton from 1 to 4.");
                        } else {

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
                        }
                    } catch (Exception e) {
                        System.out.println("ERROR! INPUT THE APROPRIATE VALUE");

                    }
                }
            }
            if (option == 2) {
                try {
                    
                    System.out.println(" BASIC ARITHMETIC CALCULATOR");
                    System.out.println("----------------------------------------------------------------------");
                    System.out.println("THIS IS A PROGRAM TO PERFORM BASIC ARITHMETIC ");
                    Scanner input = new Scanner(System.in);
                    System.out.println("Enter your first number");
                    double firstNumber = input.nextDouble();
                    System.out.println("What operation do you want to perform?");
                    System.out.println("1 = addition");
                    System.out.println("2 = subtraction");
                    System.out.println("3 = multiplication");
                    System.out.println("4 = division");
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
                                System.out.println("cannot divide by zero");
                            } else {
                                double result = firstNumber / secondNumber;
                                System.out.println("The result is " + result);
                            }

                        }

                    }
                    
                } catch (Exception e) {
                    System.out.println("ERROR! INPUT THE APROPRIATE VALUE");

                }

            }
            if (option == 3) {
                try {
                    
                    System.out.println(" CIRCUMFERENCE CALCULATOR");
                    System.out.println("----------------------------------------------------------------------");
                    System.out.println("THIS IS A PROGRAM TO CALCULATE THE CIRCUMFERENCE OF A CIRCLE");
                    Scanner input = new Scanner(System.in);

                    System.out.println("Enter the radius to find Circumference: ");
                    double radius = input.nextDouble();

                    double circumference = 2 * 3.142 * radius;

                    System.out.printf("The Circumference of the circle is: %.2f%n", circumference);
                } catch (Exception e) {
                    System.out.println("ERROR! INPUT THE APROPRIATE VALUE");

                }
            }
            if (option == 4) {
                System.out.println("AREA OF A CIRCLE CALCULATOR");
                System.out.println("----------------------------------------------------------------------");
                try {
                    System.out.println("THIS IS A PROGRAM TO CALCULATE THE AREA OF A CIRCLE");
                    System.out.print("Enter the radius to find Area: ");
                    Scanner input = new Scanner(System.in);
                    double radius = input.nextDouble();
                    double square = radius * radius;

                    double area = 3.142 * square;

                    System.out.printf("The Area of the circle is: %.2f%n", area);
                } catch (Exception e) {
                    System.out.println("ERROR! INPUT THE APROPRIATE VALUE");

                }
            }
            if (option == 5) {
                try {
                    System.out.println("QUADRATIC EQUATIONS CALCULATOR");
                    System.out.println("----------------------------------------------------------------------");
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
                } catch (Exception e) {
                    System.out.println("ERROR! INPUT THE APROPRIATE VALUE");

                }
            }
            if (option == 6) {
                try {
                    System.out.println("AGE CALCULATOR");
                    System.out.println("----------------------------------------------------------------------");
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
                    System.out.println("ERROR! INPUT THE APROPRIATE VALUE");

                }
            }
            if (option == 7) {
                try {
                    System.out.println("LOAN APP CALCULATOR");
                    System.out.println("----------------------------------------------------------------------");

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
            if (option == 8) {
                try {
                    System.out.println("SIMPLE FOR LOOP CALCULATOR(1)");
                    System.out.println("----------------------------------------------------------------------");

                    Scanner input = new Scanner(System.in);
                    int count, number, length;

                    System.out.println("Enter the number you want to calculate");
                    number = input.nextInt();

                    System.out.println("Enter the lenght you want to calculate to");
                    length = input.nextInt();
                    for (count = 1; count <= length; count++) {
                        System.out.println(number + " X " + count + " = " + number * count);
                    }
                } catch (Exception e) {
                    System.out.println("ERROR! INPUT THE APROPRIATE VALUE");

                }
            }
            if (option == 9) {
                System.out.println("SIMPLE WHILE LOOP CALCULATOR(1)");
                System.out.println("----------------------------------------------------------------------");
                try {
                    System.out.println("Simple Multiplication");
                    int count, number, length;
                    number = 2;
                    length = 12;
                    count = 1;
                    while (count <= length);
                    {
                        System.out.println(number + "X" + count + " = " + (number * count));
                        count++;
                    }
                } catch (Exception e) {
                    System.out.println("ERROR! INPUT THE APROPRIATE VALUE");

                }

            }

            if (option == 10) {
                try {
                    System.out.println("SIMPLE FOR LOOP CALCULATOR(2)");
                    System.out.println("----------------------------------------------------------------------");
                    int count, number;
                    number = 2;

                    for (count = 1; count <= 12; count++) {
                        System.out.println(number + " X " + count + " = " + number * count);
                    }

                } catch (Exception e) {
                    System.out.println("ERROR! INPUT THE APROPRIATE VALUE");

                }
            }

            if (option == 11) {
                try {
                    System.out.println("SIMPLE DO WHILE LOOP CALCULATOR");
                    System.out.println("----------------------------------------------------------------------");
                    int count, number, length;
                    number = 2;
                    length = 12;
                    count = 1;
                    do {
                        System.out.println(number + " X " + count + " = " + number * count);
                        count++;
                    } while (count <= length);
                } catch (Exception e) {
                    System.out.println("ERROR! INPUT THE APROPRIATE VALUE");

                }
            }

            if (option == 12) {
                try {
                    System.out.println("SIMPLE WHILE LOOP CALCULATOR(2)");
                    System.out.println("----------------------------------------------------------------------");
                    int count, number, length;
                    number = 2;
                    length = 12;
                    count = 1;
                    while (count <= length);
                    {
                        System.out.println(number + " X " + count + " = " + (number * count));
                        count++;
                    }
                } catch (Exception e) {
                    System.out.println("ERROR! INPUT THE APROPRIATE VALUE");

                }
            }

        } catch (Exception e) {
            System.out.println("ERROR! INPUT THE APROPRIATE VALUE");

        }

    }
}
