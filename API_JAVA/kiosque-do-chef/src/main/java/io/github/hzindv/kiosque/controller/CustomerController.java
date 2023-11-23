package io.github.hzindv.kiosque.controller;


import io.github.hzindv.kiosque.entity.CustomerEntity;
import io.github.hzindv.kiosque.service.CustomerService;
import java.net.URI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/clientes")
@RestController
public class CustomerController {

  private final CustomerService customerService;

  @Autowired
  public CustomerController(CustomerService customerService) {
    this.customerService = customerService;
  }

  @PostMapping(consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
  public ResponseEntity<Void> createCustomer(CustomerEntity request) {
    customerService.createCustomer(request);
    return ResponseEntity.status(HttpStatus.FOUND).location(URI.create("https://hzindv.github.io/introdu--o-HTML/")).build();
  }


}
