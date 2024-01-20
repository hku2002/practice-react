package com.example.api.domain.repository;

import com.example.api.domain.entity.Invoice;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Long> {

    List<Invoice> findByCustomer_NameContainingIgnoreCaseOrCustomer_EmailContainingIgnoreCaseOrAmountContainingIgnoreCaseOrDateContainingIgnoreCaseOrStatusContainingIgnoreCase(
            String name, String email, String amount, String date, String status, Pageable pageable);

    @Query(value = "SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id\n" +
            "      FROM invoices\n" +
            "      JOIN customers ON invoices.customer_id = customers.id\n" +
            "      ORDER BY invoices.date DESC\n" +
            "      LIMIT 5", nativeQuery = true)
    List<Invoice> findLatestInvoice();

    @Query(value = "SELECT COUNT(*) FROM invoices", nativeQuery = true)
    int countInvoice();

}
