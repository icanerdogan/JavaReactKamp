package kodllamaio.nortwind.api.controllers;

import kodllamaio.nortwind.business.abstracts.UserService;
import kodllamaio.nortwind.core.entities.User;
import kodllamaio.nortwind.core.utilities.results.ErrorDataResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/users")
public class UsersController {

    private UserService userService;

    @Autowired
    public UsersController(UserService userService) {
        this.userService = userService;
    }

    //@Valid fonskiyonu Validation işleminden geçir demek
    @PostMapping(value = "/add")
    public ResponseEntity<?> add(@Valid @RequestBody User user){
        return ResponseEntity.ok(this.userService.add(user));
    }

    // AOP - Bütün metodlarınızı "global exception handler" ile yönlenir.
    // Bu handlerdan sonra metodlar çağrılır. TÜm metodlara try-catch yazmaktan kurtuluruz.

    // Bu sistemde şu tipte bir hata olursa bu metodu çağır!
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorDataResult<Object> handleValidationException(MethodArgumentNotValidException exceptions){
        Map<String, String> validationErrors = new HashMap<String, String>();

        for (FieldError fieldError : exceptions.getBindingResult().getFieldErrors()){
            validationErrors.put(fieldError.getField(),fieldError.getDefaultMessage());
        }
        ErrorDataResult<Object> errors = new ErrorDataResult<Object>(validationErrors, "Doğrulama Hataları!");

        return errors;
    }
}
