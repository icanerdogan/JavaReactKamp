package entities.concretes;

public class User {
    // Sisteme temel kullanıcı bilgileri , e-posta ve parolayla üye olunabilmelidir.
    // Temel kullanıcı bilgileri : ad, soyad, e-posta, parola. Temel bilgilerin tamamı zorunludur.

    UserCheck userCheck;

    public User(UserCheck userCheck) {
        this.userCheck = userCheck;
    }

    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String password;
    private boolean emailStatus;
    public User(){};

    public User(String firstName, String lastName, String username, String email, String password,boolean emailStatus) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.emailStatus = false;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        if (userCheck.checkFirstName(firstName)){
            this.firstName = firstName;
        }
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        if (userCheck.checkLastName(lastName)){
            this.lastName = lastName;
        }
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        if (userCheck.checkUserName(username)){
            this.username = username;
        }
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        if (userCheck.checkEmail(email)){
            this.email = email;
        }
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        if (userCheck.checkPassword(password))
        {
            this.password = password;
        }
    }

    public boolean isEmailStatus() {
        return emailStatus;
    }

    public void setEmailStatus(boolean emailStatus) {
        this.emailStatus = emailStatus;
    }
}
