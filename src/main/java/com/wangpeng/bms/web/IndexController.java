package com.wangpeng.bms.web;

import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@Controller
@RequestMapping("/")
public class IndexController {

    @GetMapping("dev")
    public String getDevIndex() {
        return "index-dev.html";
    }

    @GetMapping("pro")
    public String getProIndex(){
        return "index.html";
    }
}
