package com.example.api.domain.repository;

import com.example.api.domain.entity.Invoice;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Long> {

    List<Invoice> findByCustomer_NameContainingIgnoreCaseOrCustomer_EmailContainingIgnoreCaseOrAmountContainingIgnoreCaseOrDateContainingIgnoreCaseOrStatusContainingIgnoreCase(
            String name, String email, String amount, String date, String status, Pageable pageable);

}
