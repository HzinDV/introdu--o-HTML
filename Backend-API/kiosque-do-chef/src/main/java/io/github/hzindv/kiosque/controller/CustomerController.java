package io.github.hzindv.kiosque.controller;


import io.github.hzindv.kiosque.entity.CustomerEntity;
import io.github.hzindv.kiosque.service.CustomerService;
import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/clientes")
@RestController
public class CustomerController {

  private final CustomerService customerService;

  @Autowired
  public CustomerController(CustomerService customerService) {
    this.customerService = customerService;
  }


  @CrossOrigin(origins = "*")
  @PostMapping(consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE, MediaType.APPLICATION_JSON_VALUE})
  public ResponseEntity<Void> createCustomer(CustomerEntity customer) {
    customerService.saveCustomer(customer);
    return ResponseEntity.status(HttpStatus.FOUND).location(URI.create("https://hzindv.github.io/introdu--o-HTML/")).build();
  }

  @CrossOrigin(origins = "*")
  @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<List<CustomerEntity>> retrieveCustomer() {
    return ResponseEntity.status(HttpStatus.OK).body(customerService.getAllCustomers());
  }

  @CrossOrigin(origins = "*")
  @PutMapping(value = "/{id}", consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE, MediaType.APPLICATION_JSON_VALUE}, produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<CustomerEntity> updateCustomer(@PathVariable Long id, @RequestBody CustomerEntity customer) {
    customer.setId(id);
    return ResponseEntity.status(HttpStatus.OK).body(customerService.saveCustomer(customer));
  }

  @CrossOrigin(origins = "*")
  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteCustomer(@PathVariable Long id) {
    customerService.deleteCustomer(id);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }

}
