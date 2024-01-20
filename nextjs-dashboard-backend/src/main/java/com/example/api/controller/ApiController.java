package com.example.api.controller;

import com.example.api.domain.entity.Customer;
import com.example.api.domain.entity.Invoice;
import com.example.api.domain.entity.User;
import com.example.api.service.CustomerService;
import com.example.api.service.InvoiceService;
import com.example.api.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ApiController {

    private final InvoiceService invoiceService;
    private final CustomerService customerService;
    private final UserService userService;

    @GetMapping("/invoices")
    public ResponseEntity<List<Invoice>> getFilteredInvoices(
            @RequestParam(name = "query") String query,
            @RequestParam(name = "page", defaultValue = "1") int page) {
        List<Invoice> invoices = invoiceService.getFilteredInvoices(query, page);
        return ResponseEntity.ok(invoices);
    }

    @GetMapping("/invoicePages")
    public ResponseEntity<Integer> getTotalInvoicePages(@RequestParam(name = "query") String query) {
        int totalPages = invoiceService.getTotalInvoicePages(query);
        return ResponseEntity.ok(totalPages);
    }

    @GetMapping("/customers")
    public ResponseEntity<List<Customer>> getFilteredCustomers(@RequestParam(name = "query") String query) {
        List<Customer> customers = customerService.getFilteredCustomers(query);
        return ResponseEntity.ok(customers);
    }

    @GetMapping("/user")
    public ResponseEntity<User> getUserByEmail(@RequestParam(name = "email") String email) {
        User user = userService.getUserByEmail(email);
        return ResponseEntity.ok(user);
    }


}
