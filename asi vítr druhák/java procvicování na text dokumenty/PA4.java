import java.util.Scanner;

public class PA4 {
    public static void main(String[] args){
        String text = "ahoj lidi";
        int cislo = 25;
        double cisloD = 4.56;
        float fl = 4.56f;
        char znak = 'a';
        boolean b = true;
        System.out.println(text);
        System.out.println(cisloD);
        System.out.println(fl);
        System.out.println(znak);
        System.out.println(b);

        Scanner sc = new Scanner(System.in);

        System.out.println("zadejte text");
        String line = sc.nextLine();
        System.out.println("zadany text: "+ line);


    }
}

