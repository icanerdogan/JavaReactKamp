import business.concretes.UserManager;
import dataAccess.abstracts.UserDao;
import dataAccess.concretes.BaseUserDao;
import entities.concretes.User;
import entities.concretes.UserCheck;
import entities.concretes.UserEmailControl;
import entities.concretes.VerificationEmail;

public class Main {

    public static void main(String[] args) {

        User user1 = new User("İbrahim", "Erdoğan", "icanerdogan","ibrahimcan@gmail.com","123123123",false);
        User user2 = new User("Can", "Erdoğan", "icaner","ibrahim@gmail.com","987654321", false);
        User user3 = new User("İbrahim Can", "Erdoğan", "ican","ibrahim@gmail.com","0000000",false);

        UserDao userDao = new BaseUserDao();
        UserCheck userCheck = new UserCheck();
        VerificationEmail verificationEmail = new VerificationEmail();
        UserEmailControl userEmailControl = new UserEmailControl(userDao);
        UserManager userManager = new UserManager(userCheck, userDao, userEmailControl, verificationEmail);

        // SİSTEME KAYIT İŞLEMLERİ
        userManager.signUp(user1);
        System.out.println("--------------------------");
        userManager.signUp(user2);
        System.out.println("--------------------------");
        userManager.signUp(user3);
        System.out.println("--------------------------");

        // SİSTEME GİRİŞ İŞLEMLERİ
        userManager.signIn("ibrahim@gmail.com","98765432");

        // E-MAIL ONAYLAMA
        verificationEmail.verify(user1);
        System.out.println(user1.isEmailStatus());
    }
}
