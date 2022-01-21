package com.example.web101backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//서버는 자기 주소를 제외한 {/리소스} 부분을 이해하고 어떤 요청이 어떤 http 메서드를 이용했는지 알아야 한다.
@RestController
@RequestMapping("test")
public class TestController {
    @GetMapping
    public String testController(){
        return "Hello World";
    }

}
