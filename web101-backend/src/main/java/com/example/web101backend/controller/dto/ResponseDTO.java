package com.example.web101backend.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseDTO<T> { // 다른 서비스의 모델DTO도 담을 수 있도록
    private String error;
    private List<T> data;
}
