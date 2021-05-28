package kodllamaio.nortwind.core.utilities.results;

public class Result {
    private boolean success;
    private String message;

    public Result(boolean success){
        this.success = success;
    }

    public Result(boolean success, String message){
        this(success); // Yukarıdaki tek parametreli constructoru çağırmış oluyor!
        this.message = message;
    }

    public boolean isSuccess(){
        return this.success;
    }

    public String getMessage(){
        return this.message;
    }
}
