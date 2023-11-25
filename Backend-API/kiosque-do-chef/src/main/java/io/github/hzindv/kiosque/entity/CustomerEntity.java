package io.github.hzindv.kiosque.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "customer")
@AllArgsConstructor
@NoArgsConstructor
public class CustomerEntity {

  @Id
  @Column(name = "customer_id")
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  @Column(name = "customer_name")
  private String name;
  @Column(name = "customer_email")
  private String email;
  @Column(name = "customer_gender")
  @Enumerated(EnumType.STRING)
  private GenderEnum gender;
  @Column(name = "customer_birthdate")
  private LocalDate birthdate;
  @Column(name = "customer_drink")
  private String favoriteDrink;
  @Column(name = "customer_music")
  private String favoriteMusicType;
  @Column(name = "customer_phone")
  private String phoneNumber;
  @Column(name = "customer_promotions")
  private boolean promotions;

}
