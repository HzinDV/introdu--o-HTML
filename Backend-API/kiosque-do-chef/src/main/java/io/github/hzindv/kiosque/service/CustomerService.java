package io.github.hzindv.kiosque.service;

import io.github.hzindv.kiosque.entity.CustomerEntity;
import io.github.hzindv.kiosque.entity.repository.CustomerRepository;
import io.micrometer.common.util.StringUtils;
import jakarta.mail.internet.AddressException;
import jakarta.mail.internet.InternetAddress;
import java.time.LocalDate;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

  private final CustomerRepository repository;

  @Autowired
  public CustomerService(CustomerRepository repository) {
    this.repository = repository;
  }

  public CustomerEntity saveCustomer(CustomerEntity customer) {
    if (customer == null) {
      throw new IllegalArgumentException("Não é possível cadastrar um cliente nulo!");
    }
    if (customer.getName() == null || (customer.getName().length() < 3
        || customer.getName().length() > 150)) {
      throw new IllegalArgumentException(
          "O nome não pode ser nulo e precisa ter no mínimo 3 caracteres e no máximo 150 caracteres.");
    }
    if (StringUtils.isEmpty(customer.getEmail()) || !isValidEmailAddress(customer.getEmail())) {
      throw new IllegalArgumentException("O email precisa estar preenchido e ser um email valido!");
    }
    long years = java.time.temporal.ChronoUnit.YEARS.between(customer.getBirthdate(),
        LocalDate.now());
    if (customer.getBirthdate() == null || (years < 18 || years > 100)) {
      throw new IllegalArgumentException(
          "A idade nao pode ser nula e precisa estar entre 18 e 100 anos de idade.");
    }
    if (customer.getGender() == null) {
      throw new IllegalArgumentException("O gênero não pode ser nulo!");
    }
    if (StringUtils.isEmpty(customer.getFavoriteDrink())) {
      throw new IllegalArgumentException("A bebida favorita não pode ser nula!");
    }
    if (StringUtils.isEmpty(customer.getFavoriteMusicType())) {
      throw new IllegalArgumentException("A música favorita não pode ser nula!");
    }
    if (StringUtils.isEmpty(customer.getPhoneNumber())) {
      throw new IllegalArgumentException("O número de telefone não pode ser nulo!");
    }
    return repository.save(customer);
  }

  public List<CustomerEntity> getAllCustomers() {
    return repository.findAll();
  }

  public void deleteCustomer(Long customerId) {
    CustomerEntity customer = repository.findById(customerId).orElseThrow(() -> new IllegalArgumentException(String.format("O cliente com o ID %d não foi encontrado!", customerId)));
    repository.delete(customer);
  }

  private boolean isValidEmailAddress(String email) {
    boolean result = true;
    try {
      InternetAddress emailAddr = new InternetAddress(email);
      emailAddr.validate();
    } catch (AddressException ex) {
      result = false;
    }
    return result;
  }

}
