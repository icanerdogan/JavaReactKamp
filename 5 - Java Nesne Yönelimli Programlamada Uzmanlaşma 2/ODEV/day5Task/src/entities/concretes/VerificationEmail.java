package entities.concretes;

import java.util.Scanner;

public class VerificationEmail {

    public boolean verify(User user){
        boolean verifyStatus = false;
        System.out.print("Email adresinizi onaylıyor musunuz?(E/H): ");
        Scanner scanner = new Scanner(System.in);
        String result = scanner.nextLine();

        if (result.equals("E")){
            System.out.println("Sayın "+ user.getFirstName() +" E-mail adresiniz onaylandı!");
            verifyStatus = true;
        }
        else if(result.equals("H")) {
            System.out.println("Sayın "+ user.getFirstName() +"E-mail adresiniz onaylanamadı!");
        }
        else{
            System.out.println("E veya H değerini giriniz!");
        }

        if (verifyStatus){
            user.setEmailStatus(true);
        }
        else{
            user.setEmailStatus(false);
        }

        return false;
    }
}
