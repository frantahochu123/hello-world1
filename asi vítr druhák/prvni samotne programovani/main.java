import java.util.Scanner;
 
class main{
public static void main(String[] args) {
    Scanner sc= new Scanner(System.in);
    System.out.println("Jak se máš?");
    System.out.println("");
    System.out.println("1. Dobře");
    System.out.println("2. Na hovno");
    String line = sc.nextLine();
    if(line.equals("1")){
        System.out.println("Tak to jo já taky");
    }
    if(line.equals("2")){
        System.out.println("a proč?");
    }
}
 
}