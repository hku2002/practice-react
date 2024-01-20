package com.example.api.service;

import com.example.api.domain.entity.Invoice;
import com.example.api.domain.repository.InvoiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InvoiceService {

    private final int ITEMS_PER_PAGE = 6;
    private final InvoiceRepository invoiceRepository;

    public List<Invoice> getFilteredInvoices(String query, int currentPage) {
        Pageable pageable = PageRequest.of(currentPage - 1, ITEMS_PER_PAGE, Sort.by("date").descending());
        return invoiceRepository.findByCustomer_NameContainingIgnoreCaseOrCustomer_EmailContainingIgnoreCaseOrAmountContainingIgnoreCaseOrDateContainingIgnoreCaseOrStatusContainingIgnoreCase(
                query, query, query, query, query, pageable);
    }

    public int getTotalInvoicePages(String query) {
//        long totalInvoices = invoiceRepository.findByCustomer_NameContainingIgnoreCaseOrCustomer_EmailContainingIgnoreCaseOrAmountContainingIgnoreCaseOrDateContainingIgnoreCaseOrStatusContainingIgnoreCase(
//                query, query, query, query, query, Pageable.ofSize(1)
//        );
        int totalInvoices = 10;
        return (int) Math.ceil((double) totalInvoices / ITEMS_PER_PAGE);
    }

    public Invoice getInvoiceById(Long id) {
        return invoiceRepository.findById(id).orElse(null);
    }

}
