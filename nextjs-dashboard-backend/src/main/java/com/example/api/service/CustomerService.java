package com.example.api.service;

import com.example.api.domain.entity.Customer;
import com.example.api.domain.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;

    public List<Customer> getFilteredCustomers(String query) {
        return customerRepository.findByNameContainingIgnoreCaseOrEmailContainingIgnoreCase(query, query, Pageable.ofSize(1));
    }

}
